import { motion } from 'framer-motion';
import { Page } from '@geist-ui/react';
import Header from './Header';
import { useEffect, useRef } from 'react';
import useWindowSize from '../lib/useWindowSize'


export default function Layout({children}) {
    const size = useWindowSize();
    const app = useRef();
    const scrollContainer = useRef();

    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    useEffect(() => {
        setBodyHeight();
    }, [size.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
        }px`;
    };

    const skewScrolling = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const skew = velocity * 7.5;

        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

        requestAnimationFrame(() => skewScrolling());
    };
    return(
        <>
            <motion.div 
                ref={app}
                initial={{ x: 32, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1.6 }}
                // className="debug"
                // style={{top: 0}}
                >
                    <Header></Header>
                    <main ref={scrollContainer} className="center mw8 pt5">
                        <div className="pt5">
                            {children}
                        </div>
                    </main>
            </motion.div>
        </>
    );
}