import {
  Award,
  BadgeCheck,
  Clock,
  Hammer,
  HardHat,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Wrench,
} from "lucide-react";

export const company = {
  name: "Your Roofing & Siding",
  phone: "(555) 123-4567",
  email: "info@yourroofingsiding.ca",
  areas: "Serving local communities across your region",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#quote" },
];

export const services = [
  {
    title: "Roof Installation",
    description: "Durable asphalt, metal, and flat roofing systems installed with care.",
    Icon: Home,
  },
  {
    title: "Roof Repair",
    description: "Leak detection, storm damage fixes, flashing repair, and shingle replacement.",
    Icon: Hammer,
  },
  {
    title: "Siding Installation",
    description: "Modern vinyl, fibre cement, and engineered siding for lasting curb appeal.",
    Icon: HardHat,
  },
  {
    title: "Siding Repair",
    description: "Crack, panel, moisture, and trim repairs that protect your home's exterior.",
    Icon: Wrench,
  },
  {
    title: "Gutter Services",
    description: "Gutter installation, repair, and maintenance to move water away safely.",
    Icon: Sparkles,
  },
  {
    title: "Emergency Repairs",
    description: "Fast response for urgent leaks, wind damage, ice damage, and exterior issues.",
    Icon: Clock,
  },
];

export const benefits = [
  { title: "Licensed and insured", Icon: ShieldCheck },
  { title: "Experienced team", Icon: Award },
  { title: "Quality materials", Icon: BadgeCheck },
  { title: "Free estimates", Icon: ThumbsUp },
  { title: "Warranty-backed work", Icon: Star },
  { title: "Local and reliable", Icon: MapPin },
];

export const galleryImages = [
  {
    title: "Residential roof replacement",
    url: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Modern siding project",
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gutter and fascia work",
    url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Exterior renovation finish",
    url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "The crew was professional from estimate to cleanup. Our new roof looks excellent and the timeline was exactly what they promised.",
    name: "Sarah M.",
    location: "Homeowner",
  },
  {
    quote:
      "They repaired our siding after a winter storm and matched the colour beautifully. Clear pricing and no surprises.",
    name: "Daniel R.",
    location: "Property Owner",
  },
  {
    quote:
      "Fast, friendly, and reliable. The free quote was detailed, and the finished work made our home feel protected again.",
    name: "Priya K.",
    location: "Local Customer",
  },
];

export const contactMethods = [
  { label: "Call", value: company.phone, Icon: Phone, href: `tel:${company.phone.replace(/\D/g, "")}` },
  { label: "Email", value: company.email, Icon: Mail, href: `mailto:${company.email}` },
  { label: "Areas", value: company.areas, Icon: MapPin, href: "#quote" },
];
