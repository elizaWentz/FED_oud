// JavaScript Document


console.log("hi");

// met behulp van ChatGPT
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
  });
});



