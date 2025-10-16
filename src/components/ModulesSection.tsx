import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileSearch, Cloud, Activity } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "음성 데이터 처리 및 변환",
    icon: Mic,
    color: "cyan",
    position: { top: "15%", left: "15%" },
    connections: [2, 4]
  },
  {
    id: 2,
    title: "RAG 기반 AI 문서 검색 및 질의응답 시스템 개발",
    icon: FileSearch,
    color: "purple",
    position: { top: "15%", left: "60%" },
    connections: [3]
  },
  {
    id: 3,
    title: "클라우드 기반 AI 모델 배포 및 API 연동",
    icon: Cloud,
    color: "blue",
    position: { top: "60%", left: "60%" },
    connections: [4]
  },
  {
    id: 4,
    title: "실시간 데이터 스트리밍 및 AI 분석 시스템 구축",
    icon: Activity,
    color: "emerald",
    position: { top: "60%", left: "15%" },
    connections: []
  }
];

interface ModulesSectionProps {
  selectedProjectId: string | null;
  connectedModules: number[];
  selectedProject: {
    id: string;
    title: string;
    description: string;
    connectedModules: number[];
  } | null;
}

const getColorClasses = (color: string) => {
  const colors: Record<string, {
    bg: string;
    border: string;
    glow: string;
    text: string;
    shadow: string;
    rgba: string;
    rgbaHeavy: string;
  }> = {
    cyan: {
      bg: "from-cyan-600/20 to-cyan-900/10",
      border: "border-cyan-500/60",
      glow: "shadow-[0_0_30px_rgba(6,182,212,0.4)]",
      text: "text-cyan-400",
      shadow: "drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]",
      rgba: "rgba(6,182,212,0.5)",
      rgbaHeavy: "rgba(6,182,212,0.8)"
    },
    purple: {
      bg: "from-purple-600/20 to-purple-900/10",
      border: "border-purple-500/60",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.4)]",
      text: "text-purple-400",
      shadow: "drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]",
      rgba: "rgba(168,85,247,0.5)",
      rgbaHeavy: "rgba(168,85,247,0.8)"
    },
    blue: {
      bg: "from-blue-600/20 to-blue-900/10",
      border: "border-blue-500/60",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.4)]",
      text: "text-blue-400",
      shadow: "drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]",
      rgba: "rgba(59,130,246,0.5)",
      rgbaHeavy: "rgba(59,130,246,0.8)"
    },
    emerald: {
      bg: "from-emerald-600/20 to-emerald-900/10",
      border: "border-emerald-500/60",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
      text: "text-emerald-400",
      shadow: "drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]",
      rgba: "rgba(16,185,129,0.5)",
      rgbaHeavy: "rgba(16,185,129,0.8)"
    }
  };
  return colors[color];
};

export const ModulesSection = ({ selectedProjectId, connectedModules, selectedProject }: ModulesSectionProps) => {
  return (
    <section id="modules" className="relative py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Dense Network Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgb(100,100,150)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Network Lines Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              height: '1px',
              width: `${Math.random() * 600 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.5 ? '6,182,212' : '168,85,247'},${Math.random() * 0.5 + 0.3})`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

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

        {/* Project Description Panel */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-12 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                  <span>연결된 모듈:</span>
                  {selectedProject.connectedModules.map((moduleId, index) => (
                    <span key={moduleId}>
                      Module_{moduleId}
                      {index < selectedProject.connectedModules.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Obsidian-style Graph */}
        <div className="relative w-full h-[800px] max-w-7xl mx-auto">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              {modules.map((module) => {
                const colors = getColorClasses(module.color);
                return (
                  <linearGradient key={`gradient-${module.id}`} id={`lineGradient-${module.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={colors.rgba} stopOpacity="0.2" />
                    <stop offset="50%" stopColor={colors.rgbaHeavy} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={colors.rgba} stopOpacity="0.2" />
                  </linearGradient>
                );
              })}
            </defs>

            {modules.map((module) =>
              module.connections.map((targetId) => {
                const target = modules.find(m => m.id === targetId);
                if (!target) return null;

                const startX = `${module.position.left}`;
                const startY = `${module.position.top}`;
                const endX = `${target.position.left}`;
                const endY = `${target.position.top}`;

                const isModuleConnected = connectedModules.includes(module.id);
                const isTargetConnected = connectedModules.includes(targetId);
                const isConnectionActive = selectedProjectId && isModuleConnected && isTargetConnected;

                return (
                  <g key={`connection-${module.id}-${targetId}`}>
                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={`url(#lineGradient-${module.id})`}
                      strokeWidth={isConnectionActive ? "5" : "3"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      animate={{
                        opacity: isConnectionActive ? 1 : selectedProjectId ? 0.2 : 1,
                        strokeWidth: isConnectionActive ? [5, 7, 5] : [3, 3, 3]
                      }}
                    />

                    <motion.circle
                      r="4"
                      fill={getColorClasses(module.color).rgbaHeavy}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isConnectionActive ? [0.8, 1, 0.8] : [0.5, 1, 0.5],
                        r: isConnectionActive ? [4, 6, 4] : [3, 5, 3],
                        display: isConnectionActive || !selectedProjectId ? "block" : "none"
                      }}
                      transition={{
                        duration: isConnectionActive ? 1.5 : 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    >
                      <animateMotion
                        dur={isConnectionActive ? "2s" : "4s"}
                        repeatCount="indefinite"
                        path={`M ${startX} ${startY} L ${endX} ${endY}`}
                      />
                    </motion.circle>
                  </g>
                );
              })
            )}
          </svg>

          {/* Module Nodes */}
          {modules.map((module, index) => {
            const colors = getColorClasses(module.color);
            const isModuleActive = connectedModules.includes(module.id);
            const isModuleDimmed = selectedProjectId && !isModuleActive;

            return (
              <motion.div
                key={module.id}
                className="absolute"
                style={{
                  top: module.position.top,
                  left: module.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                animate={{
                  opacity: isModuleDimmed ? 0.3 : 1,
                  scale: isModuleDimmed ? 0.95 : 1,
                  filter: isModuleDimmed ? "blur(2px)" : "blur(0px)"
                }}
              >
                <motion.div
                  className={`relative w-[280px] md:w-[380px] p-6 md:p-8 rounded-3xl bg-gradient-to-br ${colors.bg} backdrop-blur-md border-2 ${colors.border} ${colors.glow} cursor-pointer group`}
                  whileHover={{
                    scale: 1.08,
                    rotate: [0, 1, -1, 0],
                    boxShadow: `0 0 60px ${colors.rgbaHeavy}`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: isModuleActive ? [
                      `0 0 30px ${colors.rgba}`,
                      `0 0 50px ${colors.rgbaHeavy}`,
                      `0 0 30px ${colors.rgba}`
                    ] : undefined,
                    borderWidth: isModuleActive ? "3px" : "2px"
                  }}
                  transition={{
                    y: {
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                >

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Rotation */}
                    <motion.div
                      className="mb-6 relative"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-2xl blur-xl opacity-60`} />
                      <module.icon className={`relative w-12 h-12 md:w-16 md:h-16 ${colors.text} ${colors.shadow}`} />
                    </motion.div>

                    {/* Module Number Badge */}
                    <motion.div
                      className={`inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r ${colors.bg} border-2 ${colors.border}`}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${colors.rgba}`,
                          `0 0 20px ${colors.rgbaHeavy}`,
                          `0 0 10px ${colors.rgba}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <span className={`text-sm font-bold ${colors.text}`}>
                        Module_{module.id}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  {/* Animated Corner Accents */}
                  <motion.div
                    className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-${module.color}-400`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className={`absolute bottom-2 left-2 w-3 h-3 rounded-full bg-${module.color}-400`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />

                  {/* Connection Node Indicator */}
                  {module.connections.length > 0 && (
                    <motion.div
                      className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 ${colors.border} bg-black flex items-center justify-center`}
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${colors.rgbaHeavy}`,
                          `0 0 0 8px ${colors.rgba}`,
                          `0 0 0 0 ${colors.rgba}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-sm text-gray-500 font-medium">
            모듈 간 연결은 학습 흐름과 의존성을 나타냅니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};
