import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeDollarSign,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Quote,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

// ─── Navigation ───────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Timings", href: "#timings" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_16px_0_oklch(0.45_0.18_255_/_0.08)] border-b border-brand-blue-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-blue-600 flex items-center justify-center shadow-blue flex-shrink-0">
            <GraduationCap className="w-4.5 h-4.5 text-white" size={18} />
          </div>
          <span className="font-display font-bold text-brand-blue-900 text-base sm:text-lg leading-tight">
            Bright Future
            <span className="hidden sm:inline text-brand-blue-600">
              {" "}
              Coaching
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-brand-blue-600 rounded-lg hover:bg-brand-blue-50 transition-all duration-150"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <Button
              size="sm"
              className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-blue font-semibold"
              onClick={() => handleNavClick("#contact")}
            >
              Enroll Now
            </Button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-brand-blue-600 hover:bg-brand-blue-50 transition-all"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-b border-brand-blue-100 shadow-lg"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    data-ocid="nav.link"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition-all flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronRight size={14} className="text-brand-blue-400" />
                  </button>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <Button
                  className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold"
                  onClick={() => handleNavClick("#contact")}
                >
                  Enroll Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Fade-Up Reveal Wrapper ────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────────

function SectionHeader({
  badge,
  heading,
  sub,
}: {
  badge?: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {badge && (
        <Badge className="mb-3 bg-brand-blue-100 text-brand-blue-700 border-0 font-semibold text-xs tracking-wide uppercase px-3 py-1">
          {badge}
        </Badge>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">
        {heading}
      </h2>
      {sub && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function Hero() {
  const handleEnrollClick = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-pattern opacity-40 pointer-events-none" />

      {/* Decorative blue orbs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.14 240 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.18 255 / 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue-100 text-brand-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-brand-blue-200">
              <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-pulse" />
              Admissions Open — 2026 Batch
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-blue-900 leading-[1.1] mb-6"
          >
            Expert Tuition for{" "}
            <span
              className="relative inline-block"
              style={{ color: "oklch(0.45 0.18 255)" }}
            >
              Academic
              <span
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.45 0.18 255), oklch(0.60 0.16 250))",
                }}
              />
            </span>{" "}
            Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/65 leading-relaxed mb-8 max-w-2xl font-body"
          >
            Personalized coaching for Class 5–12 students to improve marks,
            build strong concepts, and gain confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 mb-5"
          >
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-base px-8 py-6 rounded-xl shadow-blue transition-all hover:shadow-[0_8px_32px_0_oklch(0.45_0.18_255_/_0.35)] hover:-translate-y-0.5"
              onClick={handleEnrollClick}
            >
              Enroll Now
              <ChevronRight size={18} className="ml-1" />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              className="border-2 border-brand-blue-300 text-brand-blue-700 hover:bg-brand-blue-50 font-bold text-base px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="tel:+919000000000">
                <Phone size={17} className="mr-2" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Admission notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="flex items-center gap-2 text-sm font-medium text-brand-blue-700"
          >
            <CheckCircle2
              size={16}
              className="text-brand-blue-500 flex-shrink-0"
            />
            Admissions Open for 2026 Batch – Limited Seats Available
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 md:mt-20 flex flex-wrap gap-6 md:gap-10"
        >
          {[
            { value: "Class 5–12", label: "All Classes" },
            { value: "5 Subjects", label: "Courses Offered" },
            { value: "3 Batches", label: "Daily" },
            { value: "Dibrugarh", label: "Assam" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-brand-blue-700">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text column */}
          <FadeUp>
            <div>
              <Badge className="mb-4 bg-brand-blue-100 text-brand-blue-700 border-0 font-semibold text-xs tracking-wide uppercase px-3 py-1">
                About Us
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue-900 mb-6 leading-tight">
                About Our Coaching Centre
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6 font-body">
                Bright Future Coaching Centre, located in Dibrugarh, Assam, is
                dedicated to providing quality education to students of Class 5
                to 12. Our experienced and passionate teachers ensure every
                student receives the personal attention they deserve through
                small batch sizes. We focus on concept clarity, rigorous exam
                preparation, and creating a supportive, encouraging learning
                environment where students can grow with confidence.
              </p>
              <div className="flex items-center gap-2 text-brand-blue-700 font-semibold text-sm">
                <MapPin
                  size={15}
                  className="flex-shrink-0 text-brand-blue-500"
                />
                Dibrugarh, Assam
              </div>
            </div>
          </FadeUp>

          {/* Feature tiles */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  label: "Small Batches",
                  desc: "Personal attention for every student",
                },
                {
                  icon: Lightbulb,
                  label: "Concept Clarity",
                  desc: "Build strong foundational knowledge",
                },
                {
                  icon: ClipboardList,
                  label: "Exam-Ready",
                  desc: "Structured preparation for boards",
                },
                {
                  icon: TrendingUp,
                  label: "Track Progress",
                  desc: "Regular tests and performance updates",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-brand-blue-50 border border-brand-blue-100 rounded-2xl p-4 hover:border-brand-blue-300 hover:shadow-card transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-600 flex items-center justify-center mb-3 shadow-blue">
                    <item.icon size={17} className="text-white" />
                  </div>
                  <p className="font-display font-bold text-brand-blue-900 text-sm mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Courses Section ──────────────────────────────────────────────────────────

const courses = [
  {
    icon: Calculator,
    name: "Mathematics",
    desc: "Strong focus on fundamentals and problem solving techniques for all levels.",
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-brand-blue-600",
  },
  {
    icon: FlaskConical,
    name: "Science",
    desc: "Concept-based learning with regular practice exercises and lab-style understanding.",
    color: "bg-brand-blue-50 text-brand-blue-700",
    iconBg: "bg-brand-blue-500",
  },
  {
    icon: BookOpen,
    name: "English",
    desc: "Grammar, writing skills, comprehension, and thorough exam preparation.",
    color: "bg-brand-blue-50 text-brand-blue-700",
    iconBg: "bg-brand-blue-700",
  },
  {
    icon: GraduationCap,
    name: "Board Exam Preparation",
    desc: "Special focused coaching for Class 10 & 12 board examinations.",
    color: "bg-brand-blue-50 text-brand-blue-700",
    iconBg: "bg-brand-blue-800",
  },
  {
    icon: Star,
    name: "Foundation Course",
    desc: "Competitive exam basics and academic foundations for younger students.",
    color: "bg-brand-blue-50 text-brand-blue-700",
    iconBg: "bg-brand-blue-400",
  },
];

function Courses() {
  const ocids = [
    "courses.item.1",
    "courses.item.2",
    "courses.item.3",
    "courses.item.4",
    "courses.item.5",
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-brand-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            badge="What We Teach"
            heading="Our Courses"
            sub="Comprehensive coverage across key subjects to ensure students excel in academics."
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <FadeUp key={course.name} delay={i * 0.08}>
              <Card
                data-ocid={ocids[i]}
                className="group bg-white border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-card-hover transition-all duration-250 rounded-2xl overflow-hidden cursor-default h-full"
              >
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl ${course.iconBg} flex items-center justify-center shadow-blue flex-shrink-0`}
                    >
                      <course.icon size={22} className="text-white" />
                    </div>
                    <Badge className="bg-brand-blue-100 text-brand-blue-600 border-0 text-xs font-semibold">
                      Class 5–12
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-blue-900 text-lg mb-2 group-hover:text-brand-blue-700 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Batch Timings Section ────────────────────────────────────────────────────

const timings = [
  {
    batch: "Morning Batch",
    time: "6:00 AM – 8:00 AM",
    icon: "🌅",
    note: "Great for early risers",
  },
  {
    batch: "Afternoon Batch",
    time: "3:30 PM – 5:00 PM",
    icon: "☀️",
    note: "Post-school sessions",
  },
  {
    batch: "Evening Batch",
    time: "5:00 PM – 7:00 PM",
    icon: "🌆",
    note: "Ideal for all students",
  },
];

function Timings() {
  const ocids = ["timings.item.1", "timings.item.2", "timings.item.3"];

  return (
    <section id="timings" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            badge="Schedule"
            heading="Batch Timings"
            sub="Flexible batches designed to accommodate every student's daily schedule."
          />
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-6">
          {timings.map((t, i) => (
            <FadeUp key={t.batch} delay={i * 0.1}>
              <div
                data-ocid={ocids[i]}
                className="bg-brand-blue-50 border border-brand-blue-100 rounded-2xl p-6 text-center hover:border-brand-blue-300 hover:shadow-card transition-all duration-200"
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-display font-bold text-brand-blue-900 text-base mb-1">
                  {t.batch}
                </h3>
                <p className="text-brand-blue-600 font-bold text-lg mb-2 font-body">
                  {t.time}
                </p>
                <p className="text-xs text-muted-foreground">{t.note}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Weekend note */}
        <FadeUp delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-brand-blue-600 text-white rounded-xl px-6 py-4 justify-center">
              <Clock size={18} className="flex-shrink-0 opacity-90" />
              <p className="font-semibold text-sm text-center">
                Weekend Doubt Clearing Sessions Available
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Why Choose Us Section ────────────────────────────────────────────────────

const whyUs = [
  {
    icon: GraduationCap,
    label: "Experienced Faculty",
    desc: "Qualified and dedicated teachers with years of academic expertise",
  },
  {
    icon: Users,
    label: "Small Batch Size",
    desc: "Limited seats per batch ensure personal attention for each student",
  },
  {
    icon: ClipboardList,
    label: "Weekly Tests & Performance Tracking",
    desc: "Regular assessments to monitor and improve every student's progress",
  },
  {
    icon: MessageSquare,
    label: "Regular Parent Updates",
    desc: "Consistent feedback sessions to keep parents informed about progress",
  },
  {
    icon: BadgeDollarSign,
    label: "Affordable Fees",
    desc: "Quality education at competitive and transparent pricing",
  },
  {
    icon: TrendingUp,
    label: "Focus on Individual Improvement",
    desc: "Tailored guidance to help each student reach their personal best",
  },
];

function WhyUs() {
  const ocids = [
    "why_us.item.1",
    "why_us.item.2",
    "why_us.item.3",
    "why_us.item.4",
    "why_us.item.5",
    "why_us.item.6",
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-brand-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            badge="Our Advantage"
            heading="Why Choose Us"
            sub="We go beyond textbooks to ensure every student succeeds."
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.07}>
              <div
                data-ocid={ocids[i]}
                className="group bg-white border border-brand-blue-100 rounded-2xl p-6 hover:border-brand-blue-300 hover:shadow-card-hover transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue-600 flex items-center justify-center flex-shrink-0 shadow-blue group-hover:scale-105 transition-transform">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-blue-900 text-sm mb-1.5 leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Commitment Section ────────────────────────────────────────────────────────

function Commitment() {
  return (
    <section className="py-20 md:py-28 commitment-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-brand-blue-200 text-brand-blue-800 border-0 font-semibold text-xs tracking-wide uppercase px-3 py-1">
              Our Promise
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue-900 mb-6">
              Our Commitment to Results
            </h2>
            <div className="bg-white border border-brand-blue-200 rounded-3xl p-8 md:p-10 shadow-card relative overflow-hidden">
              {/* Decorative quote mark */}
              <div
                className="absolute -top-4 left-8 font-display text-8xl font-bold leading-none select-none pointer-events-none"
                style={{ color: "oklch(0.45 0.18 255 / 0.08)" }}
              >
                "
              </div>
              <p className="text-brand-blue-800 text-lg md:text-xl leading-relaxed font-medium relative z-10">
                We are committed to helping students improve their academic
                performance through structured learning, regular tests, and
                continuous guidance.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "Very supportive teachers and clear explanations.",
    author: "Parent of Class 10 Student",
    initials: "PC",
    rating: 5,
  },
  {
    quote: "My math marks improved significantly after joining.",
    author: "Class 9 Student",
    initials: "S9",
    rating: 5,
  },
];

function Testimonials() {
  const ocids = ["testimonials.item.1", "testimonials.item.2"];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            badge="Testimonials"
            heading="What Our Students & Parents Say"
            sub="Real words from the families who trust us with their children's futures."
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 0.12}>
              <Card
                data-ocid={ocids[i]}
                className="bg-brand-blue-50 border-brand-blue-100 rounded-2xl overflow-hidden hover:border-brand-blue-300 hover:shadow-card transition-all duration-200"
              >
                <CardContent className="p-7">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }, (_, j) => (
                      <Star
                        key={`star-${t.author}-${j}`}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote
                      size={20}
                      className="text-brand-blue-300 mb-3 flex-shrink-0"
                    />
                    <p className="text-brand-blue-900 font-medium text-base leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-blue-600 flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0">
                      {t.initials}
                    </div>
                    <span className="text-sm font-semibold text-brand-blue-800">
                      — {t.author}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-blue-700 text-brand-blue-100 border-brand-blue-600 font-semibold text-xs tracking-wide uppercase px-3 py-1">
              Contact
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch Today
            </h2>
            <p className="text-brand-blue-300 text-base md:text-lg max-w-xl mx-auto">
              Call or WhatsApp us for admission enquiries.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm border border-brand-blue-700 rounded-3xl p-8 md:p-10 mb-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-blue-200" />
                </div>
                <div>
                  <p className="text-brand-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-white font-medium">Dibrugarh, Assam</p>
                </div>
              </div>
              <div className="w-full h-px bg-brand-blue-700" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-brand-blue-200" />
                </div>
                <div>
                  <p className="text-brand-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919000000000"
                    className="text-white font-medium hover:text-brand-blue-200 transition-colors"
                  >
                    +91 90000 00000
                  </a>
                </div>
              </div>
              <div className="w-full h-px bg-brand-blue-700" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-blue-200" />
                </div>
                <div>
                  <p className="text-brand-blue-300 text-xs font-semibold uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@brightfuturedemo.com"
                    className="text-white font-medium hover:text-brand-blue-200 transition-colors"
                  >
                    info@brightfuturedemo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="contact.primary_button"
              size="lg"
              className="bg-white text-brand-blue-900 hover:bg-brand-blue-50 font-bold text-base px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_0_oklch(1_0_0_/_0.15)]"
              asChild
            >
              <a href="tel:+919000000000">
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              data-ocid="contact.secondary_button"
              size="lg"
              className="bg-[#25D366] hover:bg-[#1fb859] text-white font-bold text-base px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_0_oklch(0.7_0.2_150_/_0.35)]"
              asChild
            >
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp size={18} className="mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-brand-blue-950 py-10 border-t border-brand-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="w-7 h-7 rounded-lg bg-brand-blue-600 flex items-center justify-center">
            <GraduationCap size={15} className="text-white" />
          </div>
          <span className="font-display font-bold text-white text-base">
            Bright Future Coaching Centre
          </span>
        </div>

        <p className="text-brand-blue-400 text-sm mb-1">Dibrugarh, Assam</p>
        <p className="text-brand-blue-500 text-sm mb-4">
          © {year} All Rights Reserved
        </p>

        <p className="text-brand-blue-600 text-xs italic mb-4">
          This is a demo website created for portfolio purposes only.
        </p>

        <p className="text-brand-blue-600 text-xs">
          Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue-400 hover:text-brand-blue-300 transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Timings />
        <WhyUs />
        <Commitment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
