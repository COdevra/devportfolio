import { Section } from "@/components/layout/Section";
import { MotionDiv, fadeIn, staggerContainer } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Python", level: 70 },
  { name: "DevOps", level: 65 }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-gray-50">
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
