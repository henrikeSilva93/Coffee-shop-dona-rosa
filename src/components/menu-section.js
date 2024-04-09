import MenuItem from "@/components/menu-item";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import Affogato from '../../public/Affogato.jpg'
import Americano from '../../public/americano.jpg'
import Cappuccino from '../../public/Cappuccino.webp'
import Expresso from '../../public/expresso.jpg'
import FlatWhite from '../../public/flatwhite.jpg'
import Mocha from '../../public/mocha.jpg'

import 'swiper/css';
import SwipeButton from "@/components/swiperButton";
import {useState} from "react";

export default function MenuSection(){
 const [selectedSlide, setSelectedSlide] = useState(0);
 function activeSlide(index){
        return selectedSlide === index;
 }
    return(
        <>
            <div
                className="container-fluid py-2 text-white mt-5 flex-column align-items-center justify-content-end justify-content-center"
                style={{backgroundColor: '#663300'}} id="menu">
                <p className="text-center display-6 mb-5">Confira nossos cafés especiais</p>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={(slide) => setSelectedSlide(slide.activeIndex)}
                >
                    <SwiperSlide>
                        <MenuItem image={Expresso} title="Café Expresso">
                            <p>Uma dose concentrada de café preparada através da infusão de água quente sob pressão
                                através de grãos de café finamente moídos.
                                O resultado é uma bebida encorpada, intensa e cheia de sabor, com uma camada de crema
                                dourada no topo.</p>
                        </MenuItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuItem image={Cappuccino} title="Cappuccino">
                            <p>
                                Uma clássica combinação de espresso, leite vaporizado e espuma de leite,
                                resultando em uma textura cremosa e uma explosão de sabor.
                                A proporção balanceada de café e leite,
                                coberta por uma camada de espuma, proporciona uma experiência indulgente em cada gole.
                            </p>
                        </MenuItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuItem image={Americano} title="Americano">
                            <p>
                                Um espresso suavizado com água quente, criando uma bebida mais leve sem comprometer a riqueza e complexidade do café.
                                Ideal para quem busca uma experiência mais suave e refrescante.
                            </p>
                        </MenuItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuItem image={Mocha} title="Mocha">
                            <p>
                                Uma deliciosa mistura de espresso, leite vaporizado, chocolate e chantilly, criando uma experiência indulgente e reconfortante.
                                A combinação de café encorpado e chocolate cremoso faz deste uma escolha perfeita para os amantes de sabores doces.
                            </p>
                        </MenuItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuItem image={Affogato} title="Affogato">
                            <p>
                                Uma indulgente sobremesa italiana que combina uma bola de sorvete com um shot de espresso quente, resultando em uma harmonia deliciosa de sabores contrastantes.
                                A mistura de café quente e gelado cria uma experiência única e luxuosa para o paladar.
                            </p>
                        </MenuItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MenuItem image={FlatWhite} title="Flat White">
                            <p>
                                Um espresso suave, misturado habilmente com leite vaporizado para criar uma textura aveludada e um sabor equilibrado.
                                A ausência de espuma extra permite que os sabores do café se destaquem,
                                proporcionando uma experiência delicada e satisfatória.
                            </p>
                        </MenuItem>
                    </SwiperSlide>

                    <div className="py-3  d-flex justify-content-center gap-1 mb-3 mt-5 overflow-auto">
                        <SwipeButton slideTo={0} onClick={() => setSelectedSlide(0)} active={activeSlide(0)}>Expresso</SwipeButton>
                        <SwipeButton slideTo={1} onClick={() => setSelectedSlide(1)} active={activeSlide(1)}>Cappucino</SwipeButton>
                        <SwipeButton slideTo={2} onClick={() => setSelectedSlide(2)} active={activeSlide(2)}>Americano</SwipeButton>
                        <SwipeButton slideTo={3} onClick={() => setSelectedSlide(3)} active={activeSlide(3)}>Mocha</SwipeButton>
                        <SwipeButton slideTo={4} onClick={() => setSelectedSlide(4)} active={activeSlide(4)}>Affogato</SwipeButton>
                        <SwipeButton slideTo={5} onClick={() => setSelectedSlide(5)} active={activeSlide(5)}>Flat White</SwipeButton>
                    </div>
                </Swiper>
                <p className="lead text-center mt-5 mb-5">Venha conferir nossos salgados e bolos feitos na hora!</p>
            </div>
        </>
    );
}