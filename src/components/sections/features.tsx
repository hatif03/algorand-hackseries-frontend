import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Wallet & portfolio hub",
    content:
      "Generate accounts, encrypt mnemonics, refresh balances, and view ASAs in both MCP clients and Raycast.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Swap + asset operations",
    content:
      "Create ASAs, transfer tokens, and swap via the Pera SDK with real-time quotes, slippage controls, and AlgoExplorer deep links.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "API + knowledge layer",
    content:
      "Algod, Indexer, and NFD APIs plus semantic doc search so assistants can answer questions without leaving the convo.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Raycast quick actions",
    content:
      "Keyboard shortcuts for funding, swaps, wallet reset, and copy-to-clipboard flows—perfect for ops teams on macOS.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="Everything you need in one Algorand toolkit">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
