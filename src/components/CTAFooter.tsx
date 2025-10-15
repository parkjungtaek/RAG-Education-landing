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
    <section className="relative py-20 px-4 overflow-hidden gradient-hero-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI 전문가로 성장하는 기회
            </h2>
            <p className="text-xl text-white/90">
              국민내일배움카드로 전액 무료 수강
            </p>
          </div>

          {/* Urgency Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="px-6 py-3 rounded-full bg-destructive text-white font-bold text-lg shadow-glow">
              ⚡ 조기 마감 임박 - 선착순 30명
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20"
              >
                <p className="text-white font-semibold flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={onOpenModal}
              className="gradient-bg shadow-glow hover:shadow-elevated transition-smooth text-xl px-10 py-7 font-bold animate-pulse-glow"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              지금 신청하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-xl px-10 py-7 font-bold"
            >
              <Phone className="mr-2 h-6 w-6" />
              상담 예약하기
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <signal.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{signal.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
