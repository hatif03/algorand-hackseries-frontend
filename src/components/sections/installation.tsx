"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Copy, Rocket } from "lucide-react";
import { useState } from "react";

const MCP_SERVER_URL = "https://server.smithery.ai/@hatif03/algorand-mcp/mcp";

// Helper function to create base64 encoded config
const createCursorDeepLink = () => {
  if (typeof window === "undefined") return "";
  
  const cursorConfigJson = {
    url: MCP_SERVER_URL,
  };
  
  try {
    const configString = JSON.stringify(cursorConfigJson);
    const base64Config = btoa(unescape(encodeURIComponent(configString)));
    return `cursor://anysphere.cursor-deeplink/mcp/install?name=algorand-mcp&config=${encodeURIComponent(base64Config)}`;
  } catch (error) {
    console.error("Error creating deep link:", error);
    return "";
  }
};

const cursorConfig = {
  name: "algorand-mcp",
  config: JSON.stringify(
    {
      mcpServers: {
        "algorand-mcp": {
          url: MCP_SERVER_URL,
        },
      },
    },
    null,
    2
  ),
  getDeepLink: createCursorDeepLink,
  instructions: [
    "Click 'Add to Cursor' below",
    "Cursor will open and prompt you to install",
    "Confirm the installation",
    "Start using 55+ Algorand tools!",
  ],
};

const claudeConfig = {
  name: "algorand-mcp",
  config: JSON.stringify(
    {
      mcpServers: {
        "algorand-mcp": {
          url: MCP_SERVER_URL,
        },
      },
    },
    null,
    2
  ),
  instructions: [
    "Click 'Add to Claude Desktop' below",
    "Config copied to clipboard & Claude Desktop will open",
    "Paste config into Settings → Developer → Edit Config",
    "Restart Claude Desktop to activate",
  ],
};

export default function InstallationSection() {
  const [copiedCursor, setCopiedCursor] = useState(false);
  const [copiedClaude, setCopiedClaude] = useState(false);
  const [cursorInstalling, setCursorInstalling] = useState(false);
  const [claudeInstalling, setClaudeInstalling] = useState(false);

  const copyToClipboard = (text: string, type: "cursor" | "claude") => {
    navigator.clipboard.writeText(text);
    if (type === "cursor") {
      setCopiedCursor(true);
      setTimeout(() => setCopiedCursor(false), 2000);
    } else {
      setCopiedClaude(true);
      setTimeout(() => setCopiedClaude(false), 2000);
    }
  };

  const installInCursor = () => {
    setCursorInstalling(true);
    try {
      // Create deep link and try to open Cursor
      const deepLink = cursorConfig.getDeepLink();
      if (deepLink) {
        // Try to open Cursor with deep link
        window.location.href = deepLink;
        // Fallback: if deep link doesn't work, copy config and show instructions
        setTimeout(() => {
          setCursorInstalling(false);
        }, 2000);
      } else {
        // Fallback to copy config if deep link creation fails
        copyToClipboard(cursorConfig.config, "cursor");
        setCursorInstalling(false);
      }
    } catch (error) {
      setCursorInstalling(false);
      // Fallback to copy config
      copyToClipboard(cursorConfig.config, "cursor");
    }
  };

  const installInClaude = () => {
    setClaudeInstalling(true);
    try {
      // Copy config to clipboard first
      copyToClipboard(claudeConfig.config, "claude");
      
      // Try to open Claude Desktop using a protocol handler
      // Claude Desktop might support claude:// protocol
      try {
        // Try opening Claude Desktop app directly
        window.location.href = "claude://";
      } catch (e) {
        // If protocol handler doesn't work, just copy config
        // User will need to manually paste it
      }
      
      setTimeout(() => {
        setClaudeInstalling(false);
      }, 1500);
    } catch (error) {
      setClaudeInstalling(false);
      copyToClipboard(claudeConfig.config, "claude");
    }
  };

  return (
    <Section
      title="Installation"
      subtitle="One-Click Setup for Cursor, Claude & Raycast"
      description="Get started in seconds with our MCP server or Raycast extension. Choose your preferred tool and install instantly."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Cursor Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Cursor IDE</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <CardDescription>
                Install the Algorand MCP server in Cursor IDE
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Configuration</label>
                  <button
                    onClick={() => copyToClipboard(cursorConfig.config, "cursor")}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-8 gap-2"
                    )}
                  >
                    {copiedCursor ? (
                      <>
                        <Check className="h-4 w-4 text-primary" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto border">
                  <code>{cursorConfig.config}</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Quick Steps:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {cursorConfig.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={installInCursor}
                disabled={cursorInstalling}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full gap-2",
                  cursorInstalling && "opacity-50 cursor-not-allowed"
                )}
              >
                {cursorInstalling ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Opening Cursor...
                  </>
                ) : (
                  <>
                    <Rocket className="h-4 w-4" />
                    Add to Cursor
                  </>
                )}
              </button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Claude Desktop Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Claude Desktop</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
              <CardDescription>
                Install the Algorand MCP server in Claude Desktop
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Configuration</label>
                  <button
                    onClick={() => copyToClipboard(claudeConfig.config, "claude")}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-8 gap-2"
                    )}
                  >
                    {copiedClaude ? (
                      <>
                        <Check className="h-4 w-4 text-primary" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto border">
                  <code>{claudeConfig.config}</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Quick Steps:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {claudeConfig.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={installInClaude}
                disabled={claudeInstalling}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full gap-2",
                  claudeInstalling && "opacity-50 cursor-not-allowed"
                )}
              >
                {claudeInstalling ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Opening Claude Desktop...
                  </>
                ) : (
                  <>
                    <Rocket className="h-4 w-4" />
                    Add to Claude Desktop
                  </>
                )}
              </button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Raycast Extension */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1"
        >
          <Card className="h-full border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Raycast</CardTitle>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              </div>
              <CardDescription>
                Native macOS toolbar integration for Algorand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wallet management & balance checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Token swaps with Pera integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>ASA creation & management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Testnet faucet & transaction history</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center pt-4">
                <a
                  title="Install algorand Raycast Extension"
                  href="https://www.raycast.com/raihan_khan/algorand"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.raycast.com/raihan_khan/algorand/install_button@2x.png?v=1.1"
                    height="64"
                    alt="Install algorand Raycast Extension"
                    style={{ height: "64px" }}
                  />
                </a>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Click to install from the Raycast Store
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-center text-muted-foreground">
          <strong className="text-foreground">MCP Server URL:</strong>{" "}
          <code className="bg-background px-2 py-1 rounded text-xs">
            {MCP_SERVER_URL}
          </code>
        </p>
      </div>
    </Section>
  );
}

