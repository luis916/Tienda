
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