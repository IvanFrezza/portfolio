const menu = document.getElementById("menu").querySelectorAll("a");
menu.forEach(element => {
    element.addEventListener("click", changeFrame, false);
});


const jobmenu = document.getElementById("jobmenu").querySelectorAll("a");
jobmenu.forEach(element => {
    element.addEventListener("click", changeJobFrame, false);
});


function changeJobFrame(event) {
    event.preventDefault();

    jobmenu.forEach(element => {
        element.classList.remove('activejob');
        
    });

    this.classList.add('activejob');
}


// Function to change the content of t2
function changeFrame(event) {
    // event.preventDefault();

    let buttonClicked = event.target.getAttribute("href")
    if (!buttonClicked) {
        buttonClicked = event.target.parentElement.getAttribute("href")
    }

    console.log(buttonClicked)

    menu.forEach(element => {
        element.classList.remove('active');
        element.style.backgroundColor = null;
    });

    this.classList.add('active');
    bgcolor = buttonClicked.replace("#", "--bg-");
    this.style.backgroundColor = `var(${bgcolor})`;
}