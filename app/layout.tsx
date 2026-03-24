import type { ReactNode } from 'react';
import Link from 'next/link';
import NavLink from './components/NavLink';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#000000', backgroundColor: '#ffffff', margin: 0 }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px 46px' }}>
          <NavLink href="/">anindhya<br/>kushagra.</NavLink>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <NavLink href="/about">about</NavLink>
            <NavLink href="/contact">contact</NavLink>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content */}
        </footer>
      </body>
    </html>
  );
}
