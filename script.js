document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const gifResult = document.querySelector(".gif-result");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");

  noBtn.addEventListener("mouseover", () => {
      const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
      const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
  });

  yesBtn.addEventListener("click", () => {
      questionContainer.style.display = "none";
      heartLoader.style.display = "inherit";

      setTimeout(() => {
          heartLoader.style.display = "none";
          resultContainer.style.display = "block"; // Make sure it's set to 'block'
          if (gifResult) gifResult.play();
      }, 3000);
  });
});

const flowerCount = 25;
    const images = ["pinkfan.png", "begunifan.png", "greenfan.png", "whitfan.png", "yellowfan.png"]; // add more if you want

    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      // Random flower image
      const img = images[Math.floor(Math.random() * images.length)];
      flower.style.backgroundImage = `url('./${img}')`;

      // Random position, delay, duration, size
      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.animationDelay = `${Math.random() * 15}s`;
      flower.style.animationDuration = `${15 + Math.random() * 10}s`;
      flower.style.width = flower.style.height = `${20 + Math.random() * 40}px`;

      document.body.appendChild(flower);
    }