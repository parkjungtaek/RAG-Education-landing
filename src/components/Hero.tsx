import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CreditCard, Code, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const highlights = [
    { icon: Trophy, text: "프로그래밍, AI 실무 활용 SW 교육", emphasis: true },
    { icon: CreditCard, text: "전액 국비지원, 올해 마지막 기회" },
    { icon: Code, text: "프로젝트 320시간" },
    { icon: Users, text: "Sysone, Maymust 등 13개 기업 참여" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-blue-950/60 to-purple-950/80" />
      </div>

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
            <div className="mb-8 px-8 py-3 bg-white rounded-lg inline-flex items-center gap-4">
              <img
                src="/images/eduwill logo.png"
                alt="에듀윌"
                className="h-8 object-contain"
              />
              <span className="text-gray-800 font-bold text-lg">에듀윌 국비교육원 구로센터</span>
            </div>
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

          <motion.div
            className="max-w-5xl w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-l-4 border-yellow-400 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-2">
                  26년도 자기부담금 확정, 전액지원 마지막 기회(25년)
                </p>
                <p className="text-lg md:text-xl text-yellow-300 font-medium">
                  25년 12월 8일 ~ 26년 6월 4일
                </p>             
          </motion.div>

          <motion.div
            className="flex items-center gap-3 text-white/60 text-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >           
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
            className="pt-8"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
