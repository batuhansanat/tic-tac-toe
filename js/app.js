//! Selectors
let boxses = document.querySelectorAll(".box")
let turnDOM = document.querySelector("#turn")
let warningDOM = document.querySelector("#warning")
let btnRestart = document.getElementById('btnRestart')

let player = "X"

let isGameFinished = false;

//* Oyun başladığında öncelikle sıra X olduğu için turn kısmına direkt X yazdırıyoruz
turnDOM.innerHTML = `<h2>Turn: <i style="color:tomato">${player}</i></h2>`

//* Tüm boxları dönerek hepsine bir click eventi oluştur ve tıklanıldığında chooseBox fonksiyonunu çalıştır.
boxses.forEach(box => box.addEventListener("click", () => chooseBox(box)))

btnRestart.addEventListener('click',Restart)


//! Functions
//* Boxlara tıklandığında Box içerisine X eklenecek. Ardından changePlayer fonksiyonu çalışacak.
function chooseBox(box){
    if(box.textContent == ""){
        warningDOM.textContent = ""
        box.textContent = player
        changePlayer()
        Win()
        Draw()
    }
    else{
        box.style.border = "2px solid tomato"
        warningDOM.textContent = "The value of the box cannot be changed!"
        setTimeout(() => {
        box.style.border = "1px solid rgb(90, 90, 90)"
        warningDOM.textContent = ""
        },3000)
    }

}

function changePlayer(){
    if(player === "X"){
        player = "O"
        turnDOM.innerHTML = `<h2>Turn: <i style="color:tomato">${player}</i></h2>`
    }else{
        player = "X"
        turnDOM.innerHTML = `<h2>Turn: <i style="color:tomato">${player}</i></h2>`
    }
}

function Win(){
    checkRows()
    checkCols()
    checkCross()
}

function Restart(){
    window.location.reload()
}

function checkGameFinish(){
    if(isGameFinished==true){
        boxses.forEach(box => box.style.pointerEvents = 'none');
        btnRestart.style.display = "block"
    }
}

function checkRows(){
    let row1 = boxses[0].innerHTML === boxses[1].innerHTML && boxses[0].innerHTML === boxses[2].innerHTML && boxses[0].innerHTML !== ""
    let row2 = boxses[3].innerHTML === boxses[4].innerHTML && boxses[3].innerHTML === boxses[5].innerHTML && boxses[3].innerHTML !== ""
    let row3 = boxses[6].innerHTML === boxses[6].innerHTML && boxses[6].innerHTML === boxses[8].innerHTML && boxses[6].innerHTML !== ""
    if(row1){
        boxses[0].style.border = "2px solid green"
        boxses[1].style.border = "2px solid green"
        boxses[2].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[0].innerHTML}!`
        isGameFinished = true
    }else if(row2){
        boxses[3].style.border = "2px solid green"
        boxses[4].style.border = "2px solid green"
        boxses[5].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[3].innerHTML}!`
        isGameFinished = true;
    }else if(row3){
        boxses[6].style.border = "2px solid green"
        boxses[7].style.border = "2px solid green"
        boxses[8].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[6].innerHTML}!`
        isGameFinished = true;
    }

    checkGameFinish()
}

function checkCols(){
    let cols1 = boxses[0].innerHTML === boxses[3].innerHTML && boxses[0].innerHTML === boxses[6].innerHTML && boxses[0].innerHTML !== ""
    let cols2 = boxses[1].innerHTML === boxses[4].innerHTML && boxses[1].innerHTML === boxses[7].innerHTML && boxses[1].innerHTML !== ""
    let cols3 = boxses[2].innerHTML === boxses[5].innerHTML && boxses[2].innerHTML === boxses[8].innerHTML && boxses[2].innerHTML !== ""
    if(cols1){
        boxses[0].style.border = "2px solid green"
        boxses[3].style.border = "2px solid green"
        boxses[6].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[0].innerHTML}!`
        isGameFinished = true
    }else if(cols2){
        boxses[1].style.border = "2px solid green"
        boxses[4].style.border = "2px solid green"
        boxses[7].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[1].innerHTML}!`
        isGameFinished = true;
    }else if(cols3){
        boxses[2].style.border = "2px solid green"
        boxses[5].style.border = "2px solid green"
        boxses[8].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[2].innerHTML}!`
        isGameFinished = true;
    }

    checkGameFinish()
}

function checkCross(){
    let cross1 = boxses[0].innerHTML === boxses[4].innerHTML && boxses[0].innerHTML === boxses[8].innerHTML && boxses[0].innerHTML !== ""
    let cross2 = boxses[2].innerHTML === boxses[4].innerHTML && boxses[2].innerHTML === boxses[6].innerHTML && boxses[2].innerHTML !== ""
    if(cross1){
        boxses[0].style.border = "2px solid green"
        boxses[4].style.border = "2px solid green"
        boxses[8].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[0].innerHTML}!`
        isGameFinished = true
    }else if(cross2){
        boxses[2].style.border = "2px solid green"
        boxses[4].style.border = "2px solid green"
        boxses[6].style.border = "2px solid green"
        turnDOM.innerHTML = ""
        warningDOM.style.color = "green"
        warningDOM.innerHTML= `Win: ${boxses[2].innerHTML}!`
        isGameFinished = true;
    }
    checkGameFinish()
}






