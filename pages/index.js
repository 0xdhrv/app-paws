import { Button, Image, Text, Card, Input, useInput, Avatar, Spacer } from '@geist-ui/react'
import Splash from '../components/Splash'
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Heart, HeartFill, Edit3 } from '@geist-ui/react-icons'

const randLikes = Array();
for(let i=0; i<7; i++) {
  randLikes.push(Math.floor(Math.random() * 1000)); 
}

const captions = Array();
captions.push('am i too cute?');
captions.push('hoomans stand no chance');

export default function Home() {
  const [splash, setSplash] = useState(true);
  const [like, setLike] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [saveComment, setSaveComment] = useState(false);
  const { state, setState, reset, bindings } = useInput('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const headerCaption = `Hope`

  return (
   <>
    {splash && <Splash isLoading={false}>paws.</Splash> }
    {/* <Header></Header> */}
    {!splash &&
      <Layout>
        <div className="w-100 mw7 pl3 pr1 center">
          <Card disableAutoMargin={true}>
            <motion.div
              initial={{ y: 32, opacity: 0, filter: 'blur(20px) brightness(200%)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px) brightness(100%)' }}
              transition={{ ease: "easeIn", duration: 1.6, delay: 2 }}
            >
              <Image width="435px" height="435px" src="/media/catPost1.jpg" alt="Cat"/>
            </motion.div>
            <Card.Footer className="db flex-column">
              <div className="fl w-100 tl pv1">
                <b>cuteKitty:</b> {captions[0]}         
              </div>
              <div className="w-100">
                <div className="fl w-50 tl">
                  <Button className="no-border" onClick={() => like ? setLike(false) : setLike(true)} iconRight={like ? <><HeartFill color="red" /> {parseInt(randLikes[0])+1} likes </> : <><Heart /> {parseInt(randLikes[0])} likes</>} auto scale={2/3} />
                </div>
                <div className="fl w-30 tc">
                  <Button className="no-border" onClick={() => showComment ? setShowComment(false) : setShowComment(true)} iconRight={showComment ? <><Edit3 color="yellow" fill="yellow" /> Comment</> : <><Edit3 /> Comment</>} auto scale={2/3} />         
                </div>
              </div>
              {showComment && 
                <div className="cf w-100">
                  <Spacer y={1} />
                  <Input placeholder="comment here" className="w-60" {...bindings} onChange={(e) => setState(e.target.value)}/>
                  <Button auto type="secondary" scale={2/3} className="w-20" onClick={() => {setSaveComment(true); setShowComment(false)}}>save</Button>
                  <Button auto scale={2/3}  className="w-20" ml="20px" onClick={() => reset()}>clear</Button>

                </div>
              }
              {saveComment && state && !showComment &&
                <div className="cf w-100">
                  <Spacer y={1} />
                  <Avatar url={'/media/catHeader.jpg'} className="di w-20" />
                  <Text className="di w-80 pa2 v-mid">{state}</Text>
                </div>
              }
              
            </Card.Footer>
          </Card>
          <Spacer y={3} />
          <Card disableAutoMargin={true}>
            <motion.div
              initial={{ y: 32, opacity: 0, filter: 'blur(20px) brightness(200%)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px) brightness(100%)' }}
              transition={{ ease: "easeIn", duration: 1.6, delay: 2 }}
            >
              <Image width="435px" height="435px" src="/media/catPost2.jpg" alt="Cat"/>
            </motion.div>
            <Card.Footer className="db flex-column">
              <div className="fl w-100 tl pv1">
                <b>bitchcat:</b> {captions[1]}         
              </div>
              <div className="w-100">
                <div className="fl w-50 tl">
                  <Button className="no-border" onClick={() => like ? setLike(false) : setLike(true)} iconRight={like ? <><HeartFill color="red" /> {parseInt(randLikes[1])+1} likes </> : <><Heart /> {parseInt(randLikes[1])} likes</>} auto scale={2/3} />
                </div>
                <div className="fl w-30 tc">
                  <Button className="no-border" onClick={() => showComment ? setShowComment(false) : setShowComment(true)} iconRight={showComment ? <><Edit3 color="yellow" fill="yellow" /> Comment</> : <><Edit3 /> Comment</>} auto scale={2/3} />         
                </div>
              </div>
              {showComment && 
                <div className="cf w-100">
                  <Spacer y={1} />
                  <Input placeholder="comment here" className="w-60" {...bindings} onChange={(e) => setState(e.target.value)}/>
                  <Button auto type="secondary" scale={2/3} className="w-20" onClick={() => {setSaveComment(true); setShowComment(false)}}>save</Button>
                  <Button auto scale={2/3}  className="w-20" ml="20px" onClick={() => reset()}>clear</Button>

                </div>
              }
              {saveComment && state && !showComment &&
                <div className="cf w-100">
                  <Spacer y={1} />
                  <Avatar url={'/media/catHeader.jpg'} className="di w-20" />
                  <Text className="di w-80 pa2 v-mid">{state}</Text>
                </div>
              }
              
            </Card.Footer>
          </Card>
        </div>
        <Spacer y={3} />
        <div className="vh-100 w-100 tc">
          <Text h1>stay tuned</Text>
        </div>
        <div className="vh-100 w-100 tc">
          <Text h1>stay tuned</Text>
        </div>
        <div className="vh-100 w-100 tc">
          <Text h1>stay tuned</Text>
        </div>
        <div className="vh-100 w-100 tc">
          <Text h1>stay tuned</Text>
        </div>
      </Layout>
    }
   </>
  )
}
