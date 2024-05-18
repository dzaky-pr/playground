'use client';

import './globals.css';
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Theme>
          <Providers>{children}</Providers>
        </Theme>
      </body>
    </html>
  );
}
