import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
// import { lightTheme, darkTheme } from 'themes/Shared';
import { SessionProvider } from 'next-auth/react';
// import { NextUIProvider } from "@nextui-org/react";
import { CommandBar } from 'components/CommandBar';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <CommandBar>
      <ThemeProvider
      defaultTheme="system"
      attribute="class"
      >
          <Component {...pageProps} />
            <Analytics />
       </ThemeProvider>
      </CommandBar>
    </SessionProvider>
    </>
  );
}
