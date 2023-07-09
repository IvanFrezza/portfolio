// Add event listener to table
const menu = document.getElementById("menu").querySelectorAll("a");
const pages = document.getElementById("pages").querySelectorAll("div");


menu.forEach(element => {
    element.addEventListener("click", changeFrame, false);
});


let buttonIdBefore = "btn-home";


function startAnimation(buttonId) {
    if (buttonId === buttonIdBefore) {
        return
    }

    let pagename = buttonId.replace("btn-", "");
    let pagenamebefore = buttonIdBefore.replace("btn-", "");


    pages.forEach(element => {
        if (pagename === element.id) {
            element.classList.add("show");
            element.classList.add("fadein");
            element.classList.remove("fadeout");
            element.classList.remove("hidden");

        }


        if (pagenamebefore === element.id) {
            element.classList.remove("fadein");
            element.classList.add("fadeout");
            element.classList.add("hidden");
        }

    });


    buttonIdBefore = buttonId;

}


let bgcolor = undefined;

// Function to change the content of t2
function changeFrame(event) {
    event.preventDefault();

    // console.log(event)
    let buttonClicked = event.target.parentElement.id
    if (!buttonClicked) {
        buttonClicked = event.target.id
    }
    if (!buttonClicked) {
        buttonClicked = event.target.parentElement.parentElement.id
    }



    menu.forEach(element => {
        element.classList.remove('active');
        element.style.backgroundColor = null;
    });

    this.classList.add('active');
    bgcolor = buttonClicked.replace("btn-", "--bg-");
    this.style.backgroundColor = `var(${bgcolor})`;

    startAnimation(buttonClicked);
}

