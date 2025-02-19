// Drop down menu
let hamburgerBtn = document.querySelector('#hamburger');
let navList = document.getElementById('navList');

hamburgerBtn.addEventListener('click', function () {
    navList.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

// Hair colors
let hairColors = {
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Yellow": "#FFFF00",
    "Green": "#008000",
    "Blue": "#0000FF",
    "Indigo": "#4B0082",
    "Violet": "#EE82EE",
    "Brown": "#A0522D",
    "Black": "#000000",
    "Blonde": "#F0E68C",
    "Silver": "#C0C0C0",
    "Auburn": "#800000"
};

let dropdown = document.querySelector('#dropdownMenu');
let dropdownBtn = document.querySelector('#dropdownBtn');
let overlay = document.querySelector('.overlay');

for (let color in hairColors) {
    let colorOption = document.createElement('div');
    colorOption.classList.add('color-option');
    colorOption.innerHTML = `${color} <div class="swatch" style="background-color: ${hairColors[color]};"></div>`;
    colorOption.addEventListener('click', function () {
        overlay.style.backgroundColor = hairColors[color];
        overlay.style.mixBlendMode = "soft-light";
        dropdown.classList.remove('open');
    });
    dropdown.appendChild(colorOption);
}

dropdownBtn.addEventListener('click', function () {
    dropdown.classList.toggle('open');
});
