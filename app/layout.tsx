import type { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#000000', backgroundColor: '#ffffff', margin: 0 }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px 46px' }}>
          <Link href="/" style={{ color: '#000000', textDecoration: 'none' }}>home</Link>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <Link href="/about" style={{ color: '#000000', textDecoration: 'none' }}>about</Link>
            <Link href="/contact" style={{ color: '#000000', textDecoration: 'none' }}>contact</Link>
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
