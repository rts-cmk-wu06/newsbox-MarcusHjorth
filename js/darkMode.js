let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#DarkModeToggle')
const enableDarkMode = () => {
    // 1.  add the class darkmode to the body
    document.body.classList.add('darkMode')
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // 1. remove the class darkmode from the body
    document.body.classList.remove('darkMode')
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'null');
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
        darkModeToggle.textContent = "TOGGLE LIGHT MODE"
    } else {
        disableDarkMode ();
        darkModeToggle.textContent = "TOGGLE DARK MODE"
    }
})