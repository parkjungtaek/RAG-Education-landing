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
          className="max-w-5xl mx-auto text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px hsl(184 91% 55% / 0.3)",
                  "0 0 40px hsl(184 91% 55% / 0.6)",
                  "0 0 20px hsl(184 91% 55% / 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Badge className="mb-6 px-8 py-3 text-base font-bold bg-cyan-400 text-black border-2 border-cyan-300 shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                🔥 2025년 1기 모집중
              </Badge>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="text-white inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              GEN-AI RAG
            </motion.span>{" "}
            <motion.span
              className="text-cyan-400 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 40px rgba(0,255,255,0.9)",
                  "0 0 20px rgba(0,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              문자·음성
            </motion.span>
            <br />
            <motion.span
              className="text-cyan-400 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 40px rgba(0,255,255,0.9)",
                  "0 0 20px rgba(0,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
            >
              데이터
            </motion.span>{" "}
            <span className="text-white">응용SW 개발자</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/90 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              RAG 기반 멀티모달 AI 전문가 양성과정
            </motion.span>
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-cyan-950/40 to-blue-950/20 backdrop-blur-md border-2 ${
                  item.emphasis ? "border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.4)]" : "border-cyan-600/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "rgb(0,255,255)",
                  boxShadow: "0 0 40px rgba(0,255,255,0.6)",
                  backgroundColor: "rgba(0,50,80,0.6)"
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                </motion.div>
                <p className="text-base md:text-lg font-bold text-white">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-cyan-400 hover:bg-cyan-300 text-black text-xl px-12 py-7 font-black rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:shadow-[0_0_60px_rgba(0,255,255,0.9)] border-2 border-cyan-300 transition-all duration-500"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                무료 상담 신청하기
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 text-xl px-12 py-7 font-bold rounded-xl backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300"
              >
                <Download className="mr-2 h-6 w-6" />
                커리큘럼 다운로드
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
