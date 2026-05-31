/**
 * Pannon Volt — Mobilmenü
 * Tiszta JS megoldás, nincs checkbox hack.
 */
(function () {
    var icon = document.querySelector('.header__menu-icon');
    var nav  = document.querySelector('.header__nav');

    if (!icon || !nav) return;

    icon.addEventListener('click', function () {
        var opening = !nav.classList.contains('header__nav--open');
        nav.classList.toggle('header__nav--open', opening);
        icon.classList.toggle('header__menu-icon--open', opening);
    });
})();

/**
 * FAQ — Teljes buborék kattintható, mobilon is.
 * A <summary> elemek böngésző-specifikus click viselkedését
 * megkerüljük: a teljes faq__item-re teszünk eseményfigyelőt
 * és programozottan toggle-eljük az open attribútumot.
 * A preventDefault() megakadályozza a natív toggle-t,
 * így nem lesz kettős nyitás/zárás.
 */
(function () {
    var items = document.querySelectorAll('.faq__item');

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            // Ne zavarjuk meg a linkeket a válaszokban
            if (e.target.tagName === 'A') return;

            e.preventDefault();
            this.toggleAttribute('open');
        });
    }
})();

/**
 * FAB — Húzható lebegő gomb.
 * A felhasználó bárhova mozgathatja a gombot. Ha a viewport felső
 * felében van, a kibontott menü lefelé, egyébként felfelé nyílik.
 * A drag és a tap megkülönböztetése egy kis küszöbértékkel
 * (DRAG_THRESHOLD): ha a mozgás kisebb, mint 5 px, akkor tap-ként
 * kezeljük (vagyis nyílik/csukódik a menü).
 */
(function () {
    var container = document.querySelector('.fab-container');
    if (!container) return;
    var main = container.querySelector('.fab-main');
    if (!main) return;

    var DRAG_THRESHOLD = 5;
    var EDGE_MARGIN = 8;
    var activePointerId = null;
    var startX = 0, startY = 0;
    var offsetX = 0, offsetY = 0;
    var moved = false;

    function applyPos(x, y) {
        var vw = window.innerWidth;
        var vh = window.innerHeight;
        var w = container.offsetWidth;
        var h = container.offsetHeight;

        if (vw - 2 * EDGE_MARGIN > w) {
            x = Math.max(EDGE_MARGIN, Math.min(vw - w - EDGE_MARGIN, x));
        } else {
            x = EDGE_MARGIN;
        }
        if (vh - 2 * EDGE_MARGIN > h) {
            y = Math.max(EDGE_MARGIN, Math.min(vh - h - EDGE_MARGIN, y));
        } else {
            y = EDGE_MARGIN;
        }

        container.style.left = x + 'px';
        container.style.top = y + 'px';
        container.style.right = 'auto';
        container.style.bottom = 'auto';

        // A főgomb középpontja alapján döntjük el a nyitási irányt
        var mainRect = main.getBoundingClientRect();
        var mainCenterY = mainRect.top + mainRect.height / 2;
        container.classList.toggle('fab-container--top', mainCenterY < vh / 2);
    }

    main.addEventListener('pointerdown', function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        activePointerId = e.pointerId;
        var rect = container.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        moved = false;
        try { main.setPointerCapture(activePointerId); } catch (err) {}
    });

    main.addEventListener('pointermove', function (e) {
        if (activePointerId === null || e.pointerId !== activePointerId) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        if (!moved && Math.sqrt(dx * dx + dy * dy) > DRAG_THRESHOLD) {
            moved = true;
            container.classList.add('fab-container--dragging');
        }
        if (moved) {
            e.preventDefault();
            applyPos(e.clientX - offsetX, e.clientY - offsetY);
        }
    });

    function endDrag(e) {
        if (activePointerId === null || e.pointerId !== activePointerId) return;
        try {
            if (main.hasPointerCapture(activePointerId)) {
                main.releasePointerCapture(activePointerId);
            }
        } catch (err) {}
        var wasMoved = moved;
        activePointerId = null;
        moved = false;
        container.classList.remove('fab-container--dragging');

        if (wasMoved) {
            // Drag után megakadályozzuk a kattintást, hogy ne nyíljon ki
            // (vagy záródjon be) a menü a húzás végén.
            var suppress = function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                main.removeEventListener('click', suppress, true);
            };
            main.addEventListener('click', suppress, true);
            setTimeout(function () {
                main.removeEventListener('click', suppress, true);
            }, 50);
        }
    }
    main.addEventListener('pointerup', endDrag);
    main.addEventListener('pointercancel', endDrag);

    // Ablak átméretezésekor vagy forgatáskor tartsuk a viewporton belül,
    // de csak ha a felhasználó már elmozdította a gombot.
    window.addEventListener('resize', function () {
        if (!container.style.left) return;
        var rect = container.getBoundingClientRect();
        applyPos(rect.left, rect.top);
    });
})();
