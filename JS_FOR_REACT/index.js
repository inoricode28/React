

//Funcion anonima
console.log(function (){
    return 'Strating...';
}())



//funcion con nombre
function start(){
    return 'Strating...';
}
console.log(start())









/* Destructurar un objeto 
const user = {
    name: 'Miguel',
    age:30
}

function printInfo(user) {
    const {name, age} = user;
    console.log(name, age);
    return '<h1>Hola ' + name + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user);
*/



/*innerHTML
const user = {
    name: 'joe',
    age:30
}

function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user);

*/


/* Manipulacion del dom
//creacion del titulo
const title = document.createElement('h1');
title.innerText = 'Hola mundo del JS';

//creacion del boton
const boton = document.createElement('button');
boton.innerText = 'click';

boton.addEventListener('click', function() {
    title.innerText = 'Texto actuazado con JS';
    alert('se realizo un click');
    //console.log('Hola mundo');
});

document.body.append(title);
document.body.append(boton);

*/



/*DOM
const title = document.createElement('h1');
 console.log(title);
*/

/*
const name = 'laptop';
const price  = 3000;

const newProduct = {
    name,
    price

};
console.log(newProduct);
*/



/*
const user = {
    nombre: 'Miguel',
    Apellido: 'Chaves',
    age: 30,
    address:{
        pais: 'Peru',
        ciudad: 'Lima',
        caller: 'calendulas'
    },
    amigos: ['joseph', 'Mapache'],
    active: true,
    sendMail: ()=>{
        return 'sending email...'
    }
}

console.log(user.sendMail())
*/


/*funcion por defecto
function add(x = 23, y = 0){
    return x + y;

}
console.log(add(10,20));
*/

/*funcion suma
function suma(x,y){
    return x+y;    
}

console.log(suma(15,3));
console.log(suma(7,8));
console.log(suma(9,15));
console.log(suma(20,8));
*/





/* parametros
function parametros(name){
    return 'Hola ' + name;
}

console.log(parametros('Jesus'));
*/



/* componetes 

function componente(){
    return function(){
        return 'hola mundo';
    }
}
console.log(componente()());

*/

/*Ejercicio 002
function objeto(){
    return {nombre: 'Miguel', apellido: 'Chaves'};
}

function lista(){
    return [1,2,3];
}
console.log(objeto());
console.log(lista());
*/