import'./Header.css'

const Header  = () => {
    
    return (
        <>
        <section>
            <p className="title">SolLivre Brasil | Publicidade</p>
        </section>
        <section className='headerContainer'>
            <div className='contenedor'></div>
            <div className='logoContainer'>
                <img className='imgLogo' src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/logo-e16af8a9.webp" alt="Logo"/>

                <h1>SolLivre Brasil</h1>
            </div>
            <img src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/people-e0ac9192.webp" alt="guy with brazilian passport" className='heroImg'/>
            <div className='container'>
                <div className='containerInfo'>
                    <h2>Se você nasceu no Brasil entre 1941 e 1991, pode estar perdendo uma grande oportunidade</h2>
                    <p>Muitos brasileiros já estão ganhando um bônus de R$4000 sem sair de casa! Aprovado pela cidade para aumentar a energia limpa e economizar na sua conta de eletricidade </p>
                    <button>Conheça o bônus!</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header;