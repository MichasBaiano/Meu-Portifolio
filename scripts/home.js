function enviarWhatsapp(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5586994958052'

    const texto = `Fala Michel! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

    window.open(url, '_blank')
}