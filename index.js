
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


    