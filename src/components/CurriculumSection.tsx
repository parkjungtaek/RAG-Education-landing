import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const curriculum = [
  {
    id: "month1",
    title: "1월차 - Python & AI 개발 기초",
    duration: "160H",
    progress: 16.7,
    modules: [
      {
        name: "Python 프로그래밍 심화",
        hours: 80,
        topics: ["Python 고급 문법", "데이터 구조", "모듈/패키지"],
      },
      {
        name: "AI 개발 환경 구축",
        hours: 80,
        topics: ["Git/GitHub", "Docker 기초", "가상환경 관리"],
      },
    ],
    milestone: "AI 개발을 위한 기본 환경 구축",
  },
  {
    id: "month2",
    title: "2월차 - 데이터 처리 & 전처리",
    duration: "160H",
    progress: 33.4,
    modules: [
      {
        name: "텍스트 데이터 처리",
        hours: 80,
        topics: ["NLP 기초", "토큰화", "임베딩"],
      },
      {
        name: "음성 데이터 처리",
        hours: 80,
        topics: ["음성 신호 처리", "STT 기초", "오디오 분석"],
      },
    ],
    milestone: "멀티모달 데이터 전처리 파이프라인 구축",
  },
  {
    id: "month3",
    title: "3월차 - LLM & Prompt Engineering",
    duration: "160H",
    progress: 50.1,
    modules: [
      {
        name: "대규모 언어 모델 이해",
        hours: 80,
        topics: ["LLM 개념", "GPT/Claude", "API 활용"],
      },
      {
        name: "프롬프트 엔지니어링",
        hours: 80,
        topics: ["프롬프트 설계", "Chain of Thought", "Few-shot Learning"],
      },
    ],
    milestone: "LLM 기반 애플리케이션 개발",
  },
  {
    id: "month4",
    title: "4월차 - RAG 시스템 구축",
    duration: "160H",
    progress: 66.8,
    modules: [
      {
        name: "RAG 핵심 기술",
        hours: 96,
        topics: ["벡터 DB", "임베딩", "검색 최적화", "Context 관리"],
      },
      {
        name: "LangChain 프레임워크",
        hours: 64,
        topics: ["Chain 구성", "Agent 활용", "Memory 관리"],
      },
    ],
    milestone: "RAG 기반 지능형 검색 시스템 개발",
  },
  {
    id: "month5",
    title: "5월차 - 음성 AI & 멀티모달 통합",
    duration: "160H",
    progress: 83.5,
    modules: [
      {
        name: "음성 AI 기술",
        hours: 80,
        topics: ["Whisper API", "TTS", "음성 감정 분석"],
      },
      {
        name: "멀티모달 RAG 구현",
        hours: 80,
        topics: ["텍스트+음성 통합", "크로스모달 검색", "멀티모달 임베딩"],
      },
    ],
    milestone: "음성·텍스트 통합 RAG 시스템 구축",
  },
  {
    id: "month6",
    title: "6월차 - 실전 프로젝트",
    duration: "160H",
    progress: 100,
    modules: [
      {
        name: "RAG 응용 프로젝트",
        hours: 120,
        topics: ["문서 기반 챗봇", "음성 검색 시스템", "고객 지원 AI"],
      },
      {
        name: "배포 & 최적화",
        hours: 40,
        topics: ["클라우드 배포", "성능 튜닝", "비용 최적화"],
      },
    ],
    milestone: "실전 RAG 애플리케이션 완성 및 배포",
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
