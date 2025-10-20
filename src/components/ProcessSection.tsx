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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/70 to-slate-900/90 rounded-3xl p-8 md:p-12 border-2 border-cyan-500/30 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              배우면 뭘 할 수 있나요?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-cyan-300 mb-3">실무형 RAG 개발 역량</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>문서·음성 기반 Q&A/챗봇 제작</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>벡터DB 의미검색·리랭킹 설계</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>회의록(STT) 요약·액션 아이템 추출 & API 배포</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-cyan-300 mb-3">프로덕션 레벨</h4>
                    <p className="text-blue-200 font-semibold mb-3">어디에 쓰나요? (문자·음성 예시)</p>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span><strong className="text-cyan-300">문자:</strong> 매뉴얼/FAQ/정책 문서 Q&A, 사내 검색 고도화</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span><strong className="text-cyan-300">음성:</strong> 회의·콜로그 요약 → 핵심 추출 → 근거 기반 답변</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl border border-cyan-400/40">
                <p className="text-lg text-blue-200 font-medium">
                  <span className="text-cyan-300 font-bold">320시간</span>의 실전 프로젝트를 통해 전 과정을 마스터합니다
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
