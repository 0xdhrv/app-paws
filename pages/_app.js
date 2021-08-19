import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { useState } from 'react'

import 'inter-ui/inter.css'
import '../styles/tachyons.min.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('dark')
  // const switchThemes = () => {
  //   setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  // }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp