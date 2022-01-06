import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import axios from 'axios';
import UserProvider from '../component/common/UserProvider';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider store={store}><UserProvider><Component {...pageProps} /></UserProvider></Provider>)
}

export default MyApp
