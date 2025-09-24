import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import CookieConsent from '../ui/cookie-consent';
import AOSProvider from '../providers/AOSProvider';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AOSProvider>
      <div className="layout">
        <Header />
        <main className="layout_main">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </AOSProvider>
  );
}
