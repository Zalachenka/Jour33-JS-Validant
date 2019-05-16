function generatePyramid() {
   {
    let p = prompt("Combien d'étages veux-tu à la pyramide ?");
    let i = 1;
    do {
        console.log(" ".repeat(p - i) + "#".repeat(i))
        i ++ }
    	 while (i <= p);
	}
}
console.log(generatePyramid())