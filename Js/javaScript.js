// Se ejecute uha vez que se haya cragado todo el documento html
$(document).ready(function () {
    //efecto menu
    $('.menu a').each(function (index, elemnto) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    })
    //// dulce aroma
    if ($(window).width() > 800) {
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .texto').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500)
    }
    var acercaDe = $('#acercaDe').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    $('#btnAcercaDe').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });
    $('#btnMenu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 100
        }, 500);
    });
    $('#btnGaleria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 100
        }, 500);
    });
    $('#btnUbicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion - 100
        }, 500);
    });
});
