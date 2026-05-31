/**
 * Pannon Volt — Mobilmenü JavaScript
 * Kiváltja a CSS-only checkbox hack-et, ami iOS fektetett módban
 * megbízhatatlanul működik. 
 */
(function () {
    var toggle = document.getElementById('menu-toggle');
    var icon   = document.querySelector('.header__menu-icon');
    var nav    = document.querySelector('.header__nav');

    if (!toggle || !icon || !nav) return;

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        var opening = !toggle.checked;
        toggle.checked = opening;
        nav.classList.toggle('header__nav--open', opening);
        icon.classList.toggle('header__menu-icon--open', opening);
    });
})();
