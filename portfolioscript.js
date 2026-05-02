function Sendmail(){
    var params = {
        from_name : document.getElementById("username").value,
        email_id : document.getElementById("useremail").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_urspi2g","template_fvh5ouo",params).then(alert("successfully sent"));
}


document.addEventListener("DOMContentLoaded", function () {

  // ── Hamburger Menu ──────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll(".nav-card").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

});