
export const validation = (form) => {

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexPhone = /^\d+$/;

    const errors = {};

    if(!form.name) errors.name = 'Campo obrigatório';

    if(!regexEmail.test(form.email)) errors.email = 'Por favor insira um endereço de e-mail válido';

    if(!form.phone) errors.phone = 'Campo obrigatório';

    if(form.phone.length > 10 || !regexPhone.test(form.phone) || form.phone.length < 10 ) errors.phone = 'Número de telefone inválido';
    
    return errors;
}