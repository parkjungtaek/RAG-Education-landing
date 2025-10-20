import { motion } from "framer-motion";

const processSteps = [
  {
    title: "사내문서",
    description: "내부 문서 데이터",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    position: { row: 1, col: 1 }
  },
  {
    title: "질의문",
    description: "사용자 질문",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    position: { row: 2, col: 1 }
  },
  {
    title: "AI",
    description: "인공지능 처리",
    isAI: true,
    position: { row: 3, col: 1 }
  },
  {
    title: "My Data",
    subtitle: "PDF",
    description: "벡터화된 데이터",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    hasSearch: true,
    position: { row: 1, col: 2 }
  },
  {
    title: "지식베이스",
    description: "통합 데이터 저장소",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    hasDetails: true,
    details: [
      "정확한 답변",
      "최신 데이터를 바탕으로",
      "정확한 정보 제공",
      "내부 데이터와 최신 정보를"
    ],
    position: { row: 2, col: 2 }
  },
  {
    title: "신뢰도",
    description: "답변 신뢰성",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    position: { row: 1, col: 3 }
  },
  {
    title: "최신 자료 연동",
    description: "실시간 업데이트",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    position: { row: 2, col: 3 }
  },
  {
    title: "내부 자료 연동 필요",
    description: "보안 데이터 통합",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    position: { row: 3, col: 3 }
  }
];

export const ProcessSection = () => {
  const getStepsByRow = (row: number) => processSteps.filter(step => step.position.row === row);

  return (
    <section className="relative py-32 px-4 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
                linear-gradient(0deg, rgba(59,130,246,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            RAG 프로세스
          </h2>
          <p className="text-xl md:text-2xl text-blue-300/90 font-medium">
            데이터에서 인사이트까지, 완벽한 통합 프로세스
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {[1, 2, 3].map((rowNum) => (
            <div key={rowNum} className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
              {getStepsByRow(rowNum).map((step, index, arr) => (
                <motion.div
                  key={`${rowNum}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-center gap-8"
                >
                  {step.isAI ? (
                    <motion.div
                      className="relative w-32 h-32"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      />
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center border-2 border-blue-400/50 shadow-2xl shadow-blue-500/50">
                        <span className="text-5xl font-black text-white">AI</span>
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white"
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />

                      <div className="relative bg-[#1a2942] border-2 border-blue-500/30 rounded-2xl p-6 w-56 h-56 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:border-blue-400/50 transition-colors duration-300">
                        {step.icon && (
                          <motion.div
                            className="mb-4 relative"
                            animate={{
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                              </svg>
                            </div>
                            {step.hasSearch && (
                              <motion.div
                                className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#1a2942]"
                                animate={{
                                  scale: [1, 1.1, 1]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity
                                }}
                              >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </motion.div>
                            )}
                          </motion.div>
                        )}

                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        {step.subtitle && (
                          <p className="text-sm text-blue-400 font-semibold mb-2">
                            {step.subtitle}
                          </p>
                        )}
                        <p className="text-sm text-gray-400">
                          {step.description}
                        </p>

                        {step.hasDetails && step.details && (
                          <div className="mt-4 space-y-1 text-left w-full">
                            {step.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="text-xs text-blue-300/80 flex items-start gap-2"
                              >
                                <span className="text-blue-400 mt-0.5">•</span>
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {index < arr.length - 1 && (
                    <motion.div
                      animate={{
                        x: [0, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      <svg className="w-12 h-12 text-blue-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex justify-center gap-12 flex-wrap"
        >
          {[
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "신뢰도" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "최신 자료 연동" },
            { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "내부 자료 연동 필요" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#1a2942] border-2 border-blue-500/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <p className="text-sm text-gray-300 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
