import { motion } from "framer-motion";

const processSteps = [
  {
    title: "데이터 수집 및 \n모니터링",
    subtitle: "텍스트 및 음성 데이터 수집",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "도메인 특화 \n레시피",
    subtitle: "맞춤형 데이터 처리",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  },
  {
    title: "데이터 \n전처리 및 시맨틱 \n청킹",
    subtitle: "Semantic Chunking",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  },
  {
    title: "임베딩 모델",
    subtitle: "Embedding/Reranking",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "검색 증강 \nOAI/파인튜닝 \nLLM",
    subtitle: "RAG + Fine-tuning",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    title: "모든것이 \n지식화된 \n서비스",
    subtitle: "Knowledge Service",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

export const ProcessSection = () => {
  return (
    <section className="relative py-32 px-4 bg-[#0d1b2a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px),
                linear-gradient(0deg, rgba(59,130,246,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10 max-w-[1400px]">
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
            데이터에서 지식 서비스까지, 완벽한 AI 파이프라인
          </p>
        </motion.div>

        <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
          <div className="flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative mb-4"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border-2 border-blue-200 shadow-lg">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                  </motion.div>

                  <h3 className="text-sm font-bold text-[#0d1b2a] mb-1 text-center whitespace-pre-line leading-tight max-w-[140px]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center max-w-[140px] leading-tight">
                    {step.subtitle}
                  </p>
                </motion.div>

                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/10 via-cyan-600/10 to-blue-500/10 rounded-2xl border border-blue-400/30">
            <p className="text-lg text-blue-300 font-medium">
              <span className="text-blue-400 font-bold">320시간</span>의 실전 프로젝트를 통해 전 과정을 마스터합니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
