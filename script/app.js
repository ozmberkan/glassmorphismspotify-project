const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const minimalArea = document.querySelector(".minimal-area");
const minimalBtn = document.querySelector(".minimal-button");
const closeTab = document.querySelector(".close-tab");
const closeBtn = document.querySelector(".red-button");
const gridContainers = document.querySelector(".grid-containers");
const leftUpHomeButton = document.querySelector(".left-up-home-button");

closeBtn.addEventListener("click",function(){
    mainContainer.style.width = "100px";
    mainContainer.style.height = "100px";
    closeTab.style.display = "none";
    gridContainers.style.display = "none";
    minimalBtn.style.display = "flex";
    leftUpHomeButton.style.display = "none";
})

minimalBtn.addEventListener("click", function () {
    mainContainer.style.width = "1352px";
    mainContainer.style.height = "750px";
    gridContainers.style.display = "grid";
    minimalBtn.style.display = "none";
    closeTab.style.display = "flex";
    leftUpHomeButton.style.display = "grid";
  });