import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CreditCard, Code, Users, Download, MessageCircle, Cpu, Layers, Network } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const highlights = [
    { icon: Trophy, text: "취업연계 100%", emphasis: true },
    { icon: CreditCard, text: "전액 국비지원" },
    { icon: Code, text: "프로젝트 320시간" },
    { icon: Users, text: "13개 기업 참여" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* AI Chip Background with Circuit Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-blue-950/60 to-purple-950/80" />

        {/* Circuit Board Pattern Overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, cyan 1px, transparent 1px),
              linear-gradient(0deg, cyan 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '100px 100px, 100px 100px, 20px 20px, 20px 20px']
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Glowing AI Chip Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/40 via-blue-600/30 to-transparent blur-[100px]" />
      </motion.div>

      {/* Pulsing Data Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              width: '100%',
              left: '-100%'
            }}
            animate={{
              left: ['100%', '-100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* Floating Circuit Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              boxShadow: [
                '0 0 10px rgba(0,255,255,0.5)',
                '0 0 20px rgba(0,255,255,1)',
                '0 0 10px rgba(0,255,255,0.5)'
              ]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Cpu, Layers, Network].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          >
            <Icon className="w-24 h-24 text-cyan-400/30" />
          </motion.div>
        ))}
      </div>

      {/* Dark Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-left space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <Badge className="mb-8 px-6 py-2.5 text-sm font-bold bg-transparent text-cyan-400 border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] rounded-full">
              AI &
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <motion.div
              className="text-5xl md:text-7xl font-black leading-tight text-cyan-400"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,255,255,0.3)",
                  "0 0 40px rgba(0,255,255,0.6)",
                  "0 0 20px rgba(0,255,255,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              GEN-AI RAG
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              문자·음성<br />데이터 응용SW 개발자
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            RAG 기반 멀티모달 AI 전문가 양성과정
          </motion.p>

          <motion.div
            className="flex items-center gap-3 text-white/60 text-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span>2024-09-25</span>
            <span>|</span>
            <span>정동인 핵입교수</span>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={`relative p-5 rounded-lg bg-gradient-to-br from-teal-900/30 to-cyan-900/10 backdrop-blur-sm border ${
                  item.emphasis ? "border-cyan-400/60" : "border-cyan-700/30"
                } overflow-hidden group`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(0,255,255)",
                  backgroundColor: "rgba(0,80,100,0.3)"
                }}
              >
                {item.emphasis && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                  <p className="text-sm md:text-base font-bold text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-cyan-400 hover:bg-cyan-300 text-black text-lg px-10 py-6 font-bold rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                무료 상담 신청하기
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 text-lg px-10 py-6 font-semibold rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                커리큘럼 다운로드
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
