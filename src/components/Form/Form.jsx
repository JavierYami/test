import './Form.css'

const Form = () => {

    return ( 
        <div className="mainContainerForm">
            <h1>Quer saber se atende aos requisitos para solicitar este benefício ainda hoje?</h1>
            <h1>O mais importante: a nacionalidade brasileira. Você a tem? Vamos continuar</h1>
            <div className='infoInversionesContainer'>
                <div className='formContainer'>
                    <p>Solicite o benefício hoje mesmo</p>
                    <form className='formStyle'>
                        <div>
                            <label htmlFor="name" name="name">Nome</label>
                            <input type="text" className='inputStyle' />
                            <p>Campo obrigatório</p>
                        </div>
                    </form>
                </div>
                <div className='reviewsContainer'>

                </div>
            </div>
        </div>
    )

}

export default Form;