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
        image: 'angela-caroll-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'wlater-gordon-office-manager.jpg'
    },
];

for(let value of team){
    console.log(value);
    for(let key in value) {
        console.log(value[key]);
    }
}







function addPerson(obj) {
    obj.name;
    obj.surname;

}