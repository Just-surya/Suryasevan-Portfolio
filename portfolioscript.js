function Sendmail(){
    var params = {
        from_name : document.getElementById("username").value,
        email_id : document.getElementById("useremail").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_urspi2g","template_fvh5ouo",params).then(alert("successfully sent"));
}
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked
navLinks.querySelectorAll(".nav-card").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});