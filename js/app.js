let intervalId;

function getFact() {
  document.getElementById("loader").style.display = "inline-block";
  document.getElementById("fact").style.display = "none";
  fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    headers: { "x-api-key": "GxI7yOw5B4k4XHaSGvQA8Q==8dO15cx0MjSAkxAd" },
  })
    .then((res) => res.json())
    .then((res) => {
      changeBackground();
      document.getElementById("fact").innerText = res[0].fact;
      document.getElementById("loader").style.display = "none";
      document.getElementById("fact").style.display = "block";
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(getFact, 30000);
    });
}

function changeBackground() {
  const startColor = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  };
  const endColor = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  };

  const gradientStart = `rgb(${startColor.red}, ${startColor.green}, ${startColor.blue})`;
  const gradientEnd = `rgb(${endColor.red}, ${endColor.green}, ${endColor.blue})`;

  document.getElementById("body").style.background =
    `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`;
}

window.onload = () => {
  getFact();
};

document.getElementById("get-new").addEventListener("click", getFact);
