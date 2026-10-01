import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kellén Raimundo | Desenvolvedora Backend",
  description: "Desenvolvedora backend em Sapiranga, RS. Node.js, NestJS, TypeScript, APIs RESTful, microsserviços e soluções IoT. Conheça minha trajetória e habilidades.",
  openGraph: { title: "Kellén Raimundo | Desenvolvedora Backend", description: "Conectando sistemas. Construindo soluções. Conheça minha trajetória em desenvolvimento backend.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
