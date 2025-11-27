import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Algorand MCP Suite",
  description: "55+ Algorand-native MCP tools plus a Raycast extension",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Algorand",
    "MCP",
    "Raycast",
    "Wallet",
    "Swap",
    "Pera",
    "Tinyman",
    "Algod",
  ],
  links: {
    email: "hello@algorandmcp.dev",
    twitter: "https://x.com/Algorand",
    discord: "https://discord.gg/algorand",
    github: "https://github.com/hatif03/algorand-mcp",
    instagram: "https://www.youtube.com/@Algorand",
  },
  header: [
    {
      trigger: "MCP Server",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "55+ Algorand tools",
          description:
            "Model Context Protocol server covering wallets, swaps, docs search, and ARC-26 utilities.",
          href: "#solution",
        },
        items: [
          {
            href: "#features",
            title: "Tool categories",
            description:
              "Basic, Core Algorand, Swap, Utility, API, Advanced Tx, ARC-26, Knowledge, and Wallet modules.",
          },
          {
            href: "#how-it-works",
            title: "Developer workflow",
            description:
              "Configure env vars, connect VS Code/Claude/Cursor, and start shipping MCP commands.",
          },
          {
            href: "#problem",
            title: "Security & config",
            description:
              "AES-256-GCM wallet storage, testnet defaults, and environment-based network promotion.",
          },
        ],
      },
    },
    {
      trigger: "Raycast Extension",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Native macOS commands",
          description:
            "Wallet info, swaps, ASAs, and faucets from the Raycast command palette.",
          href: "#solution",
        },
        items: [
          {
            title: "Wallet & assets",
            href: "#features",
            description:
              "Encrypted wallets, ASA creation, transfers, and rich asset displays directly in Raycast.",
          },
          {
            title: "Swaps & quick actions",
            href: "#features",
            description:
              "Pera Swap integration plus shortcuts like ⌘X, ⌘T, ⌘R, and ⌘F for daily ops.",
          },
          {
            title: "Raycast README",
            href: "https://github.com/hatif03/algorand-mcp/blob/main/raycast/algorand/README.md",
            description: "Step-by-step install and build instructions.",
          },
        ],
      },
    },
    {
      trigger: "Resources",
      content: {
        items: [
          {
            title: "Project demo",
            href: "https://youtu.be/2MtLTSmOi5Y",
            description: "Full walkthrough of the MCP server and Raycast flows.",
          },
          {
            title: "Test queries",
            href: "https://github.com/hatif03/algorand-mcp/blob/main/TEST_QUERIES.md",
            description: "Manual prompts that exercise every tool.",
          },
          {
            title: "Enhanced features",
            href: "https://github.com/hatif03/algorand-mcp/blob/main/ENHANCED_FEATURES.md",
            description:
              "Deep dive into swaps, knowledge search, and atomic transactions.",
          },
          {
            title: "MCP setup guide",
            href: "https://github.com/hatif03/algorand-mcp/blob/main/MCP_SETUP.md",
            description:
              "Connector snippets for VS Code, Claude Desktop, and Cursor IDE.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Updates",
    },
    {
      href: "https://github.com/hatif03/algorand-mcp",
      label: "GitHub",
    },
  ],
  pricing: [
    {
      name: "COMMUNITY",
      href: "https://github.com/hatif03/algorand-mcp",
      price: "$0",
      period: "month",
      yearlyPrice: "$0",
      features: [
        "MIT license & self-hosted",
        "55+ MCP tools unlocked",
        "Raycast extension build scripts",
        "Docs + test queries",
        "Swap + ARC-26 utilities",
      ],
      description: "Perfect for hackathons, demos, and personal automation.",
      buttonText: "Clone the repo",
      isPopular: false,
    },
    {
      name: "BUILDER SUPPORT",
      href: "https://github.com/hatif03/algorand-mcp",
      price: "$29",
      period: "month",
      yearlyPrice: "$24",
      features: [
        "Community plan + priority responses",
        "Guided MCP setup for VS Code & Claude",
        "Swap & Raycast configuration help",
        "Issue triage within 48 hours",
        "Roadmap influence via GitHub Discussions",
      ],
      description: "Ideal for studios shipping Algorand agents or Raycast flows.",
      buttonText: "Request support",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "https://github.com/hatif03/algorand-mcp",
      price: "$99",
      period: "month",
      yearlyPrice: "$79",
      features: [
        "Dedicated maintainer hours",
        "Custom tool development",
        "Mainnet hardening & audits",
        "Private registries & deployment support",
        "SLA-backed response times",
      ],
      description: "For teams that need bespoke tooling or run validators in prod.",
      buttonText: "Contact sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is the Algorand MCP Suite?",
      answer: (
        <span>
          It is an open-source Model Context Protocol server plus Raycast
          extension that exposes 55+ Algorand-native tools for wallets, ASAs,
          swaps, documentation search, and atomic transactions.
        </span>
      ),
    },
    {
      question: "How do I get started?",
      answer: (
        <span>
          Clone the repository, run <code>npm install</code>, drop your Algorand
          credentials in <code>.env</code>, then point your MCP-capable client
          (VS Code, Claude Desktop, Cursor, etc.) at <code>dist/index.js</code>.
        </span>
      ),
    },
    {
      question: "What security practices are built in?",
      answer: (
        <span>
          Wallet mnemonics are encrypted with AES-256-GCM, the server defaults
          to Algorand testnet, environment variables control network promotion,
          and every tool is validated with Zod schemas.
        </span>
      ),
    },
    {
      question: "Does the Raycast extension require additional setup?",
      answer: (
        <span>
          Yes. Navigate to <code>raycast/algorand</code>, install dependencies,
          run <code>npm run build</code>, and import the folder inside Raycast →
          Extensions → Import Extension.
        </span>
      ),
    },
    {
      question: "Can I run swaps on mainnet?",
      answer: (
        <span>
          Absolutely. Set the Algorand network env vars to mainnet endpoints,
          supply a funded wallet, and the Pera Swap SDK handles quotes across
          Tinyman, Vestige, and other supported DEXs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#features", text: "Features", icon: null },
        { href: "#solution", text: "Solution", icon: null },
        { href: "#how-it-works", text: "How it works", icon: null },
        { href: "#pricing", text: "Pricing", icon: null },
      ],
    },
    {
      title: "Docs",
      links: [
        {
          href: "https://github.com/hatif03/algorand-mcp#readme",
          text: "GitHub README",
          icon: null,
        },
        {
          href: "https://github.com/hatif03/algorand-mcp/blob/main/raycast/algorand/README.md",
          text: "Raycast README",
          icon: null,
        },
        {
          href: "https://github.com/hatif03/algorand-mcp/blob/main/TEST_QUERIES.md",
          text: "Test queries",
          icon: null,
        },
        {
          href: "https://github.com/hatif03/algorand-mcp/blob/main/ENHANCED_FEATURES.md",
          text: "Enhanced features",
          icon: null,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          href: "https://developer.algorand.org/",
          text: "Algorand Dev Portal",
          icon: null,
        },
        {
          href: "https://testnet.algoexplorer.io/",
          text: "AlgoExplorer Testnet",
          icon: null,
        },
        { href: "https://app.pera.finance/", text: "Pera Swap", icon: null },
        {
          href: "https://modelcontextprotocol.io/",
          text: "Model Context Protocol",
          icon: null,
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          href: `mailto:${"hello@algorandmcp.dev"}`,
          text: "Email",
          icon: null,
        },
        {
          href: "https://x.com/Algorand",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "https://discord.gg/algorand",
          text: "Discord",
          icon: null,
        },
        {
          href: "https://www.youtube.com/@Algorand",
          text: "YouTube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
