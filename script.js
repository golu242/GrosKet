let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('.box h3').onclick = () => {
    let targetElement = document.querySelector('#links'); // Change this selector to the element you want to scroll to
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}




/*go to cart  for categories*/
function showCartAlertWithTimeout(event) {
  event.preventDefault(); // Prevent default link behavior
  var alertBox = document.getElementById("cartAlert");
  alertBox.classList.add("show");

  setTimeout(function () {
    alertBox.classList.remove("show");
  }, 1000); // Hide the alert after 1 seconds (adjust as needed)
}


/*product*/
// Function to show "Item added to cart" alert
function showAddToCartAlert() {
  var addToCartAlert = document.getElementById("addToCartAlert");
  addToCartAlert.classList.add("show");
  setTimeout(function() {
    addToCartAlert.classList.remove("show");
  }, 1000); // Hide the alert after 1 seconds
}

function showThankYouAlert() {
  var alertBox = document.getElementById('thankYouAlert');
  alertBox.classList.add('show');
  
  // Hide the alert after a certain time (e.g., 3 seconds)
  setTimeout(function() {
    alertBox.classList.remove('show');
  }, 1000);
}


document.getElementById('loginButton').addEventListener('click', function() {
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;

  // Check if login is successful (replace with your own logic)
  if (email === 'user@example.com' && password === 'password') {
    showLoginSuccessAlert();
  } else {
    showLoginErrorAlert();
  }
});

function showLoginSuccessAlert() {
  var alertBox = document.createElement('div');
  alertBox.className = 'login-alert success';
  alertBox.textContent = 'Login successful!';
  document.body.appendChild(alertBox);

  setTimeout(function() {
    alertBox.style.opacity = '0';
    setTimeout(function() {
      alertBox.remove();
    }, 300);
  }, 1000);
}

document.getElementById('loginButton').addEventListener('click', function() {
  showSuccessAlert('Login successful!');
});

function showSuccessAlert(message) {
  var alertBox = document.createElement('div');
  alertBox.className = 'login-alert success';
  alertBox.textContent = message;
  document.body.appendChild(alertBox);

  setTimeout(function() {
    alertBox.style.opacity = '0';
    setTimeout(function() {
      alertBox.remove();
    }, 300);
  }, 1000);
}


document.getElementById('shopButton').addEventListener('click', function() {
  showWelcomeAlert('Welcome to our store!');
});

function showWelcomeAlert(message) {
  var alertBox = document.createElement('div');
  alertBox.className = 'welcome-alert';
  alertBox.textContent = message;
  document.body.appendChild(alertBox);

  setTimeout(function() {
    alertBox.style.opacity = '0';
    setTimeout(function() {
      alertBox.remove();
    }, 300);
  }, 1000);
}


document.getElementById('checkoutButton').addEventListener('click', function() {
  showCheckoutSuccessAlert('Checkout Successful! Thank you for shopping with us.');
});

function showCheckoutSuccessAlert(message) {
  var alertBox = document.createElement('div');
  alertBox.className = 'checkout-alert';
  alertBox.textContent = message;
  document.body.appendChild(alertBox);

  setTimeout(function() {
    alertBox.style.opacity = '0';
    setTimeout(function() {
      alertBox.remove();
    }, 300);
  }, 2000);
}

//dark mode
// Check if dark mode is saved in localStorage
const darkModeToggle = document.getElementById('dark-mode-btn');
    const body = document.body;

    // Check if dark mode preference is saved in local storage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    function enableDarkMode() {
      body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
      body.classList.remove('dark');
      localStorage.setItem('darkMode', null);
    }







/*var swiper = new swiper(".product-slider", {
    loop: true,
    spaceBetween: 5,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        76: {
            slidesPerView: 2,
        },
        102: {
            slidesPerView: 3,
        },
    },
});*/
