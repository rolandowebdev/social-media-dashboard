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

const checkMode = () => {
    if (localStorage.getItem('colorMode') == null) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            ligthBtn.click();
            localStorage.setItem('colorMode', 'light');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkBtn.click();
            localStorage.setItem('colorMode', 'dark');
        } else if (!window.matchMedia) {
            return false;
        }
    }
};

// const checkModeChange = () => {
//     window
//         .matchMedia('(prefers-color-scheme: dark)')
//         .addEventListener('change', (e) => {
//             checkMode();
//         });
// };

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
};

setColorMode();
checkMode();
// checkModeChange();

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