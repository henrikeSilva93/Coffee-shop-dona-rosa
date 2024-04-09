import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";

export default function SwipeButton({children, slideTo, active}){
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
        console.log(active)
    }, []);
    const swiper = useSwiper();
    return <button className={ active ? 'main-button-active' : 'main-button'} style={{fontSize: width < 516 ? '0.6rem': '0.8rem'}} onClick={() => swiper.slideTo(slideTo)}>{children}</button>;

}