import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  Phone, MapPin, Clock, Baby, Wind, Brain, Apple, ShieldPlus, Award, HeartPulse, Stethoscope, CalendarCheck, CheckCircle2,
} from "lucide-react";
import doctorAsset from "@/assets/dr-shoaib.jpg.asset.json";
const doctor = doctorAsset.url;
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PHONE = "01330-668121";
const TEL = "tel:+8801330668121";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Shoaib H Khan — Newborn & Child Specialist, Jhalokathi" },
      { name: "description", content: "Consultant newborn & child specialist (up to 18 years) in Jhalokathi. MBBS, DCH, MAP. Visiting daily 5–8 PM. Call 01330-668121." },
      { property: "og:title", content: "Dr. Shoaib H Khan — Newborn & Child Specialist" },
      { property: "og:description", content: "Trusted pediatric care in Jhalokathi. Everyday 5:00 PM – 8:00 PM. Call 01330-668121." },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function LetterReveal({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2 + i * 0.05, duration: 0.45 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

const nav = [
  ["About", "#about"], ["Services", "#services"], ["Schedule", "#schedule"], ["Contact", "#contact"],
];

const services = [
  { icon: Wind, en: "Newborn & Child Respiratory Complications & Cold-related Issues", bn: "নবজাতক ও শিশুর শ্বাসতন্ত্র জটিলতা ও ঠান্ডা জনিত সমস্যা" },
  { icon: Brain, en: "Congenital & Physical/Mental Developmental Treatment", bn: "জন্মগত ও শারীরিক/মানসিক বিকাশ জনিত চিকিৎসা" },
  { icon: Apple, en: "Malnutrition, Loss of Appetite & Allergy Care", bn: "শিশুদের ক্ষুধামন্দা, অপুষ্টি ও এলার্জি জনিত চিকিৎসা" },
  { icon: ShieldPlus, en: "Diarrhea, Pneumonia & Infectious Diseases", bn: "শিশুদের ডায়রিয়া, নিউমোনিয়া সহ সকল সংক্রামক রোগের চিকিৎসা" },
];

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold transition-all hover:-translate-y-0.5";
const btnPrimary = `${btn} bg-brand text-primary-foreground shadow-soft`;
const btnOutline = `${btn} border border-border bg-card text-foreground hover:border-secondary`;

function Index() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(String(new FormData(e.currentTarget).get("name") || ""));
    setOpen(true);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background pb-20 font-sans text-foreground md:pb-0">
      {/* Header */}
      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 shadow-soft md:px-6">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-navy">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-primary-foreground"><Stethoscope className="h-5 w-5" /></span>
            <span className="hidden sm:inline">Dr. Shoaib H Khan</span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-accent px-4 py-2 font-display text-sm font-bold text-accent-foreground transition-transform hover:scale-105">Book Appointment</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-hero relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
        <motion.div aria-hidden animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 14 }} className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <motion.div aria-hidden animate={{ x: [0, -40, 0], y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 16 }} className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Baby className="h-4 w-4" /> আপনার সুস্বাস্থ্যের অভিভাবক
            </motion.span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-navy md:text-6xl">
              <LetterReveal text="Dr. Shoaib H Khan" />
            </h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-2 text-2xl font-semibold text-brand">ডাঃ শোয়েব এইচ খান</motion.p>
            <Reveal delay={1.2}>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">Consultant — Newborn &amp; Child Specialist <span className="font-semibold text-foreground">(Up to 18 Years)</span></p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["MBBS (Dhaka)", "DCH (Child Health)", "MAP (USA)"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm font-semibold text-navy"><Award className="h-4 w-4 text-accent" />{b}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className={btnPrimary}><Phone className="h-4 w-4" /> Call Now ({PHONE})</a>
                <a href="#schedule" className={btnOutline}><Clock className="h-4 w-4" /> View Visiting Hours</a>
              </div>
            </Reveal>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-x-4 bottom-0 top-16 overflow-hidden rounded-[3rem] bg-card shadow-soft">
              <div className="absolute inset-0 bg-brand opacity-15" />
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[18px] border-secondary/20" />
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/25 blur-2xl" />
            </div>
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute -inset-2 top-10 rounded-[3.5rem] border-2 border-dashed border-primary/20" />
            <img src={doctor} alt="Dr. Shoaib H Khan, child specialist" width={872} height={1216} className="relative z-10 mx-auto w-[88%] mix-blend-multiply" />
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, y: [0, -6, 0] }} transition={{ delay: 1.4, y: { repeat: Infinity, duration: 3.5 } }} className="glass absolute -right-2 bottom-36 z-20 flex items-center gap-2 rounded-2xl p-3 shadow-soft">
              <HeartPulse className="h-5 w-5 animate-pulse text-destructive" /><span className="text-sm font-bold text-navy">Newborn Care</span>
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute -left-4 bottom-10 z-20 flex items-center gap-3 rounded-2xl p-3 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Clock className="h-5 w-5" /></span>
              <div className="text-sm"><p className="font-bold text-navy">Everyday</p><p className="text-muted-foreground">5:00 – 8:00 PM</p></div>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="glass absolute -right-3 top-20 z-20 flex items-center gap-2 rounded-2xl p-3 shadow-soft">
              <MapPin className="h-5 w-5 text-primary" /><span className="text-sm font-bold text-navy">Jhalokathi</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-navy py-4">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex w-max gap-10 whitespace-nowrap font-display font-semibold text-primary-foreground">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-3"><s.icon className="h-5 w-5 text-accent" />{s.bn}</span>
          ))}
        </motion.div>
      </div>

      {/* About */}
      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionTitle kicker="About" title="About Dr. Shoaib H Khan" /></Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Dr. Shoaib H Khan is a dedicated pediatric consultant specialising in <strong className="text-foreground">Pediatrics, Newborn Care and Child Development</strong>, caring for children from birth up to 18 years.</p>
              <p>He completed advanced training in <strong className="text-foreground">newborn &amp; child respiratory complications</strong> and <strong className="text-foreground">child nutrition</strong> at South Apollo Medical College Hospital, Barishal.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                { icon: Baby, t: "0–18 yrs", d: "Children & teens treated" },
                { icon: HeartPulse, t: "Newborn", d: "Specialized newborn care" },
                { icon: ShieldPlus, t: "Trusted", d: "Family healthcare" },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft">
                    <s.icon className="h-7 w-7 text-secondary" />
                    <p className="mt-3 font-display text-2xl font-extrabold text-navy">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionTitle kicker="Services" title="Specialised Child Care" /></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.en} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-primary-foreground transition-transform group-hover:rotate-6 group-hover:scale-110"><s.icon className="h-7 w-7" /></span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.en}</h3>
                  <p className="mt-2 text-muted-foreground">{s.bn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionTitle kicker="Schedule" title="Visiting Hours & Chamber" /></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal><InfoCard icon={Clock} title="Visiting Hours">
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-display font-bold text-accent-foreground">Everyday: 5:00 PM – 8:00 PM</span>
              <p className="mt-3 text-muted-foreground">প্রতিদিন বিকাল ৫টা থেকে রাত ৮টা পর্যন্ত</p>
            </InfoCard></Reveal>
            <Reveal delay={0.1}><InfoCard icon={MapPin} title="Chamber">
              <p className="font-semibold text-foreground">Dr. Shoaib H Khan Maternal &amp; Child Care Center</p>
              <p className="mt-2 text-muted-foreground">Kalibari Road, 2nd Floor of Milan Pharmacy, Jhalokathi</p>
              <p className="mt-1 text-sm text-muted-foreground">কালিবাড়ী রোড, মিলন ফার্মেসীর ২য় তলায়, ঝালকাঠি</p>
            </InfoCard></Reveal>
            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl bg-brand p-7 text-primary-foreground shadow-soft">
                <Phone className="h-8 w-8" />
                <h3 className="mt-4 font-display text-xl font-bold">Call for Appointment</h3>
                <p className="mt-2 font-display text-3xl font-extrabold">{PHONE}</p>
                <a href={TEL} className="mt-5 inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 font-display font-bold text-primary transition-transform hover:scale-105"><Phone className="h-4 w-4" /> Tap to Call</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-hero px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal><SectionTitle kicker="Contact" title="Request an Appointment" /></Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass mt-10 grid gap-4 rounded-3xl p-6 shadow-soft sm:grid-cols-2 md:p-8">
              <Field label="Patient / Parent Name" name="name" required />
              <Field label="Child's Age" name="age" placeholder="e.g. 3 years" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Preferred Date" name="date" type="date" required />
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium">Brief Problem Description</span>
                <textarea name="problem" rows={4} className="w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button type="submit" className={`${btnPrimary} sm:col-span-2`}><CalendarCheck className="h-5 w-5" /> Book Appointment</button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-navy px-5 py-8 text-center text-sm text-primary-foreground/70">
        © {new Date().getFullYear()} Dr. Shoaib H Khan Maternal &amp; Child Care Center · Jhalokathi
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <a href={TEL} className={`${btnPrimary} w-full`}><Phone className="h-5 w-5 animate-pulse" /> Call Doctor · {PHONE}</a>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-3xl text-center">
          <DialogHeader className="items-center">
            <CheckCircle2 className="h-14 w-14 text-secondary" />
            <DialogTitle className="font-display text-2xl text-navy">Thank you{name ? `, ${name}` : ""}!</DialogTitle>
            <DialogDescription>Your request is noted. To confirm your serial, please call the chamber. Visiting hours: everyday 5:00 – 8:00 PM.</DialogDescription>
          </DialogHeader>
          <a href={TEL} className={btnPrimary}><Phone className="h-4 w-4" /> Call {PHONE}</a>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-secondary">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold text-navy md:text-4xl">{title}</h2>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof Clock; title: string; children: ReactNode }) {
  return (
    <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary"><Icon className="h-6 w-6" /></span>
      <h3 className="mb-3 mt-4 font-display text-xl font-bold text-navy">{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label>
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input {...props} className="w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
