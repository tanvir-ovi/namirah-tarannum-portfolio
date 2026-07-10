import type { Metadata } from "next";
import { EnvelopeSimple, Phone, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Namirah Tarannum, a graphics designer for social, brand, product, and food & beverage campaigns. Based in Chattogram, working worldwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s make something
            <br />
            <span className="italic text-gilded">worth staring at.</span>
          </>
        }
        intro="Have a brand, a product, or a menu that deserves better visuals? Tell me a little about it, and I reply to every serious enquiry within a day or two."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            {/* Form */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-ink-2/60 p-7 sm:p-9">
                <ContactForm />
              </div>
            </Reveal>

            {/* Details */}
            <div className="space-y-8">
              <Reveal delay={0.05}>
                <div>
                  <span className="eyebrow">Direct</span>
                  <div className="mt-5 space-y-3">
                    <ContactRow
                      icon={<EnvelopeSimple size={18} weight="fill" />}
                      label="Email"
                      value={profile.email}
                      href={`mailto:${profile.email}`}
                    />
                    <ContactRow
                      icon={<Phone size={18} weight="fill" />}
                      label="Phone / WhatsApp"
                      value={profile.phone}
                      href={`tel:${profile.phoneHref}`}
                    />
                    <ContactRow
                      icon={<MapPin size={18} weight="fill" />}
                      label="Based in"
                      value={profile.location}
                    />
                    <ContactRow
                      icon={<Clock size={18} weight="fill" />}
                      label="Availability"
                      value="Open to freelance & contract"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-gold-line bg-ink-2 p-6">
                  <p className="font-display text-lg text-ivory">
                    Prefer to just say hello?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Email is the fastest way to reach me. Share a sentence or two
                    about your brand and what you need, and I’ll take it from there.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-ink-2 px-5 py-4 transition-colors duration-300 hover:border-gold-line">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-3 text-gold">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-faint">{label}</div>
        <div className="mt-0.5 truncate text-ivory">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
