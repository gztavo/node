'use strict';

let errors = []; // lista de erros

function ValidationContract() { // inicializa uma nova lista de erro - memória
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) =>{ //não pode ser menor
    if(!value || value.length <= 0)
    errors.push({message: message});
}

ValidationContract.prototype.hasMinLen = (value, min,message) =>{ 
    if(!value || value.length <= min)
    errors.push({message: message});
}

ValidationContract.prototype.hasMaxLen = (value, message) =>{
    if(!value || value.length <= max)
    errors.push({message: message});
}


ValidationContract.prototype.isFixedLen = (value, len, message) =>{
    if(value.length != len)
    errors.push({message: message});
}

ValidationContract.prototype.isEmail = (value, len, message) =>{
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if(!reg.test(value))
    errors.push({message: message});
}

ValidationContract.prototype.errors = () =>{
    return errors;
}

ValidationContract.prototype.clear = () =>{
   errors = [];
}

ValidationContract.prototype.isValid = () =>{
    return errors.length == 0;
}

module.exports = ValidationContract;