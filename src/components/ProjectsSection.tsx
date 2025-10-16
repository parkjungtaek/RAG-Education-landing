import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users as UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "project1",
    title: "AI Meeting Agent",
    duration: "120시간",
    teamSize: "4-5명",
    description: "실시간 회의 전사 및 인사이트 도출 시스템",
    connectedModules: [1, 2, 3],
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
