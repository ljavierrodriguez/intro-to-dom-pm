/**
 * document // objeto que me permite acceder a todos los metodos disponibles dentro del DOM
 * getElementById('Id_del_Elemento') // permite acceder al elemento a traves del atributo id
 * getElementsByClassName('class_del_o_los_elementos') // permite acceder a un conjunto de elementos que contiene en el atributo class dicha clase
 * getElementsByTagName('elemento') // permite accerder a un conjunto de elementos segun su tipo 
 * getElementsByName('name_del_o_los_elementos') // permite acceder a un conjunto de elementos segun el valor del atributo name
 * 
 * querySelector('selector_css') // permite acceder al primer elemento que tenga dicho selector
 * querySelectorAll('selector_css') // permite acceder a todos los elementos que contenga dicho selector
 * 
 * 
 * createElement('elemento_o_tag') // permite crear el elemento especificado
 * createTextNode('cadena_de_texto')
 */

console.log(document);

console.log(document.getElementById('texto')); // accediendo al elemento a traves del dom
document.getElementById('texto').innerHTML = 'Hola mundo desde javascript'; // cambiando el texto del elemento con el DOM

console.log(document.getElementsByClassName('item')); // devuelve un conjunto (array) de elementos con esa clase 

console.log(document.getElementsByTagName('li')); // devuelve un conjunto (array) de elementos con el nombre de la etiqueta o tag

console.log(document.getElementsByName('genero'));

console.log(document.getElementsByName('opciones[]'));


console.log(document.querySelector('#texto'));
console.log(document.querySelector('.item'));
console.log(document.querySelector('li'));
console.log(document.querySelector('[name=genero]'));

console.log(document.querySelectorAll('[name=genero]'));


let pTexto = document.querySelector('#texto'); 

pTexto.innerHTML = "Modificando desde una variable";

pTexto.classList.add('texto_rojo');
pTexto.style.backgroundColor = '#34b34b';


let newDiv = document.createElement('div');
newDiv.id = 'myNewDiv';
newDiv.name = 'otroDiv';
newDiv.style.width = '100px';
newDiv.style.height = '100px';
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.margin = '40px auto';
newDiv.style.display = 'flex';
newDiv.style.alignItems = 'center';
newDiv.style.justifyContent = 'center';

//let textoDiv = document.createTextNode('1000');
//newDiv.appendChild(textoDiv);
newDiv.innerHTML = "1000";

console.log(newDiv);


document.body.innerHTML = `<div id="myNewDiv" style="width: 100px; height: 100px; background-color: lightblue; margin: 40px auto; display: flex; align-items: center; justify-content: center;">1000</div>`;
document.body.appendChild(newDiv);