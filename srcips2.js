let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Arreglo original de frutas:", frutas);


frutas.sort();
console.log("Frutas ordenadas alfabéticamente:", frutas);

function SingularAPlural(palabra) {
  if (!palabra.endsWith('s')) {
    return palabra + 's';
  }
  return palabra;
}


let frutasPlural = [];
for (let fruta of frutas) {
  frutasPlural.push(SingularAPlural(fruta));
}
console.log("Frutas en plural:", frutasPlural);


function existeFruta(nombreFruta) {
  return frutas.includes(nombreFruta);
}


console.log("¿Existe mango?", existeFruta('mango')); 
console.log("¿Existe uva?", existeFruta('uva'));     


let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 letras o menos:", frutasCortas);


function eliminarFruta(nombreFruta) {
  const index = frutas.indexOf(nombreFruta);
  if (index !== -1) {
    frutas.splice(index, 1); 
  }
  return false;
}

console.log("Eliminar mango:", eliminarFruta('mango')); 
console.log("Eliminar kiwi:", eliminarFruta('kiwi'));   
console.log("Frutas después de eliminar:", frutas);