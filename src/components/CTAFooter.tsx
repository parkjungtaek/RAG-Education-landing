import { Button } from "@/components/ui/button";
import { Shield, Award, Users, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface CTAFooterProps {
  onOpenModal: () => void;
}

export const CTAFooter = ({ onOpenModal }: CTAFooterProps) => {
  const benefits = [
    "수강료 100% 지원",
    "훈련 장려금 월 최대 31.6만원",
    "취업 성공 시 추가 지원금",
  ];

  const trustSignals = [
    { icon: Shield, text: "정부 인증 교육기관" },
    { icon: Award, text: "우수 훈련기관 선정" },
    { icon: Users, text: "누적 수료생 500+" },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(184 91% 55% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(184 91% 55% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-10"
        >
          {/* Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              AI 전문가로 성장하는 기회
            </h2>
            <p className="text-2xl text-white/80 font-bold">
              국민내일배움카드로 전액 무료 수강
            </p>
          </div>

          {/* Urgency Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="px-8 py-4 rounded-full bg-primary text-black font-black text-xl shadow-glow">
              ⚡ 조기 마감 임박 - 선착순 30명
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-secondary/50 border-2 border-primary/30"
              >
                <p className="text-white font-bold text-lg flex items-center justify-center gap-2">
                  <span className="text-primary font-black">✓</span>
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
          >
            <Button
              size="lg"
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary/90 text-black text-2xl px-14 py-8 font-black rounded-xl shadow-glow"
            >
              <MessageCircle className="mr-2 h-7 w-7" />
              지금 신청하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-primary text-2xl px-14 py-8 font-black rounded-xl"
            >
              <Phone className="mr-2 h-7 w-7" />
              상담 예약하기
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-10 pt-10"
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3 text-white/70">
                <signal.icon className="w-6 h-6" />
                <span className="text-base font-bold">{signal.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
