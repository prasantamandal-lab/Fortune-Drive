document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    prevBtn.addEventListener("click", function () {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

    setInterval(function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);

});
const tabs = document.querySelectorAll(".tab");
const dailyContent = document.getElementById("dailyContent");
const subscriptionMessage = document.getElementById("subscriptionMessage");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        if (tab.innerText === "Subscription") {
            dailyContent.style.display = "none";
            subscriptionMessage.style.display = "block";
        } 
        else {
            dailyContent.style.display = "block";
            subscriptionMessage.style.display = "none";
        }

    });
});
const detailBtns = document.querySelectorAll(".view-details");

detailBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{

        let details = btn.parentElement.nextElementSibling;

        if(details.style.display==="block"){
            details.style.display="none";
        }
        else{
            details.style.display="block";
        }

    });
});
const whyBoxes = document.querySelectorAll(".why-box");
const whyContents = document.querySelectorAll(".why-content");

whyBoxes.forEach(box=>{

    box.addEventListener("click",()=>{

        whyBoxes.forEach(btn=>btn.classList.remove("active"));
        whyContents.forEach(content=>content.classList.remove("active"));

        box.classList.add("active");

        const target = box.getAttribute("data-content");

        document.getElementById(target).classList.add("active");

    });

});
const dashboardToggle = document.getElementById("dashboardToggle");
const dashboardDropdown = document.getElementById("dashboardDropdown");

dashboardToggle.addEventListener("click",(e)=>{
    e.preventDefault();

    if(dashboardDropdown.style.display==="flex"){
        dashboardDropdown.style.display="none";
    }
    else{
        dashboardDropdown.style.display="flex";
    }
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

});

document.addEventListener("DOMContentLoaded", function(){

    const helpToggle = document.getElementById("helpToggle");
    const helpPopup = document.getElementById("helpPopup");
    const closeHelp = document.getElementById("closeHelp");

    if(helpToggle){

        helpToggle.addEventListener("click", function(){

            helpPopup.style.display = "flex";

        });

    }

    if(closeHelp){

        closeHelp.addEventListener("click", function(){

            helpPopup.style.display = "none";

        });

    }

});
document.addEventListener("DOMContentLoaded", function(){

    const faqToggle = document.getElementById("faqToggle");
    const faqPopup = document.getElementById("faqPopup");
    const closeFaq = document.getElementById("closeFaq");

    if(faqToggle){

        faqToggle.addEventListener("click", function(){

            faqPopup.style.display = "flex";

        });

    }

    if(closeFaq){

        closeFaq.addEventListener("click", function(){

            faqPopup.style.display = "none";

        });

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const bookingBtn = document.getElementById("bookingBtn");

    if (bookingBtn) {

        bookingBtn.addEventListener("click", function () {

            const destination = document.getElementById("destination").value;
            const tripStart = document.getElementById("tripStart").value;
            const tripEnd = document.getElementById("tripEnd").value;

            const message =
                "Hi Fortune Drive,%0A%0A" +
                "I want to book a car.%0A%0A" +
                "Destination: " + destination + "%0A" +
                "Trip Start: " + tripStart + "%0A" +
                "Trip End: " + tripEnd;

            const whatsappLink =
                "https://api.whatsapp.com/send?phone=918114763522&text=" + message;

            window.open(whatsappLink, "_blank");

        });

    }

});
document.addEventListener("DOMContentLoaded", function () {

    let bookingBtn = document.getElementById("bookingBtn");

    if(bookingBtn){

        bookingBtn.onclick = function () {

            let destination = document.getElementById("destination").value;
            let tripStart = document.getElementById("tripStart").value;
            let tripEnd = document.getElementById("tripEnd").value;

            let whatsappMessage =
            "Hi Fortune Drive,%0A%0AI want to book a car.%0A%0ADestination: "
            + destination +
            "%0ATrip Start: " + tripStart +
            "%0ATrip End: " + tripEnd;

            window.open(
                "https://api.whatsapp.com/send?phone=918114763522&text=" + whatsappMessage,
                "_blank"
            );

        };

    }

});