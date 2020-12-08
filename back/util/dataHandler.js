function isString(str, msg) {
    if(!str) throw msg
    if(Array.isArray(str) && str.length === 0) throw msg
    if(typeof str !== 'string' && !str.trim() ) throw msg
    
}

function isValidEmail(email, msg) {
    if(!email) throw msg
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) throw msg;
}

function isValidPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return re.test(password)
}

function matchPassword(password1, password2, msg) {
    if(!password1 && !password2) throw msg
    if( password1 !== password2 ) throw msg

}

module.exports = {isString, isValidEmail, isValidPassword, matchPassword};