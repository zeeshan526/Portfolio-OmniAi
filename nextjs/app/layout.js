import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NetworkCursor from '@/components/NetworkCursor';

const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-grotesk' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-inter' });

export const metadata = {
  title: 'Team OmniAI — We find the problem. Then we build the fix.',
  description: 'Cross-functional team solving business growth problems with AI, engineering, design, and marketing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body>
        <NetworkCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
