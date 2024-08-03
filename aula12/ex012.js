var day = new Date()
var hora = day.getHours
if (hora < 12){
    console.log(`Bom Dia!`)
} else if (hora < 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}

