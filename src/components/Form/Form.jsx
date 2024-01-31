import './Form.css'

const Form = () => {

    return ( 
        <div className="mainContainerForm">
            <h1 style={{color:'white'}}>Quer saber se atende aos requisitos para solicitar este benefício ainda hoje?</h1>
            <h1 style={{color:'white'}}>O mais importante: a nacionalidade brasileira. Você a tem? Vamos continuar</h1>
            <div className='infoInversionesContainer'>
                <div className='formContainer'>
                    <p style={{color:'white'}}>Solicite o benefício hoje mesmo</p>
                    <form className='formStyle'>
                        <div className='formControl'>
                            <label className='labelStyle' htmlFor="name" name="name">Nome</label>
                            <input type="text" className='inputStyle' placeholder='Exemplo: Maria Santos'/>
                            <p className='errorText'>Campo obrigatório</p>
                        </div>
                        <div className='formControl'>
                            <label className="labelStyle" htmlFor="name" name="name">E-mail</label>
                            <input type="text" className='inputStyle' placeholder='maria.santos@example.com'/>
                            <p className='errorText'>Campo obrigatório</p>
                        </div>
                        <div className='formControl'>
                            <label className='labelStyle' htmlFor="name" name="name">Numero de telefone</label>
                            <input type="text" className='inputStyle' />
                            <p className='errorText'>Campo obrigatório</p>
                        </div>
                        <button>Entre em contato</button>
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
                        <p className='cardText'>"No começo, fiz isso para economizar, mas quando descobri que também podia ganhar, percebi que tinha tomado a decisão certa... e tudo o que tive que fazer foi provar que sou brasileiro!" - André Da Silva</p>
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