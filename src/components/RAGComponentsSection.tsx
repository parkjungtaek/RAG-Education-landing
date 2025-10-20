import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  FileText,
  Database,
  GitBranch,
  ArrowUpDown,
  MessageCircle,
  HelpCircle,
  Cloud,
  Rocket,
  BarChart3,
  Activity,
  CheckCircle2
} from "lucide-react";

// RAG 구성 요소 타입 정의
interface RAGComponent {
  id: string;
  title: string;
  description: string;
  icon: any;
  secondaryIcon?: any;
  color: string;
  gradient: string;
  active: boolean;
}

export const RAGComponentsSection = () => {
  // 각 구성 요소의 활성화 상태 관리
  const [components, setComponents] = useState<RAGComponent[]>([
    {
      id: "document-stt",
      title: "문서·음성(STT)",
      description: "다양한 문서 포맷과 음성을 텍스트로 변환하여 처리합니다",
      icon: FileText,
      secondaryIcon: Mic,
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-500/20",
      active: false
    },
    {
      id: "embedding-vectordb",
      title: "임베딩/벡터DB",
      description: "텍스트를 벡터로 변환하고 효율적으로 저장합니다",
      icon: Database,
      secondaryIcon: GitBranch,
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/20",
      active: false
    },
    {
      id: "reranking",
      title: "리랭킹",
      description: "검색 결과의 관련성을 재평가하여 순위를 최적화합니다",
      icon: ArrowUpDown,
      color: "orange",
      gradient: "from-orange-500/20 to-yellow-500/20",
      active: false
    },
    {
      id: "qa-chatbot",
      title: "Q&A/챗봇",
      description: "자연스러운 대화형 인터페이스로 질문에 답변합니다",
      icon: MessageCircle,
      secondaryIcon: HelpCircle,
      color: "green",
      gradient: "from-green-500/20 to-emerald-500/20",
      active: false
    },
    {
      id: "api-deploy",
      title: "API 배포",
      description: "RESTful API로 서비스를 배포하고 관리합니다",
      icon: Cloud,
      secondaryIcon: Rocket,
      color: "cyan",
      gradient: "from-cyan-500/20 to-blue-500/20",
      active: false
    },
    {
      id: "dashboard",
      title: "프로덕션 대시보드",
      description: "실시간 모니터링과 성능 분석 대시보드를 제공합니다",
      icon: BarChart3,
      secondaryIcon: Activity,
      color: "indigo",
      gradient: "from-indigo-500/20 to-purple-500/20",
      active: false
    }
  ]);

  // 구성 요소 클릭 시 활성화 토글
  const toggleComponent = (id: string) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === id ? { ...comp, active: !comp.active } : comp
      )
    );
  };

  // 색상별 테마 클래스 반환
  const getColorClasses = (color: string, active: boolean) => {
    const opacity = active ? "100" : "50";
    const baseColors: Record<string, any> = {
      blue: {
        text: `text-blue-${active ? "400" : "500"}`,
        border: `border-blue-${active ? "400" : "500"}`,
        bg: `bg-blue-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      },
      purple: {
        text: `text-purple-${active ? "400" : "500"}`,
        border: `border-purple-${active ? "400" : "500"}`,
        bg: `bg-purple-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(168,85,247,0.5)]" : "shadow-[0_0_15px_rgba(168,85,247,0.3)]"
      },
      orange: {
        text: `text-orange-${active ? "400" : "500"}`,
        border: `border-orange-${active ? "400" : "500"}`,
        bg: `bg-orange-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(249,115,22,0.5)]" : "shadow-[0_0_15px_rgba(249,115,22,0.3)]"
      },
      green: {
        text: `text-green-${active ? "400" : "500"}`,
        border: `border-green-${active ? "400" : "500"}`,
        bg: `bg-green-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(34,197,94,0.5)]" : "shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      },
      cyan: {
        text: `text-cyan-${active ? "400" : "500"}`,
        border: `border-cyan-${active ? "400" : "500"}`,
        bg: `bg-cyan-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "shadow-[0_0_15px_rgba(6,182,212,0.3)]"
      },
      indigo: {
        text: `text-indigo-${active ? "400" : "500"}`,
        border: `border-indigo-${active ? "400" : "500"}`,
        bg: `bg-indigo-500`,
        shadow: active ? "shadow-[0_0_30px_rgba(99,102,241,0.5)]" : "shadow-[0_0_15px_rgba(99,102,241,0.3)]"
      }
    };
    return baseColors[color] || baseColors.blue;
  };

  return (
    <section id="rag-components" className="relative py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            RAG 시스템 구성 요소
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300/90 font-medium mb-4">
            클릭하여 각 구성 요소를 활성화해보세요
          </p>
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold px-4 py-2 text-sm">
            활성화: {components.filter(c => c.active).length} / {components.length}
          </Badge>
        </motion.div>

        {/* 구성 요소 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {components.map((component, index) => {
            const colors = getColorClasses(component.color, component.active);
            const Icon = component.icon;
            const SecondaryIcon = component.secondaryIcon;

            return (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* 활성화 시 외부 글로우 효과 */}
                  {component.active && (
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-br ${component.gradient} rounded-2xl blur-xl ${colors.shadow}`}
                      animate={{
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  )}

                  <Card
                    onClick={() => toggleComponent(component.id)}
                    className={`
                      relative h-full cursor-pointer
                      bg-gradient-to-br from-slate-900/90 via-slate-800/60 to-slate-900/90
                      backdrop-blur-md border-2 transition-all duration-500
                      ${component.active
                        ? `${colors.border} ${colors.shadow}`
                        : "border-slate-700/50 hover:border-slate-600"
                      }
                    `}
                  >
                    <div className="p-6 relative">
                      {/* 활성화 체크마크 */}
                      {component.active && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute top-4 right-4"
                        >
                          <CheckCircle2 className={`w-6 h-6 ${colors.text}`} />
                        </motion.div>
                      )}

                      {/* 아이콘 섹션 */}
                      <div className="flex items-center gap-4 mb-4">
                        {/* 메인 아이콘 */}
                        <motion.div
                          className={`
                            relative w-16 h-16 rounded-xl flex items-center justify-center
                            border-2 ${colors.border}
                            bg-gradient-to-br ${component.gradient}
                          `}
                          animate={component.active ? {
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0]
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: component.active ? Infinity : 0
                          }}
                        >
                          {/* 내부 펄스 효과 */}
                          {component.active && (
                            <motion.div
                              className={`absolute inset-0 ${colors.bg} rounded-xl opacity-20`}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                          )}
                          <Icon className={`relative w-8 h-8 ${colors.text} ${component.active ? "drop-shadow-[0_0_8px_currentColor]" : ""}`} />
                        </motion.div>

                        {/* 보조 아이콘 (있는 경우) */}
                        {SecondaryIcon && (
                          <motion.div
                            className={`
                              w-12 h-12 rounded-lg flex items-center justify-center
                              border ${colors.border} ${component.active ? "opacity-100" : "opacity-50"}
                              bg-gradient-to-br ${component.gradient}
                            `}
                            animate={component.active ? {
                              y: [0, -5, 0]
                            } : {}}
                            transition={{
                              duration: 2.5,
                              repeat: component.active ? Infinity : 0,
                              delay: 0.5
                            }}
                          >
                            <SecondaryIcon className={`w-6 h-6 ${colors.text}`} />
                          </motion.div>
                        )}
                      </div>

                      {/* 제목 */}
                      <h3 className={`
                        text-xl font-black mb-2 transition-colors duration-300
                        ${component.active ? "text-white" : "text-gray-300"}
                      `}>
                        {component.title}
                      </h3>

                      {/* 설명 (툴팁 역할) */}
                      <p className={`
                        text-sm leading-relaxed transition-colors duration-300
                        ${component.active ? "text-gray-300" : "text-gray-500"}
                      `}>
                        {component.description}
                      </p>

                      {/* 상태 표시 */}
                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <Badge
                          className={`
                            text-xs font-bold transition-all duration-300
                            ${component.active
                              ? `${colors.bg}/20 ${colors.text} ${colors.border}`
                              : "bg-slate-800 text-slate-400 border-slate-600"
                            }
                          `}
                        >
                          {component.active ? "활성화됨" : "클릭하여 활성화"}
                        </Badge>
                      </div>

                      {/* 호버 시 하단 강조선 */}
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} rounded-b-lg`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 설명 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl">
            <p className="text-gray-300 text-sm">
              💡 각 구성 요소를 클릭하면 <span className="text-cyan-400 font-bold">활성화/비활성화</span>가 전환됩니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
