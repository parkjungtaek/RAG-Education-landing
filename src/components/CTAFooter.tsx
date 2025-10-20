import { Button } from "@/components/ui/button";
import { Shield, Award, Users, MessageCircle, Phone, MapPin, Clock, Train, Bus } from "lucide-react";
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

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-700/30 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-black text-cyan-400 mb-8">에듀윌 국비교육원 구로</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Address & Directions */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-bold mb-2">주소</p>
                    <p className="text-white/70">서울 구로구 디지털로32길 79, 5층<br />에듀윌 국비교육원 구로센터</p>
                    <p className="text-cyan-400 font-semibold mt-2">오시는길: 구로디지털단지역(2호선) 2번 출구에서 도보 5분</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-bold mb-2">이용시간</p>
                    <p className="text-white/70">평일 09:00 ~ 22:00</p>
                    <p className="text-white/70">주말 10:00 ~ 17:00</p>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Train className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-bold mb-2">지하철</p>
                    <p className="text-white/70">구로디지털단지역(2호선)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Bus className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-bold mb-2">버스</p>
                    <div className="space-y-1">
                      <p className="text-white/70"><span className="text-cyan-400 font-semibold">지선버스:</span> 5536, 5616</p>
                      <p className="text-white/70"><span className="text-cyan-400 font-semibold">일반/마을:</span> 구로09 · 영등포01 · 금천07</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
