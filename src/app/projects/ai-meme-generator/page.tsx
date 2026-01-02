"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python",
  "NumPy",
  "Pandas",
  "Stable Diffusion",
  "LLM API",
  "Image Processing",
];

export default function AiMemeGeneratorProject() {
  return (
    <section className="bg-[#0a0a0a] text-white px-6 sm:px-12 py-24 max-w-5xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          AI-Powered Meme Generator
        </h1>
        <p className="text-white/60 text-lg max-w-3xl">
          An end-to-end AI pipeline that converts a company description into a
          context-aware meme using multiple AI models.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-white/70 leading-relaxed">
          The goal of this project was to automate meme creation for marketing
          use-cases by combining text generation, image generation, and caption
          understanding into a single AI-driven pipeline.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          System Flow & Architecture
        </h2>
        <ol className="list-decimal list-inside text-white/70 space-y-2">
          <li>Input company description provided by the user</li>
          <li>LLM expands the description into a meme-style prompt</li>
          <li>Stable Diffusion generates a meme image</li>
          <li>Caption model analyzes image context</li>
          <li>Final meme is rendered with text overlay</li>
        </ol>
      </section>

      {/* Implementation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          Implementation Details
        </h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>
            Used <b>Pandas</b> to manage prompt history and outputs
          </li>
          <li>
            Used <b>NumPy</b> for image array manipulation and preprocessing
          </li>
          <li>
            Modular Python functions to keep the pipeline scalable
          </li>
          <li>
            External LLM API for prompt expansion to keep the system flexible
          </li>
        </ul>
      </section>

      {/* Skills Mapping */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Skills Applied</h2>
        <p className="text-white/70">
          Python, NumPy, Pandas, AI Pipelines, Image Processing, Model
          Integration
        </p>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          Challenges & Learnings
        </h2>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Handling inconsistent AI outputs</li>
          <li>Balancing prompt creativity vs relevance</li>
          <li>Optimizing image generation time</li>
        </ul>
      </section>

      {/* Future */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Future Improvements
        </h2>
        <p className="text-white/70">
          Adding user feedback loops, model fine-tuning, and real-time meme
          previews.
        </p>
      </section>
    </section>
  );
}
