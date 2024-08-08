document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".formulario--fale--conosco");
    const mascara = document.querySelector(".mascara--formulario");

    function cliqueiNoBotao() {
        form.style.position = "absolute"; // Certificando-se de que a posição é adequada
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        mascara.style.visibility = "visible";
    }

    function escondeForm() {
        form.style.left = "-300px";
        form.style.transform = "translateX(0)";
        mascara.style.visibility = "hidden";
    }

    // Tornando as funções acessíveis globalmente
    window.cliqueiNoBotao = cliqueiNoBotao;
    window.escondeForm = escondeForm;
});

