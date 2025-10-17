import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users as UsersIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "project1",
    title: "AI Meeting Agent",
    duration: "120시간",
    teamSize: "4-5명",
    description: "실시간 회의 전사 및 인사이트 도출 시스템",
    connectedModules: [1, 2, 3],
    moduleConnections: [[1, 2], [2, 3]],
    detailedDescription: "비즈니스 환경에서 회의는 필수적이지만, 회의록 작성과 후속 조치는 종종 간과됩니다. AI Meeting Agent는 실시간 음성인식 기술과 자연어 처리를 결합하여 회의 내용을 자동으로 전사하고, 핵심 안건과 액션 아이템을 자동으로 추출합니다. 이 프로젝트를 통해 실시간 데이터 처리, RAG 기반 검색 시스템, 클라우드 배포까지 전체 AI 시스템 개발 사이클을 경험할 수 있습니다.",
    moduleUsage: {
      1: "Whisper API를 활용한 실시간 STT 구현 및 음성 데이터 처리",
      2: "과거 회의록을 벡터DB에 저장하고 RAG 기반 회의 검색 시스템 구축",
      3: "FastAPI 서버를 Kubernetes에 배포하고 프로덕션 환경 구성",
    },
    learningGoals: [
      "실시간 오디오 스트리밍 처리 기술 습득",
      "대규모 언어 모델(LLM)과 RAG 시스템 통합",
      "프로덕션급 AI 서비스 배포 및 모니터링",
    ],
    features: [
      "실시간 음성인식 (STT)",
      "화자 분리 및 감정 분석",
      "Action Item 자동 추출",
      "Jira/Asana 연동",
      "RAG 기반 회의록 검색",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "WebSocket"],
      backend: ["FastAPI", "LangChain", "Celery"],
      ai: ["Whisper", "GPT-4", "FAISS"],
      infra: ["Docker", "K8s", "AWS"],
    },
  },
  {
    id: "project2",
    title: "AI News Curation Platform",
    duration: "200시간",
    teamSize: "4-5명",
    description: "개인화된 AI 뉴스 큐레이션 및 요약 서비스",
    connectedModules: [1, 3, 4],
    moduleConnections: [[1, 3], [3, 4]],
    detailedDescription: "정보 과부하 시대에 개인화된 뉴스 큐레이션은 필수입니다. AI News Curation Platform은 다양한 뉴스 소스에서 자동으로 기사를 수집하고, AI를 활용하여 요약 및 분류합니다. 사용자의 관심사를 학습하여 맞춤형 뉴스를 추천하고, 실시간으로 트렌드를 분석합니다. 이 프로젝트를 통해 데이터 파이프라인, AI 추천 시스템, 실시간 분석 시스템 구축 능력을 키울 수 있습니다.",
    moduleUsage: {
      1: "팟캐스트 형태 뉴스의 음성을 텍스트로 변환하여 콘텐츠 확장",
      3: "스케일 가능한 크롤링 및 추천 API를 클라우드에 배포",
      4: "Kafka를 활용한 실시간 뉴스 수집 및 스트리밍 처리 파이프라인 구축",
    },
    learningGoals: [
      "대규모 웹 크롤링 및 데이터 파이프라인 구축",
      "개인화 추천 알고리즘 설계 및 구현",
      "실시간 데이터 스트리밍 아키텍처 이해",
    ],
    features: [
      "자동 뉴스 크롤링",
      "AI 기반 요약 및 분류",
      "개인화 추천 알고리즘",
      "실시간 트렌드 분석",
      "다국어 번역 지원",
    ],
    techStack: {
      frontend: ["Next.js", "TailwindCSS"],
      backend: ["Python", "FastAPI", "PostgreSQL"],
      ai: ["GPT-4", "Claude", "Embeddings"],
      infra: ["Docker", "AWS", "Redis"],
    },
  },
];

interface ProjectsSectionProps {
  selectedProjectId: string | null;
  onProjectSelect: (projectId: string) => void;
}

export const ProjectsSection = ({ selectedProjectId, onProjectSelect }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">
            프로젝트
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            실무 중심의 팀 프로젝트로 포트폴리오 완성
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isSelected = selectedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  className={`h-full bg-card border-2 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => onProjectSelect(project.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-2xl font-black">{project.title}</CardTitle>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-primary rounded-full"
                        />
                      )}
                    </div>
                  <div className="flex gap-6 text-base text-muted-foreground font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-5 h-5" />
                      {project.teamSize}
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3 font-medium">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-foreground">주요 기능</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectSelect(project.id);
                        setTimeout(() => {
                          const modulesSection = document.getElementById('modules');
                          if (modulesSection) {
                            modulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 300);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      프로젝트 상세 보기
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { projects };
