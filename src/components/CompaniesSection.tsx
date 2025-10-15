import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Meeting Agent",
    description: "실시간 회의록 자동화 및 요약 시스템",
    duration: "120시간",
    teamSize: "4-5명",
    features: [
      "실시간 음성 인식 및 텍스트 변환",
      "자동 회의록 생성 및 요약",
      "주요 안건 및 액션 아이템 추출",
      "다국어 지원 (한/영/일)",
      "캘린더 연동 및 자동 공유",
      "검색 가능한 회의 아카이브"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "TailwindCSS"],
      backend: ["FastAPI", "PostgreSQL", "Redis"],
      ai: ["Whisper", "GPT-4", "LangChain"],
      infra: ["Docker", "AWS", "S3"]
    }
  },
  {
    title: "AI News Curation Platform",
    description: "개인화된 뉴스 추천 및 요약 플랫폼",
    duration: "150시간",
    teamSize: "5-6명",
    features: [
      "사용자 관심사 기반 뉴스 추천",
      "AI 기반 뉴스 요약 및 번역",
      "트렌드 분석 및 시각화",
      "중복 뉴스 제거 및 팩트체크",
      "RSS 피드 통합 관리",
      "모바일 푸시 알림"
    ],
    techStack: {
      frontend: ["Next.js", "React", "Zustand"],
      backend: ["Node.js", "MongoDB", "GraphQL"],
      ai: ["BERT", "GPT-3.5", "Pinecone"],
      infra: ["Vercel", "AWS Lambda", "CloudFront"]
    }
  },
  {
    title: "Customer Service Chatbot",
    description: "RAG 기반 고객 상담 자동화 챗봇",
    duration: "100시간",
    teamSize: "3-4명",
    features: [
      "자연어 기반 상담 자동 응답",
      "FAQ 및 매뉴얼 RAG 검색",
      "감정 분석 및 우선순위 분류",
      "상담원 에스컬레이션 시스템",
      "대화 히스토리 관리",
      "다채널 통합 (웹, 모바일, 카카오톡)"
    ],
    techStack: {
      frontend: ["Vue.js", "Vuex", "Socket.io"],
      backend: ["Django", "PostgreSQL", "Celery"],
      ai: ["LangChain", "OpenAI", "ChromaDB"],
      infra: ["Kubernetes", "GCP", "Nginx"]
    }
  },
  {
    title: "Document RAG System",
    description: "대용량 문서 검색 및 질의응답 시스템",
    duration: "180시간",
    teamSize: "5명",
    features: [
      "PDF, Word, Excel 문서 자동 파싱",
      "의미 기반 문서 검색 (Semantic Search)",
      "컨텍스트 기반 Q&A",
      "문서 간 참조 및 연관성 분석",
      "하이라이팅 및 출처 표시",
      "버전 관리 및 권한 제어"
    ],
    techStack: {
      frontend: ["React", "Redux", "Material-UI"],
      backend: ["FastAPI", "PostgreSQL", "Elasticsearch"],
      ai: ["LlamaIndex", "GPT-4", "FAISS"],
      infra: ["Docker", "AWS ECS", "RDS"]
    }
  },
  {
    title: "AI Code Review Assistant",
    description: "자동 코드 리뷰 및 개선 제안 시스템",
    duration: "130시간",
    teamSize: "4명",
    features: [
      "Pull Request 자동 분석",
      "코드 품질 및 보안 취약점 검사",
      "리팩토링 제안 및 예시 코드",
      "컨벤션 및 베스트 프랙티스 검증",
      "테스트 커버리지 분석",
      "GitHub/GitLab 통합"
    ],
    techStack: {
      frontend: ["Svelte", "TypeScript", "TailwindCSS"],
      backend: ["Go", "Redis", "RabbitMQ"],
      ai: ["CodeLlama", "GPT-4", "Tree-sitter"],
      infra: ["Docker", "GitHub Actions", "AWS"]
    }
  },
  {
    title: "Multimodal RAG Platform",
    description: "이미지-텍스트 통합 검색 및 분석 플랫폼",
    duration: "200시간",
    teamSize: "6명",
    features: [
      "이미지 및 텍스트 통합 검색",
      "멀티모달 임베딩 생성",
      "시각적 질의응답 (Visual QA)",
      "이미지 캡셔닝 및 태깅",
      "유사 이미지 검색",
      "대시보드 및 분석 리포트"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Ant Design"],
      backend: ["Python", "FastAPI", "MinIO"],
      ai: ["CLIP", "GPT-4V", "Weaviate"],
      infra: ["Kubernetes", "AWS", "CloudFront"]
    }
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
    <section id="companies" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">
            참여기업
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            13개 파트너사와 함께하는 취업 연계 프로그램
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
        >
          <div className="text-center p-8 rounded-xl bg-primary/10 border-2 border-primary/30">
            <p className="text-5xl font-black text-primary mb-2">{stats.totalCompanies}</p>
            <p className="text-sm text-muted-foreground font-bold">참여 기업</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-primary/10 border-2 border-primary/30">
            <p className="text-5xl font-black text-primary mb-2">{stats.employmentRate}</p>
            <p className="text-sm text-muted-foreground font-bold">취업률</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-primary/10 border-2 border-primary/30">
            <p className="text-5xl font-black text-primary mb-2">{stats.averageSalary}</p>
            <p className="text-sm text-muted-foreground font-bold">평균 연봉</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-primary/10 border-2 border-primary/30">
            <p className="text-5xl font-black text-primary mb-2">{stats.regularConversionRate}</p>
            <p className="text-sm text-muted-foreground font-bold">정규직 전환</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/40 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 group">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {project.teamSize}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-primary font-bold mb-2">Frontend</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.frontend.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/30 text-xs font-semibold hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-emerald-400 font-bold mb-2">Backend</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.backend.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-emerald-400/10 text-emerald-400 border-emerald-400/30 text-xs font-semibold hover:bg-emerald-400/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-blue-400 font-bold mb-2">AI</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.ai.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-blue-400/10 text-blue-400 border-blue-400/30 text-xs font-semibold hover:bg-blue-400/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-orange-400 font-bold mb-2">Infra</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.infra.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-orange-400/10 text-orange-400 border-orange-400/30 text-xs font-semibold hover:bg-orange-400/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
