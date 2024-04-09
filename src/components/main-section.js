import Navbar from "@/components/navbar";
import Link from "next/link";
import About from "@/components/about";
import {useEffect, useState} from "react";
export default function MainSection(){
    const [width, setWidth] = useState();

    const div1Style = {
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/06/06/10/13/coffee-beans-3457587_1280.jpg")`,
        height: '70vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    }
    const div2Style = {
        backgroundColor: 'rgba(0, 0,0, 0.7)',
        height: '70vh',
        color:'white',
    }

    const fontSize = {
        fontSize: width < 516 ? '0.7rem':'1rem',
        mainText : {
            fontSize: width < 516 ? '1.5rem':'3rem',
        }
    }

    const buttonSize ={
        width: width < 516 ? '100px':'200px',
        height: width < 516 ? '20px':'40px',
        fontSize: width < 516 ? '0.7rem':'1rem',
    }

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <>
            <div className="shadow-sm" style={div1Style}>
                <div style={div2Style}>
                    <Navbar/>
                    <div className={`d-flex justify-content-center ${width < 516 ? 'h-50': 'h-75 align-items-center '} text-center`}>
                        <div className={'w-50 h-50'}>
                            <p className="display-3 text-center" style={fontSize.mainText}><strong>O melhor café de Brasília</strong></p>
                            <p className="mt-5" style={fontSize}>
                                Bem-vindo ao Coffee Shop da Tia Rosa, onde cada xícara é uma experiência calorosa e acolhedora.
                                Localizado no coração da cidade, nosso café encanta os clientes com o aroma sedutor do café fresco e uma atmosfera aconchegante.
                            </p>
                            <button className="main-button mb-3" style={buttonSize}><Link href="#about" className="nav-link">Saber mais</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}