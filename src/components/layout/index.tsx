import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import CookieConsent from '../ui/cookie-consent';
import AOSProvider from '../providers/AOSProvider';
// import CustomCursor from '../ui/custom-cursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AOSProvider>
      <div className="layout">
        {/* <CustomCursor /> */}
        <Header />
        <main className="layout_main">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </AOSProvider>
  );
}
