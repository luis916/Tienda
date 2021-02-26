const contenido = document.querySelector('.dropdown-content');
const btn = document.querySelector('.dropdown-btn');
const body = document.getElementById('body');
const dropdown = document.querySelector('.dropdown');
// ocultar o mostrar farmacos
MostrarFarmacos('none');
function MostrarFarmacos(display){contenido.style.display=display;}
//mostrar farmacos
btn.addEventListener('mousedown',()=>{
    MostrarFarmacos('block');
   // dropdown.style.top = '-50px';
});
//ocultar farmacos
//Medicamentos
const _1mgAdrenalina = document.getElementById('1mgAdrenalina');
const _05mgAtropina = document.getElementById('0.5mgAtropina');
const _1mgAtropina = document.getElementById('1mgAtropina');
const _25GrSulfatoMagnesio = document.getElementById('1.25GrSulfatoMagnesio');
const _150mgAmiodarona = document.getElementById('150mgAmiodarona');
const _300mgAmiodarona = document.getElementById('300mgAmiodarona');
const _100mgLidocaina = document.getElementById('100mgLidocaina');
const _1grCloruroCalcio = document.getElementById('1grCloruroCalcio');
const _4mgNaloxona = document.getElementById('0.4mgNaloxona');
const _20mlDextrosa = document.getElementById('20mlDextrosa');
const _250mlBicarbonatoSodico = document.getElementById('250mlBicarbonatoSodico');
const _500mlSolFisiologico = document.getElementById('500mlSolFisiologico');
const _500mlSolRingerLactato = document.getElementById('500mlSolRingerLactato');
//Medicamentos botones
function btnMedicamentos(medicamento){
    medicamento.addEventListener('click',()=>
    {
        let mostrar = document.getElementById('mostrar');
        let mostarMedicamentos = document.createElement('p');
        let textoMedicamentos = document.createTextNode(medicamento.textContent);
        mostarMedicamentos.appendChild(textoMedicamentos);
        mostrar.appendChild(mostarMedicamentos);
        MostrarFarmacos('none');
    });
};
//eventos agregar medicamentos
btnMedicamentos(_1mgAdrenalina);
btnMedicamentos(_05mgAtropina);
btnMedicamentos(_1mgAtropina);
btnMedicamentos(_25GrSulfatoMagnesio);
btnMedicamentos(_150mgAmiodarona);
btnMedicamentos(_300mgAmiodarona);
btnMedicamentos(_100mgLidocaina);
btnMedicamentos(_1grCloruroCalcio);
btnMedicamentos(_4mgNaloxona);
btnMedicamentos(_20mlDextrosa);
btnMedicamentos(_250mlBicarbonatoSodico);
btnMedicamentos(_500mlSolFisiologico);
btnMedicamentos(_500mlSolRingerLactato);

