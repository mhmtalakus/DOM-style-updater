const container = document.querySelector(".container");
console.log(container);

container.style.backgroundImage = "url('https://c1.wallpaperflare.com/preview/970/253/226/kizkulesi-istanbul-city-bosphorus-kulesi-kiz.jpg')";
container.style.backgroundSize = "cover";
container.style.border = "15px solid #D2691E";
container.style.padding = "20px";

const divAll = document.querySelectorAll(".box");
console.log(divAll);

for(let i = 0; i < divAll.length; i++){
    divAll[i].style.backgroundColor = "silver";
    divAll[i].style.border = "3px solid red";
    divAll[i].style.height = "auto";
    divAll[i].style.opacity = "0.5";
}