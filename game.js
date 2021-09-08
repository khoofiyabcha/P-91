function send() {
    number1 =  document.getElementById("number1").value;
    number2 =  document.getElementById("number2").value;
    answerOfQuestion = parseInt(number1) * parseInt(number2);
    question = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    input = "<br> Answer: <input type='number' id='userAns' placeholder='Write the product'>";
    btn = "<br><hr><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    elements = question + input + btn ;
    document.getElementById("output").innerHTML = elements;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}