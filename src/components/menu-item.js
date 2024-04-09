import Image from "next/image";
import {Children, useEffect, useState} from "react";

export default function MenuItem({image, title, children}){
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return(
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-6 col-sm-6 d-flex justify-content-end">
                    <Image src={image} alt="expresso" width={width < 516? 180:480} height={width < 516? 180:320}/>
                </div>
                <div className="col-5 col-sm-3 h-25 ">
                    <p style={{fontSize: width < 516 ? '1.5rem' : '3.5rem', fontWeight:'bold'}}>{title}</p>
                    <div style={{fontSize: width < 516 ? '0.6rem' : ''}}>{children}</div>
                </div>
            </div>
        </div>
    );
}