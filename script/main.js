const botao = document.getElementById("button-click");

function contador(){
    const H3 = document.getElementById("caracteres");
    let capturaTexto = document.getElementById("texto").value;
    let numero = capturaTexto.length;
    let string = `O SEU TEXTO POSSUI ${numero} CARACTERES`;

    H3.innerHTML = string;
}

botao.addEventListener("click", contador);