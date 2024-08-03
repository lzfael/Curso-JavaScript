function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`textano`)
    var res = document.getElementById(`res`)
if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    alert(`{Erro} Verifique os dados!`)
}else{
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ``
    if (fsex[0].checked){
        genero = `Homem`
    }else {
        genero = `Mulher`
    }
    res.style.textAlign = `center`
    res.innerText = `Detectamos ${genero} com ${idade} anos `
} 

}