var mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    function openContactPopup() {
      document.getElementById("contact-overlay").style.display = "block";
      document.getElementById("contact-popup").style.display = "block";
    }

    function closeContactPopup() {
      document.getElementById("contact-overlay").style.display = "none";
      document.getElementById("contact-popup").style.display = "none";
    }