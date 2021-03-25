/*-*- codeing = utf-8 -*-*/
/*@Time : 2021-03-20 19:18*/
/*@Author: Puyang Chen*/
/*@File : project0.js*/
/*@Software: WebStorm*/

window.onload=selectOption;
function selectOption(){
    document.getElementById('answer1').value=document.getElementById('question1').value;
    document.getElementById('answer2').value=document.getElementById('question2').value;
    document.getElementById('answer3').value=document.getElementById('question3').value;
    document.getElementById('answer4').value=document.getElementById('question4').value;
    document.getElementById('answer5').value=document.getElementById('question5').value;
    document.getElementById('answer6').value=document.getElementById('question6').value;
}


// document.getElementById("lucky").onclick = function() {
//     document.getElementById("btnl").value="I'm Feeling Lucky";
//     document.getElementById("identify").value="AINFCbYAAAAAYFipKRhsgcOAIvuHmxY-z3M7KRb0p8FJ";
// };