// INTERVAL FUNCTION 

const headerTop = document.querySelector('.name h1');
const headerTxt = 'Eryk Winnicki - FrontEnd Developer';
let index = 0;

const intervalFunction = () => {
    headerTop.textContent += headerTxt[index++];
    if (index === headerTxt.length) {
        clearInterval(addText);
    }
}
const addText = setInterval(intervalFunction, 50);