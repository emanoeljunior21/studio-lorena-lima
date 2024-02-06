document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");

    footer.addEventListener("mouseover", function() {
      
        footer.style.backgroundColor = "#555";
    });

   
    footer.addEventListener("mouseout", function() {
      
        footer.style.backgroundColor = "#333";
    });
});

document.getElementById("instagramLink").addEventListener("click", function(event) {
    event.preventDefault(); 

    window.open(this.getAttribute("href"), "_blank");
});

document.getElementById("whatsappLink").addEventListener("click", function(event) {
   
    window.open(this.getAttribute("href"), "_blank");
});

document.getElementById("locationLink").addEventListener("click", function(event) {
  
    window.open(this.getAttribute("href"), "_blank");
});

