"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Target } from "lucide-react";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  const router = useRouter();
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
              Adquira o curso ganhando com e4!
            </p>
          </div>

          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-base md:text-lg"
            onClick={() => router.push("/curso-e4")
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
            Treine com a AJA Xadrez
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8">
            <div className="w-full md:w-3/5">
              <p className="text-center mb-8 md:mb-12 text-muted-foreground text-base md:text-lg">
              A <span className="font-bold text-[#C6AF78]">Academia para Jogadores Ambiciosos de Xadrez (AJA Xadrez) </span>
              nasceu da ideia de três amigos que compartilham a filosofia de valorizar o estudo da herança deixada pelos 
              grandes jogadores da história. Nosso objetivo é oferecer um projeto diferenciado, com aulas e treinamentos voltados ao 
              desenvolvimento de enxadristas ambiciosos, indo além das abordagens tradicionais disponíveis no mercado.
              <br className="hidden md:block" /><br className="hidden md:block" />
              <div className="flex items-start gap-3 ml-16 mr-18">
                <span className="font-bold text-[#C6AF78] text-4xl leading-none">!!</span>
                <p className="text-base md:text-lg text-muted-foreground text-justify">
                  Nos inspiramos no conceito de <span className="font-bold text-[#C6AF78]">"training camps"</span>, intensivos
                  como preparação para torneios, uma metodologia amplamente utilizada pela antiga escola soviética.
                </p>
              </div>
              <br className="hidden md:block" /><br className="hidden md:block" />
              A imersão nos estudos em um curto período, com um objetivo bem definido, apresenta vantagens significativas 
              em relação a um estudo mais espaçado, muitas vezes proporcionando melhores resultados com um menor 
              investimento de tempo. Atualmente, muitos jogadores que desejam evoluir, mas não são profissionais,
               encontram dificuldades para dedicar dois ou três meses inteiros aos estudos, por mais que sejam apaixonados
                pelo xadrez. Como consequência, acabam perdendo ritmo e, em alguns casos, desanimando.
              </p>
            </div>
            
            <Card className="w-full md:w-2/5">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  Metodologia Comprovada
                </h3>
                <p className="text-sm md:text-base text-justify">
                  A propõe um formato inovador: treinamentos intensivos de quatro a sete dias, focando em temas específicos que aprimoram a compreensão do jogo e, ao mesmo tempo, preparam os alunos para seus desafios em torneios importantes.
                  <span className="font-bold text-[#C6AF78]"> ex-campeão mundial Mikhail Botvinnik</span>, que ajudou a 
                  formar três campeões mundiais: <span className="font-bold text-[#C6AF78]">Anatoly Karpov</span>,
                  <span className="font-bold text-[#C6AF78]"> Garry Kasparov</span> e 
                  <span className="font-bold text-[#C6AF78]"> Vladimir Kramnik</span>. A ideia desse tipo de treinamento 
                  é semelhante à de uma academia de ginástica: preparar os jogadores para atingirem a melhor forma no 
                  momento mais importante, próximo aos torneios. Além disso, fortalece e consolida conceitos fundamentais 
                  para o desenvolviamento do enxadrista.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground text-base md:text-lg">
            
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  AJA Xadrez
                </h3>
                <p className="text-sm md:text-base text-justify">
                  Propõe um formato inovador: treinamentos intensivos de quatro 
                  a sete dias, focando em temas específicos que aprimoram a 
                  compreensão do jogo e, ao mesmo tempo, preparam os alunos para 
                  seus desafios em torneios importantes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  Nossa equipe
                </h3>
                <p className="text-sm md:text-base text-justify">
                   Composta por um Grande Mestre (GM), um Mestre Internacional (MI) e um Mestre FIDE (MF), 
                   todos com ampla experiência como jogadores, mas, acima de tudo, comprovadamente competentes no 
                   desenvolvimento de enxadristas ambiciosos e na formação de campeões. 
                   <span className="font-bold text-[#C6AF78]"> Na nossa academia, a principal propaganda não são os 
                    professores, mas sim os resultados dos alunos.</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl text-center font-semibold mb-4">
                  O Melhor de Cada Instrutor
                </h3>
                <p className="text-sm md:text-base text-justify">
                  Assim como acontecia na escola de Botvinnik, cada treinador contribui com suas visões e conhecimentos 
                  especializados. Essa abordagem, que valorizamos na AJA Xadrez, permite que cada 
                  treinador compartilhe conhecimentos aprofundados em sua especialidade, garantindo que o aluno receba o 
                  melhor de cada instrutor. 
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
                name: "MF Alvaro Aranha",
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#C6AF78] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Venha para o Training Camp
          </h2>
          <div className="mb-6 md:mb-8">
            <p className="text-lg md:text-2xl mx-18 text-justify">
              Nosso compromisso é fornecer material de altíssima qualidade, com preparo minucioso, aulas didáticas e 
              interativas, além de exercícios práticos que fixam os conceitos estudados. Dessa forma, o aluno não apenas 
              estará em forma para seu objetivo específico, mas também adquirirá novas ferramentas para toda a sua carreira enxadrística. 
            </p>
            <br className="hidden md:block" /><br className="hidden md:block" />
            <p className="text-lg md:text-2xl">
              Queremos ajudar enxadristas determinados a progredir, mas que carecem de metodologia e direcionamento. 
              Aqui não prometemos fórmulas mágicas, mas acreditamos que, com orientação correta e trabalho duro, você poderá alcançar suas metas!
            </p>
          </div>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-base md:text-lg mb-6 md:mb-8"
            onClick={() =>
              window.open("https://hotmart.com/pt-br/marketplace/produtos/training-camp-ajaxadrez-calculo-o-metodo-de-treinamento-que-forma-campeoes/D98570432Q", "_blank")
            }
          >
            Comece Agora
          </Button>
          <p className="text-base md:text-lg mb-6 md:mb-8">
            No futuro, além dos training camps, pretendemos oferecer outros serviços. Além disso, cada grupo de alunos que 
            participar dos nossos treinamentos terá assistência via WhatsApp por 15 dias após o evento, garantindo acompanhamento e suporte contínuo.
          </p>
          <p className="text-lg md:text-2xl font-bold">
            Esperamos que gostem do nosso projeto!
          </p>
          
        </div>
      </section>


      {/* Depoimentos Section */}
      <TestimonialsSection />

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
