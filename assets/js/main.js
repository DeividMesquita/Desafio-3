$(document).ready(function () {
    // Abre o primeiro item do accordion ao carregar a página
    $('.accordion_box:first').addClass('active');
    $('.accordion_box:first').find('.acc_trigger i')
        .removeClass('fa-plus').addClass('fa-minus');
    $('.accordion_box:first').find('.acc_container').show();

    // Configura o comportamento do clique no accordion
    $('.acc_trigger').click(function () {
        const parentBox = $(this).closest('.accordion_box');
        const isActive = parentBox.hasClass('active');

        // Fecha todos os outros
        $('.accordion_box').removeClass('active');
        $('.acc_trigger i').removeClass('fa-minus').addClass('fa-plus');
        $('.acc_container').slideUp();

        // Abre o item clicado, se não estiver ativo
        if (!isActive) {
            parentBox.addClass('active');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
            parentBox.find('.acc_container').slideDown();
        }
    });

    $('.c-section-subpagina__links li a').click(function() {
        // Remove a classe 'selected' de todos os links
        $('.c-section-subpagina__links li a').removeClass('selected');
        
        // Adiciona a classe 'selected' ao link clicado
        $(this).addClass('selected');
    });
});
