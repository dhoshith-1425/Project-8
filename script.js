// Add any interactivity here if needed
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert(`You clicked on ${event.target.textContent}`);
  });
});
