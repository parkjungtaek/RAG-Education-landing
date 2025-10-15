import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const curriculum = [
  {
    id: "month1",
    title: "1월차 - 개발 & 클라우드 기초",
    duration: "160H",
    progress: 16.7,
    modules: [
      {
        name: "프로그래밍 기초 및 버전 관리",
        hours: 104,
        topics: ["Python 심화", "Java 기초", "Git/GitHub 협업"],
      },
      {
        name: "클라우드 인프라 구축",
        hours: 40,
        topics: ["AWS 기초", "EC2/S3", "Lambda 함수"],
      },
    ],
    milestone: "클라우드 환경에서 첫 웹 서비스 배포",
  },
  {
    id: "month2",
    title: "2월차 - 웹 개발 & 데이터베이스",
    duration: "160H",
    progress: 33.4,
    modules: [
      {
        name: "웹 프레임워크",
        hours: 80,
        topics: ["FastAPI", "React 기초", "RESTful API"],
      },
      {
        name: "데이터베이스 설계",
        hours: 64,
        topics: ["PostgreSQL", "NoSQL", "데이터 모델링"],
      },
    ],
    milestone: "풀스택 웹 애플리케이션 개발",
  },
  {
    id: "month3",
    title: "3월차 - AI/ML 기초",
    duration: "160H",
    progress: 50.1,
    modules: [
      {
        name: "머신러닝 기초",
        hours: 80,
        topics: ["scikit-learn", "데이터 전처리", "모델 평가"],
      },
      {
        name: "딥러닝 입문",
        hours: 80,
        topics: ["TensorFlow", "PyTorch", "신경망 구조"],
      },
    ],
    milestone: "ML 모델 학습 및 배포",
  },
  {
    id: "month4",
    title: "4월차 - LLM & RAG",
    duration: "160H",
    progress: 66.8,
    modules: [
      {
        name: "OpenAI API",
        hours: 64,
        topics: ["GPT-4 활용", "Prompt Engineering", "Fine-tuning"],
      },
      {
        name: "LangChain & RAG",
        hours: 96,
        topics: ["LangChain 프레임워크", "벡터 DB", "RAG 파이프라인"],
      },
    ],
    milestone: "지능형 챗봇 시스템 구축",
  },
  {
    id: "month5",
    title: "5월차 - MLOps & 프로젝트",
    duration: "160H",
    progress: 83.5,
    modules: [
      {
        name: "MLOps 파이프라인",
        hours: 80,
        topics: ["Docker/K8s", "CI/CD", "모니터링"],
      },
      {
        name: "팀 프로젝트 1차",
        hours: 80,
        topics: ["요구사항 분석", "설계", "개발"],
      },
    ],
    milestone: "AI 서비스 자동화 구축",
  },
  {
    id: "month6",
    title: "6월차 - 최종 프로젝트",
    duration: "160H",
    progress: 100,
    modules: [
      {
        name: "팀 프로젝트 완성",
        hours: 120,
        topics: ["개발", "테스트", "배포"],
      },
      {
        name: "발표 및 포트폴리오",
        hours: 40,
        topics: ["기술 문서", "발표 준비", "데모"],
      },
    ],
    milestone: "포트폴리오 완성 및 최종 발표",
  },
];

export const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">
            커리큘럼
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            6개월간의 체계적인 학습 로드맵
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {curriculum.map((month, index) => (
              <AccordionItem
                key={month.id}
                value={month.id}
                className="border border-border rounded-xl px-8 py-2 bg-card hover:border-primary/50 transition-smooth"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-foreground">{month.title}</h3>
                      <Badge className="bg-primary text-black font-black text-base px-4 py-1">{month.duration}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={month.progress} className="flex-1 h-3" />
                      <span className="text-base text-muted-foreground font-bold">{month.progress}%</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-6">
                    {month.modules.map((module, i) => (
                      <div key={i} className="border-l-4 border-primary pl-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-lg text-foreground">{module.name}</h4>
                          <Badge className="bg-primary/10 text-primary border-primary/30 font-bold">{module.hours}시간</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.topics.map((topic, j) => (
                            <Badge key={j} className="bg-secondary text-white border-border font-medium">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 p-5 rounded-xl bg-primary/10 border-2 border-primary/30">
                      <p className="text-base font-bold text-foreground">
                        🎯 마일스톤: {month.milestone}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
