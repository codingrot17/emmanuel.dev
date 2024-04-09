/* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add your own logic here, like sending the form data to your server or displaying a thank you message
    alert('Thank you for your message!');
    this.reset(); // Reset the form after submission
});
 */
const menuBtn = document.getElementById("menuBtn");

function toggleMenu() {
  let menu = document.querySelector('.mobile-nav .menu');
 menu.classList.toggle('active'); 

  let menuIcon = document.getElementById("open");
  
menuIcon.classList.toggle('active');  
}

menuBtn.addEventListener("click", toggleMenu);
