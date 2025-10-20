import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "데이터 수집",
    subtitle: "Data Collection",
    description: "다양한 출처에서 텍스트 및 음성 데이터 수집",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    number: "02",
    title: "데이터 전처리",
    subtitle: "Data Preprocessing",
    description: "텍스트 정제, 음성-텍스트 변환 및 정규화",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  },
  {
    number: "03",
    title: "벡터 임베딩",
    subtitle: "Vector Embedding",
    description: "텍스트를 고차원 벡터로 변환하여 의미 표현",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  },
  {
    number: "04",
    title: "지식베이스 구축",
    subtitle: "Knowledge Base",
    description: "벡터DB에 임베딩 저장 및 인덱싱",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    number: "05",
    title: "의미 검색 & 리랭킹",
    subtitle: "Semantic Search",
    description: "쿼리와 유사한 문서 검색 후 관련도 재정렬",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    number: "06",
    title: "AI 응답 생성",
    subtitle: "Response Generation",
    description: "검색된 컨텍스트 기반으로 정확한 답변 생성",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  }
];

export const ProcessSection = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-black via-slate-950/40 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`flow-${i}`}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
              style={{
                top: `${15 + i * 10}%`,
                left: 0,
                right: 0
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
                boxShadow: [
                  '0 0 5px rgba(0,255,255,0.3)',
                  '0 0 15px rgba(0,255,255,0.8)',
                  '0 0 5px rgba(0,255,255,0.3)'
                ]
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(0,255,255,0.3)",
                "0 0 40px rgba(0,255,255,0.5)",
                "0 0 20px rgba(0,255,255,0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            RAG 프로세스
          </motion.h2>
          <p className="text-xl md:text-2xl text-cyan-300/90 font-medium">
            6단계로 완성하는 지능형 검색 증강 생성
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent rounded-2xl blur-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />

                <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-blue-950/60 to-slate-900/90 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 rounded-2xl overflow-hidden p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <motion.div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(90deg, cyan 1px, transparent 1px),
                          linear-gradient(0deg, cyan 1px, transparent 1px)
                        `,
                        backgroundSize: '10px 10px'
                      }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </div>

                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(0,255,255,0.3)",
                            "0 0 20px rgba(0,255,255,0.6)",
                            "0 0 10px rgba(0,255,255,0.3)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        {step.number}
                      </motion.div>

                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30"
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            '0 0 10px rgba(0,255,255,0.2)',
                            '0 0 20px rgba(0,255,255,0.4)',
                            '0 0 10px rgba(0,255,255,0.2)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                        </svg>
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400/70 uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                  </motion.div>

                  <p className="text-base text-gray-300 leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden lg:block"
                      animate={{
                        y: [0, 8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <svg className="w-8 h-8 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  )}

                  {(index === 2 || index === 5) && (
                    <motion.div
                      className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
                      animate={{
                        x: [0, 8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <svg className="w-8 h-8 text-cyan-400/60 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 rounded-2xl border border-cyan-400/30">
            <p className="text-lg text-cyan-300 font-medium">
              <span className="text-cyan-400 font-bold">320시간</span>의 실전 프로젝트를 통해 전 과정을 마스터합니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
