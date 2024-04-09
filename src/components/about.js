
import {useEffect, useState} from "react";

export default function About(){
    const [width, setWidth] = useState();
    const fontSize = {
        fontSize: width < 516 ? '0.6rem': '1.1rem',
    }
    useEffect(() => {
       setWidth(window.innerWidth)
    }, []);
    return (
        <div className="container-fluid" id="about">
                <p className="display-6 text-center mt-4">Sobre Nós</p>
                <div className="row mt-3">
                    <div className="col-12 col-sm-6 ">
                        <div className={width < 516 ? "d-flex p-3 justify-content-center":"d-flex p-3 justify-content-end"}>
                            <div className="display-6">1.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize}><strong>Ambiente Acolhedor:</strong> Ao entrar no café, os
                                clientes são recebidos por uma atmosfera acolhedora, com música suave, decoração encantadora
                                e assentos confortáveis, tornando-o o local ideal para relaxar ou trabalhar.
                            </div>
                        </div>
                        <div className={width < 516 ? "d-flex p-3 justify-content-center":"d-flex p-3 justify-content-end"}>
                            <div className="display-6">2.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize} ><strong>Equipe Amigável:</strong> Nossa equipe é composta por
                                baristas simpáticos e experientes que estão sempre prontos para receber os clientes com um
                                sorriso caloroso e ajudá-los a escolher a bebida perfeita de acordo com suas preferências.
                            </div>
                        </div>
                        <div className={width < 516 ? "d-flex p-3 justify-content-center":"d-flex p-3 justify-content-end"}>
                            <div className="display-6" >3.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize}><strong>Produtos Locais:</strong> NNosso café se orgulha de apoiar produtores locais, utilizando grãos de café de fazendas regionais e oferecendo uma variedade de produtos de padarias locais e fornecedores artesanais.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div
                            className={width < 516 ? "d-flex p-3 justify-content-center" : "d-flex p-3 justify-content-start"}>
                            <div className="display-6">4.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize}><strong>Opções Saudáveis:</strong>
                                Além das delícias indulgentes, também oferecemos opções saudáveis, como smoothies de
                                frutas frescas, saladas e opções de café com leite alternativo para atender às
                                necessidades de todos os clientes.
                            </div>
                        </div>
                        <div
                            className={width < 516 ? "d-flex p-3 justify-content-center" : "d-flex p-3 justify-content-start"}>
                            <div className="display-6">5.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize}><strong>Wi-Fi Grátis:</strong>
                                Para aqueles que desejam trabalhar ou simplesmente navegar na internet enquanto
                                desfrutam de sua bebida, oferecemos Wi-Fi gratuito e confiável em todo o café.
                            </div>
                        </div>
                        <div
                            className={width < 516 ? "d-flex p-3 justify-content-center" : "d-flex p-3 justify-content-start"}>
                            <div className="display-6">6.</div>
                            <div className="mx-3 mt-2 w-50" style={fontSize}><strong>Compromisso com a Sustentabilidade: </strong>
                                Nosso café está comprometido com práticas sustentáveis, utilizando copos e utensílios biodegradáveis, incentivando a reciclagem e buscando constantemente maneiras de reduzir nosso impacto ambiental.
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}