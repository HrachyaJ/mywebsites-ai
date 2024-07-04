/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// Get all the FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Add a click event listener to each FAQ item
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the active class on the clicked item
    item.classList.toggle('active');

    // Get the answer element
    const answer = item.querySelector('.faq-answer');

    // Toggle the max-height of the answer element
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here, you can add your logic to handle the form submission, such as sending the data to a server or displaying a success message.
  console.log('Form submitted:', { name, email, message });

  // Reset the form fields
  form.reset();
});
