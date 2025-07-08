import './App.css'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { CheckCircle, Star, Clock, Shield, TrendingUp, Zap, Brain, Target, Users, Award, Gift, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function UpsellPage() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header de Confirmação */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-4 text-center bg-green-900/30 border-b border-green-500/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Parabéns! Sua Compra do Bot TECH foi Confirmada!
            </h1>
          </div>
          <p className="text-xl text-green-300">
            Você já está no caminho certo para transformar suas operações no mercado de futuros.
          </p>
        </div>
      </motion.section>

      {/* Oferta Especial de Upsell */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-lg px-6 py-2 mb-6">
              🔥 OFERTA ESPECIAL EXCLUSIVA 🔥
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Mas Espere! Temos uma Oferta Irresistível para Você!
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Já que você demonstrou interesse em melhorar seus resultados no trade, 
              queremos te dar a oportunidade de levar sua estratégia para o próximo nível com o Bot IA.
            </p>
          </div>

          {/* Contador Regressivo Urgente */}
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ Esta Oferta Expira em:</h3>
            
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">Minutos</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">Segundos</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg">
              Não perca esta chance única de ter acesso ao que há de mais avançado em sinais de trade!
            </p>
          </div>

          {/* Comparativo TECH vs IA com Destaque */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* O que você já tem - TECH */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500/30">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-blue-600 text-white">O QUE VOCÊ JÁ TEM</Badge>
                  <CardTitle className="text-2xl text-white">Bot TECH</CardTitle>
                  <CardDescription className="text-gray-300">Análise Técnica Pura</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Sinais de entrada, stop e alvo
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Análise técnica clássica
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Suporte básico
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Grupo de discussão
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* O que você pode ter - IA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-500/30 relative transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold animate-pulse">
                    UPGRADE AGORA!
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-white">O QUE VOCÊ PODE TER</Badge>
                  <CardTitle className="text-2xl text-white">Bot IA</CardTitle>
                  <CardDescription className="text-gray-300">Análise Técnica + IA Avançada</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Star className="mr-3 h-5 w-5 text-yellow-400" />
                      <span className="font-semibold">Tudo do TECH +</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Sinais validados por IA
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Stop inteligente e adaptativo
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Análise de fatores externos
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Relatórios exclusivos de mercado
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Suporte prioritário
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                      Grupo VIP exclusivo
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Oferta de Preço Especial */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center mb-12"
          >
            <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/30 max-w-4xl mx-auto">
              <CardHeader>
                <Gift className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-3xl text-white">Oferta Especial de Upgrade!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4">
                    Normalmente, o Bot IA custa <span className="line-through text-red-400">R$ 497,00</span>
                  </p>
                  <p className="text-gray-300 text-lg mb-4">
                    Mas como você já é nosso cliente, oferecemos um desconto exclusivo:
                  </p>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    Apenas R$ 197,00
                  </div>
                  <p className="text-green-300 text-xl font-semibold">
                    60% de Desconto Exclusivo!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Brain className="mr-3 h-6 w-6" />
                    SIM! Quero Fazer o Upgrade para o Bot IA
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  
                  <p className="text-sm text-gray-400">
                    Pagamento seguro • Garantia de 7 dias • Suporte prioritário
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefícios Exclusivos do Upgrade */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              O Que Você Ganha com Este Upgrade:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "IA Avançada",
                  description: "Algoritmos de machine learning que analisam padrões complexos e otimizam seus sinais em tempo real."
                },
                {
                  icon: TrendingUp,
                  title: "Precisão Superior",
                  description: "Taxa de acerto até 25% maior comparado à análise técnica tradicional, graças à IA."
                },
                {
                  icon: Shield,
                  title: "Gestão de Risco IA",
                  description: "Stop loss inteligente que se adapta às condições do mercado automaticamente."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600/50 text-center">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Garantia Reforçada */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-center mb-12"
          >
            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30 max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Garantia Estendida de 14 Dias</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg mb-4">
                  Como você já é nosso cliente, estendemos sua garantia para 14 dias no Bot IA. 
                  Se não estiver satisfeito, devolvemos 100% do valor do upgrade.
                </p>
                <Badge className="bg-green-600 text-white text-lg px-6 py-2">
                  Risco Zero Garantido!
                </Badge>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Final com Urgência */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ⏰ Esta é Sua Única Chance!
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Este desconto de 60% é exclusivo para novos clientes do Bot TECH e expira em poucos minutos. 
                Não deixe essa oportunidade passar!
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  <Brain className="mr-3 h-6 w-6" />
                  FAZER UPGRADE AGORA - R$ 197,00
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                
                <p className="text-sm text-gray-500">
                  Ou <button className="text-gray-400 underline hover:text-gray-300">continue apenas com o Bot TECH</button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default UpsellPage

