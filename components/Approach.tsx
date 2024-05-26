"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section id='strategy' className="w-full py-20 ">
        <h1 className="heading"> 
            My <span className="text-purple">Approach</span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
            title="Discovery & Strategic Planning" 
            icon={<AceternityIcon order='Phase 1'/>}
            description="In this initial phase, we collaborate closely to define your website’s objectives. We identify your target audience and outline key functionalities. Discussions cover site structure, navigation, and content requirements. The goal is to create a solid strategic plan."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
            title="Development & Progress Tracking" 
            icon={<AceternityIcon order='Phase 2'/>}
            description="Once the strategic plan is in place, I dive into coding. From initial sketches to polished code, I keep you updated at every milestone. This phase ensures steady progress and alignment with the project vision."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            // dotSize={2}
          />
        </Card>
        <Card 
            title="Deployment & Launch" 
            icon={<AceternityIcon order='Phase 3'/>}
            description="The magic happens here! Based on the approved design, I meticulously translate everything into functional code. Your website comes to life, ready for launch. 🚀"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="lg:h-[35rem] border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-center dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
         style={{ color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="font-bold text-2xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl">
                {order}
            </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach