const overlay = document.getElementById("overlay");

const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

// api
const api = "https://randomuser.me/api/?results=9";

const getData = async (url) => {
  loaderToggle(true);
  const req = await fetch(url);
  const data = await req.json();

  console.log(data.results);

  updateUI(data.results);
  loaderToggle(false);
};

getData(api);
