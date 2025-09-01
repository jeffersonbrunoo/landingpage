// App.jsx - Versão Final de Lançamento
import './App.css'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
// Imports limpos para a versão final
import { CheckCircle, Star, BarChart3, Shield, Wallet, DollarSign, Percent } from 'lucide-react'
import { motion } from 'framer-motion'
import bethubDashboardImage from './assets/mockup-bethub.png'

function App() {
  const calculateTimeLeft = () => {
    // IMPORTANTE: Defina aqui a data e hora em que a sua promoção REALMENTE termina!
    const targetDate = new Date('2025-10-15T23:59:59') // Formato: ANO-MÊS-DIA T HORA:MINUTO:SEGUNDO
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      }
    }
    // Se a diferença for <= 0, retorna um objeto vazio, que será tratado na renderização.
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            O fim das Planilhas. O Controle total dos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              seus saldos e apostas.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            Centralize suas carteiras, registre cada aposta e tenha o controle total do seu investimento. O BetHub transforma seus dados em decisões mais inteligentes.
          </motion.p>
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('offer')}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Ver Oferta de Lançamento
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center"
          >
            <img 
              src={bethubDashboardImage} 
              alt="Dashboard da plataforma BetHub" 
              className="max-w-full md:max-w-3xl h-auto mx-auto rounded-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Problema & Solução */}
       <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Você realmente sabe se está lucrando com suas apostas?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A falta de controle é o maior inimigo do apostador lucrativo. Nós resolvemos isso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6">O Problema: A Desorganização custa caro</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Apostadores perdem dinheiro não apenas por palpites errados, mas pela falta de gestão. O ciclo é frustrante: usar planilhas complicadas, não saber o saldo total somando todas as casas, e ter apenas uma "sensação" do lucro ou prejuízo no fim do mês.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Essa desorganização leva a decisões baseadas em achismo, gestão de banca ineficiente e, no final, a perda de capital e tempo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">A Solução: Clareza e Controle total do seu investimento</h3>
              <div className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Visão Unificada:</strong> Cadastre todas as suas carteiras e veja seu bankroll consolidado em um só lugar.</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Performance Real:</strong> Acompanhe seu PnL (Lucro e Prejuízo) diário e mensal com gráficos intuitivos e em tempo real.</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Rastro do Dinheiro:</strong> Registre cada aposta, depósito e saque. Saiba exatamente de onde seu dinheiro vem e para onde vai.</span>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Recursos pensados para o apostador moderno
            </h2>
            <p className="text-xl text-gray-300">Tudo o que você precisa para gerenciar sua performance.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="h-full bg-slate-800/50 border-blue-500/30 text-center">
                <CardHeader>
                  <Wallet className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Gestão de Múltiplas Carteiras</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Pare de pular de site em site. Cadastre todas as suas bancas e tenha uma visão completa e unificada do seu capital total.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              <Card className="h-full bg-slate-800/50 border-purple-500/30 text-center">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Dashboard de Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Seu PnL, ROI, e histórico de operações em tempo real. Gráficos claros que mostram sua evolução e ajudam a identificar padrões.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
              <Card className="h-full bg-slate-800/50 border-green-500/30 text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Controle de Movimentações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Registre cada depósito, saque e aposta detalhadamente. Mantenha um histórico financeiro preciso e organizado sem esforço.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que os apostadores dizem sobre o BetHub
            </h2>
            <p className="text-xl text-gray-300">A ferramenta que faltava para a nossa comunidade.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "João S.", role: "Apostador Esportivo", testimonial: "O BetHub mudou o jogo pra mim. Antes, eu estava no escuro sobre meu desempenho real. Agora, sei exatamente meu PnL e onde preciso melhorar. Ferramenta indispensável!", rating: 5 },
              { name: "Lucas C.", role: "Iniciante em Apostas", testimonial: "Eu sempre me perdia com minhas anotações. O BetHub me deu a organização que eu precisava. Ver todas as minhas carteiras num só lugar me dá muita segurança.", rating: 5 },
              { name: "Carlos R.", role: "Apostador Profissional", testimonial: "Como profissional, a gestão de banca é tudo. O nível de detalhe que o BetHub oferece para registrar operações é fantástico. Substituiu minhas planilhas na hora.", rating: 5 }
            ].map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }}>
                <Card className="h-full bg-slate-700/50 border-slate-600/50">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
                    </div>
                    <CardTitle className="text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent><p className="text-gray-300 italic">"{testimonial.testimonial}"</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta & Escassez */}
      <section id="offer" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ⚠️ <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Oferta de Lançamento</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Seja um dos primeiros a usar o BetHub e garanta <span className="text-yellow-400 font-bold">50% de DESCONTO</span> no Plano PREMIUM por 1 ano!
            </p>

            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 mb-8">
              {/* AJUSTE: Mensagem simplificada */}
              <h3 className="text-2xl font-bold text-white mb-6">Esta oferta termina em:</h3>
              
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
                {/* CORREÇÃO: Adicionado `|| 0` para evitar o erro quando o tempo acabar */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{(timeLeft.dias || 0).toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Dias</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{(timeLeft.horas || 0).toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Horas</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{(timeLeft.minutos || 0).toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Min</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{(timeLeft.segundos || 0).toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Seg</div>
                </div>
              </div>

               <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('final-cta')}
              >
                <Percent className="mr-2 h-5 w-5" />
                EU QUERO MEU DESCONTO!
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center ">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sua satisfação é nossa prioridade
            </h2>
            <p className="text-xl text-gray-300 mb-12">Risco zero para você!</p>

            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Garantia incondicional de 7 dias</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg mb-6">
                  Você tem 7 dias completos para testar nossa plataforma. Se não estiver completamente satisfeito, 
                  reembolsamos 100% do seu investimento, sem perguntas e sem burocracia.
                </p>
                <Badge className="bg-green-600 text-white text-lg px-6 py-2">
                  Satisfeito ou seu dinheiro de volta!
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Suas dúvidas respondidas
            </h2>
            <p className="text-xl text-gray-300">Tudo o que você precisa saber</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { question: "Preciso conectar minha conta da casa de apostas ao BetHub?", answer: "Não. Para sua total segurança e privacidade, o BetHub funciona com registros manuais. Você insere os dados de suas apostas, depósitos e saques, mantendo o controle total sem precisar compartilhar seus logins." },
              { question: "O BetHub dá dicas de apostas?", answer: "Não, o BetHub não é uma ferramenta de dicas ou sinais. Nosso foco é 100% em gestão financeira e de performance. Nós te damos os dados para que VOCÊ possa tomar decisões melhores, mas não indicamos onde apostar." },
              { question: "A plataforma é para iniciantes ou apostadores profissionais?", answer: "Para ambos! Iniciantes ganham a organização essencial para começar certo, evitando erros comuns de gestão. Profissionais encontram a profundidade de dados necessária para análises avançadas e otimização de estratégias." },
              { question: "Quais são as formas de pagamento aceitas?", answer: "Aceitamos as principais formas de pagamento, incluindo cartão de crédito, Pix e boleto. Todas as transações são processadas em um ambiente seguro." },
              { question: "Posso usar no celular?", answer: "Sim! A plataforma BetHub é totalmente responsiva, o que significa que você pode acessar seu dashboard, registrar apostas e acompanhar seus resultados de qualquer dispositivo: computador, tablet ou celular." }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600/50 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section id="final-cta" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para levar seu operacional para o próximo nível?
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Liberte-se da desorganização e tenha a clareza de um profissional. Tome decisões baseadas em dados e veja sua performance decolar.
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Quero o Controle Total Agora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App