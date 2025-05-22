console.log("Hello There, this is my gallery!");

console.log("Hello There, this is my gallery!");

let images = [
  { src: "./images/Pink033.jpg", alt: "Pink Toys" },
  { src: "./images/PlushToys.jpg", alt: "Plush Toys" },
  { src: "./images/ShelfToys.jpg", alt: "Shelf Toys" },
  { src: "./images/WToyS.jpg", alt: "W Toys" },
  { src: "./images/lego08.jpg", alt: "Lego" },
  { src: "./images/Cars05.jpg", alt: "Cars" },
  { src: "./images/ToyCartSales.jpg", alt: "Cart Toys" },
];

const thumbnailContainer = document.getElementById("thumbnailsContainer");
const mainBackgroundContainer = document.getElementById(
  "backgroundImageContainer"
);

images.forEach(function (individualImage) {
  const myNewImg = document.createElement("img");
  myNewImg.src = individualImage.src;
  myNewImg.alt = individualImage.alt;

  myNewImg.addEventListener("click", function () {
    console.log("I've been clicked:", individualImage.alt);
    mainBackgroundContainer.innerHTML = "";

    console.log("we have access to this:", individualImage);
    const backgroundImage = document.createElement("img");
    backgroundImage.src = individualImage.src;
    backgroundImage.alt = individualImage.alt;
    backgroundImage.style.width = "100%";
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
backgroundImage.onload = () => {
  backgroundImage.classList.add("loaded");
};
