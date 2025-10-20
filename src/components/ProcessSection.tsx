import { motion } from "framer-motion";

const processSteps = [
  {
    title: "데이터 수집 및 모니터링",
    subtitle: "텍스트 및 음성 데이터 수집",
    image: "/images/image.png"
  },
  {
    title: "도메인 특화 레시피",
    subtitle: "맞춤형 데이터 처리",
    image: "/images/image.png"
  },
  {
    title: "데이터 전처리 및 시맨틱 청킹",
    subtitle: "Semantic Chunking",
    image: "/images/image.png"
  },
  {
    title: "임베딩 모델",
    subtitle: "Embedding/Reranking",
    image: "/images/image.png"
  },
  {
    title: "검색 증강 OAI/파인튜닝 LLM",
    subtitle: "RAG + Fine-tuning",
    image: "/images/image.png"
  },
  {
    title: "모든것이 지식화된 서비스",
    subtitle: "Knowledge Service",
    image: "/images/image.png"
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

        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative mb-4 w-full"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  >
                    <div className="w-full aspect-square max-w-[200px] mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-base md:text-lg font-bold text-[#0d1b2a] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.subtitle}
                  </p>
                </motion.div>

                {(index % 3 !== 2) && (index < processSteps.length - 1) && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                )}

                {index === 2 && (
                  <motion.div
                    className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{
                      y: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
