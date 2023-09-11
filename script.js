var password = document.getElementById('password');

function genPassword(){
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var passLength = 12
    var password = ''
    for(i = 0 ; i < passLength ; i++){
        var randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber ,randomNumber + 1)
    }
    document.getElementById('password').value = password
}

function copyPassword(){
    var copyText =  document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0 , 999)
    document.execCommand('copy')
}