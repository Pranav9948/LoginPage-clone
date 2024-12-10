
import "@/assests/styles/globals.css";
import { Roboto } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})


export const metadata = {
  title: "Travo Register Page",
  description: "Designed Travo register Page with form Validations",
};

export default async function RootLayout({ children }) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (

    <html lang={locale} className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased min-h-screen bg-background font-sans text-sm text-normal`}
      >
        <NextIntlClientProvider messages={messages}>
      
          {children}
          </NextIntlClientProvider>
          <Toaster />
        </body>
    </html>
  );
}
