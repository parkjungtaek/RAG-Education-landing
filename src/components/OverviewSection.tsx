import { Clock, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Clock,
    title: "교육 기간",
    content: "6개월 (960시간)",
    details: [
      "월~금 09:00-18:00",
      "일 8시간 집중 교육",
      "정규과정 640H + 프로젝트 320H",
    ],
    highlight: "33% 프로젝트",
  },
  {
    icon: Users,
    title: "교육 대상",
    content: "개발 경험자 우대",
    details: [
      "Python/Java 프로젝트 경험자",
      "AI 분야 전직 희망 재직자",
      "컴퓨터공학 전공자 우대",
    ],
    highlight: "선발 테스트 실시",
  },
  {
    icon: Target,
    title: "교육 목표",
    content: "AI 실무 전문가",
    details: [
      "클라우드 기반 AI 서비스 개발",
      "MLOps 파이프라인 구축",
      "실시간 데이터 처리",
    ],
    highlight: "현업 즉시 투입",
  },
];

export const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">
            과정 개요
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            체계적인 커리큘럼으로 AI 전문가로 성장하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border border-border hover:border-primary/50 transition-smooth">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-black">{card.title}</CardTitle>
                  <CardDescription className="text-xl font-bold text-foreground mt-2">
                    {card.content}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {card.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-primary font-bold">•</span>
                        <span className="text-base text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge className="bg-primary/10 text-primary border-primary/30 font-bold">
                    {card.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
