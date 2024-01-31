import React, { useState } from 'react';
import './Form.css';
import { validation } from './validation';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData)

        setFormErrors(validation({...formData, [name]: value}))
    };

    const handleSubmit = (e) => {
        const { name, value } = e.target;

        e.preventDefault();
        
        setFormErrors(validation({...formData, [name]: value}))

        if (Object.keys(errors).length === 0) {
            setFormData({
                name: '',
                email: '',
                phone: ''
            })
            console.log('Formulario enviado:', formData);
        }
    };

    return ( 
        <div className="mainContainerForm">
            <h1 className='formTitle' style={{color:'white'}}>Quer saber se atende aos requisitos para solicitar este benefício ainda hoje?</h1>
            <h1 className='formTitle' style={{color:'white'}}>O mais importante: a nacionalidade brasileira. Você a tem? Vamos continuar</h1>
            <div className='infoInversionesContainer'>
                <div className='formContainer'>
                    <p  className="formTitle" style={{color:'white'}}>Solicite o benefício hoje mesmo</p>
                    <form className='formStyle'>
                        <div className='formControl'>
                            <label className='labelStyle' htmlFor="name" name="name">Nome</label>
                            <input value={formData.name} onChange={handleChange} id="name" name="name" type="text" className='inputStyle' placeholder='Exemplo: Maria Santos'/>
                            {formErrors.name && <p className='errorText'>{formErrors.name}</p>}
                        </div>
                        <div className='formControl'>
                            <label className="labelStyle" htmlFor="name" name="name">E-mail</label>
                            <input value={formData.email} onChange={handleChange} type="text" id="email" name="email" className='inputStyle' placeholder='maria.santos@example.com'/>
                            {formErrors.email && <p className='errorText'>{formErrors.email}</p>}
                        </div>
                        <label style={{textAlign:'left', width:'100%'}} className='labelStyle ' htmlFor="name" name="name">Numero de telefone</label>
                        <div className='formControlPhone'>
                            <div className='divPhone'>+52</div>
                            <input value={formData.phone} onChange={handleChange} id="phone" name="phone" type="text" className='inputStylePhone' placeholder='11 1111-1111'/>
                        </div>
                        {formErrors.phone && <p style={{textAlign:'left', width:'100%'}} className='errorText'>{formErrors.phone}</p>}
                        <button className="formButton" type='submit' onClick={handleSubmit}>Entre em contato</button>
                    </form>
                    <p style={{color: 'white', textAlign:'center', fontSize:'15px', maxWidth:'528px'}}>Aplicam-se termos e condições. Entre em contato conosco para saber se você está qualificado para começar a ganhar</p>
                </div>
                <div className='reviewsContainer'>
                    <div className='cardContainer'>
                        <div className='card'></div>
                        <p className='cardText'>"No começo, fiz isso para economizar, mas quando descobri que também podia ganhar, percebi que tinha tomado a decisão certa... e tudo o que tive que fazer foi provar que sou brasileiro!" - André Da Silva</p>
                        <img className='cardImage' src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/img1-ffa08504.webp" alt="André photo" />
                    </div>
                    <div className='cardContainerTwo'>
                        <div className='card'></div>
                        <p className='cardText'>"É o melhor investimento que já fiz! Desde que instalei os painéis solares, tenho uma economia estável e me sinto feliz em ser um agente de mudança no mundo, ajudando o meio ambiente com energia limpa." - Ana Santos</p>
                        <img className='cardImage' src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/img2-0ccc46d2.webp" alt="André photo" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form;