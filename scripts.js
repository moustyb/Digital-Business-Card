// Copy email to clipboard
document.getElementById("copyEmail").addEventListener("click", function() {
  const email = "you@example.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied: " + email);
  });
});

// Toggle dark/light mode
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
