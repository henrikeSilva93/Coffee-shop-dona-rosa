import Link from "next/link";
import {useEffect, useState} from "react";

export default function ContactSection(){
    const [width, setWidth] = useState();
   const fontSize = {
         fontSize: width < 516 ? '0.6rem': '1.1rem',
    }
    const mainText = {
        fontSize: width < 516 ? '1.2rem': '1.1rem'
    }

    const mailStyle = {
       textDecoration:'none',
        color:'#B68C4D',
        fontWeight:'bold',
        fontSize: width < 516 ? '0.6rem': '1.1rem',
   }

   const containerStyle = {
       height:'30vh',
       width:'100%',
       marginTop:'10rem'
   }

   const buttonStyle = {
       width: width < 516 ? '100px': '280px',
       height: width < 516 ? '20px': '40px',
       marginTop: '30px',
       fontSize: width < 516 ? '0.6rem': '1.1rem'
   }

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);
    return(
        <div className="container-fluid" style={containerStyle} id="contact">
            <div className="row">
                <div className="col-12 col-sm-6 w-50 d-flex flex-column align-items-end px-4" style={{borderRight:'2px solid #B68C4D'}}>
                    <p className="display-6" style={mainText}>Envie-nos uma mensagem</p>
                    <p style={fontSize}>Adoraríamos ouvir o que tem a dizer! </p>
                    <p style={fontSize}>Nos envie qualquer Dúvida Sugestão ou Elogio</p>
                    <a style={mailStyle} href="mailto:aquilahenrique.silva@gmail.com">aquilahenrique.silva@gmail.com</a>
                </div>
                <div className="col-12 col-sm-6 w-50 px-4">
                    <p className="display-6"  style={mainText}>Trabalhe conosco</p>
                    <p style={fontSize}>Venha fazer parte do nosso time!</p>
                    <Link href="https://www.linkedin.com/in/aquila-henrique-da-silva-faria-270556176/" target="_blank">
                        <button style={buttonStyle} className="main-button">Conferir vagas</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}