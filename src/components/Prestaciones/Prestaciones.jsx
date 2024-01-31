import React, { useState } from 'react';
import './Prestaciones.css';
import Dropdown from './Dropdow';

const Prestaciones = () => {

    return ( 
        <div className="mainContinerPrestaciones">
            <h1 className="prestacionesTitle">Acesso a estas prestações com o seu documento de nacionalidade brasileira</h1>
            <div className='prestacionesContainer'>

                    <Dropdown title={'Poupança a curto prazo'} text={'A tarifação em camadas é uma forma de contabilizar o custo da eletricidade; de acordo com este método, a lógica de cobrança é que o custo aumenta à medida que o consumo de eletricidade aumenta. Se, por algum motivo, o seu consumo ultrapassar os 900 kWh/mês, o custo mais do que duplica! Em números, isso traduz-se em: a tarifa passa de R$0,16/kWh para R$0,33/kWh.Aqui é onde a energia solar entra, pois, uma vez instalado o seu sistema, começa a poupança. Embora existam muitas possibilidades, a maioria dos proprietários opta por um empréstimo inicial de R$0, para que não paguem nada adiantado. Mesmo com o pagamento do empréstimo, os proprietários podem começar a pagar menos todos os meses!Resumindo, a instalação de energia solar pode resultar numa conta mensal mais baixa, uma vez que substitui os níveis de gastos com eletricidade por tarifas mais baixas e fixas.'} ></Dropdown>

                    <Dropdown title={'Poupança a longo prazo'} text={'Comummente, os fornecedores de energia fazem aumentos anuais de 6,0% nos custos. Já pensou na quantia astronómica que o preço será daqui a 20 anos?Bem, pode esquecer isso!Com energia solar, para além de possuir um ativo que produz eletricidade valiosa, pode garantir tarifas de energia fixas durante décadas. Em média, um sistema de energia solar paga-se em apenas 5 a 7 anos. Depois desse período, pode começar a produzir eletricidade praticamente gratuita.Isso acontece porque a energia se acumula ao longo do tempo, e no final, o resultado pode ser poupar dezenas de milhares de reais ao longo de 20 anos.'}></Dropdown>

                    <Dropdown title={'Aumento do valor da casa acumulado'} text={'Estudos realizados pelo Laboratório de Ciências Lawrence levaram a uma descoberta interessante: "Os sistemas solares fotovoltaicos em uma casa aumentaram constantemente o seu valor durante os processos de venda, com uma média de R$ 4,00 por watt".A importância desse dado o convencerá a instalar um sistema de energia solar em sua casa:Antes da aplicação do crédito fiscal, nossos projetos variam em média de R$ 4,50 por watt a R$ 5,00 por watt. Isso oferece a possibilidade de aumentar o valor da sua casa em R$ 4,00 por watt. No final, exceto por uma pequena porcentagem, o custo do projeto de instalação é recuperado com o aumento do patrimônio.Uma vantagem adicional é que, se você quiser vender a casa, este sistema pode ajudar a posicionar a propriedade como uma opção mais atraente.'}></Dropdown>
            </div>
        </div>
    )
}

export default Prestaciones;

