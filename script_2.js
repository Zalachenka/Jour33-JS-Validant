
let n = prompt('Donne moi un nombre à factoriser!');
function factorial(n) {
	var finalN = n;
	if (n === 0 || n === 1)
		return 1;
	while (n>1) {
		n--;
		finalN *= n;
	}
	return finalN;
}

console.log(`La factorielle de ${n} est ${factorial(n)}`);