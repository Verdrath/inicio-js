console.log('Esperando o número')
        let numero = prompt('Digite qualquer número');

        if (numero <= -1) {
            console.log('O número apresentado é negativo')
            alert('Este é um número negativo!');
        } else if (numero == 0) {
            
            alert('Zero é neutro!');
        } else {
            console.log('O número apresentado é positivo')
            alert('O número é positivo!');
            
        }