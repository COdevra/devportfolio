import { Section } from "@/components/layout/Section";
import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <Section id="about" className="bg-gray-50">
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-gray-600">
                With over 5 years of experience in web development, I specialize in
                building scalable applications using modern technologies. I graduated
                from Stanford University with a degree in Computer Science.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Philosophy</h3>
              <p className="text-gray-600">
                I believe in creating intuitive user experiences through clean code
                and thoughtful design. My approach combines technical expertise with
                creative problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </Section>
  );
}
