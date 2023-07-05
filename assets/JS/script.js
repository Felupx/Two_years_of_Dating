function fuja() {
    var botaoNao = document.getElementById("nao");
    var painel = document.querySelector(".painel");
    
    var painelRect = painel.getBoundingClientRect();
    
    var maxX = painelRect.width - 2.5*botaoNao.offsetWidth;
    var maxY = painelRect.height - 2.5*botaoNao.offsetHeight;
    
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);
    
    botaoNao.style.left = (painelRect.left + aleatorioX) + "px";
    botaoNao.style.top = (painelRect.top + aleatorioY) + "px";
}