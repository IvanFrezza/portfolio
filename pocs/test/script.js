// Add event listener to table
const btnHome = document.getElementById("btn-home");
const btnAbout = document.getElementById("btn-about");
const btnTech = document.getElementById("btn-tech");
const home = document.getElementById("home");
const about = document.getElementById("about");
const pages = document.getElementById("pages").querySelectorAll("div");

btnHome.addEventListener("click", changeFrame, false);
btnAbout.addEventListener("click", changeFrame, false);
btnTech.addEventListener("click", changeFrame, false);

let buttonIdBefore = "btn-home";


function startAnimation(buttonId) {
    if (buttonId === buttonIdBefore) {
        return
    }


    let pagename = buttonId.replace("btn-", "");
    let elem = document.getElementById(pagename);
    elem.classList.add("fadein");
    elem.classList.remove("hidden");

    // pages.forEach(page => {
    //     if (page !== elem) {
    //         page.classList.remove("fadein");


    //         if (!page.classList.contains("hidden")) {
    //             page.classList.add("hidden");
    //         }
    //     }
    // });

    if (buttonIdBefore) {
        let pagenamebefore = buttonIdBefore.replace("btn-", "");
        let elembefore = document.getElementById(pagenamebefore);
        elembefore.classList.remove("fadein");
        elembefore.classList.add("hidden");
    }



    buttonIdBefore = buttonId;

}

function hiddenPages() {
    pages.forEach(element => {
        element.classList.add("hidden")

    });
};



// Function to change the content of t2
function changeFrame(event) {
    let buttonClicked = event.target.id

    startAnimation(buttonClicked)
}

