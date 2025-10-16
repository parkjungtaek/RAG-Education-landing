import { motion } from "framer-motion";
import { Mic, FileSearch, Cloud, Activity } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "음성 데이터 처리 및 변환",
    icon: Mic,
    color: "cyan",
    position: { x: 0, y: 0 },
    connections: [2, 4]
  },
  {
    id: 2,
    title: "RAG 기반 AI 문서 검색 및 질의응답 시스템 개발",
    icon: FileSearch,
    color: "purple",
    position: { x: 1, y: 0 },
    connections: [3]
  },
  {
    id: 3,
    title: "클라우드 기반 AI 모델 배포 및 API 연동",
    icon: Cloud,
    color: "blue",
    position: { x: 1, y: 1 },
    connections: [4]
  },
  {
    id: 4,
    title: "실시간 데이터 스트리밍 및 AI 분석 시스템 구축",
    icon: Activity,
    color: "emerald",
    position: { x: 0, y: 1 },
    connections: []
  }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; glow: string; text: string; shadow: string }> = {
    cyan: {
      bg: "from-cyan-600/20 to-cyan-900/10",
      border: "border-cyan-500/50",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
      text: "text-cyan-400",
      shadow: "drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
    },
    purple: {
      bg: "from-purple-600/20 to-purple-900/10",
      border: "border-purple-500/50",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      text: "text-purple-400",
      shadow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
    },
    blue: {
      bg: "from-blue-600/20 to-blue-900/10",
      border: "border-blue-500/50",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
      text: "text-blue-400",
      shadow: "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
    },
    emerald: {
      bg: "from-emerald-600/20 to-emerald-900/10",
      border: "border-emerald-500/50",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      text: "text-emerald-400",
      shadow: "drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
    }
  };
  return colors[color];
};

export const ModulesSection = () => {
  return (
    <section id="modules" className="relative py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,100,100,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,100,100,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            학습 모듈
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            연결된 지식의 네트워크
          </p>
        </motion.div>

        {/* Obsidian-style Graph */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {modules.map((module) =>
              module.connections.map((targetId) => {
                const target = modules.find(m => m.id === targetId);
                if (!target) return null;

                const startX = (module.position.x * 500 + 250) + 100;
                const startY = (module.position.y * 280 + 140) + 100;
                const endX = (target.position.x * 500 + 250) + 100;
                const endY = (target.position.y * 280 + 140) + 100;

                const colors: Record<string, string> = {
                  cyan: "rgba(6,182,212,0.4)",
                  purple: "rgba(168,85,247,0.4)",
                  blue: "rgba(59,130,246,0.4)",
                  emerald: "rgba(16,185,129,0.4)"
                };

                return (
                  <motion.line
                    key={`${module.id}-${targetId}`}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={colors[module.color]}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                );
              })
            )}
          </svg>

          {/* Module Nodes */}
          <div className="relative grid grid-cols-2 gap-6 md:gap-12" style={{ zIndex: 2 }}>
            {modules.map((module, index) => {
              const colors = getColorClasses(module.color);

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                  style={{
                    gridColumn: module.position.x + 1,
                    gridRow: module.position.y + 1
                  }}
                >
                  <motion.div
                    className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-2 ${colors.border} ${colors.glow} transition-all duration-500 cursor-pointer group`}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 40px ${module.color === 'cyan' ? 'rgba(6,182,212,0.5)' : module.color === 'purple' ? 'rgba(168,85,247,0.5)' : module.color === 'blue' ? 'rgba(59,130,246,0.5)' : 'rgba(16,185,129,0.5)'}`
                    }}
                  >
                    {/* Pulsing Glow */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30`}
                      animate={{
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="mb-4"
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <module.icon className={`w-10 h-10 md:w-12 md:h-12 ${colors.text} ${colors.shadow}`} />
                      </motion.div>

                      {/* Module Number */}
                      <div className={`inline-block px-3 py-1 mb-3 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border}`}>
                        <span className={`text-xs font-bold ${colors.text}`}>
                          Module_{module.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                        {module.title}
                      </h3>
                    </div>

                    {/* Connection Points */}
                    {module.connections.length > 0 && (
                      <motion.div
                        className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${colors.border} bg-black`}
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            `0 0 0 0 ${module.color === 'cyan' ? 'rgba(6,182,212,0.7)' : module.color === 'purple' ? 'rgba(168,85,247,0.7)' : module.color === 'blue' ? 'rgba(59,130,246,0.7)' : 'rgba(16,185,129,0.7)'}`,
                            `0 0 0 4px ${module.color === 'cyan' ? 'rgba(6,182,212,0)' : module.color === 'purple' ? 'rgba(168,85,247,0)' : module.color === 'blue' ? 'rgba(59,130,246,0)' : 'rgba(16,185,129,0)'}`,
                            `0 0 0 0 ${module.color === 'cyan' ? 'rgba(6,182,212,0)' : module.color === 'purple' ? 'rgba(168,85,247,0)' : module.color === 'blue' ? 'rgba(59,130,246,0)' : 'rgba(16,185,129,0)'}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 font-medium">
            모듈 간 연결은 학습 흐름과 의존성을 나타냅니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};
