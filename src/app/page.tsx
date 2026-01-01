import React from "react";
import { Hero } from "./_components/hero";
import { Partners } from "./_components/partners";
import BentoGrid from "./_components/bento-grid";
import Presentation from "./_components/presentation";
import Features from "./_components/features";
import { AnimatedWapper } from "./_components/animated-wapper";
import { Integrations } from "./_components/integrations";
import { Statistics } from "./_components/statistics";
import Feedback from "./_components/feedback";
import { Pricing } from "./_components/pricing";
import FAQ from "./_components/faq";
import { DownloadApp } from "./_components/download-app";
import { Footer } from "./_components/footer";
import { SmoothScroll } from "./_components/smooth-scroll";

export default function Home() {
  return (
    <main className="w-full mt-32">
      <AnimatedWapper>
        <section className="flex min-h-screen w-full items-center gap-8 flex-col">
          <div className="max-w-6xl p-6 w-full">
            <Hero />
            <Partners />
            <BentoGrid />
            <Presentation />
            <Features />
            <Integrations />
          </div>
          <div className="bg-secondary w-full py-8 flex justify-center items-center">
            <Statistics />
          </div>
          <div className="max-w-6xl p-6 w-full">
            <Feedback />
            <Pricing />
            <FAQ />
            <DownloadApp />
          </div>
          <Footer />
        </section>
      </AnimatedWapper>
    </main>
  );
}
