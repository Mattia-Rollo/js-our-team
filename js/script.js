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
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Dasigner',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// console.log(team[0].name);

const row = document.getElementById('row');

for(let value of team){
    // console.log(value);
    for(let key in value) {
        console.log(value[key]);
        // wrapper.innerHTML += " " + value[key];
    }
    addCard(value);
}

function addCard(obj) {
    obj.name;
    obj.role;
    obj.image;
    const col = document.createElement('div');
    col.classList.add('col-4');
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = '/img/' + obj.image ;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerHTML = obj.name;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.innerHTML = obj.role;
    row.appendChild(col);
    col.appendChild(card);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    card.appendChild(image);
    card.appendChild(cardBody);
    // cardBody.innerHTML = obj.name + ' ' + obj.role;
}






function addPerson(obj) {
    obj.name;
    obj.surname;

}