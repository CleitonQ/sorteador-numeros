function sortear() {
    // Recupera os valores dos campos
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    // ✅ Verifica se algum campo está vazio
    if (quantidade === '' || de === '' || ate === '') {
        alert('Por favor, preencha todos os campos antes de realizar o sorteio.');
        return;
    }

    // Converte para número inteiro após garantir que não estão vazios
    quantidade = parseInt(quantidade);
    de = parseInt(de);
    ate = parseInt(ate);

    // Verifica se o intervalo é válido
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    // Verifica se a quantidade é compatível com o intervalo
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    // Sorteia os números e garante que não haja duplicatas
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        // Se o número já foi sorteado, tenta outro
        while (sorteados.includes(numero)) {
            if (quantidade > (ate - de + 1)) {
                alert('Tentando obter número inédito');
                break;
            }
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    // Exibe os números sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

    // Altera o estado do botão de reiniciar
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    // Limpa os campos de entrada e o resultado
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Altera o estado do botão de reiniciar
    alterarStatusBotao();
}
