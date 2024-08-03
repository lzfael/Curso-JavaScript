function carregar(){
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = `fotoManha.png`
        document.body.style.background = `#edd38c`
    }else if (hora >= 12 && hora <= 18){
        img.src = `fotoTarde.png`
        document.body.style.background = `#f5a631`
    }else {
        img.src = `fotoNoite.png`
        document.body.style.background = `#474745`
    }
}