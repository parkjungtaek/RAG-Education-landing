import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileSearch, Cloud, Activity, Plus, Minus } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { supabase, type ModuleProgress } from "../lib/supabase";

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
  moduleConnections: number[][] | null;
  selectedProject: {
    id: string;
    title: string;
    description: string;
    detailedDescription: string;
    connectedModules: number[];
    moduleUsage: Record<number, string>;
    learningGoals: string[];
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

export const ModulesSection = ({ selectedProjectId, connectedModules, moduleConnections, selectedProject }: ModulesSectionProps) => {
  const [animatedModuleIndex, setAnimatedModuleIndex] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showConnections, setShowConnections] = useState(false);
  const [moduleProgress, setModuleProgress] = useState<Record<number, number>>({});
  const moduleRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const fetchModuleProgress = async () => {
      const { data, error } = await supabase
        .from('module_progress')
        .select('module_id, progress');

      if (data && !error) {
        const progressMap: Record<number, number> = {};
        data.forEach((item: ModuleProgress) => {
          progressMap[item.module_id] = item.progress;
        });
        setModuleProgress(progressMap);
      }
    };

    fetchModuleProgress();

    const channel = supabase
      .channel('module_progress_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'module_progress'
        },
        (payload) => {
          if (payload.new && 'module_id' in payload.new && 'progress' in payload.new) {
            const newData = payload.new as ModuleProgress;
            setModuleProgress(prev => ({
              ...prev,
              [newData.module_id]: newData.progress
            }));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updateModuleProgress = async (moduleId: number, change: number) => {
    const currentProgress = moduleProgress[moduleId] || 0;
    const newProgress = Math.max(0, Math.min(100, currentProgress + change));

    const { error } = await supabase
      .from('module_progress')
      .upsert({
        module_id: moduleId,
        progress: newProgress
      }, {
        onConflict: 'module_id'
      });

    if (!error) {
      setModuleProgress(prev => ({
        ...prev,
        [moduleId]: newProgress
      }));
    }
  };

  useEffect(() => {
    if (selectedProjectId && selectedProject) {
      setIsAnimating(true);
      setAnimationComplete(false);
      setAnimatedModuleIndex(-1);
      setShowConnections(false);

      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < selectedProject.connectedModules.length) {
          setAnimatedModuleIndex(currentIndex);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsAnimating(false);
            setAnimationComplete(true);
            setTimeout(() => {
              setShowConnections(true);
            }, 500);
          }, 200);
        }
      }, 800);

      return () => clearInterval(intervalId);
    } else {
      setAnimatedModuleIndex(-1);
      setIsAnimating(false);
      setAnimationComplete(false);
      setShowConnections(false);
    }
  }, [selectedProjectId, selectedProject]);

  const getModuleAnimationIndex = (moduleId: number): number => {
    if (!selectedProject) return -1;
    return selectedProject.connectedModules.indexOf(moduleId);
  };

  const isModuleVisible = (moduleId: number): boolean => {
    if (!selectedProject || animationComplete) return true;
    const moduleIndex = getModuleAnimationIndex(moduleId);
    return moduleIndex <= animatedModuleIndex;
  };

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
              className="max-w-5xl mx-auto mb-12 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  {selectedProject.detailedDescription}
                </p>

                {/* Module Flow Visualization */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-primary mb-3">학습 흐름</h4>
                  <div className="relative min-h-[120px] md:min-h-[180px] flex items-center justify-center py-3 px-2 md:py-6 md:px-4 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 justify-center relative w-full md:w-auto px-1">
                      {selectedProject.connectedModules.map((moduleId, index) => {
                        const module = modules.find(m => m.id === moduleId);
                        if (!module) return null;
                        const colors = getColorClasses(module.color);
                        const shouldShow = index <= animatedModuleIndex || animationComplete;

                        return (
                          <React.Fragment key={`flow-${moduleId}`}>
                            <AnimatePresence>
                              {shouldShow && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    y: 15
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                  }}
                                  exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    y: 15
                                  }}
                                  transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: 0
                                  }}
                                  className={`w-full md:w-[180px] max-w-[280px] md:max-w-none p-3 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-md border-2 ${colors.border} ${colors.glow} flex-shrink-0`}
                                  style={{
                                    boxShadow: `0 0 30px ${colors.rgba}`
                                  }}
                                >
                                  <div className="relative z-10">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.5 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                                      className={`inline-block px-1.5 py-0.5 md:px-2 md:py-1 mb-1.5 md:mb-2 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border}`}
                                    >
                                      <span className={`text-[10px] md:text-xs font-bold ${colors.text}`}>
                                        M_{moduleId}
                                      </span>
                                    </motion.div>
                                    <motion.h3
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                                      className="text-xs md:text-xs font-bold text-white leading-tight line-clamp-3"
                                      style={{ wordBreak: 'keep-all' }}
                                    >
                                      {module.title}
                                    </motion.h3>
                                  </div>
                                  <motion.div
                                    className={`absolute top-1 right-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${module.color}-400`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                      opacity: [0, 0.5, 1, 0.5],
                                      scale: [0, 1, 1.5, 1]
                                    }}
                                    transition={{
                                      opacity: { duration: 2, repeat: Infinity },
                                      scale: { duration: 2, repeat: Infinity }
                                    }}
                                  />
                                </motion.div>
                              )}
                            </AnimatePresence>
                            {index < selectedProject.connectedModules.length - 1 && shouldShow && (
                              <AnimatePresence>
                                {showConnections && (
                                  <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    exit={{ opacity: 0, scaleX: 0 }}
                                    transition={{ duration: 1, delay: index * 0.3, ease: "easeInOut" }}
                                    className="flex items-center justify-center flex-shrink-0"
                                  >
                                    {/* Desktop: Horizontal arrow */}
                                    <motion.svg
                                      width="40"
                                      height="24"
                                      viewBox="0 0 40 24"
                                      className="hidden md:block"
                                    >
                                      <motion.path
                                        d="M 0 12 L 35 12"
                                        stroke={colors.rgbaHeavy}
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                      />
                                      <motion.path
                                        d="M 30 8 L 38 12 L 30 16"
                                        stroke={colors.rgbaHeavy}
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
                                      />
                                    </motion.svg>
                                    {/* Mobile: Vertical arrow */}
                                    <motion.svg
                                      width="24"
                                      height="40"
                                      viewBox="0 0 24 40"
                                      className="md:hidden"
                                    >
                                      <motion.path
                                        d="M 12 0 L 12 35"
                                        stroke={colors.rgbaHeavy}
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                      />
                                      <motion.path
                                        d="M 8 30 L 12 38 L 16 30"
                                        stroke={colors.rgbaHeavy}
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
                                      />
                                    </motion.svg>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Module Usage Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-primary mb-3">모듈별 역할</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(selectedProject.moduleUsage).map(([moduleId, usage]) => {
                      const module = modules.find(m => m.id === Number(moduleId));
                      const colors = module ? getColorClasses(module.color) : null;
                      const moduleIndex = getModuleAnimationIndex(Number(moduleId));
                      const shouldShow = moduleIndex <= animatedModuleIndex || animationComplete;

                      return (
                        <React.Fragment key={moduleId}>
                          {shouldShow && (
                            <motion.div
                              initial={{ opacity: 0, x: -10, scale: 0.95 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                borderColor: colors?.border
                              }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className={`p-3 rounded-lg border ${colors?.border} ${colors?.bg} backdrop-blur-sm`}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <motion.span
                                  className={`text-xs font-bold ${colors?.text}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  Module {moduleId}
                                </motion.span>
                              </div>
                              <motion.p
                                className="text-sm text-gray-300"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                {usage}
                              </motion.p>
                            </motion.div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Learning Goals */}
                <div>
                  <h4 className="text-sm font-bold text-primary mb-3">학습 목표</h4>
                  <ul className="space-y-2">
                    {selectedProject.learningGoals.map((goal, index) => {
                      const goalDelay = (selectedProject.connectedModules.length * 0.4) + (index * 0.15);
                      const shouldShow = animationComplete || (isAnimating && animatedModuleIndex >= selectedProject.connectedModules.length - 1);

                      return (
                        <React.Fragment key={index}>
                          {shouldShow && (
                            <motion.li
                              initial={{ opacity: 0, x: -10, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{
                                delay: animationComplete ? index * 0.1 : goalDelay,
                                duration: 0.6,
                                ease: "easeOut"
                              }}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <motion.span
                                className="text-primary mt-1"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: animationComplete ? index * 0.1 + 0.2 : goalDelay + 0.2,
                                  duration: 0.4,
                                  ease: "easeOut"
                                }}
                              >
                                ✓
                              </motion.span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: animationComplete ? index * 0.1 + 0.3 : goalDelay + 0.3, duration: 0.4, ease: "easeOut" }}
                              >
                                {goal}
                              </motion.span>
                            </motion.li>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
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

            {(moduleConnections || []).map(([sourceId, targetId], index) => {
              const source = modules.find(m => m.id === sourceId);
              const target = modules.find(m => m.id === targetId);
              if (!source || !target) return null;

              const startX = `${source.position.left}`;
              const startY = `${source.position.top}`;
              const endX = `${target.position.left}`;
              const endY = `${target.position.top}`;

              const sourceIndex = getModuleAnimationIndex(sourceId);
              const targetIndex = getModuleAnimationIndex(targetId);
              const connectionShouldShow = sourceIndex <= animatedModuleIndex && targetIndex <= animatedModuleIndex;
              const connectionDelay = Math.max(sourceIndex, targetIndex) * 0.4 + 0.2;

              return (
                <g key={`connection-${sourceId}-${targetId}`}>
                  <motion.line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={`url(#lineGradient-${sourceId})`}
                    strokeWidth="5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: connectionShouldShow || animationComplete ? 1 : 0,
                      opacity: connectionShouldShow || animationComplete ? 1 : 0,
                      strokeWidth: connectionShouldShow || animationComplete ? [5, 7, 5] : 5
                    }}
                    transition={{
                      pathLength: { duration: 0.5, delay: animationComplete ? 0 : connectionDelay },
                      opacity: { duration: 0.3, delay: animationComplete ? 0 : connectionDelay },
                      strokeWidth: { duration: 1.5, repeat: Infinity }
                    }}
                  />

                  {(connectionShouldShow || animationComplete) && (
                    <motion.circle
                      r="5"
                      fill={getColorClasses(source.color).rgbaHeavy}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        r: [4, 6, 4]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M ${startX} ${startY} L ${endX} ${endY}`}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Module Nodes */}
          {modules.map((module, index) => {
            const colors = getColorClasses(module.color);
            const isModuleActive = connectedModules.includes(module.id);
            const isModuleDimmed = selectedProjectId && !isModuleActive;
            const moduleAnimIndex = getModuleAnimationIndex(module.id);
            const shouldAnimate = moduleAnimIndex >= 0 && moduleAnimIndex <= animatedModuleIndex;
            const moduleDelay = moduleAnimIndex >= 0 ? moduleAnimIndex * 0.4 : 0;

            return (
              <motion.div
                key={module.id}
                ref={(el) => { moduleRefs.current[module.id] = el; }}
                className="absolute"
                style={{
                  top: module.position.top,
                  left: module.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: isModuleDimmed && !animationComplete ? 0.2 : 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                animate={{
                  opacity: isModuleDimmed && !shouldAnimate && !animationComplete ? 0.2 : isModuleDimmed && animationComplete ? 0.2 : 1,
                  scale: isModuleDimmed && !shouldAnimate && !animationComplete ? 0.9 : 1,
                  filter: isModuleDimmed && !shouldAnimate && !animationComplete ? "blur(3px)" : "blur(0px)",
                  transition: {
                    duration: shouldAnimate || animationComplete ? 0.6 : 0.7,
                    delay: shouldAnimate && !animationComplete ? moduleDelay : 0,
                    ease: "easeOut"
                  }
                }}
              >
                <motion.div
                  className={`relative w-[280px] md:w-[380px] p-6 md:p-8 rounded-3xl bg-gradient-to-br ${colors.bg} backdrop-blur-md border-2 ${colors.border} ${colors.glow} cursor-pointer group`}
                  whileHover={isModuleDimmed ? {} : {
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
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-3">
                      {module.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">학습 진행도</span>
                        <span className={`text-xs font-bold ${colors.text}`}>
                          {moduleProgress[module.id] || 0}%
                        </span>
                      </div>
                      <motion.div
                        className="relative flex-1 h-3 bg-secondary rounded-full overflow-visible cursor-pointer group/progress"
                        whileHover={{ scale: 1.05, height: "14px" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${colors.bg} border-r-2 ${colors.border} relative`}
                            initial={{ width: 0 }}
                            animate={{
                              width: `${moduleProgress[module.id] || 0}%`,
                              boxShadow: [
                                `0 0 10px ${colors.rgba}`,
                                `0 0 20px ${colors.rgbaHeavy}`,
                                `0 0 10px ${colors.rgba}`
                              ]
                            }}
                            transition={{
                              width: { duration: 0.5, ease: "easeOut" },
                              boxShadow: {
                                duration: 2,
                                repeat: Infinity
                              }
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover/progress:opacity-100 transition-opacity duration-300"
                            >
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-white/60 to-transparent"
                                  style={{
                                    left: `${(i + 1) * 12.5}%`
                                  }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scaleY: [0.3, 1, 0.3]
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                    ease: "easeInOut"
                                  }}
                                />
                              ))}
                            </motion.div>
                          </motion.div>
                        </div>
                        <motion.div
                          className="absolute -inset-1 rounded-full opacity-0 group-hover/progress:opacity-100 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${colors.rgba} 0%, transparent 70%)`
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </motion.div>
                      <div className="flex gap-2 justify-end">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateModuleProgress(module.id, -10);
                          }}
                          className={`p-1.5 rounded-lg ${colors.bg} border ${colors.border} hover:scale-110 transition-transform`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Minus className={`w-4 h-4 ${colors.text}`} />
                        </motion.button>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateModuleProgress(module.id, 10);
                          }}
                          className={`p-1.5 rounded-lg ${colors.bg} border ${colors.border} hover:scale-110 transition-transform`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className={`w-4 h-4 ${colors.text}`} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Context Badge */}
                    <AnimatePresence>
                      {selectedProject && isModuleActive && selectedProject.moduleUsage[module.id] && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-white/10"
                        >
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {selectedProject.moduleUsage[module.id]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
