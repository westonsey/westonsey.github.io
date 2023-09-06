let slideIndex = 0;
showSlides();
showDisplays();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

        

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function showDisplays(){
    const aboutButton = document.getElementById("AboutButton");
    const portfolioButton = document.getElementById("PortfolioButton");
    const resumeButton = document.getElementById("ResumeButton");

    const about = document.getElementById("About");
    const portfolio = document.getElementById("Portfolio");
    const resume = document.getElementById("Resume");

    aboutButton.addEventListener("click", () => {
        about.style.display = "block";
        portfolio.style.display = "none";
        resume.style.display = "none";
        console.log("About button clicked");
    });
    
    portfolioButton.addEventListener("click", () => {
        portfolio.style.display = "block";
        resume.style.display = "none";
        about.style.display = "none";
        console.log("Portfolio button clicked");
    });
    
    resumeButton.addEventListener("click", () => {
        resume.style.display = "block";
        portfolio.style.display = "none";
        about.style.display = "none";
        console.log("Resume button clicked");
    });
}