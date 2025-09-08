document.addEventListener("DOMContentLoaded", function() {
  console.log("Phoenix Solution site loaded ✅");

  // Typing effect
  const text = "Web Developer | Solar Installer | Tech Enthusiast";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typing").textContent += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }
  typing();
});
