import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'WoodlandKB',
  description: 'A modern Next.js app with a navbar',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-0">{children}</main>

      </body>
    </html>
  );
}
