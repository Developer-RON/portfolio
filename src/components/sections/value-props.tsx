"use client";

import { motion } from "framer-motion";
import { Database, Server, Cloud, TestTube2, LayoutTemplate, Sparkles } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const icons = [LayoutTemplate, Server, Database, Sparkles, Cloud, TestTube2];

export function ValueProps() {
  return (
    <section id="capabilities" className="border-y border-zinc-200 bg-zinc-50/60 py-16 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What I bring"
          title="Capabilities, not percentages"
          description="The engineering work I can contribute to from day one — each backed by projects you can inspect below."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Card className="h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {cap.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cap.skills.map((s) => (
                        <Badge key={s} variant="secondary">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
