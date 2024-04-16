function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    document.getElementsByClassName('font')[0].style.color = 'black'
    document.getElementsByClassName('font')[1].style.color = 'black'

    if (hora < 2){
        msg.innerHTML = `Agora é ${hora} hora.<br>`
    } else{
        msg.innerHTML = `Agora são ${hora} horas.<br>`
    }

    if (hora >= 0 && hora < 12){
        msg.innerHTML += 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#fde8a7'
    } else if (hora >= 12 && hora <=18){
        msg.innerHTML += 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#ce6f3d'
    } else{
        msg.innerHTML += 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#0a537c'
    }


}