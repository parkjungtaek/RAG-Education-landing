import { MessageCircle, Code, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const cards = [
  {
    icon: MessageCircle,
    title: "RAG가 뭐예요?",
    content: "근거를 찾아 말하는 AI",
    details: [
      "사내 문서·회의록(음성→텍스트)을 검색·인용해",
      "정확한 답변을 만드는 기술",
    ],
    highlight: "검색 증강 생성",
  },
  {
    icon: Code,
    title: "배우면 뭘 할 수 있나",
    content: "실무형 RAG 개발 역량",
    details: [
      "문서·음성 기반 Q&A/챗봇 제작",
      "벡터DB 의미검색·리랭킹 설계",
      "회의록(STT) 요약·액션 아이템 추출 & API 배포",
    ],
    highlight: "프로덕션 레벨",
  },
  {
    icon: Briefcase,
    title: "취업/진출 분야",
    content: "수요 높은 AI 실무 직군",
    details: [
      "RAG 엔지니어 / AI 응용 SW",
      "검색·데이터 엔지니어 / 챗봇 엔지니어",
      "컨택센터·커머스·핀테크·제조·SI/컨설팅",
    ],
    highlight: "취업 연계 100%",
  },
];

export const OverviewSection = () => {
  return (
    <section id="overview" className="relative py-32 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
      {/* AI Chip Circuit Background */}
      <div className="absolute inset-0">
        {/* Central AI Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/30 to-transparent rounded-3xl blur-[60px]" />
        </motion.div>

        {/* Circuit Lines - Horizontal */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
              style={{
                top: `${10 + i * 8}%`,
                left: 0,
                right: 0
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Circuit Lines - Vertical */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
              style={{
                left: `${15 + i * 12}%`,
                top: 0,
                bottom: 0
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Connection Nodes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{
                left: `${15 + (i % 5) * 20}%`,
                top: `${20 + Math.floor(i / 5) * 30}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
                boxShadow: [
                  '0 0 10px rgba(0,255,255,0.5)',
                  '0 0 20px rgba(0,255,255,1)',
                  '0 0 10px rgba(0,255,255,0.5)'
                ]
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Diagonal Circuit Traces */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`diag-${i}`}
              x1={`${i * 20}%`}
              y1="0%"
              x2={`${i * 20 + 30}%`}
              y2="100%"
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0)" />
              <stop offset="50%" stopColor="rgba(0,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70" />
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
            과정 개요
          </motion.h2>
          <p className="text-xl md:text-2xl text-cyan-300/90 font-medium">
            RAG 기술로 멀티모달 AI 전문가가 되세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent rounded-2xl blur-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <Card className="relative h-full bg-gradient-to-br from-slate-900/90 via-blue-950/60 to-slate-900/90 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
                  {/* Circuit Pattern Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
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

                  {index === 0 ? (
                    // Special layout for first card
                    <div className="flex flex-col md:flex-row h-full p-6">
                      {/* Left side - Text content */}
                      <div className="flex-1 flex flex-col justify-center space-y-4">
                        <motion.div
                          className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-cyan-500/20 rounded-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                          <card.icon className="relative w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                        </motion.div>

                        <div>
                          <h3 className="text-2xl font-black text-white mb-2">{card.title}</h3>
                          <p className="text-lg font-bold text-cyan-300 mb-4">{card.content}</p>
                        </div>

                        <ul className="space-y-2">
                          {card.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.1 }}
                            >
                              <span className="mr-2 text-cyan-400 font-bold text-sm">•</span>
                              <span className="text-sm text-gray-300 leading-snug">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <Badge className="w-fit bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold px-3 py-1 text-xs shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all">
                          {card.highlight}
                        </Badge>
                      </div>

                      {/* Right side - Visual diagram */}
                      <div className="flex-1 flex items-center justify-center p-4 relative">
                        <div className="relative w-full max-w-md">
                          {/* Top Row - Data Sources */}
                          <div className="flex justify-around items-start mb-8">
                            {/* Documents Stack */}
                            <motion.div
                              className="flex flex-col items-center gap-2"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              <div className="relative">
                                <motion.div
                                  className="w-16 h-16 bg-gray-700/40 rounded-lg border border-gray-500/40 flex items-center justify-center relative"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {/* Stack layers */}
                                  <div className="absolute -left-1 -top-1 w-16 h-16 bg-gray-700/30 rounded-lg border border-gray-500/30" />
                                  <div className="absolute -left-2 -top-2 w-16 h-16 bg-gray-700/20 rounded-lg border border-gray-500/20" />
                                  {/* Top layer with icon */}
                                  <svg className="w-8 h-8 text-gray-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </motion.div>
                              </div>
                              <span className="text-xs text-gray-400 font-medium">사내문서</span>
                            </motion.div>

                            {/* Arrow pointing to My Data */}
                            <motion.div
                              className="flex items-center mt-6"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                            >
                              <svg className="w-12 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </motion.div>

                            {/* My Data Box with Search */}
                            <motion.div
                              className="flex flex-col items-center"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                            >
                              <div className="relative">
                                <div className="px-4 py-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-500/50 flex flex-col items-center gap-1">
                                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <span className="text-[10px] text-gray-400 font-medium">PDF</span>
                                </div>
                                <motion.div
                                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/30 rounded-full border-2 border-blue-400/60 flex items-center justify-center"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </motion.div>
                              </div>
                              <span className="text-xs text-gray-400 font-medium mt-2">My Data</span>
                            </motion.div>

                            {/* Security Shield */}
                            <motion.div
                              className="flex flex-col items-center"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
                              <div className="w-12 h-12 bg-blue-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                            </motion.div>
                          </div>

                          {/* Second Row - Meeting Records and Vector DB */}
                          <div className="flex items-center justify-start mb-8 gap-4">
                            {/* Meeting Records */}
                            <motion.div
                              className="flex flex-col items-center gap-2 ml-8"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                            >
                              <div className="relative w-16 h-16 bg-gray-700/40 rounded-lg border border-gray-500/40 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <motion.div
                                  className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-500/30 rounded-full border-2 border-blue-400/60 flex items-center justify-center"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                  <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </motion.div>
                              </div>
                              <span className="text-xs text-gray-400 font-medium">회의록</span>
                            </motion.div>

                            {/* Arrow */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.6 }}
                            >
                              <svg className="w-12 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </motion.div>

                            {/* Vector Database Stack */}
                            <motion.div
                              className="flex flex-col items-center"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
                              <div className="relative">
                                <motion.div
                                  className="w-20 h-16 bg-gray-700/40 rounded-lg border border-gray-500/40 relative"
                                  animate={{ boxShadow: ['0 0 0 rgba(59,130,246,0)', '0 0 20px rgba(59,130,246,0.3)', '0 0 0 rgba(59,130,246,0)'] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  {/* Stack layers */}
                                  <div className="absolute inset-x-2 top-2 h-1 bg-gray-600/50 rounded" />
                                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 bg-gray-600/50 rounded" />
                                  <div className="absolute inset-x-2 bottom-2 h-1 bg-gray-600/50 rounded" />
                                </motion.div>
                              </div>
                              <span className="text-xs text-gray-400 font-medium mt-2">지식베이스</span>
                            </motion.div>

                            {/* Curved Arrow */}
                            <motion.div
                              className="relative"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.7 }}
                            >
                              <svg className="w-16 h-12" viewBox="0 0 60 40" fill="none">
                                <motion.path
                                  d="M5 35 Q 30 5, 50 20"
                                  stroke="#3b82f6"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeLinecap="round"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 1, delay: 0.8 }}
                                />
                                <motion.path
                                  d="M50 20 L45 18 L47 23 Z"
                                  fill="#3b82f6"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 1.3 }}
                                />
                              </svg>
                            </motion.div>
                          </div>

                          {/* Center Row - AI Agent */}
                          <div className="flex justify-center items-center mb-8">
                            <motion.div
                              className="relative"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.8 }}
                            >
                              {/* Outer rings */}
                              <motion.div
                                className="absolute inset-0 -m-4 rounded-full border-2 border-cyan-500/30"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                              <motion.div
                                className="absolute inset-0 -m-2 rounded-full border-2 border-cyan-500/40"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                              />

                              {/* AI Circle */}
                              <motion.div
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-3 border-cyan-400/60 flex items-center justify-center relative"
                                animate={{
                                  boxShadow: [
                                    '0 0 20px rgba(0,255,255,0.3)',
                                    '0 0 40px rgba(0,255,255,0.6)',
                                    '0 0 20px rgba(0,255,255,0.3)'
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div className="text-center">
                                  <span className="text-3xl font-black text-cyan-300">AI</span>
                                </div>

                                {/* Security badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/40 rounded-full border-2 border-blue-400/60 flex items-center justify-center">
                                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                </div>
                              </motion.div>

                              {/* Arrow to info box */}
                              <motion.div
                                className="absolute left-full ml-4 top-1/2 -translate-y-1/2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                              >
                                <svg className="w-8 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </motion.div>
                            </motion.div>

                            {/* Info Box */}
                            <motion.div
                              className="ml-16 px-6 py-4 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl border-2 border-blue-400/50 max-w-xs"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 1.1 }}
                            >
                              <h4 className="text-sm font-bold text-blue-300 mb-2">정확한 답변</h4>
                              <p className="text-xs text-gray-300 leading-relaxed mb-2">
                                최신 데이터를 바탕으로<br/>
                                정확한 정보 제공
                              </p>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                내부 데이터와 최신 정보를<br/>
                                통합하여 정확성 확보
                              </p>
                            </motion.div>
                          </div>

                          {/* Bottom Row - Benefits */}
                          <div className="flex justify-center gap-8">
                            {[
                              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: '신뢰도', color: 'green' },
                              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '최신 자료 적용', color: 'blue' },
                              { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: '내부 지식\n신규 적용', color: 'purple' }
                            ].map((item, i) => (
                              <motion.div
                                key={item.label}
                                className="flex flex-col items-center gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
                              >
                                <motion.div
                                  className={`w-12 h-12 rounded-full bg-${item.color}-500/20 border-2 border-${item.color}-400/50 flex items-center justify-center`}
                                  whileHover={{ scale: 1.1 }}
                                  animate={{ y: [0, -5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                >
                                  <svg className={`w-6 h-6 text-${item.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                  </svg>
                                </motion.div>
                                <span className="text-[10px] text-gray-400 font-medium text-center whitespace-pre-line">{item.label}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Original layout for other cards
                    <>
                      <CardHeader className="pb-3">
                        <motion.div
                          className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 border border-cyan-500/30"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-cyan-500/20 rounded-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                          <card.icon className="relative w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                        </motion.div>
                        <CardTitle className="text-xl font-black text-white mb-2">{card.title}</CardTitle>
                        <CardDescription className="text-base font-bold text-cyan-300 mt-1">
                          {card.content}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 mb-4">
                          {card.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.1 }}
                            >
                              <span className="mr-2 text-cyan-400 font-bold text-sm">•</span>
                              <span className="text-sm text-gray-300 leading-snug">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold px-3 py-1 text-xs shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all">
                          {card.highlight}
                        </Badge>
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
