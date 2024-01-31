
import './Consumo.css'

const Consumo = () => {
    return (
        <div className="mainContainerConsumo">
            <h1 style={{textAlign: 'center', margin:'20px', color:'#505050'}}> Brasileiro, regozije-se! Este benefício é para si! Gere R$4000 com apenas 2 painéis</h1>
            <br />
            <div className='consumoContainer'>
                <div className='consumoInfo'>
                    <h3 className='consumoSubtitle'>Em média, um lar no Brasil consome 900 kWh/mês. Isso significa que pode começar a ter mais e melhor energia!</h3>
                    <br />
                    <p className='consumoText'>Não acha extraordinário? Pela primeira vez, a energia será um ganho para si, não um gasto mensal (agora apenas verá MAIS e MAIS!).
                    <br />
                    Sem dúvida, parece extraordinário, pois a norma é que a energia seja mais um gasto do que um investimento. No entanto, as contas mostrarão que esta é uma possibilidade real:
                    <br />
                    Só precisa ser brasileiro e ter nascido entre 1941 e 1991!
                    <br />
                    É proprietário de uma casa e acha esta informação interessante? Continue, vamos explicar-lhe em detalhe as principais razões pelas quais investir em energia solar pode abrir-lhe a porta para uma fonte adicional de rendimento.
                    <br />
                    No final, verá que isto é real e que quase todos os brasileiros podem candidatar-se a este grande benefício.</p>
                </div>
                <div className='flexContainerConsumo'>
                    <div className='consumoGrid'>
                        <h3 style={{textAlign:'center'}}>CONSUMO</h3>
                        <h3 style={{textAlign:'center'}}>NÚMERO DE PAINÉIS</h3>
                        <div className="consumoColumn">
                            <p>Até 2.000 kWh</p>
                        </div>
                        <div className="consumoColumn">
                            <p>2-4</p>
                        </div>
                        <div className="consumoColumn">
                            <p>2.000 - 5.000 kWh</p>
                        </div>
                        <div className="consumoColumn">
                            <p>5-7</p>
                        </div>
                        <div className="consumoColumn">
                            <p>Mais de 5.000 kWh</p>
                        </div>
                        <div className="consumoColumn">
                            <p>A partir de 7</p>
                        </div>
                </div>
                <div>
                    <br />
                    <h1 className='consumoSubtitle' style={{textAlign:'justify'}}>Obrigado por se informar conosco, estamos confiantes de que esta informação o convencerá a instalar energia solar na sua casa.</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Consumo;
