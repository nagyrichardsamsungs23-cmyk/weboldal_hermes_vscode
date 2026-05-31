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
