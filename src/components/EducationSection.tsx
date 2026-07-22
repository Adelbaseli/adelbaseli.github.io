import { education } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Education
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <MotionWrapper key={edu.institution} delay={index * 0.15}>
              <GlassCard className="group relative overflow-hidden p-5 h-full">
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-[width] duration-1000 ease-linear group-hover:w-full" />

                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">🎓 {edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    🏛️ {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    📍 {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    📅 {edu.period}
                  </p>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="list-disc ml-4 mt-3 space-y-1 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
