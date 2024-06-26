$(document).on('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');

    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 991
    });

    // initialization of HSDropdown component
    $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      }
    });

    // initialization of carousel
    $.HSCore.components.HSCarousel.init('[class*="js-carousel"]');

    // initialization of header's height equal offset
    $.HSCore.helpers.HSHeightCalc.init();

    // initialization of popups
    $.HSCore.components.HSPopup.init('.js-fancybox');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
});