
function contar() {
    var inicionum = document.querySelector(`#inicioCon`)
    var fimnum = document.querySelector(`#fimCon`)
    var passnum = document.querySelector(`#pasCon`)
    var res = document.querySelector(`#res`)

    if (inicionum.value.length == 0 || fimnum.value.length == 0 || passnum.value.length == 0 || fimnum.value.length < passnum.value.length){
        alert(`[ERRO!] Digite numeros validos para a operação.`)
    } else{
        var i = Number(inicionum.value)
        var f = Number(fimnum.value)
        var p = Number(passnum.value)
        
        if (i < f){
        for ( var con = i; con <= f; con += p ){
            res.innerHTML = `${con}`
        }
    }
}
 
}
