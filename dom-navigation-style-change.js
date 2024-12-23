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

const divTitle = document.querySelector("#page_title");
console.log(divTitle);

divTitle.innerHTML = "Okuyorum. Hastalık gibi bir şey bu. Elime ne geçerse, gözüm neye değerse okuyorum: dergiler, okul kitapları, ilanlar, sokakta bulduğum kâğıt parçaları, yemek tarifleri, çocuk kitapları. Kâğıda basılmış ne varsa. Dört yaşındayım. Savaş henüz başlamamış.";
divTitle.style.fontSize = "20px";
divTitle.style.textAlign = "center";
divTitle.style.padding = "12px";
divTitle.style.border = "5px solid yellow";
divTitle.style.backgroundColor = "#FF0000";
divTitle.style.color = "#FFFAFA";
divTitle.style.opacity = "0.4";
divTitle.style.fontFamily = "Monospace";
divTitle.style.textShadow = "0 0 10px rgba(255, 0, 0, 1), 0 0 35px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6)";

const divContent = document.querySelector("#content");
console.log(divContent);

divContent.innerHTML = "Yazılım, elektronik aygıtların belirli bir işi yapmasını sağlayan programların tümüne verilen isimdir. Bir başka deyişle, var olan bir problemi çözmek amacıyla bilgisayar dili kullanılarak oluşturulmuş anlamlı anlatımlar bütünüdür. Yazılım için çeşitli diller mevcuttur. Bunlardan bazıları Pascal, C++ ve Java'dır.";
divContent.style.textAlign = "right";
divContent.style.fontSize = "22px";
divContent.style.padding = "10px";
divContent.style.backgroundColor = "green";
divContent.style.color = "white";
divContent.style.border = "15px solid #800000";
divContent.style.opacity = "0.7";

const divFooter = document.querySelector("#footer");
console.log(divFooter);

divFooter.innerHTML = "Just Do It !";
divFooter.style.display = "flex";
divFooter.style.justifyContent = "center";
divFooter.style.alignItems = "center";
divFooter.style.fontFamily = "Fantasy";
divFooter.style.height = "300px";
divFooter.style.fontWeight = "bold";
divFooter.style.fontSize = "36px";
divFooter.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/778/44/20/nba-michael-jordan-basketball-slam-dunk-wallpaper-preview.jpg')"
divFooter.style.backgroundSize = "cover";
divFooter.style.backgroundPosition = "auto";
divFooter.style.color = "silver";
divFooter.style.opacity = "0.8";
divFooter.style.textShadow = "0 0 10px rgba(255, 0, 0, 1), 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6)";