let radioBtns = document.querySelectorAll("input[name='theme']");
let changeTheme = () => {
    let selected = document.querySelector("input[name='theme']:checked").value;
    let __root = document.querySelector(":root");
    if (selected === 'option1'){
        __root.style.setProperty('--url-bg', "url(background.jpg)");                             
        __root.style.setProperty('--stripe-color', "rgb(223, 221, 98)");                             
        __root.style.setProperty('--form-bg-color', "rgba(52, 21, 80, 0.514)");                             
    } 
    else if (selected === 'option2'){
        __root.style.setProperty('--url-bg', "url(background2.jpg)");                             
        __root.style.setProperty('--stripe-color', "rgb(144 233 121)");                             
        __root.style.setProperty('--form-bg-color', "rgb(11 120 78 / 51%)");                             
    } 
    else if (selected === 'option3'){
        __root.style.setProperty('--url-bg', "url(background3.jpg)");                             
        __root.style.setProperty('--stripe-color', "rgb(199 74 124)");                             
        __root.style.setProperty('--form-bg-color', "rgba(52, 21, 80, 0.514)");                             
    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", changeTheme);
})