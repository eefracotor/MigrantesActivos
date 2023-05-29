// import connection from "../../app";

// Botones
var btnInfGeral = document.getElementById("sobre");
var btnVacant = document.getElementById("vacant");
var btnEval = document.getElementById("eval");
var btnSalarios = document.getElementById("salarios");

//Div donde se mostraran los detalles
var InfGeral = document.getElementById("about");
var Vacant = document.getElementById("vacancies");
var Eval = document.getElementById("aval");
var Salarios = document.getElementById("salary");

var cardLink = document.querySelector('.card-vaga');
var details = document.getElementById('detalles-vaga');
details.innerHTML = '';

cardLink.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target.id)
    let id = e.target.id;
    connection.query('SELECT *FROM vagas WHERE id = ? ', [id], async(error, resuluts)=>{
        if(error){
            console.log(error)
        }else {
            console.log(id);
            // res('detail-vacant', {resuluts:resuluts});
            details.innerHTML = 
            `
                 <div id="">
                    <div class="title-vacant">
                        <div>
                            <h3>${resuluts.titulo}.titulo</h3>
                            <p class="nombre-emp detail-vaga">${resuluts.id_empresa}.id_empresas</p>
                                <p class="localidad detail-vaga">${resuluts.local}.local</p>
                            <button class="btn btn-primary">Ver más</button>
                        </div>
                    </div>
                    <div class="description-vacant">
                        <p class="centered">${resuluts.responsabilidades}.responsabilidades </p>
                        <p class="centered">${resuluts.beneficios}. </p>
                        <p class="centered">${resuluts.jornada}. </p>
                        <p class="centered">${resuluts.salario}. </p>
                        <p class="centered">${resuluts.tipo_contrato}. </p>
                        <p class="centered">${resuluts.horario}. </p>
                    </div>
                    <% }) %>
                </div>
            `
    
        }
    })
    
})

InfGeral.style.display ='block';
Vacant.style.display ='none';
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
    Eval.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarVagas(){
    Vacant.style.display = 'flex';
    InfGeral.style.display = 'none';
    Eval.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarAvaliacoes(){
    Eval.style.display = 'block';
    InfGeral.style.display = 'none';
    Vacant.style.display = 'none';
    Salarios.style.display = 'none';
};

function mostrarSalarios(){
    Salarios.style.display = 'block';
    Eval.style.display = 'none';
    InfGeral.style.display = 'none';
    Vacant.style.display = 'none';
};