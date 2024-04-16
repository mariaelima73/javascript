function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('txtano')
    var resp = document.querySelector('div#resp')

    if (anoNasc.value.length == 0 || Number(anoNasc.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var idade = ano - Number(anoNasc.value) // calcular a idade
        resp.innerHTML = `Sua idade é ${idade}.`

        var img = document.createElement('img')
        img.setAttribute('id','imagem')

        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked){
            genero = "uma mulher"

            if (idade >= 0 && idade < 13){
                img.setAttribute('src','foto-crianca-f.png')
            } else if (idade < 21){
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 60){
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                img.setAttribute('src','foto-idoso-f.png')
            }

        } else if (fsex[1].checked){
            genero = "um homem"

            if (idade >= 0 && idade < 13){
                img.setAttribute('src','foto-crianca-m.png')
            } else if (idade < 21){
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 60){
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        resp.innerHTML = `Você é ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }

 
}