var cardVaga1 = document.getElementById("card1")
var cardVaga2 = document.getElementById("card2")
var cardVaga3 = document.getElementById("card3")
var cardVaga4 = document.getElementById("card4")
var cardVaga5 = document.getElementById("card5")

var detalleVagas = document.getElementById("detalles-vaga")

// priemra Card
cardVaga1.addEventListener("click", function() {
// console.log("Al fin!!!!!")
    detalleVagas.innerHTML = 
    `
    <div class="card" onclick="showJobDescription(2)">
            <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
            <h3 class="centered">Nós somos uma empresa com foco em algo que amamos fazer: Utilizar tecnológia de ponta para solucionar problemas e colocar nossos clientes em um novo patamar no mercado. </h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Cadastrarse en la empresa</button>
          </div>
    `
})


// Segunda  Card
cardVaga2.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(1)">
            <h3 class="centered">>DESENVOLVEDOR(A) PHP Fullstack Pleno</h3>
            <p>Basicamente, você precisará saber criar uma solução completa que comece no front-end com o usuário interagindo, passando pelo back-end e terminando em um robô para executar alguma tarefa. Sempre com auxílio do nosso time.</p>

            
            <button>Cadastrarse en la empresa</button>
          </div>
        `
    })

    // Recera Card
cardVaga3.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(2)">
            <h3 class="centered">DESENVOLVEDOR(A) C++</h3>
            <h3 class="centered">A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes.
            </h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Cadastrarse en la empresa</button>
          </div>
        `
    })


    // Cuarta Card
cardVaga4.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(3)">
            <h3 class="centered">Desenvolvedor full stack - júnior - hídrido</h3>
            <p>Estamos buscando um(a) Desenvolvedor(a) Full Stack Junior que nos ajude no dia a dia da área de Eficiência Operacional, que é composta pelos times de Processos, Sistemas Internos e Dados. A área tem o objetivo principal contribuir com a estruturação de uma operação escalável e automatizada, além de ajudar na capacidade competitiva da Cobli.</p>
            <button>Cadastrarse en la empresa</button>
          </div>
        `
    })

    // Quinta Card
cardVaga5.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(3)">
            <h3 class="centered">DESENVOLVEDOR(A) 5</h3>
            <p>O hotelflow é um sistema para gerenciamento de hotéis e pousadas. Temos uma plataforma Web conectada com os principais players do mercado e atendemos clientes em todo o território nacional.</p>
            <button>Cadastrarse en la empresa</button>
          </div>
        `
    })

    function mostrarSeccion() {
        var seccion = document.getElementById("vacancies");
        seccion.style.display = "flex";
      }
      