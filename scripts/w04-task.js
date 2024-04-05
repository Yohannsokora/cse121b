/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Franck Sokora",
    photo: "images/myImage.jpeg",
    favoriteFoods: [
        'Rice and Tomato stew',
        'Attieke and Fish',
        'Alloco and Eggs',
        'Porc au four',
        'Boba Cookies and Dreams',
    ],
    hobbies: [
        'Soccer games',
        'Programming',
        'Eating',
        'Reading',
        'Outdoor Activities',

    ],

    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {place: "Abidjan, Côte d'Ivoire", length: '18 years'},
    {place: "Accra, Ghana", length: '1 year'},
    {place: "Monrovia, Liberia", length: '2 years'},
    {place: "Ontario, Canada", length: '3 months'},
    {place: "Rexburg, United States", length: '2 years'},
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
} );


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
} );

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd); 
} );

