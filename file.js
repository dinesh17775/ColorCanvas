const colorChangeButton = document.querySelector('.change-color-btn');
const currentColor = document.querySelector('.color-value');
const body = document.body;
colorChangeButton.addEventListener('click', (e) => {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    currentColor.textContent = `rgb(${red},${green},${blue})`;
}) 
