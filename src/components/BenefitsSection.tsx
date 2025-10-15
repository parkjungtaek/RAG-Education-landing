import { CreditCard, TrendingUp, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: CreditCard,
    title: "수강료 100% 지원",
    description: "국민내일배움카드로 전액 무료 수강",
    highlight: "0원",
  },
  {
    icon: TrendingUp,
    title: "훈련 장려금",
    description: "출석률에 따라 월 최대 지급",
    highlight: "31.6만원",
  },
  {
    icon: Award,
    title: "수료 후 지원금",
    description: "취업 성공 시 추가 지원금 지급",
    highlight: "최대 100만원",
  },
  {
    icon: Briefcase,
    title: "취업 연계",
    description: "13개 참여기업 직접 연계",
    highlight: "92% 취업률",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">교육 혜택</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            국비지원으로 부담 없이 시작하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center shadow-card hover:shadow-elevated transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold gradient-text mb-2">{benefit.highlight}</p>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
