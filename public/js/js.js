let textoHTML = document.getElementById("lenguages")
let lengua = document.getElementById("lenguages")
// var btn = document.getElementById("lenguages")
var btn = document.getElementsByClassName("btn")
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        DetectarIdioma(e.target.id)
        // console.log(e.target.id)
    })
}

function DetectarIdioma(id) {

    switch (id) {
        case "btn-es":
            lengua.style.display ="none"
            const text = document.getElementById("home")
            text.innerHTML = 
            `
            <div class="alert">
                <p>It's ready</p>
                <p>this prints</p>
                <p>all I want</p>
            </div>
            `
            console.log("español")
            break;
        case "btn-en":
            lengua.style.display ="none"
            textoHTML.innerHTML = "Español"
            console.log("ingles")
            break;
        case "btn-fr":
            lengua.style.display ="none"
            textoHTML.innerHTML = "Español"
            console.log("francés")
            break;
        case "btn-ja":
            lengua.style.display ="none"
            textoHTML.innerHTML = "Español"
            console.log("japonés")
            break;
        case "btn-pt":
            lengua.style.display ="none"
            textoHTML.innerHTML = "Español"
            console.log("portugés")
            break;
        default:
            break;
    }
}

DetectarIdioma()