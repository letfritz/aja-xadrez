"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Target } from "lucide-react";
import { TestimonialsSection } from "../../components/testimonials-section";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[25vh] flex items-center justify-center text-white overflow-hidden">
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
        <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
            
            {/* Logo */}
            <Image
            src="/images/logo-background-transparent.png"
            alt="AJA Chess Academy"
            width={300}
            height={100}
            className="h-16 md:h-28 w-auto object-contain"
            />

            {/* Texto e botão */}
            <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-2xl md:text-4xl font-medium">
                Ganhando com 1.e4!
            </h1>
            <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-base md:text-lg self-center"
                onClick={() =>
                window.open(
                    "https://hotmart.com/pt-br/marketplace/produtos/ganhando-com-1-e4/Y101233420D",
                    "_blank"
                )
                }
            >
                Adquira o Curso
            </Button>
            </div>
            
        </div>
        </div>

      </section>

      {/* Por que a Academia Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            {/* Você pode colocar um título geral aqui, se quiser */}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Texto à esquerda */}
            <div className="text-left">
                <p className="mb-8 md:mb-12 text-muted-foreground text-base md:text-lg">
                O novo curso da <span className="font-bold text-[#C6AF78]">AJA Xadrez</span>, 
                <span className="font-bold text-[#C6AF78]"> Ganhando com 1.e4!</span> É o nosso primeiro curso de abertura 
                e tem como ideia que vocês tenham um repertório completo e confiável para enfrentar todas as defesas 
                possíveis das pretas. Com <span className="font-bold text-[#C6AF78]">sugestões práticas</span> evitando 
                que precisem ter uma memória fora do comum para assimilar variantes e com planos claros e intuitivos, o 
                nosso repertório é <span className="font-bold text-[#C6AF78]">ideal para o jogador que quer evoluir </span> 
                sem ter que gastar a maior parte do seu tempo de estudo com as aberturas.
                <br className="hidden md:block" /><br className="hidden md:block" />
                O curso é composto por uma apresentação do repertório mostrando as linhas sugeridas e 
                <span className="font-bold text-[#C6AF78]"> 18 vídeos teóricos curtos</span>, onde o jogador aprenderá o 
                essencial para poder aplicar o nosso repertório na prática.
                <br className="hidden md:block" /><br className="hidden md:block" />
                Os vídeos serão suficientes para a grande maioria dos jogadores até 1900 FIDE ou até 2200 no online. Para 
                os jogadores mais avançados ou para os que quiserem se aprofundar mais no material, 
                <span className="font-bold text-[#C6AF78]"> disponibilizamos arquivos teóricos</span> em pgn e pdf com análises 
                mais detalhadas e complementamos o material com <span className="font-bold text-[#C6AF78]">30 partidas 
                modelo do repertório sugerido</span> para o aluno entender como as posições funcionam na prática e 
                analisar partidas completas.
                <br className="hidden md:block" /><br className="hidden md:block" />
                Temos firme convicção que esse repertório trará ótimos resultados para o jogador que quer melhorar sua 
                performance nos torneios, ou mesmo simplesmente melhorar seus resultados na internet ou contra os amigos!
                </p>
            </div>
            {/* Coluna direita com vídeo e conteúdo em coluna */}
            <div className="flex flex-col gap-8">
                
                {/* Vídeo em cima */}
                <div>
                <h2 className="text-3xl font-semibold mb-4 text-center text-[#C6AF78]">
                    Assista à Introdução do Curso
                </h2>
                <div className="w-full max-w-xl mx-auto my-8 aspect-video">
                    <iframe
                        src="https://www.youtube.com/embed/YzKd_a-RiWg"
                        title="Vídeo"
                        allowFullScreen
                        className="w-full h-full rounded-md shadow-lg"
                    />
                </div>
                {/* Conteúdo abaixo do vídeo */}
                <Card className="w-full">
                <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                    Conteúdo
                    </h3>
                    <p className="text-base md:text-lg text-center font-semibold mb-4">
                    18 vídeos + material em pgn e pdf com 30 partidas modelo, 
                    divididos nos seguintes módulos:
                    </p>
                    <ul className="text-sm md:text-base list-none text-justify space-y-2">
                    {[
                        "1...e5",
                        "Siciliana",
                        "Caro-Kann",
                        "Francesa",
                        "Escandinava, Pirc e Moderna",
                        "Outras Defesas"
                    ].map((item) => (
                        <li
                        key={item}
                        className="relative pl-12 before:absolute before:left-0 before:top-0 before:text-[#C6AF78] before:content-['!!'] before:text-[32px] before:font-bold"
                        >
                        {item}
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
                </div>
                </div>
            </div>
        </div>
      </section>

     <div className="flex flex-col items-center justify-start text-center md:text-left bg-[#C6AF78] py-6 md:py-10">
        <Button
            size="lg"
            className="BG-BLACK hover:bg-yellow-600 text-white text-base md:text-lg"
            onClick={() => window.open("https://hotmart.com/pt-br/marketplace/produtos/ganhando-com-1-e4/Y101233420D", "_blank")}
            >
            Adquira o Curso
        </Button>
    </div> 

    {/* Mestres Section */}
          <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                Quem Somos
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    name: "GM Felipe El Debs",
                    title: "Grande Mestre",
                    description:
                      <div>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2">Conquistas no Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>1999 – Campeão Brasileiro Sub-14.</li>
                          <li>2002 / 2005 – Campeão Brasileiro Sub-20.</li>
                          <li>2010 – Título de Grande Mestre (GM) pela FIDE.</li>
                          <li>2014 – Vice-Campeão Brasileiro Absoluto.</li>
                          <li>2015 – Campeão do II Washington Chess Congress.</li>
                          <li>2017 – Participante da Copa do Mundo da FIDE.</li>
                          <li>2008 / 2014 / 2016 / 2018 – Representante do Brasil na Olimpíada de Xadrez.</li>
                        </ul>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2 mt-2">Treinador de Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mais de 100 alunos, de todas as idades, nos últimos 20 anos.</li>
                          <li>Especializado em análise aprofundada das partidas dos alunos para direcionar o treinamento futuro.</li>
                          <li>Ajudou na formação de mais de uma dezena de campeões brasileiros de categoria.</li>
                          <li>Contribuiu para o desenvolvimento de vários jovens Mestres FIDE (MFs) e Mestres Internacionais 
                          (MIs) do cenário nacional.</li>
                          <li>Autor de um curso sobre a Dragão Acelerada e de mini cursos para o site Chess.com.</li>
                          <li>Cofundador do canal de entrevistas Xadrez Online.</li>
                        </ul>
                      </div>,
                    image: "/images/el_debs.jpg",
                  },
                  {
                    name: "MI Diego Di Berardino",
                    title: "Mestre Internacional",
                    description:
                      <div>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2">Conquistas no Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mestre Internacional de Xadrez, com duas Normas de Grande Mestre.</li>
                          <li>Integrante da equipe Olímpica do Brasil nas Olimpíadas de Baku 2016 e Budapeste 2024.</li>
                          <li>Representante do Brasil na Copa do Mundo da Rússia, 2011.</li>
                          <li>Vice-campeão Brasileiro Absoluto de Xadrez.</li>
                          <li>Sete vezes Campeão do Estado do Rio de Janeiro.</li>
                          <li>Campeão de diversas etapas de Abertos do Brasil.</li>
                          <li>Pico de Rating FIDE clássico - 2528.</li>
                        </ul>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2 mt-2">Treinador de Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Atuação como treinador na trajetória de jovens promessas do xadrez brasileiro.</li>
                          <li>Auxílio na preparação de atletas com atuação destacada em campeonatos estaduais, brasileiros,
                             sulamericanos e panamericanos de categoria, e  competições em geral, incluindo títulos e medalhas.</li>
                        </ul>
                      </div>,
                    image: "/images/di_berardino.jpg",
                  },
                  {
                    name: "MF Álvaro Aranha",
                    title: "Mestre FIDE",
                    description:
                      <div>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2">Conquistas no Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mestre da FIDE desde 2006.</li>
                          <li>2 normas de Mestre Internacional.</li>
                          <li>Vice-campeão Mundial Juvenil por Equipes em 1999.</li>
                          <li>Campeão Paulista 2016 e 2018.</li>
                          <li>Campeão Brasileiro 35+ 2025.</li>
                        </ul>
                        <h3 className="text-sm font-semibold text-[#C6AF78] mb-2 mt-2">Treinador de Xadrez</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Treinador da equipe Olímpica Feminina nas olimpíadas de 2010, 2012 e 2014.</li>
                          <li>Participou de 4 Mundiais e 13 Panamericanos.</li>
                          <li>Mais de 30 campeões brasileiros nas mais diversas categorias.</li>
                          <li>Treinador do Projeto de Xadrez do Colégio Augusto Laranja (Atual Tricampeão Brasileiro Escolar).</li>
                          <li>Esteve na Rússia em 2019 visitando as melhores escolas do xadrez mundial e alguns dos mais renomados 
                            treinadores internacionais.</li>
                            <li>Autor do Curso “A Moderna Escola Russa de Xadrez”.</li>
                        </ul>
                      </div>,
                    image: "/images/alvaro_aranha.png",
                  },
                ].map((mestre, index) => (
                  <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
                    <div className="w-full md:w-1/4">
                      <div className="bg-gray-100 p-4">
                        <h3 className="text-lg font-semibold text-black opacity-70">{mestre.name}</h3>
                      </div>
                      {/* Imagem abaixo do título */}
                      <div className="w-full h-64 md:h-full relative">
                        <Image
                          src={mestre.image}
                          alt={mestre.name}
                          fill
                          className="object-cover "
                        />
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6 flex flex-col flex-1 overflow-y-auto max-h-[400px] sm:max-h-none">
                      <div className="flex items-start gap-3 md:gap-4 mb-4">
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
    
    <div className="flex flex-col items-center justify-start text-center md:text-left bg-[#C6AF78] py-6 md:py-10">
        <Button
            size="lg"
            className="BG-BLACK hover:bg-yellow-600 text-white text-base md:text-lg"
            onClick={() => window.open("https://hotmart.com/pt-br/marketplace/produtos/ganhando-com-1-e4/Y101233420D", "_blank")}
            >
            Adquira o Curso
        </Button>
    </div>
    

    {/* Depoimentos Section */}
     <div>
        <TestimonialsSection />
     </div>

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
