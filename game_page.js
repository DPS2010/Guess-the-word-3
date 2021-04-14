p1_name = localStorage.getItem("Player 1 Name")
p2_name = localStorage.getItem("Player 2 Name")
p1_score = 0
p2_score = 0
document.getElementById("p1_score").innerHTML = p1_score
document.getElementById("p2_score").innerHTML = p2_score
document.getElementById("p1_name").innerHTML = p1_name + " : "
document.getElementById("p2_name").innerHTML = p2_name + " : "
aturn = "player2"
qturn = "player1"
document.getElementById("QTurn").innerHTML = "Question Turn : " + p1_name
document.getElementById("ATurn").innerHTML = "Answer Turn : " +p2_name

function SendWord() {
    get_Word = document.getElementById("wordinput").value 
    qword = get_Word.toLowerCase()
    console.log(qword)
    //Code for replacong the 1st lettter
    letter1 = qword.charAt(1)
    console.log(letter1)
    replace1 = qword.replace(letter1," _ ")
    console.log(replace1)

    //Code for replacing the second letter
    x = qword.length-1
    console.log(x)
    letter2 = qword.charAt(x)
    console.log(letter2)
    replace2 = replace1.replace(letter2, " _ ")
    console.log(replace2)

    //Code for replacing the third letter
    y = Math.floor(qword.length/2)
    console.log(y)
    letter3 = qword.charAt(y)
    console.log(letter3)
    replace3 = replace2.replace(letter3, " _ ")
    console.log(replace3)

    qtag = `<h4 id="word_display">Q. ${replace3} </h4>`
    atag = `<br> Answer <input id="ansinput">`
    btntag = `<br><br><button class="btn btn-warning" onclick=Check()>Check</button>`


    document.getElementById("output").innerHTML = qtag + atag + btntag
}