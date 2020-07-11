const tanyaArt = document.getElementById("tanya-art");
const johnArt = document.getElementById("john-art");

const changeToTanya = function (e) {
  johnArt.style.display = "none";
  tanyaArt.style.display = "grid";
  if (e === "next") {
    tanyaArt.classList.remove("animate__fadeInRight");
    tanyaArt.classList.add("animate__fadeInLeft");
  } else {
    tanyaArt.classList.remove("animate__fadeInLeft");
    tanyaArt.classList.add("animate__fadeInRight");
  }
};

const changeToJohn = function (e) {
  tanyaArt.style.display = "none";
  johnArt.style.display = "grid";
  if (e === "next") {
    johnArt.classList.remove("animate__fadeInRight");
    johnArt.classList.add("animate__fadeInLeft");
  } else {
    johnArt.classList.remove("animate__fadeInLeft");
    johnArt.classList.add("animate__fadeInRight");
  }
};
