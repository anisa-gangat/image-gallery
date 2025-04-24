console.log ("Hello There, this is my gallery!");

let images = [
    {
    src: "./images/Pink033.jpg",
    alt: "Pink Toys",
    },
    {
    src: "./images/PlushToys.jpg",
    alt: "Plush Toys",
    },
    {
    src: "./images/ShelfToys.jpg",
    alt: "Shelf Toys",
    },
    {
    src: "./images/WToyS.jpg",
    alt: "W Toys",
    },
    {
    src: "./images/lego08.jpg",
    alt: "Lego",
    },
    {
    src: "./images/Cars05.jpg",
    alt: "Cars",
    },
    {
    src: "./images/ToyCartSales.jpg",
    alt: "Cart Toys",
    }

];

const thumbnailContainer = document.getElementById ("thumbnailsContainer");
const mainBackgroundContainer =document.getElementById (
    "backgroundImageContainer"
);

images.forEach(function (individualImage) {

const myNewImg = document.createElement ("img");
myNewImg.src = individualImage.src;
myNewImg.alt = individualImage.alt;

myNewImg.addEventListener("click", function () {

mainBackgroundContainer.innerHTML = "./images/Pink033.jpg";
mainBackgroundContainer.innerHTML = "./images/PlushToys.jpg";
mainBackgroundContainer.innerHTML = "./images/ShelfToys.jpg";
mainBackgroundContainer.innerHTML = "./images/WToyS.jpg";
mainBackgroundContainer.innerHTML = "./images/Lego08.jpg";
mainBackgroundContainer.innerHTML = "./images/Cars05.jpg";
mainBackgroundContainer.innerHTML = "./images/ToyCartSales.jpg"


console.log ("I've been clicked");

console.log ("we have access to this:", individualImage);
const backgroundImage = document.createElement ("img");
backgroundImage.src = individualImage.src;
mainBackgroundContainer.appendChild(backgroundImage);

 });

thumbnailContainer.appendChild(myNewImg);
 });

 const thumbnailContainerForLoop = document.getElementById(
    "thumbnailsContainerForLoop"
  );
  
  for (let index = 0; index < images.length; index++) {
    const myNewImg = document.createElement("img");
    console.log("looping");
  
    myNewImg.src = images[index].src;
    myNewImg.alt = images[index].alt; 

    myNewImg.addEventListener("click", function () {
    mainBackgroundContainer.innerHTML = "./images/Pink033.jpg";
    const backgroundImage = document.createElement("img");
    backgroundImage.src = images[index].src;
    mainBackgroundContainer.appendChild(backgroundImage);
 });
    thumbnailContainerForLoop.appendChild(myNewImg);
 }
