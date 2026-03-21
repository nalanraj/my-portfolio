import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => setStatus("error"));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-purple-50 text-black min-h-screen font-sans scroll-smooth">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold">Nalamaharadjan DOURE</span>
          <nav className="flex gap-6 text-sm">
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-purple-600 transition">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-black font-medium transition">Get in touch</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="flex flex-wrap gap-3">
          {["Head of QA", "QA Manager", "Quality Engineering Lead", "AI Quality Strategist"].map((skill, i) => (
            <motion.span key={i} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-sm">
              {skill}
            </motion.span>
          ))}
        </div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          I turn QA into
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            a business advantage
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-gray-600 max-w-2xl"
        >
          I'm a QA Leader with 15+ years experience, specializing in scaling quality systems, building automation frameworks, and driving AI-powered engineering excellence.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700"><a href="#contact">Work with me</a></Button>
          <Button variant="outline"><a href="#experience">See my work</a></Button>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-semibold mb-10">
          From QA bottlenecks → Quality-driven organizations
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Build Quality Systems",
              desc: "Design scalable QA strategies, test pyramids, and robust automation frameworks"
            },
            {
              title: "Scale Teams & Culture",
              desc: "Embed a strong quality mindset across squads and eliminate QA silos"
            },
            {
              title: "Leverage AI",
              desc: "Use LLMs and engineering data to generate actionable quality insights"
            }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}>
              <Card className="bg-white/80 backdrop-blur border border-gray-200 hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-3">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Proven Impact</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Wakeo",
              desc: "Defined QA strategy, built Cypress E2E framework, and established KPIs across squads"
            },
            {
              title: "Ankorstore",
              desc: "Scaled QA team from 0 to 8 engineers and implemented automation frameworks"
            },
            {
              title: "Egencia",
              desc: "Led release quality, managed offshore teams, and improved product reliability"
            },
            {
              title: "QEnabler",
              desc: "Building an AI-native platform to track engineering quality and maturity"
            }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }}>
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-3">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Core Expertise</h2>

          <div className="flex flex-wrap gap-3">
            {["Playwright", "Cypress", "Selenium", "AI Strategy", "AWS", "Python", "BDD", "Quality Coaching"].map((skill, i) => (
              <motion.span key={i} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-sm">
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (SIMPLIFIED) */}
      <section id="contact" className="py-24 px-6 text-center bg-white border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Let’s build quality together</h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Whether you're scaling your engineering team, improving quality practices, or exploring AI-driven QA — I’d love to connect and exchange ideas.
        </motion.p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:nalanraj@gmail.com"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            📩 nalanraj@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/nalamaharadjan-doure-97721727/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            🔗 Connect with me on LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Nalan DOURE •
          <a href="https://www.linkedin.com/in/nalamaharadjan-doure-97721727/" target="_blank" rel="noopener noreferrer" className="underline ml-1">LinkedIn Profile</a>
        </p>
      </footer>
    </div>
  );
}
