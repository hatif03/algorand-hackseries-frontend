import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Fragmented tooling",
    description:
      "Developers juggle faucets, SDK scripts, explorers, and docs whenever they need to test an Algorand idea.",
    icon: Brain,
  },
  {
    title: "Manual wallet handling",
    description:
      "Copying mnemonics between terminals, AI assistants, and Raycast exposes secrets and slows down delivery.",
    icon: Zap,
  },
  {
    title: "No shared interface",
    description:
      "Humans live in Raycast while AI agents speak MCP. Keeping both environments in sync is tedious and error-prone.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Algorand tooling is scattered across CLIs, docs, and UI plugins."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
