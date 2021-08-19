import { Loading, Text } from '@geist-ui/react';
import { motion, AnimatePresence , useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Splash({isLoading=false, children}) {
    // const { scrollYProgress } = useViewportScroll()
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
            <article className="vh-100 dt w-100 bg-black">
                <div className="dtc v-mid tc white ph3 ph4-l">
                    {isLoading && isLoading &&
                        <motion.div>
                            <Loading scale={8} spaceRatio={2} />
                        </motion.div>
                    }
                    {!isLoading &&
                        <AnimatePresence>
                            {isVisible &&
                                <>
                                <motion.div
                                    initial={{ y: 32, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y:-32, opacity: 0 }}
                                    transition={{ ease: "circIn", duration: 1 }}
                                >
                                    <Text h2 i>{children}</Text>
                                </motion.div>
                                </>
                            }
                        </AnimatePresence>
                    }
                </div>
            </article>
        </>
    );
}