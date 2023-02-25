import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GameProvider } from '../providers/game'

function MyApp({ Component, pageProps }: any) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  )
}

export default MyApp
