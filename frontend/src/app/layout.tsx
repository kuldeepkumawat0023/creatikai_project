import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/backTotop";
import { Lato } from "next/font/google";
 // ✅ use the correct file name and alias import

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "CREATIK AI",
  description: "AI-driven business solutions platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-gray-50`}>
       
        
          <Header />
          <BackToTop />
          <main className="min-h-screen">{children}</main>
          <Footer />
      
      </body>
    </html>
  );
}
