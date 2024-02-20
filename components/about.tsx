"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Greetings! I'm Roy Maruli Tua Nababan, deeply committed to driving  <span className="underline">positive change</span> in my community and beyond. 
        Currently, I hold the position of <span className="font-medium">Vice President</span> at <span className="font-medium">Tanoto Scholars Association Universitas Indonesia</span>, where I co-lead efforts to create impactful and sustainable outcomes. 
      </p>
      <p className="mb-3">
        My journey in project and campaign management has equipped me with valuable experience and insights. I've had the privilege of spearheading various initiatives aimed at making a difference, and I thrive on the challenges and opportunities these projects bring.
      </p>
      <p className="mb-3">
        With a passion for meaningful impact, 
        I am dedicated to leveraging my skills and knowledge to contribute to a brighter future. 
        I look forward to continuing my journey of learning, growth, and service, always striving to make a difference wherever I go
      </p>

    </motion.section>
  );
}
