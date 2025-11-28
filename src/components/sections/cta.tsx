"use client";

import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import AddToWorkflowModal from "@/components/add-to-workflow-modal";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Listen for custom event from navbar
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    window.addEventListener("openAddToWorkflowModal", handleOpenModal);

    // Check if we should open modal from URL hash
    if (window.location.hash === "#add-to-workflow") {
      setIsModalOpen(true);
      window.history.replaceState(null, "", window.location.pathname);
    }

    return () => {
      window.removeEventListener("openAddToWorkflowModal", handleOpenModal);
    };
  }, []);

  return (
    <Section
      id="cta"
      title="Ready to run AlgoDev Studio?"
      subtitle="Install the hosted MCP server with one click, sync Raycast, and ship workflows immediately."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          href="https://github.com/hatif03/algorand-mcp"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full sm:w-auto flex gap-2"
          )}
          target="_blank"
          rel="noreferrer"
        >
          <Icons.logo className="h-6 w-6" />
          Open the GitHub repo
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Icons.logo className="h-6 w-6" />
          Add to workflow
        </button>
      </div>
      <AddToWorkflowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
}
