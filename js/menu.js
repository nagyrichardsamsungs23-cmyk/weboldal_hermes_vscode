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
