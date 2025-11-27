import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Configure the suite",
    content:
      "Clone the repo, run npm install, and drop your Algorand credentials plus Algod/Indexer endpoints into .env (testnet by default).",
    image: "/mcp-screenshot.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Connect MCP + Raycast",
    content:
      "Point VS Code, Claude Desktop, or Cursor at dist/index.js, then build/import the Raycast extension to keep humans in the loop.",
    image: "/raycast_screenshot.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Build Algorand workflows",
    content:
      "Call wallets, ASAs, swaps, and doc search from agents or Raycast, then monitor everything in AlgoExplorer using the included shortcuts.",
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
