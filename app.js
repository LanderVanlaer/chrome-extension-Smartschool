if (document.querySelector("#smscTopContainer > nav")) {
    const html = document.querySelector('html');
    const div = document.createElement("div");
    let darkActive = false;

    div.classList.add("topnav__btn-wrapper");
    div.innerHTML = `
<button class="js-btn-search topnav__btn topnav__btn--icon"  title="Dark mode" aria-haspopup="false" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" style="width:26px;margin-top:11px;" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>
</button>`;


    div.addEventListener('click', () => {
        html.classList.toggle("dark-theme-extension");
        darkActive = html.classList.contains('dark-theme-extension');

        localStorage.setItem('dark-theme', darkActive);
    });

    document.querySelector("#smscTopContainer > nav").appendChild(div);

    if (localStorage.getItem('dark-theme') == "true") {
        html.classList.add("dark-theme-extension");
        darkActive = true;
    }
}