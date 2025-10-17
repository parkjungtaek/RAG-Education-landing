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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <CardHeader>
                    <motion.div
                      className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 border border-cyan-500/30"
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
                      <card.icon className="relative w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                    </motion.div>
                    <CardTitle className="text-2xl md:text-3xl font-black text-white mb-3">{card.title}</CardTitle>
                    <CardDescription className="text-xl font-bold text-cyan-300 mt-2">
                      {card.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-6">
                      {card.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <span className="mr-3 text-cyan-400 font-bold text-lg">•</span>
                          <span className="text-base text-gray-300">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold px-4 py-1.5 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all">
                      {card.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
