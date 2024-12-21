// Highlight the active navigation link
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.backgroundColor = '#ffffff33'; // Highlight color for active link
    link.style.color = '#fff'; // Change text color for active link
  }
});

// Contact form submission functionality
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
}

// Login form functionality
const loginForm = document.querySelector('.login-section form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username === "admin" && password === "password") {
      alert('Login successful! Welcome to the system.');
      window.location.href = "tips.html"; // Redirect to the tips page after login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
}

// Scroll effect for image slider on the home page
const sliderImages = document.querySelectorAll('.slider img');
if (sliderImages.length > 0) {
  let currentImageIndex = 0;

  setInterval(() => {
    sliderImages.forEach((img, index) => {
      img.style.display = index === currentImageIndex ? 'block' : 'none';
    });

    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  }, 3000); // Change image every 3 seconds
}

// WhatsApp link functionality for subscription page
const whatsappLink = document.querySelectorAll('.plan button');
if (whatsappLink.length > 0) {
  whatsappLink.forEach((button) => {
    button.addEventListener('click', function() {
      const message = "Hello, I would like to subscribe to your plan.";
      const phoneNumber = "256709728322";
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    });
  });
}

// Login page validation
document.getElementById("login-button").addEventListener("click", function() {
  const secretId = document.getElementById("secret-id").value;

  if (secretId === "267kj5") {
    // Redirect to tips page
    window.location.href = "tips.html";
  } else {
    alert("Invalid Secret ID. Please try again.");
  }
}); 