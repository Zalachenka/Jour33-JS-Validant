function generatePyramid() {
    var p = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    var output = "";
    for (var i = 1; i <= p; i++) {
        for (var j = 1; j <= i; j++) {
            output+="*" + "";
        }
        console.log(output);
        output="";
    }
}  
console.log(generatePyramid())