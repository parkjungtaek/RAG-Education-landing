import { Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const companies = [
  {
    name: "메이머스트",
    category: "웹개발",
    description: "AI 기반 웹 서비스 전문",
    hiringPositions: ["AI 엔지니어", "백엔드 개발자"],
  },
  {
    name: "테크이노베이션",
    category: "AI/ML",
    description: "머신러닝 솔루션 개발",
    hiringPositions: ["ML 엔지니어", "데이터 사이언티스트"],
  },
  {
    name: "클라우드솔루션즈",
    category: "클라우드",
    description: "AWS 기반 인프라 구축",
    hiringPositions: ["클라우드 엔지니어", "DevOps"],
  },
  {
    name: "스마트시스템즈",
    category: "풀스택",
    description: "엔터프라이즈 솔루션 개발",
    hiringPositions: ["풀스택 개발자", "시스템 아키텍트"],
  },
  {
    name: "데이터사이언스랩",
    category: "AI/ML",
    description: "빅데이터 분석 플랫폼",
    hiringPositions: ["데이터 엔지니어", "AI 연구원"],
  },
  {
    name: "넥스트제너레이션",
    category: "스타트업",
    description: "AI 스타트업 액셀러레이터",
    hiringPositions: ["AI 개발자", "프로덕트 매니저"],
  },
];

export const CompaniesSection = () => {
  const stats = {
    totalCompanies: 13,
    averageSalary: "4,200만원",
    employmentRate: "92%",
    regularConversionRate: "85%",
  };

  return (
    <section id="companies" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">참여기업</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            13개 파트너사와 함께하는 취업 연계 프로그램
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-lg gradient-card-bg border border-primary/30">
            <p className="text-3xl font-bold gradient-text">{stats.totalCompanies}</p>
            <p className="text-sm text-muted-foreground mt-1">참여 기업</p>
          </div>
          <div className="text-center p-6 rounded-lg gradient-card-bg border border-primary/30">
            <p className="text-3xl font-bold gradient-text">{stats.employmentRate}</p>
            <p className="text-sm text-muted-foreground mt-1">취업률</p>
          </div>
          <div className="text-center p-6 rounded-lg gradient-card-bg border border-primary/30">
            <p className="text-3xl font-bold gradient-text">{stats.averageSalary}</p>
            <p className="text-sm text-muted-foreground mt-1">평균 연봉</p>
          </div>
          <div className="text-center p-6 rounded-lg gradient-card-bg border border-primary/30">
            <p className="text-3xl font-bold gradient-text">{stats.regularConversionRate}</p>
            <p className="text-sm text-muted-foreground mt-1">정규직 전환</p>
          </div>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-card hover:shadow-elevated transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-3">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="outline" className="gradient-card-bg">
                    {company.category}
                  </Badge>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">채용 포지션</p>
                    <div className="flex flex-wrap gap-1">
                      {company.hiringPositions.map((position, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {position}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
