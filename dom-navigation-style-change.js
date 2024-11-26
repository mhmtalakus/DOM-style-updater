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

const divHeader = document.querySelector("#header");
console.log(divHeader);

divHeader.innerHTML = " Doğu ve batı teraslarında Antiohos ile tanrı-tanrıça heykellerinin yanı sıra aslan ve kartal heykelleri bulunmaktadır. Batı terasında eşsiz bir aslanlı horoskop yer almaktadır. Aslanın üzerinde 16 ışından oluşan 3 adet yıldız vardır ve bunların Mars, Merkür ve Jüpiter gezegenlerini temsil etmekte olduğu sanılmaktadır. Tarihte bilinen en eski horoskoptur.";
divHeader.style.textAlign = "left";
divHeader.style.fontSize = "30px";
divHeader.style.color = "white";
divHeader.style.backgroundColor = "orange";
divHeader.style.border = "5px solid #FFF5EE";
divHeader.style.padding = "10px";
divHeader.style.textShadow = "0 0 10px rgba(222, 0, 0, 1), 0 0 20px rgba(111, 0, 0, 0.9), 0 0 30px rgba(111, 0, 0, 0.9)";