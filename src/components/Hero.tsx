import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, CreditCard, Code, Users, Download, MessageCircle } from "lucide-react";
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
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(184 91% 55% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(184 91% 55% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full" />

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
            <Badge className="mb-6 px-8 py-3 text-base font-bold bg-primary text-black border-0">
              🔥 2025년 1기 모집중
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">GEN-AI RAG</span>{" "}
            <span className="text-primary">문자·음성데이터</span>
            <br />
            <span className="text-white">응용SW 개발자</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/80 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            RAG 기반 멀티모달 AI 전문가 양성과정
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
                className={`p-6 rounded-lg bg-secondary/50 border-2 ${
                  item.emphasis ? "border-primary" : "border-border"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(184 91% 55%)" }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
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
            <Button
              size="lg"
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary/90 text-black text-xl px-12 py-7 font-black rounded-lg shadow-glow"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              무료 상담 신청하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-primary text-xl px-12 py-7 font-bold rounded-lg"
            >
              <Download className="mr-2 h-6 w-6" />
              커리큘럼 다운로드
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
