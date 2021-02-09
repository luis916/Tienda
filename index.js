window.onload = () =>
{

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const calcular = document.getElementById("calcular");
const precioUnitario = document.getElementById("precioUnitario");
const cantidad = parseInt (document.getElementById("cantidad"));
const valorTotal = document.getElementById("valorTotal");
const precioUnitarioValor = [100,200,150,5000,350]
const frutas = ["Manzana","pera","Uva","Sandia","Durazno"];
function cambiar()
{
  var fondo = document.querySelector("fondo");
  var numRandom = Math.random()*255;
  var numEntero = Math.round(numRandom)
  var numRandom2 = Math.random()*255;
  var numEntero2 = Math.round(numRandom2);
  var numRandom3 = Math.random()*255;
  var numEntero3 = Math.round(numRandom3);
  document.body.style.backgroundColor = `rgb(${numEntero}, ${numEntero2}, ${numEntero3})`;
}
cambiar();
calcular.onclick = (e) =>

   {
     e.preventDefault()
     if (codigo.value == "1")
     {
         nombre.value = frutas[0];
         valorTotal.value = precioUnitarioValor[0]*cantidad.value;
         
     }else 
     if (codigo.value == "2")
     {
            nombre.value = frutas[1];
            valorTotal.value = precioUnitarioValor[1]*cantidad.value;
     }else
     if (cantidad.value < 1)
     {
         alert("Dato incorrecto");
     }

   }


}
