const page = document.querySelector(".page");
const card = document.querySelector(".card");
const picture = document.querySelector(".picture");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const link = document.querySelectorAll(".link");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");
let white = true;

button.addEventListener("click", function() {
    if (white) {
        page.style.backgroundColor = "#fff";
        card.style.backgroundColor = "#fff";
        card.style.borderColor = "#000";
        picture.style.borderColor = "#000";
        link.forEach((link) => {
            link.style.backgroundColor = "#000";
            link.style.color = "#fff";
        });
        h1.forEach((h1) => {
            h1.style.color = "#000";
        });
        h2.forEach((h2) => {
            h2.style.color = "#000";
        });
        p.forEach((p) => {
            p.style.color = "#000";
        });
        button.style.backgroundColor = "#fff";
        button.style.borderColor = "#000";
        button.style.color = "#000";
        button.innerText = "Dark Mode";
        white = false;

    } else {
        page.style.backgroundColor = "#242526";
        card.style.backgroundColor = "#18191a";
        card.style.borderColor = "#fff";
        picture.style.borderColor = "#fff";
        link.forEach((link) => {
            link.style.backgroundColor = "#fff";
            link.style.color = "#18191a";
        });
        h1.forEach((h1) => {
            h1.style.color = "#fff";
        });
        h2.forEach((h2) => {
            h2.style.color = "#fff";
        });
        p.forEach((p) => {
            p.style.color = "#fff";
        });
        button.style.backgroundColor = "#18191a";
        button.style.borderColor = "#fff";
        button.style.color = "#fff";
        button.innerText = "Light Mode";
        white = true;
    }
});