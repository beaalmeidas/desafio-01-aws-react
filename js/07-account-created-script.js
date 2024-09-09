// Function to show account info on the card
const fullName = localStorage.getItem('fullName');
const email = localStorage.getItem('email');

document.querySelector('#name-info').innerHTML = `<span class="label">Name:</span> ${fullName}`;
document.querySelector('#email-info').innerHTML = `<span class="label">Email:</span> ${email}`;
