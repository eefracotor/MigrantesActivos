
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
            <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
    `
})


// Segunda  Card
cardVaga2.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(1)">
            <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR. 2</h3>
            <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
            <button>Ver más</button>
          </div>
        `
    })

    // Recera Card
cardVaga3.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(2)">
            <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
            <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
        `
    })


    // Cuarta Card
cardVaga4.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(3)">
            <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
        `
    })

    // Quinta Card
cardVaga5.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <div class="card" onclick="showJobDescription(3)">
            <h3 class="centered">DESENVOLVEDOR(A) Backend 5</h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
        `
    })