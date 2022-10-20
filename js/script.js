"use strict"

const team = [
    {
        name: 'Waynett Bennet',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
];

// console.log(team[0].name);

const wrapper = document.getElementById('wrapper');

for(let value of team){
    // console.log(value);
    for(let key in value) {
        // console.log(value[key]);
        // wrapper.innerHTML += " " + value[key];
    }
    addCard(value);
}

function addCard(obj) {
    obj.name;
    obj.role;
    obj.image;
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    image.src = '/img/' + obj.image ;
    card.appendChild(image);
    card.appendChild(cardBody);
    wrapper.appendChild(card);
    cardBody.innerHTML = obj.name + ' ' + obj.role;
}






function addPerson(obj) {
    obj.name;
    obj.surname;

}