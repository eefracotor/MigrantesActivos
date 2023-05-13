var mainInfo = document.getElementById("mr-main")
var visaTypes = document.getElementById("mr-visa")
var total = 5
var i = 0



function showInfo (info) {

    switch (info) {
        case "visaTypes":
                visaTypes.innerHTML = 
                `
                <div class="mr-title">
                    <h1>Visa Types</h1>
                </div>
                `
                console.log("Visa Types showInfo")
            break;
    
        default:
            mainInfo.innerHTML =
            `
            <div class="mr-title">
                <h1>Migratory Regularization</h1>
            </div>
        
            <div class="main-info">
                <p>If you were born in another country and are living in Brazil, it is important that you regularize your immigration status. This way, it is easier to access the healthcare system, education, housing, transportation, justice, and even more importantly, the job market. The Federal Police (PF) and the Federal Revenue Service are the competent authorities to handle the immigration procedures, which may vary depending on your country of origin and the way you entered Brazilian territory.</p>
                <!-- <p></p> -->
            </div>
            `
            document.getElementById("mr-main").innerHTML = mainInfo;            
            break;
    }

}

            showInfo("mainInfo")
            // showInfo()



var buttonNavegacion = []
var buttonNav = document.getElementsByClassName("carousel")

    for (var i = 0; i < total; i++) {
    // buttonNavegacion[i] = i;
    const element = buttonNav[i]
    buttonNavegacion.push(buttonNav[i].innerText)
    element.addEventListener("click", function (e) {
        // setState("paginaANavegar", e.target.id)
        document.getElementById("name").innerHTML = e.target.innerText
        // imprimir(e.target.id);
        changePage(i)
        i+=i
    })
    // i+=i
}

var buttonafter = document.getElementById("next")
buttonafter.addEventListener("click", function (e) {
    var page = document.getElementById("name").innerText
    if (buttonNavegacion[i] == 4) {
        changePage(0)
    } else {
        changePage(buttonNavegacion.indexOf(page) + 1)
    }
    // i+=i
})

var buttonafter = document.getElementById("after")
buttonafter.addEventListener("click", function (e) {
    var page = document.getElementById("name").innerText
    if (buttonNavegacion[i] == 0) {
        changePage(4)
    } else {
        changePage(buttonNavegacion.indexOf(page) - 1)
    }
    // i-=i

})

//CARRUSEL
function changePage(i) {
    switch (i) {
        case 0: 
            document.getElementById("name").innerHTML = "Introducing it"
            visaTypes.innerHTML = ""
            showInfo("mainInfo")
            break;
        case 1: /* displayCards(eventosFuturos) */
            document.getElementById("name").innerHTML = "Visa Types"
            mainInfo.innerHTML = ""
            showInfo("visaTypes")
            console.log("Visa Types changePages");
            break;
        case 2: /* displayCards(eventosPasados) */
            document.getElementById("name").innerHTML = "CPF"
            console.log("CPF");            
            break;
        case 3: /* imprimirFormulario("contact") */
            document.getElementById("name").innerHTML = "Refugio"
            console.log("Refugio");            
            break;
        case 4: /* imprimirStats("stats") */
            document.getElementById("name").innerHTML = "Where to go"
            console.log("Wher to go");
            break;
    }
}