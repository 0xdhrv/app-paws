import { Progress, Text } from '@geist-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
    const { scrollYProgress } = useViewportScroll()
    const scaleC = useTransform(scrollYProgress, [0, 1], [-45, 45]);
    return(
        <>
            <header className="db bg-black-70 pv3 w-100 fixed bb b--dark-gray no-copy" style={{ zIndex: 999, backdropFilter: 'blur(4px)' }}>
                <nav> 
                    <motion.div 
                        animate={{ color: ["##FF725C", "#9EEBCF", "#96CCFF", "#FBF1A9"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }} className="fl w-20 tr">
                        <Text h3>✿</Text>
                    </motion.div>
                    <motion.div className="fl w-60 tc">
                        <Text h3>paws.</Text>
                    </motion.div>
                    <div className="fl w-20 tl">
                        <Text h3>ฅ</Text>
                    </div>
                </nav>
                {/* <nav className="w-100">
                    <motion.div 
                        animate={{ color: ["##FF725C", "#9EEBCF", "#96CCFF", "#FBF1A9"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }} className="fl w-20 tc">
                        <Text h3>✿</Text>
                    </motion.div>
                    <div className="fl w-20 tc">
                        <motion.div>
                            <Text h3>▲</Text>
                        </motion.div>
                    </div>
                    <div className="fl w-20 tc">
                        <Text h3>ᆽ</Text>
                    </div>
                    <div className="fl w-20 tc">
                    <motion.div>
                            <Text h3>▲</Text>
                        </motion.div>
                    </div>
                    <motion.div style={{ rotateZ: scaleC }} className="fl w-20 tc">
                        <Text h3>ฅ</Text>
                    </motion.div>
                </nav>
                <nav className="w-100">
                    <motion.div style={{ scale: 1.25 }} className="fl w-100 tc">
                        <Text h3>_/\/\_</Text>
                    </motion.div>
                </nav> */}
            </header>
        </>
    );
}