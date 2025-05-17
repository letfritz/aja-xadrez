"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#C6AF78]" />
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C6AF78] to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Image
              src="/images/logo-background-transparent.png"
              alt="AJA Chess Academy"
              width={300}
              height={100}
              className="h-24 md:h-40 w-auto object-contain"
            />
            <h1 className="text-3xl md:text-6xl font-bold">
              Academia de Jogadores Ambiciosos
            </h1>
            <p className="text-lg md:text-2xl font-medium">
              Treine cálculo com metodologia soviética e mestres que já formaram
              grandes jogadores!
            </p>
          </div>

          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-base md:text-lg"
            onClick={() =>
              window.open("https://pay.hotmart.com/seu-link-aqui", "_blank")
            }
          >
            Comece Agora
          </Button>
        </div>
      </section>

      {/* Por que a Academia Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Por que Nossa Academia?
          </h2>
          <p className="text-center mb-8 md:mb-12 text-muted-foreground text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  Metodologia Comprovada
                </h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  Exercícios Práticos
                </h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  Suporte Personalizado
                </h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mestres Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Quem Somos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Felipe El Debs",
                title: "Grande Mestre",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/images/mestre.svg",
              },
              {
                name: "Diego Di Berardino",
                title: "Mestre Internacional",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/images/mestre.svg",
              },
              {
                name: "Alvaro Aranha",
                title: "Mestre FIDE",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/images/mestre.svg",
              },
            ].map((mestre, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardContent className="p-4 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                      <Image
                        src={mestre.image}
                        alt={mestre.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {mestre.name}
                      </h3>
                      <p className="text-blue-600 text-sm md:text-base">
                        {mestre.title}
                      </p>
                    </div>
                  </div>
                  <p className="flex-1 text-sm md:text-base">
                    {mestre.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#C6AF78] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Comece Sua Jornada no Xadrez
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-base md:text-lg"
            onClick={() =>
              window.open("https://pay.hotmart.com/seu-link-aqui", "_blank")
            }
          >
            Inscreva-se Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-sm md:text-base text-center md:text-left">
              © {new Date().getFullYear()} AJA - Academia de Jogadores
              Ambiciosos. Todos os direitos reservados.
            </p>
            <a
              href="https://www.instagram.com/xadrezaja/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-500 text-sm md:text-base"
            >
              <Instagram className="w-5 h-5" />
              <span>@xadrezaja</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
