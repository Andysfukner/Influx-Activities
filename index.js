
                                //PROVAS BOOK 1 E 2//
function provas() {
    let erroListening = Number(document.getElementById("erroListening").value);
    let erroReading = Number (document.getElementById("erroReading").value);
    let composition = Number(document.getElementById("composition").value);
    resultado = 8 - (erroListening * 0.10) - ( erroReading * 0.15) + composition
    //alert(`A nota final do aluno é: ${resultado}`)
    //var x = document.getElementById("erroListening").value;
    document.getElementById("el").innerHTML = composition;
    document.getElementById("er").innerHTML = (resultado - composition).toFixed(2);
    document.getElementById("comp").innerHTML = resultado.toFixed(2);

}

                                //PROVAS BOOK 3 AO 5//
function provas3() {
    let erroListening = Number(document.getElementById("erroListening").value);
    let erroReading = Number (document.getElementById("erroReading").value);
    let composition = Number(document.getElementById("composition").value);
    resultado = 8 - (erroListening * 0.10) - ( erroReading * 0.12) + composition
    //alert(`A nota final do aluno é: ${resultado}`)
    document.getElementById("el").innerHTML = composition;
    document.getElementById("er").innerHTML = (resultado - composition).toFixed(2);
    document.getElementById("comp").innerHTML = resultado.toFixed(2);

}

                                //COMPOSITION//

function compoFunction() {
    let tema1 = document.getElementsByName("temaCorreto");
    let checkedRadio1 = Array.from(tema1).find((radio) => radio.checked);
    if (checkedRadio1.value == 1) {
        rad1 = 0
    } else {rad1 = 0.1}
    let tema2 = document.getElementsByName("numPalavras");
    let checkedRadio2 = Array.from(tema2).find((radio) => radio.checked);
    if (checkedRadio2.value == 1) {
        rad2 = 0
    } else {rad2 = 0.15}
    let tema3 = document.getElementsByName("vocabulário");
    let checkedRadio3 = Array.from(tema3).find((radio) => radio.checked);
    if (checkedRadio3.value == 1) {
        rad3 = 0
    } else {rad3 = 0.25}
    let tema4 = document.getElementsByName("chunks");
    let checkedRadio4 = Array.from(tema4).find((radio) => radio.checked);
    if (checkedRadio4.value == 1) {
        rad4 = 0
    } else {rad4 = 0.25}
    let tema5 = document.getElementsByName("erros0");
    let checkedRadio5 = Array.from(tema5).find((radio) => radio.checked);
    if (checkedRadio5.value == 1) {
        rad5 = 0
    } else {rad5 = 0}
    let tema6 = document.getElementsByName("erros2");
    let checkedRadio6 = Array.from(tema6).find((radio) => radio.checked);
    if (checkedRadio6.value == 1) {
        rad6 = 0.1
    } else {rad6 = 0}
    let tema7 = document.getElementsByName("erros3");
    let checkedRadio7 = Array.from(tema7).find((radio) => radio.checked);
    if (checkedRadio7.value == 1) {
        rad7 = 0.2
    } else {rad7 = 0}
    let tema8 = document.getElementsByName("erros6");
    let checkedRadio8 = Array.from(tema8).find((radio) => radio.checked);
    if (checkedRadio8.value == 1) {
        rad8 = 0.3
    } else {rad8 = 0}
    
    

    notaFinal = 2 - (rad1 + rad2 +rad3 +rad4 + rad5 + rad6 + rad7 + rad8)

    document.getElementById("compositionNota").innerHTML = ("A nota da composition é : " + notaFinal);
}
         

                                    //PERSONAL//
var materiaisBook1 = ["2", "7", "8", "14", "15","17","25", "23", "26", "29"]
var documentosBook1 = ["11", "14", "17", "20", "23"]
var materiaisBook2 = ["14", "18", "26", "28", "30"]
var documentosBook2 = ["12","20"]
var materiaisBook3 = ["6", "16"," 18", "20"]
var documentosBook3 = ["8", "18", "22"]
var materiaisBook4 = ["14"]
var documentosBook4 = ["8", "16", "28", "24"]
var materiaisBook5 = ["6", "14", "18", "22", "24"]
var documentosBook5 = ["2", "8", "16", "20", "26", "28"]

function personal() {
    let personalBook = (document.getElementById("personalBook")).value;
    let personalLesson = (document.getElementById("personalLesson")).value;
    
    //BOOK 1
    if (personalBook == 1){
        if (materiaisBook1.includes(personalLesson) && documentosBook1.includes(personalLesson))
        resultadoPersonal = "Precisa de cards e documento impresso" 
        else if (materiaisBook1.includes(personalLesson))
        resultadoPersonal = "Precisa levar cards" 
        else if (documentosBook1.includes(personalLesson))
        resultadoPersonal = "Precisa documento impresso"       
        else
        resultadoPersonal = "Não precisa de cards ou documentos"
    } 
    //BOOK 2
    else if (personalBook == 2){
        if (materiaisBook2.includes(personalLesson) && documentosBook2.includes(personalLesson))
        resultadoPersonal = "Precisa de cards e documento impresso" 
        else if (materiaisBook2.includes(personalLesson))
        resultadoPersonal = "Precisa levar cards" 
        else if (documentosBook2.includes(personalLesson))
        resultadoPersonal = "Precisa documento impresso"       
        else
        resultadoPersonal = "Não precisa de cards ou documentos"
    } 
    //BOOK 3
    else if (personalBook == 3){
        if (materiaisBook3.includes(personalLesson) && documentosBook3.includes(personalLesson))
        resultadoPersonal = "Precisa de cards e documento impresso" 
        else if (materiaisBook3.includes(personalLesson))
        resultadoPersonal = "Precisa levar cards" 
        else if (documentosBook3.includes(personalLesson))
        resultadoPersonal = "Precisa documento impresso"       
        else
        resultadoPersonal = "Não precisa de cards ou documentos"

    } 
    //BOOK 4
    else if (personalBook == 4){
        if (materiaisBook4.includes(personalLesson) && documentosBook4.includes(personalLesson))
        resultadoPersonal = "Precisa de cards e documento impresso" 
        else if (materiaisBook4.includes(personalLesson))
        resultadoPersonal = "Precisa levar cards" 
        else if (documentosBook4.includes(personalLesson))
        resultadoPersonal = "Precisa documento impresso"       
        else
        resultadoPersonal = "Não precisa de cards ou documentos"

    } 
    //BOOK 5
    else if (personalBook == 5){
        if (materiaisBook5.includes(personalLesson) && documentosBook5.includes(personalLesson))
        resultadoPersonal = "Precisa de cards e documento impresso" 
        else if (materiaisBook5.includes(personalLesson))
        resultadoPersonal = "Precisa levar cards" 
        else if (documentosBook5.includes(personalLesson))
        resultadoPersonal = "Precisa documento impresso"       
        else
        resultadoPersonal = "Não precisa de cards ou documentos"

    }   
    document.getElementById("perBook").innerHTML = resultadoPersonal;
    }


       
