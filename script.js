var btn = window.document.getElementById('btn1')
btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var data = data.getFullYear()
    var ano = window.document.getElementById('inp1')
    var resultado = window.document.getElementById('res')

    if (ano.value.length == 0 || Number(ano.value) > data) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var idade = data - Number(ano.value)
        var fsex = window.document.getElementsByName('radsex')
        var gênero = (fsex[0].checked) ? "Homem" : "Mulher"
        if (idade < 4) {
            resultado.innerHTML = `Você é um bebê ${gênero} com ${idade} anos.`

        } else if (idade >= 0 && idade <= 13) {
            resultado.innerHTML = `Você é uma criança ${gênero} com ${idade} anos.`
        } else if (idade < 18) {
            resultado.innerHTML = `Você é um adolescente ${gênero} com ${idade} anos.`

        } else if (idade < 35) {
            resultado.innerHTML = `Você é um jovem ${gênero} com ${idade} anos.`

        } else if (idade < 45) {
            resultado.innerHTML = `Você é um adulto ${gênero} com ${idade} anos.`
        } else {
            resultado.innerHTML = `Você é um idoso ${gênero} com ${idade} anos.`
        }
    }

}

