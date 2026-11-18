//Asked CoPilot to make it so when an airline is typed out, the logo is shown.
const airlines = {
    "american": "AA",
    "american airlines": "AA",
    "delta": "DL",
    "delta air lines": "DL",
    "united": "UA",
    "united airlines": "UA",
    "southwest": "WN",
    "southwest airlines": "WN",
};

function fetchData() {
    const imgElement = document.getElementById("airlineSprite");
    const name = document.getElementById("airlineName").value.trim().toLowerCase();

    if (!name) {
        imgElement.removeAttribute("src");
        imgElement.style.display = "none";
        return;
    }

    const iataCode = airlines[name];

    if (!iataCode) {
        imgElement.removeAttribute("src");
        imgElement.style.display = "none";
        return;
    }

    imgElement.onload = () => {
        imgElement.style.display = "block";
    };
    imgElement.onerror = () => {
        imgElement.removeAttribute("src");
        imgElement.style.display = "none";
    };
    imgElement.src = `https://pics.avs.io/200/200/${iataCode}.png`;
}

document.getElementById("airlineName").addEventListener("input", fetchData);