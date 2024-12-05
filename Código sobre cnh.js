let cnh;
       idade = prompt("Qual a sua idade?");
       idade = Number(idade);
       if (idade >= 18) {
        console.log("A idade digitada atinge o requiremento");
        alert("Certo! Clique ok para prosseguir");
        cnh = prompt("Você possui CNH?");
        if (cnh.toLowerCase() === "sim") {
            cnh = true;
        } else {
            cnh = false;
        }
       } else {
        console.log("A idade digitada não atinge o requiremento");
        alert("Você não possui idade suficiente");
       } 
       if (cnh === true && idade >= 18) {
        console.log("Esta pessoa pode dirigir");
        alert("Você pode dirigir!");
       } else if (cnh === false && idade >= 18) {
        console.log("Esta pessoa possui idade, mas não cnh")
        alert("É preciso ter CNH para digirir!")
       }