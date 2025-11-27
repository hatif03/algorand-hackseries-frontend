"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Rocket } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AddToWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddToWorkflowModal({
  isOpen,
  onClose,
}: AddToWorkflowModalProps) {
  const handleAddMCP = () => {
    onClose();
    // Scroll to installation section
    setTimeout(() => {
      const element = document.getElementById("installation");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-background rounded-2xl border shadow-lg p-6 mx-4 md:mx-0"
          >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Add to Workflow
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Choose how you want to integrate Algodev Studio
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* MCP Server Option */}
                  <button
                    onClick={handleAddMCP}
                    className={cn(
                      "w-full p-6 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all text-left group",
                      "bg-primary/5 hover:bg-primary/10 flex flex-col"
                    )}
                  >
                    <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4 border border-primary/20 group-hover:border-primary/40 transition-colors">
                      <Image
                        src="/mcp-screenshot.png"
                        alt="MCP Server"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">Add MCP Server</h3>
                        <Rocket className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Install the MCP server in Cursor, Claude Desktop, or VS Code
                      </p>
                    </div>
                  </button>

                  {/* Raycast Extension Option - Disabled */}
                  <button
                    disabled
                    className={cn(
                      "w-full p-6 rounded-lg border-2 border-muted opacity-50 cursor-not-allowed text-left flex flex-col",
                      "bg-muted/30"
                    )}
                  >
                    <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4 border border-muted">
                      <Image
                        src="/raycast_screenshot.png"
                        alt="Raycast Extension"
                        fill
                        className="object-cover opacity-60"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">Install Raycast Extension</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Import the Raycast extension for macOS toolbar integration
                      </p>
                    </div>
                  </button>
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

