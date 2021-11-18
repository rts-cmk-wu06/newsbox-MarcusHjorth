let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#DarkModeToggle')

console.log(darkMode);

// check if darkmode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on


const enableDarkMode = () => {
    // 1.  add the class darkmode to the body
    document.body.classList.add('darkMode')
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // add the class darkmode to the body
    document.body.classList.add('darkMode')
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
        console.log(darkMode);
    } else {
        disableDarkMode ();
        console.log(darkMode);
    }
})






/*
const checkbox = document.querySelector(".checkbox")

checkbox.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
});
*/
// ------- local darkmode --------