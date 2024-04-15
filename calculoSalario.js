let saláriobruto = 2300.00;
let benefício = 500.00;
let salárioliquido = 0;

if(saláriobruto > 1100.01 && saláriobruto < 2500) {
   salárioliquido = saláriobruto - (saláriobruto * 0.10) + benefício
    console.log("Seu salário liquido é de: " + salárioliquido); 
} else if (saláriobruto < 1100.00) {
    salárioliquido = saláriobruto - (saláriobruto * 0.05) + benefício
    console.log("Seu salário liquido é de: " + salárioliquido);
}else if(saláriobruto > 2500) {
    salárioliquido = saláriobruto - (saláriobruto * 0.15) + benefício
    console.log("Seu salário liquido é de: " + salárioliquido);
} 
