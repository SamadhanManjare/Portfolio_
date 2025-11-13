/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiArrowDown } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
          >
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block text-primary mb-2"
              >
                Hi, I'm {config.developer.name}
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/60 text-lg md:text-2xl"
              >
              Full Stack Developer | Java Developer | Software Developer              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-base sm:text-md text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
          👋 Hi, I'm Samadhan Manjare, a B.Tech Computer Engineering graduate from Pune University, passionate about building intuitive and efficient web applications.
          <br />
          💼 Currently working as a Frontend Developer Intern at Next Class (EdTech Startup), where I contribute to developing eCommerce and admin panel solutions with React.js. 
          <br />
          💡 Skilled in JavaScript, React.js, Python, Java, SQL, HTML5, CSS3, Node.js, and experienced in designing responsive, user-friendly interfaces.
          <br />
          🚀 I enjoy solving problems, exploring new technologies, and creating impactful projects.
          <br />
          🌱 Always curious and eager to grow, collaborate, and contribute to innovative projects that make a difference.
          </motion.p>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                variant="expandIcon"
                Icon={FaLinkedin}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                LinkedIn
              </Button>
            </a>

               <a href={config.resume} target="_blank" rel="noopener noreferrer">
              <Button
                variant="expandIcon"
                Icon={HiArrowDown}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                   View Resume
              </Button>
            </a>

            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

     

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;