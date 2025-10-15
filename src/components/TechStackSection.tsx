import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    color: "bg-blue-500",
    skills: [
      { name: "Python", level: "Advanced", hours: 200 },
      { name: "Java", level: "Intermediate", hours: 100 },
      { name: "JavaScript", level: "Intermediate", hours: 80 },
    ],
  },
  {
    name: "Cloud & Infra",
    color: "bg-indigo-500",
    skills: [
      {
        name: "AWS",
        level: "Advanced",
        hours: 150,
        details: ["EC2", "S3", "Lambda", "SageMaker", "RDS"],
      },
      { name: "Docker", level: "Advanced", hours: 80 },
      { name: "Kubernetes", level: "Intermediate", hours: 60 },
    ],
  },
  {
    name: "AI/ML",
    color: "bg-purple-500",
    skills: [
      { name: "OpenAI API", level: "Advanced", hours: 100 },
      { name: "LangChain", level: "Advanced", hours: 80 },
      { name: "RAG", level: "Advanced", hours: 60 },
      { name: "Whisper", level: "Intermediate", hours: 40 },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section id="tech" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">기술 스택</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            실무에서 바로 사용하는 최신 기술 스택
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-card hover:shadow-elevated transition-smooth">
                <CardHeader>
                  <div className={`h-1 w-20 ${category.color} rounded-full mb-4`} />
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                  <CardDescription>
                    {category.skills.reduce((acc, skill) => acc + skill.hours, 0)} 시간
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{skill.name}</span>
                        <Badge variant="outline">{skill.hours}H</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${category.color} transition-all duration-1000`}
                            style={{
                              width: skill.level === "Advanced" ? "90%" : "70%",
                            }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>
                      {skill.details && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {skill.details.map((detail, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
