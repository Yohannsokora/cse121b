/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sokora Franck Yohann Sokora';
let currentYear = 2024;
let profilePicture = 'images/myImage.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let foods = ['Attieke', 'Fried Fish', 'Alloco'];
foodElement.innerHTML += `<br> ${foods}`;
let additionalFoodElement = ['Grilled cheese with tomato soup'];
foods.push(additionalFoodElement);
foodElement.innerHTML += `<br> ${additionalFoodElement}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;




