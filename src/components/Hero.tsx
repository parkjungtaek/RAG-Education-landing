import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CreditCard, Code, Users, Download, MessageCircle, Sparkles, Brain, Zap } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
      {/* AI Background Image */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Animated Tech Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(184 91% 55% / 0.3) 2px, transparent 2px),
                             linear-gradient(90deg, hsl(184 91% 55% / 0.3) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Multiple Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating AI Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? <Brain className="w-16 h-16" /> : i % 3 === 1 ? <Sparkles className="w-12 h-12" /> : <Zap className="w-14 h-14" />}
          </motion.div>
        ))}
      </div>

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
              <Badge className="mb-6 px-8 py-3 text-base font-bold bg-primary text-black border-0 shadow-glow">
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
              className="text-primary inline-block"
              animate={{
                textShadow: [
                  "0 0 20px hsl(184 91% 55% / 0.5)",
                  "0 0 40px hsl(184 91% 55% / 0.8)",
                  "0 0 20px hsl(184 91% 55% / 0.5)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              문자·음성
            </motion.span>
            <br />
            <motion.span
              className="text-primary inline-block"
              animate={{
                textShadow: [
                  "0 0 20px hsl(184 91% 55% / 0.5)",
                  "0 0 40px hsl(184 91% 55% / 0.8)",
                  "0 0 20px hsl(184 91% 55% / 0.5)"
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
                className={`p-6 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/30 backdrop-blur-sm border-2 ${
                  item.emphasis ? "border-primary shadow-[0_0_30px_rgba(79,209,197,0.3)]" : "border-border/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "hsl(184 91% 55%)",
                  boxShadow: "0 0 40px rgba(79,209,197,0.5)",
                  backgroundColor: "rgba(30,30,40,0.8)"
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
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary drop-shadow-[0_0_8px_rgba(79,209,197,0.8)]" />
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
                className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_100%] hover:bg-right text-black text-xl px-12 py-7 font-black rounded-xl shadow-[0_0_40px_rgba(79,209,197,0.6)] hover:shadow-[0_0_60px_rgba(79,209,197,0.9)] transition-all duration-500"
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
                className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary text-xl px-12 py-7 font-bold rounded-xl backdrop-blur-sm shadow-[0_0_20px_rgba(79,209,197,0.3)] hover:shadow-[0_0_40px_rgba(79,209,197,0.6)] transition-all duration-300"
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
