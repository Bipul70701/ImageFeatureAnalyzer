// frontend/pages/_app.js
import '../styles/globals.css';
import { Poppins, Lato } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} ${lato.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}