function somar(){

    // Receber os valores das caixas de texto.
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')

    // Ele vem acima como texto da caixa de texto
    // Transformar em int
    var resp = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    
    var s = n1 + n2

    resp.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}.`
}