import { CheckCircle2, Menu, Quote, Star } from "lucide-react";
import Button from "./components/Button.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import {
  benefits,
  company,
  contactMethods,
  galleryImages,
  navLinks,
  services,
  testimonials,
} from "./data/siteContent.js";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-roof-navy text-white">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="text-lg font-black leading-tight text-roof-navy">{company.name}</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-roof-ink transition hover:text-roof-copper">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="text-sm font-black text-roof-navy hover:text-roof-copper">
            {company.phone}
          </a>
          <Button href="#quote" className="min-h-11 px-4 py-2">Free Quote</Button>
        </div>
        <a
          href="#quote"
          className="grid h-11 w-11 place-items-center rounded-md border border-roof-mist bg-white text-roof-navy shadow-sm sm:hidden"
          aria-label="Open quote form"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-roof-navy text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1800&q=80"
          alt="Roofing contractor working on a residential roof"
          className="h-full w-full object-cover opacity-32"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-navy via-roof-navy/86 to-roof-navy/45" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-md bg-white/12 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20">
            Local Canadian roofing and siding contractor
          </span>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Reliable roofing and siding services built for Canadian weather.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
            Protect your home with professional roof installation, siding repair, gutter services, and responsive emergency help from a team that values clear quotes and clean workmanship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#quote">Get Free Quote</Button>
            <Button href={`tel:${company.phone.replace(/\D/g, "")}`} variant="secondary" icon="phone">
              Call Now
            </Button>
          </div>
          <div className="mt-10 grid gap-4 text-sm font-bold text-white/88 sm:grid-cols-3">
            {["Free estimates", "Warranty-backed work", "Emergency repairs"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-roof-copper" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md bg-white p-4 text-roof-navy shadow-soft">
          <div className="grid gap-3 rounded-md bg-roof-frost p-5 sm:grid-cols-2">
            {contactMethods.map(({ label, value, Icon, href }) => (
              <a key={label} href={href} className="rounded-md bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Icon className="mb-3 h-6 w-6 text-roof-copper" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest text-roof-steel">{label}</p>
                <p className="mt-1 text-sm font-black text-roof-navy">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-roof-frost px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Complete exterior services for homes and small properties"
          description="From planned replacements to urgent weather repairs, every service is designed to protect your home and simplify the quote process."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-md border border-roof-mist bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-roof-mist text-roof-copper">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-black text-roof-navy">{title}</h3>
              <p className="mt-3 leading-7 text-roof-steel">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Why choose us"
          title="Straight answers, dependable crews, and exterior work made to last"
          description="Home exterior projects are a major investment. We keep the process clear, practical, and respectful from inspection through final cleanup."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(({ title, Icon }) => (
            <div key={title} className="flex items-center gap-4 rounded-md bg-roof-frost p-5 transition hover:bg-roof-mist">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white text-roof-cedar shadow-sm">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="font-black text-roof-navy">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-roof-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
          alt="Contractor reviewing home exterior plans"
          className="h-80 w-full rounded-md object-cover shadow-soft lg:h-[440px]"
        />
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-roof-copper">About us</span>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">A practical local team for roofing, siding, gutters, and repairs.</h2>
          <p className="mt-5 text-lg leading-8 text-white/82">
            {company.name} helps homeowners improve and protect their properties with responsive service, careful planning, and durable exterior products suited to Canadian seasons. Our team focuses on honest assessments, clean job sites, and dependable communication before, during, and after the work.
          </p>
          <div className="mt-8">
            <Button href="#quote">Request a Free Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-roof-frost px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Recent exterior project examples"
          description="Use these placeholders for completed local roofing and siding projects when final photos are ready."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <figure key={image.title} className="group overflow-hidden rounded-md bg-white shadow-sm">
              <img src={image.url} alt={image.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <figcaption className="p-4 text-sm font-black text-roof-navy">{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Reviews" title="Trusted by homeowners who value clear communication" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-md border border-roof-mist bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-roof-copper" aria-hidden="true" />
              <div className="mt-5 flex gap-1 text-roof-copper" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 leading-7 text-roof-steel">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-roof-mist pt-4">
                <p className="font-black text-roof-navy">{testimonial.name}</p>
                <p className="text-sm text-roof-steel">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  return (
    <section id="quote" className="bg-roof-frost px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Free quote"
            title="Tell us what your home needs"
            description="Share a few details and a local exterior specialist can follow up with next steps, timing, and a clear estimate."
          />
          <div className="space-y-4">
            {contactMethods.map(({ label, value, Icon, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 rounded-md bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-roof-mist text-roof-copper">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-roof-steel">{label}</span>
                  <span className="block font-black text-roof-navy">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <form className="rounded-md bg-white p-5 shadow-soft sm:p-8" aria-label="Quote request form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-roof-navy">Name</span>
              <input className="w-full rounded-md border border-roof-mist px-4 py-3 outline-none transition focus:border-roof-copper focus:ring-4 focus:ring-roof-copper/15" type="text" name="name" autoComplete="name" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-roof-navy">Phone</span>
              <input className="w-full rounded-md border border-roof-mist px-4 py-3 outline-none transition focus:border-roof-copper focus:ring-4 focus:ring-roof-copper/15" type="tel" name="phone" autoComplete="tel" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-roof-navy">Email</span>
              <input className="w-full rounded-md border border-roof-mist px-4 py-3 outline-none transition focus:border-roof-copper focus:ring-4 focus:ring-roof-copper/15" type="email" name="email" autoComplete="email" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-roof-navy">Service needed</span>
              <select className="w-full rounded-md border border-roof-mist bg-white px-4 py-3 outline-none transition focus:border-roof-copper focus:ring-4 focus:ring-roof-copper/15" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-roof-navy">Message</span>
              <textarea className="min-h-36 w-full rounded-md border border-roof-mist px-4 py-3 outline-none transition focus:border-roof-copper focus:ring-4 focus:ring-roof-copper/15" name="message" placeholder="Tell us about the project, damage, timeline, or property type." />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-roof-copper px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-roof-copperDark focus:outline-none focus:ring-4 focus:ring-roof-copper/25 sm:w-auto">
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-roof-navy px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-black">{company.name}</h2>
          <p className="mt-3 max-w-md leading-7 text-white/72">Roofing, siding, gutter, and emergency repair services for local Canadian homeowners.</p>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <p className="mt-3 text-white/72">{company.phone}</p>
          <p className="mt-2 text-white/72">{company.email}</p>
          <p className="mt-2 text-white/72">{company.areas}</p>
        </div>
        <div>
          <h3 className="font-black">Quick links</h3>
          <div className="mt-3 grid gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/72 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/12 pt-6 text-sm text-white/60">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Gallery />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
