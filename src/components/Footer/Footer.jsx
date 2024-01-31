import './Footer.css'

const Footer = () => {

    return (

        <div>
            <p className='notice'>Este site foi criado por uma agência de publicidade com o propósito de promover o site da empresa SolLivre Brasil (www.solbr.com.br). A agência de publicidade pode receber compensações da SolLivre Brasil por cliques ou vendas relacionadas a este site. A agência de publicidade é uma parceira da SolLivre Brasil na aquisição de clientes. A agência de publicidade recebe comissões por cliques no conteúdo deste site.</p>
            <footer className='footerStyle'>
                <p></p>
                <p>SolLivre Brasil | Rua 123, Nº 45 - Sala 201 | Edifício Solar | (21) 9078-3459 | info@solbr.com.br</p>
                <a style={{textDecoration:'underline'}}> <b>Aviso de privacidade</b></a>
            </footer>
        </div>

    )
}

export default Footer;