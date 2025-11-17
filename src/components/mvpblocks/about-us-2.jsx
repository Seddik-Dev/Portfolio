import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Award,
  Sparkles,
  Building,
  LineChart,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react";

// Simple StatItem without next-themes or cn
const StatItem = ({ value, label, icon, delay = 0, decimalPlaces = 0, color = "from-rose-500 to-rose-500" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900`}
    >
      <div
        className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl`}
      />

      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
          {icon}
        </div>

        <div className="flex flex-col">
          <h3 className="flex items-baseline text-3xl font-bold tracking-tight">
            {value.toLocaleString(undefined, { maximumFractionDigits: decimalPlaces })}
            <span className="ml-1 text-sm font-medium opacity-70">+</span>
          </h3>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUs2() {
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const stats = [
    { value: 5000, label: "Happy Clients", icon: <Users className="h-5 w-5" />, delay: 0, color: "from-rose-500 to-orange-500" },
    { value: 15, label: "Years Experience", icon: <Clock className="h-5 w-5" />, delay: 0.1, color: "from-blue-500 to-cyan-500" },
    { value: 100, label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" />, delay: 0.2, color: "from-green-500 to-emerald-500" },
    { value: 24, label: "Awards Won", icon: <Award className="h-5 w-5" />, delay: 0.3, color: "from-purple-500 to-violet-500" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header Section with Badge */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 flex justify-center"
          >
            <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm font-medium text-rose-600 dark:border-rose-800/50 dark:bg-rose-900/30 dark:text-rose-400">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-300 sm:text-5xl"
          >
            About Our Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Delivering excellence for over 15 years
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* About Content */}
        <div ref={aboutRef} className="relative mx-auto mb-20">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/80 to-rose-500/60 text-white shadow-lg">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-blue-500/60 text-white shadow-lg">
                <LineChart className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                To be the leading provider of transformative digital experiences, recognized globally for our commitment to excellence, innovation, and client success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-16 flex items-start gap-4"
          >
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-500/5 text-rose-600 dark:text-rose-400">
              <Building className="h-5 w-5" />
            </div>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              We are a passionate team of experts dedicated to delivering exceptional solutions that help businesses thrive in the digital landscape. Our commitment to innovation and quality has made us a trusted partner for organizations worldwide.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl"
          >
            Our Journey
          </motion.h2>

          <div className="relative ml-4 border-l border-gray-200 pl-8 dark:border-gray-700 md:ml-0 md:border-none md:pl-0">
            {[
              { year: "2008", title: "Founded", description: "Our company was established with a vision to transform digital experiences." },
              { year: "2015", title: "Global Expansion", description: "Expanded operations to serve clients across 20+ countries worldwide." },
              { year: "2019", title: "Innovation Award", description: "Recognized for our cutting-edge solutions and technological innovation." },
              { year: "2023", title: "New Horizons", description: "Launched new service offerings to meet evolving market demands." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="relative mb-10 md:grid md:grid-cols-5 md:gap-8"
              >
                <div className="md:col-span-1">
                  <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl">
                    {item.year}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white md:text-xl">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}