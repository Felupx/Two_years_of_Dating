var botaoSim = document.getElementById("sim");

botaoSim.addEventListener("click", function() {
  window.location.href = "../Two_years_of_Dating/assets/index2.html"; // Substitua "https://www.seulink.com" pelo link desejado
});


function fuja() {
    var botaoNao = document.getElementById("nao");
    var container = document.querySelector(".container");
  
    var containerRect = container.getBoundingClientRect();
    var containerLeft = containerRect.left;
    var containerTop = containerRect.top;
  
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;
  
    var maxX = containerWidth - botaoNao.offsetWidth;
    var maxY = containerHeight - botaoNao.offsetHeight;
  
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);
  
    botaoNao.style.position = "absolute";
    botaoNao.style.left = (containerLeft + aleatorioX) + "px";
    botaoNao.style.top = (containerTop + aleatorioY) + "px";
}

