import Image from "next/image";
import CafeIcon from '../../public/coffee-icon.png';
import {useEffect, useState, useRef} from "react";

export default function Navbar() {
    const [logoPosition, setLogoPosition] = useState();
    const [width, setWidth] = useState();

    const menuSize = {
        fontSize: width < 516 ? '0.8rem' : '1rem'
    }

    useEffect(() => {
        window.innerWidth < 516 ? setLogoPosition('d-flex text-center') : setLogoPosition('d-flex align-items-center');
        setWidth(window.innerWidth)
    }, []);
    return (
        <nav className="p-3 bg-transparent">
          <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-8">
                  <div className={logoPosition} >
                      <Image src={CafeIcon} alt="cafe" width="34"/>
                      <p className="h4 mt-3 mx-2 text-white">Cofee Shop <span className="text-logo bold">Tia Rosa</span></p>
                  </div>
              </div>
              <div className="col-12 col-sm-4 mt-3">
                  <ul className="d-flex justify-between gap-4" >
                      <li className="">
                          <a className="menu" href="#about" style={menuSize}>Sobre nós</a>
                      </li>
                      <li className="">
                          <a className="" href="#menu" style={menuSize}>Cafés</a>
                      </li>
                      <li className="">
                          <a className="" href="#address" style={menuSize}>Endereço</a>
                      </li>
                      <li className="">
                          <a className="" href="#contact" style={menuSize}>Contato</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    );
}