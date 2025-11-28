import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. One-click install",
    content:
      "Use the Add to Workflow modal and hosted MCP endpoint—no cloning or manual env bootstrapping required.",
    image: "/mcp-screenshot.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Connect IDEs + Raycast",
    content:
      "Drop the generated config into Cursor, Claude, or VS Code and keep Raycast in sync for humans in the loop.",
    image: "/raycast_screenshot.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Build dev workflows (mainnet soon)",
    content:
      "Ship wallets, ASAs, swaps, and docs searches against our testnet-first environment today while we finalize mainnet rollout.",
    image: "/transaction_history.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
