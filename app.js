function calculDeLimc(){
    let masse=inputMasse.value;
    let taille=inputTaille.value;
    let imc=Math.round(masse/(taille*taille));
    resultats.innerHTML = "L'IMC calculé est égal à "+imc+" Kg/m2";
    if(imc>30){
        interpretation.innerHTML= "D'après l'OMS l'indivu souffre d'obésité.";
    } else if(imc>25){
        interpretation.innerHTML= "D'après l'OMS l'indivu souffre de surpoids.";
    } else if(imc>20){
        interpretation.innerHTML= "D'après l'OMS l'indivu a un poids normal.";
    } else {
        interpretation.innerHTML= "D'après l'OMS l'individu souffre d'anorexie";
    }
}