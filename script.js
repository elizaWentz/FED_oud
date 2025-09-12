// JavaScript Document


console.log("hi");


const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
    });
  });
