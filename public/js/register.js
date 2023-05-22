


// const signupForm = document.querySelector('#signupForm')
// signupForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const name = document.querySelector('#name').value
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value

//     const Users = JSON.parse(localStorage.getItem('users')) || []
//     const isUserRegistered = Users.find(user => user.email === email)
//     if(isUserRegistered){
//         return alert('El usuario ya esta registado!')
//     }

//     Users.push({name: name, email: email, password: password})
//     localStorage.setItem('users', JSON.stringify(Users))
//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//       )
//     window.location.href = 'login.html'

// })

var cardVaga1 = document.getElementById("card1")
var cardVaga2 = document.getElementById("card2")
var cardVaga3 = document.getElementById("card3")
var cardVaga4 = document.getElementById("card4")
var cardVaga5 = document.getElementById("card5")
// var cardVaga6 = document.getElementById("card6")
// var cardVaga7 = document.getElementById("card7")

var detalleVagas = document.getElementById("detalles-vaga")

// priemra Card
cardVaga1.addEventListener("click", function() {
// console.log("Al fin!!!!!")
    detalleVagas.innerHTML = 
    `
    <section id="result-section">
        <div class="titulo">
        <h2>Resultado</h2>
        <button href="resources/views/job.ejs" >Buscar mas</button>
      </div>
        <div class="car">
        <div class="left">
          <div class="card" onclick="showJobDescription(1)">
            <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR.</h3>
            <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
            <button>Ver más</button>
          </div>
          <div class="card" onclick="showJobDescription(2)">
            <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
            <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
          <div class="card" onclick="showJobDescription(3)">
            <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
            <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
            <button>Ver más</button>
          </div>
        </div>
        <div class="right">
          <div id="job-description">
            <h3>Descripción del empleo</h3>
            <p>Descripción detallada del empleo</p>
            <ul>
              <li>Debe estar familiarizado con al menos dos lenguajes de programación, como JavaScript, Python, Java o C#</li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    `
})


// Segunda  Card
cardVaga2.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <section id="result-section">
            <div class="titulo">
            <h2>Resultado card 2</h2>
            <button href="resources/views/job.ejs" >Buscar mas</button>
          </div>
            <div class="car">
            <div class="left">
              <div class="card" onclick="showJobDescription(1)">
                <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR.</h3>
                <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(2)">
                <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
                <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(3)">
                <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
            </div>
            <div class="right">
              <div id="job-description">
                <h3>Descripción del empleo</h3>
                <p>Descripción detallada del empleo</p>
                <ul>
                  <li>Debe estar familiarizado con al menos dos lenguajes de programación, como JavaScript, Python, Java o C#</li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        `
    })

    // Recera Card
cardVaga3.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <section id="result-section">
            <div class="titulo">
            <h2>Resultado Card 3</h2>
            <button href="resources/views/job.ejs" >Buscar mas</button>
          </div>
            <div class="car">
            <div class="left">
              <div class="card" onclick="showJobDescription(1)">
                <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR.</h3>
                <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(2)">
                <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
                <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(3)">
                <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
            </div>
            <div class="right">
              <div id="job-description">
                <h3>Descripción del empleo</h3>
                <p>Descripción detallada del empleo</p>
                <ul>
                  <li>Debe estar familiarizado con al menos dos lenguajes de programación, como JavaScript, Python, Java o C#</li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        `
    })


    // Cuarta Card
cardVaga4.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <section id="result-section">
            <div class="titulo">
            <h2>Resultado Card 4</h2>
            <button href="resources/views/job.ejs" >Buscar mas</button>
          </div>
            <div class="car">
            <div class="left">
              <div class="card" onclick="showJobDescription(1)">
                <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR.</h3>
                <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(2)">
                <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
                <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(3)">
                <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
            </div>
            <div class="right">
              <div id="job-description">
                <h3>Descripción del empleo</h3>
                <p>Descripción detallada del empleo</p>
                <ul>
                  <li>Debe estar familiarizado con al menos dos lenguajes de programación, como JavaScript, Python, Java o C#</li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        `
    })

    // Quinta Card
cardVaga5.addEventListener("click", function() {
    // console.log("Al fin!!!!!")
        detalleVagas.innerHTML = 
        `
        <section id="result-section">
            <div class="titulo">
            <h2>Resultado Card 5</h2>
            <button href="resources/views/job.ejs" >Buscar mas</button>
          </div>
            <div class="car">
            <div class="left">
              <div class="card" onclick="showJobDescription(1)">
                <h3 class="centered">DESENVOLVEDOR(A) DE JAVASCRIPT JR.</h3>
                <p>requsitos:Git; A Combinar HTML, CSS, JavaScript, Node.js, React Native Carga Horária: Horário a combinar</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(2)">
                <h3 class="centered">DESENVOLVEDOR(A) Fullstack</h3>
                <h3 class="centered">Desenvolvimiento de funcionalidades en el Frontend (html, css, js) </h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
              <div class="card" onclick="showJobDescription(3)">
                <h3 class="centered">DESENVOLVEDOR(A) Backend</h3>
                <p>Desenvolvimiento de funcionalidades en el backend(Nodejs)</p>
                <button>Ver más</button>
              </div>
            </div>
            <div class="right">
              <div id="job-description">
                <h3>Descripción del empleo</h3>
                <p>Descripción detallada del empleo</p>
                <ul>
                  <li>Debe estar familiarizado con al menos dos lenguajes de programación, como JavaScript, Python, Java o C#</li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        `
    })