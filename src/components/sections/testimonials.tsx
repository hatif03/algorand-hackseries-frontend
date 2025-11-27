"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Lena Ortiz",
    role: "Lead Agent Engineer, Blockraft",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        We wired the MCP server into Claude Desktop and immediately unlocked
        every Algorand primitive we needed.{" "}
        <Highlight>55+ tools with one config file.</Highlight>
      </p>
    ),
  },
  {
    name: "Marcus Wei",
    role: "Head of Product, Ray Labs",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        The Raycast extension feels native—wallet reset, faucet funds, swaps,
        all driven by shortcuts.{" "}
        <Highlight>Ops can stay in the menu bar now.</Highlight>
      </p>
    ),
  },
  {
    name: "Isha Patel",
    role: "Senior Developer Advocate, Algorand",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        Being able to demo atomic transfers, ASA creation, and swaps from a
        single MCP endpoint{" "}
        <Highlight>made our hackathon workshops effortless.</Highlight>
      </p>
    ),
  },
  {
    name: "Diego Ramos",
    role: "Founder, Vestige Analytics",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    description: (
      <p>
        The swap integration rides on Pera, so we get Tinyman + Vestige quotes
        instantly.{" "}
        <Highlight>No more juggling curl scripts for price discovery.</Highlight>
      </p>
    ),
  },
  {
    name: "Sara Williams",
    role: "Director of Engineering, NFDomains",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        We plugged our docs search into the knowledge tools and{" "}
        <Highlight>agents can now answer NFD questions without context switching.</Highlight>
      </p>
    ),
  },
  {
    name: "Omar Siddiqui",
    role: "Security Lead, Nodebox",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        AES-256-GCM wallet encryption plus testnet defaults meant{" "}
        <Highlight>compliance signed off on the pilot in a day.</Highlight>
      </p>
    ),
  },
  {
    name: "Mei Park",
    role: "Automation Engineer, Tinyman",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        Having swaps, ASA ops, and key registration exposed through MCP{" "}
        <Highlight>cut our internal tooling backlog in half.</Highlight>
      </p>
    ),
  },
  {
    name: "Harold Dixon",
    role: "CTO, AlgoNode",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    description: (
      <p>
        The Indexer + Algod API helpers act like living docs.{" "}
        <Highlight>We onboard new devs with a single repo now.</Highlight>
      </p>
    ),
  },
  {
    name: "Yara Hussein",
    role: "Product Manager, Pera",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        Watching Raycast fire a swap, open AlgoExplorer, and confirm balances{" "}
        <Highlight>proved the UX we wanted for power users.</Highlight>
      </p>
    ),
  },
  {
    name: "Noah Grayson",
    role: "Founder, Cursor Builders Guild",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    description: (
      <p>
        Cursor auto-complete plus MCP commands means{" "}
        <Highlight>we prototype Algorand bots in minutes, not days.</Highlight>
      </p>
    ),
  },
  {
    name: "Helena Kim",
    role: "Developer Experience, Raycast",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        The extension ships copy-to-clipboard, faucet, and reset flows{" "}
        <Highlight>that feel handcrafted for macOS builders.</Highlight>
      </p>
    ),
  },
  {
    name: "Luis Romero",
    role: "Principal Engineer, AlgoPay",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        Zod validation plus TypeScript types on every tool{" "}
        <Highlight>let us trust agents with real accounts</Highlight> faster
        than any custom stack we tried.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
