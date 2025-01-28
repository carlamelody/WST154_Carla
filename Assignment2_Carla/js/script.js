const button = document.getElementById('myButton');
const contentDiv = document.getElementById('content');

function showImage() {
    contentDiv.innerHTML = '<img src="./images/boo.jpg" id="booImage">';
    button.textContent = "Make it go away!";
    button.removeEventListener('click', showImage);
    button.addEventListener('click', hideImage);
}

function hideImage() {
    contentDiv.innerHTML = '';
    button.textContent = "Don't Click Me!";
    button.removeEventListener('click', hideImage);
    button.addEventListener('click', showImage);
}

button.addEventListener('click', showImage);
