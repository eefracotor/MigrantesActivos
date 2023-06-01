// Botones
var btnInfGeral = document.getElementById("sobre");
var btnVacant = document.getElementById("vacant");
var btnEval = document.getElementById("eval");
var btnSalarios = document.getElementById("salarios");
var btnaddVaga = document.getElementById('add-vaga');
var btnCancelAddVga = document.getElementById("cancel-add");

//Div donde se mostraran los detalles
var InfGeral = document.getElementById("about");
var Vacant = document.getElementById("vacancies");
var addFormVaga = document.getElementById("add-vacant");
var Eval = document.getElementById("aval");
var Salarios = document.getElementById("salary");

// var btnEmpresa = document.querySelector('.emp2')

// btnEmpresa.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(e.target.id);
// })

InfGeral.style.display ='block';
Vacant.style.display ='none';
addFormVaga.style.display ="none"
Eval.style.display = 'none';
Salarios.style.display = 'none';


// add eventos de cada btn
btnInfGeral.addEventListener("click", function(e){
    // e.preventDefault();
    console.log("btnInfo");
    mostrarInfoGeral();
});

btnVacant.addEventListener("click", function(e){
    // e.preventDefault();
    console.log("btnVacant");
    mostrarVagas();
});

// Btn- add-vaga
btnaddVaga.addEventListener("click", function(e){
    console.log("Add-vaga")
    formAddVagas();
})

btnCancelAddVga.addEventListener("click", function(e){
    e.preventDefault()
    console.log("cancel vaga!")
    mostrarVagas()
})

btnEval.addEventListener("click", function(e){
    // e.preventDefault();
    console.log("btnEval");
    mostrarAvaliacoes();
});

btnSalarios.addEventListener("click", function(e){
    // e.preventDefault();
    console.log("btnSalarios");
    mostrarSalarios();
});


// Impresin de detalles por btn 
function mostrarInfoGeral(){
    InfGeral.style.display = 'block'
    Vacant.style.display = 'none';
    addFormVaga.style.display ="none"
    Eval.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarVagas(){
    Vacant.style.display = 'flex';
    addFormVaga.style.display ="none"
    InfGeral.style.display = 'none';
    Eval.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarAvaliacoes(){
    Eval.style.display = 'block';
    addFormVaga.style.display ="none"
    InfGeral.style.display = 'none';
    Vacant.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarSalarios(){
    Salarios.style.display = 'block';
    Eval.style.display = 'none';
    InfGeral.style.display = 'none';
    addFormVaga.style.display ="none"
    Vacant.style.display = 'none';
};

function formAddVagas(){
    addFormVaga.style.display ="flex"
    Vacant.style.display = 'none';
    InfGeral.style.display = 'none';
    Eval.style.display = 'none';
    Salarios.style.display = 'none';
};

