const radioButton = document.querySelectorAll('.toggle__wrapper input');
const darkBtn = document.getElementById('dark');
const ligthBtn = document.getElementById('light');

const setColorMode = () => {
    console.log(localStorage.getItem('colorMode'));
    if (localStorage.getItem('colorMode') == 'light') {
        setLightMode();
        ligthBtn.click();
    } else if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkBtn.click();
    } else {}
};

const checkIsLight = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        ligthBtn.click();
    }
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
};

setColorMode();
checkIsLight();

radioButton.forEach(function(radio) {
    radio.addEventListener('click', () => {
        if (darkBtn.checked) {
            setDarkMode();
            localStorage.setItem('colorMode', 'dark');
        } else {
            setLightMode();
            localStorage.setItem('colorMode', 'light');
        }
    });
});