function generate(){
    let comprimento = document.querySelector("#size").value;

    const leters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*;[]{}\|+=_-)(:>.<,";
    const allThings = leters + numbers + symbols;

    let lastPswd = "";
    
    lastPswd += symbols.charAt(Math.floor(Math.random() * symbols.length));

    for(let i = 0; i <(comprimento - 2); i++){
        let index = Math.floor(Math.random() * allThings.length);
        lastPswd += allThings.charAt(index);
    }

    let senhaArray = lastPswd.split("");
    senhaArray.sort(() => Math.random() -0.5);
    let senhaFinal = senhaArray.join("");


    document.querySelector("#password").value = senhaFinal
}

function copy(){
    let pswCopy = document.querySelector("#password").value;
    
    if(pswCopy === ""){
        alert("Por favor, gere uma senha!");
        return;
    }
    
    navigator.clipboard.writeText(pswCopy).then(() => {
        alert("Senha copiada: " + pswCopy);
    });

    }
    