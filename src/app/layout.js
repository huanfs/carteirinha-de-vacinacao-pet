import { Pacifico, Roboto } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carteirinha de vacinação pet",
  description: "GGerenciador de vacinas para pets",
  authors: [{name: "Huan Figuereido", url: "https://github.com/huanfs"}],
  creator: "Huan figuereido",
  keywords: [
    "Vacina",
    "Pet",
    "Animal",
    "Estimação",
    "Carteirinha",
    "Saúde",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${pacifico.className} ${roboto.className}`}>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
