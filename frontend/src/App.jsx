import './App.css'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { CheckCircle, Star, Clock, Shield, TrendingUp, Zap, Brain, Target, Users, Award, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import telegramBotImage from './assets/telegram_bot_signal.png'
import aiTradingBotImage from './assets/ai_trading_bot_interface.png'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
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
            Identifique o Melhor Setup de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              SHORT em Segundos
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            Resultados Consistentes e Decisões Inteligentes com a Força da Análise Técnica e a Precisão Inovadora da Inteligência Artificial
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('plans')}
            >
              <Target className="mr-2 h-5 w-5" />
              Quero o TECH (Análise Técnica Pura)
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('plans')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Quero o IA (Análise Técnica + IA Avançada)
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <img 
              src={telegramBotImage} 
              alt="Bot de Sinais no Telegram" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
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
              Cansado de Perder Oportunidades e Dinheiro no Mercado de Futuros?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Nós Temos a Solução Definitiva.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6">O Problema:</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                No volátil mercado de futuros, cada segundo conta. Muitos traders se veem presos em um ciclo exaustivo: 
                horas intermináveis de análise que nem sempre resultam em decisões lucrativas, sinais de trade inconsistentes 
                que levam a perdas frustrantes, e a constante batalha contra as emoções que sabotam a disciplina.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                A falta de um sistema confiável e a sobrecarga de informações podem transformar o sonho de lucrar em um 
                pesadelo de prejuízos e tempo desperdiçado.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">A Solução:</h3>
              <div className="space-y-6">
                <Card className="bg-slate-700/50 border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Bot TECH
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Análise técnica pura e descomplicada. Sinais claros de entrada, stop e alvo baseados em indicadores comprovados.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center">
                      <Brain className="mr-2 h-5 w-5" />
                      Bot IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Inteligência artificial avançada que avalia fatores externos, padrões complexos e oferece sinais otimizados com stop inteligente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparativo de Planos */}
      <section id="plans" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Escolha a Ferramenta Perfeita para Sua Estratégia
            </h2>
            <p className="text-xl text-gray-300">TECH vs. IA</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-blue-600 text-white">TECH</Badge>
                  <CardTitle className="text-2xl text-white">Análise Técnica Pura</CardTitle>
                  <CardDescription className="text-gray-300">Ideal para iniciantes e intermediários</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Economize horas de análise
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Sinais de entrada, stop e alvo
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Foco em análise técnica pura
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Ideal para iniciantes
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Suporte básico
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Escolher TECH
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold">
                    MAIS POPULAR
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-white">IA</Badge>
                  <CardTitle className="text-2xl text-white">Análise Técnica + IA Avançada</CardTitle>
                  <CardDescription className="text-gray-300">Para traders experientes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Sinais validados por IA
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Stop inteligente e dinâmico
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Avaliação de fatores externos
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Para traders experientes
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Suporte premium e relatórios
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Escolher IA
                  </Button>
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
              Veja o Que Nossos Traders Estão Conquistando
            </h2>
            <p className="text-xl text-gray-300">com os Bots TECH & IA!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João S.",
                role: "Trader Profissional",
                testimonial: "Desde que comecei a usar o Bot IA, minhas análises ficaram muito mais rápidas e precisas. Consegui aumentar minha taxa de acerto em 20% e, o melhor, com muito menos estresse.",
                rating: 5
              },
              {
                name: "Maria C.",
                role: "Investidora Iniciante",
                testimonial: "Eu sempre tive medo de operar futuros, mas o Bot TECH me deu a segurança que eu precisava. Os sinais são muito claros e me ajudaram a entender o mercado.",
                rating: 5
              },
              {
                name: "Carlos R.",
                role: "Analista de Mercado",
                testimonial: "Como analista, sou cético com ferramentas automatizadas. Mas o Bot IA me surpreendeu. A capacidade de processar dados externos é um diferencial absurdo.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-700/50 border-slate-600/50">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta & Escassez */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Não Perca Esta Oportunidade Única
            </h2>
            <p className="text-xl text-gray-300 mb-12">Garante Sua Vaga Agora!</p>

            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">⚠️ Apenas 50 vagas abertas!</h3>
              
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Dias</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Horas</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Min</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400">Seg</div>
                </div>
              </div>

              <p className="text-gray-300">
                Para manter a qualidade e o suporte personalizado, limitamos o número de novos membros. 
                Não fique de fora!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bônus */}
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
              Bônus Exclusivos para Você
            </h2>
            <p className="text-xl text-gray-300">Alavancar Seus Resultados!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "E-book de Gestão de Risco",
                description: "Aprenda as estratégias mais eficazes para proteger seu capital e maximizar seus lucros.",
                value: "R$ 197,00",
                icon: Shield
              },
              {
                title: "Mini-curso de Análise Técnica",
                description: "Um curso rápido e prático sobre os fundamentos da análise técnica para futuros.",
                value: "R$ 297,00",
                icon: TrendingUp
              },
              {
                title: "Consultoria de 15 Minutos",
                description: "Sessão individual com nossos especialistas para orientações personalizadas.",
                value: "R$ 350,00",
                icon: Users
              }
            ].map((bonus, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/30">
                  <CardHeader className="text-center">
                    <bonus.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <CardTitle className="text-white">{bonus.title}</CardTitle>
                    <Badge className="w-fit mx-auto bg-green-600 text-white">{bonus.value}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">{bonus.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                Valor Total dos Bônus: R$ 844,00
              </h3>
              <p className="text-xl text-white font-semibold">
                Mas ao adquirir seu plano hoje, você leva tudo isso DE GRAÇA!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sua Satisfação é Nossa Prioridade
            </h2>
            <p className="text-xl text-gray-300 mb-12">Risco Zero para Você!</p>

            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Garantia Incondicional de 7 Dias</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg mb-6">
                  Você tem 7 dias completos para testar nossos bots. Se não estiver completamente satisfeito, 
                  reembolsamos 100% do seu investimento, sem perguntas e sem burocracia.
                </p>
                <Badge className="bg-green-600 text-white text-lg px-6 py-2">
                  Satisfeito ou Seu Dinheiro de Volta!
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Suas Dúvidas Respondidas
            </h2>
            <p className="text-xl text-gray-300">Tudo o Que Você Precisa Saber</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Os bots são compatíveis com a corretora MEXC ou outras plataformas?",
                answer: "Sim, nossos bots fornecem os sinais de entrada, stop e alvo de forma universal. Você pode utilizá-los para operar em qualquer corretora de futuros que desejar, incluindo a MEXC, Binance, Bybit, OKX, entre outras."
              },
              {
                question: "Quais são as formas de pagamento aceitas?",
                answer: "Aceitamos diversas formas de pagamento para sua comodidade, incluindo cartão de crédito (parcelamento disponível), Pix e boleto bancário. Todas as transações são processadas de forma segura."
              },
              {
                question: "Como funciona o suporte e qual o tempo de resposta?",
                answer: "Oferecemos suporte via Telegram para o plano TECH e suporte prioritário via Telegram e e-mail para o plano IA. Nosso tempo de resposta padrão é de até 24 horas úteis."
              },
              {
                question: "Preciso ter experiência prévia no mercado de futuros?",
                answer: "Não é obrigatório ter experiência avançada. O Bot TECH é ideal para iniciantes, pois fornece sinais claros e diretos. Para o Bot IA, um conhecimento básico é recomendado para aproveitar ao máximo suas funcionalidades."
              },
              {
                question: "Posso testar os bots antes de comprar?",
                answer: "Não oferecemos um período de teste gratuito. No entanto, você tem nossa Garantia Incondicional de 7 Dias. Isso significa que você pode adquirir o plano, testar por uma semana e, se não estiver satisfeito, solicitar o reembolso total."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600/50 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Autoridade */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conheça a Mente por Trás dos Bots
            </h2>
            <p className="text-xl text-gray-300 mb-12">Experiência e Resultados Comprovados</p>

            <Card className="bg-slate-700/50 border-slate-600/50">
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">[Nome do Criador/Fundador]</CardTitle>
                <CardDescription className="text-gray-400">Fundador e Desenvolvedor Principal</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg mb-6">
                  Com mais de X anos de experiência no mercado financeiro e expertise em trading de futuros, 
                  análise técnica avançada e inteligência artificial. Ao longo de sua carreira, gerenciou 
                  portfólios que geraram milhões em resultados para investidores.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-yellow-600 text-white">Melhor Ferramenta de Análise</Badge>
                  <Badge className="bg-blue-600 text-white">Inovação em IA Financeira</Badge>
                  <Badge className="bg-green-600 text-white">Certificação em Análise Técnica</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Não Deixe Seu Sucesso para Depois
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comece a Operar com Inteligência Hoje!
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Liberte-se da Análise Manual e Tenha Sinais de Trade de Alta Qualidade Entregues 
              Diretamente no Seu Telegram. Seja um Trader Mais Inteligente, Rápido e Lucrativo!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Target className="mr-2 h-5 w-5" />
                Quero o TECH (Análise Técnica Pura)
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Brain className="mr-2 h-5 w-5" />
                Quero o IA (Análise Técnica + IA Avançada)
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              Aja agora! As vagas são limitadas e a oferta especial não durará para sempre.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App

