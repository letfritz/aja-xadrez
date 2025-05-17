"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#C6AF78]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
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
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <Image
              src="/images/logo-background-transparent.png"
              alt="AJA Chess Academy"
              width={300}
              height={100}
              className="h-40 w-auto object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-bold">
              Academia de Jogadores Ambiciosos
            </h1>
            <p className="text-2xl md:text-2xl font-medium ">
              Treine cálculo com metodologia soviética e mestres que já formaram
              grandes jogadores!
            </p>
          </div>

          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            onClick={() =>
              window.open("https://pay.hotmart.com/seu-link-aqui", "_blank")
            }
          >
            Comece Agora
          </Button>
        </div>
      </section>

      {/* Por que a Academia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por que Nossa Academia?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Metodologia Comprovada
                </h3>
                <p>
                  Nossa metodologia única combina teoria e prática para
                  resultados rápidos e duradouros.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Mestres Renomados
                </h3>
                <p>
                  Aprenda com três grandes mestres internacionais com vasta
                  experiência em competições.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Suporte Personalizado
                </h3>
                <p>
                  Receba feedback individual e acompanhamento personalizado do
                  seu progresso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mestres Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nossos Mestres
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mestre João Silva",
                title: "Grande Mestre Internacional",
                description:
                  "Campeão brasileiro por 5 vezes e treinador de campeões nacionais.",
                image: "/images/mestre1.jpg",
              },
              {
                name: "Mestre Maria Santos",
                title: "Mestre Internacional Feminino",
                description:
                  "Representante olímpica e especialista em estratégias de meio-jogo.",
                image: "/images/mestre2.jpg",
              },
              {
                name: "Mestre Pedro Costa",
                title: "Mestre Internacional",
                description:
                  "Especialista em finais e autor de livros sobre xadrez.",
                image: "/images/mestre3.jpg",
              },
            ].map((mestre, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={mestre.image}
                      alt={mestre.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{mestre.name}</h3>
                  <p className="text-blue-600 mb-2">{mestre.title}</p>
                  <p className="flex-1">{mestre.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que Nossos Alunos Dizem
          </h2>
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    name: "Carlos Oliveira",
                    rating: "5/5",
                    text: "A metodologia dos mestres transformou completamente meu jogo. Em 6 meses, subi mais de 300 pontos no rating.",
                  },
                  {
                    name: "Ana Beatriz",
                    rating: "5/5",
                    text: "As aulas são incríveis! Os mestres são muito didáticos e sempre disponíveis para tirar dúvidas.",
                  },
                  {
                    name: "Pedro Santos",
                    rating: "5/5",
                    text: "O melhor investimento que fiz no meu xadrez. A evolução foi notável em poucos meses.",
                  },
                  {
                    name: "Mariana Costa",
                    rating: "5/5",
                    text: "A estrutura do curso é perfeita, desde o básico até o avançado. Recomendo muito!",
                  },
                ].map((depoimento, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-1">
                        <p className="text-lg mb-4 flex-1">
                          "{depoimento.text}"
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <p className="font-semibold">{depoimento.name}</p>
                          <p className="text-yellow-500">{depoimento.rating}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C6AF78] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece Sua Jornada no Xadrez
          </h2>
          <p className="text-xl mb-8">
            Junte-se a centenas de alunos que já transformaram seu jogo
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            onClick={() =>
              window.open("https://pay.hotmart.com/seu-link-aqui", "_blank")
            }
          >
            Inscreva-se Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>
              © 2024 AJA - Academia de Jogadores Ambiciosos. Todos os direitos
              reservados.
            </p>
            <a
              href="https://instagram.com/academiaxadrez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-500"
            >
              <Instagram />
              <span>@academiaxadrez</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
