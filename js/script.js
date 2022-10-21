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

//per ogni oggetto presente nell'array chiamo la funzione addCard e gli passo il parametro obj con un ciclo for of
//quindi per ogni oggetto presente nell'array va a stampare il name, il role, la stringa image per creare il contenuto della card;
for(let value of team){
    // console.log(value);
    for(let key in value) {
        console.log(value[key]);
        // wrapper.innerHTML += " " + value[key];
    }
    addCard(value);
}


//creo la funzione che mi crea lo style e aggiunge titolo e paragrafo a alla card quando viene chiamata
function addCard(obj) {
    obj.name;
    obj.role;
    obj.image;
    const col = document.createElement('div');
    const colCls = ['col-sm-4', 'col-12']
    col.classList.add(...colCls);
    const card = document.createElement('div');
    const cardCls = ['card','text-center'];
    card.classList.add(...cardCls);
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

const btn = document.getElementById('btn');
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');

btn.addEventListener('click', function(){

    const name = inputName.value;
    const role = inputRole.value;
    const image = inputImage.value;

    for(let i=0; i<team.length; i++) {
        const randomNum = getRndInteger(0,2);
        team[i].image

    }

    team.push({
        name: name,
        role: role,
        image: image
    })
    // team.push(newPerson);
    console.log(name,role);
    console.log(team);
   
    addCard(team[team.length-1]);
    
})




// function addPerson() {
//     newPerson = {
//         name: 
//         role:
//     }
//     team.push()
    
//     obj.name;
//     obj.surname;

// }