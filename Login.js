// Dummy user (just for demo)
const DUMMY_USER = {
  email: "test@example.com",
  password: "password123" // NEVER store plaintext in real apps
};

const form = document.getElementById("loginForm");
const messageEl = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Basic validation
  if (!email || !password) {
    messageEl.textContent = "Please enter both email and password.";
    messageEl.style.color = "red";
    return;
  }

  // Simple authentication check
  if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
    messageEl.textContent = "Login successful!";
    messageEl.style.color = "green";

    // Example: Save fake token to localStorage
    localStorage.setItem("authToken", "dummy-token-123");
  } else {
    messageEl.textContent = "Invalid email or password.";
    messageEl.style.color = "red";
  }
});
