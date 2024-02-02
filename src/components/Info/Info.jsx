import './info.css'

const Info = () => {
    
    return (
        <div className='mainContainer'>
            <div className='titleContainer'>
                <h1 className='title'>Brasileiro: Paga mais de R$400? Agora pode receber 10 VEZES MAIS com este bônus de energias limpas!</h1>
            </div>
            <div className='infoContainer'>
                <div className='info'>
                    <h3 className='infoTitle'>A porta para economia está na sua casa</h3>
                    <br />
                    <p className='infoText'>Já pensou na possibilidade de instalar painéis solares na sua casa? Se já o fez, isso vai convencê-lo! Pode gerar até 2.000 kWh e, com isso, tornar-se mais próspero.
                    <br />
                    Foi anunciado no Brasil um benefício acessível para quase toda a população economicamente ativa.
                    <br />
                    Se você nasceu entre 1941 e 1991, pode começar a gerar ganhos graças ao aumento das energias limpas e ao interesse dos líderes em criar um ambiente mais sustentável.
                    <br/>
                    A maioria dos proprietários ainda acredita que um sistema de energia solar está fora do seu alcance... mas, e se lhe dissermos que não é? Na realidade, somando os incentivos e economias na conta de eletricidade, o maior beneficiário é o brasileiro comum. Muitos já estão ganhando R$4000, e hoje pode ser o próximo.</p>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <img className='imgSavings' src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/pig-f700c9b5.webp" alt="cochinito"/>
                </div>
            </div>
            <div className='beneficiosContainer'>
                <div className='beneficiosImg'>

                </div>
                <div className='beneficiosInfoContainer'>
                    <div className='info'>
                        <h3 style={{color:"#505050"}}>Conheça os incríveis benefícios para os brasileiros entre 32 e 82 anos</h3>
                        <br />
                        <ul className='lista'>
                            <li>Os painéis solares podem aumentar o valor da sua casa</li>
                            <br />
                            <li>Pode ganhar R$4000 em pouco tempo e sem sair de casa!</li>
                            <br />
                            <li>Pode congelar o preço da sua conta de eletricidade e poupar ainda mais!</li>
                            <br />
                            <li>Demonstra o seu compromisso e interesse em melhorar as condições ambientais</li>
                            <br />
                            <li>Ao tornar-se autossuficiente em energia, terá a tranquilidade de não depender de ninguém</li>
                            <br />
                        </ul>
                        <br />
                        <h3 style={{color:"#505050"}}>Quer saber como a instalação de energia solar pode render até R$4000?</h3>
                        <br />
                        <a href="#form">
                            <button className='buttonInfo'>Clique Aqui</button>
                        </a>
                    </div>
                </div>
                <img className='imgResponsive' src="https://cmps-blanco.s3.amazonaws.com/pt/panels/solLivre_brasil/assets/people-d01acd50.webp" alt="" />
            </div>
        </div>
    )

}

export default Info;