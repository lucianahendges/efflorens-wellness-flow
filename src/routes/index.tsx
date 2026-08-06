import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  BedDouble,
  Brain,
  Check,
  HeartPulse,
  Instagram,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Sun,
} from "lucide-react";

import logo from "@/assets/efflorens-logo.jpg.asset.json";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

const WHATSAPP =
  "https://wa.me/5549999775932?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20assinatura%20de%20acupuntura%20da%20Efflorens.";
const INSTAGRAM = "https://instagram.com/efflorens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Efflorens | Acupuntura por Assinatura em Chapecó/SC" },
      {
        name: "description",
        content:
          "Plano mensal de acupuntura em Chapecó/SC por R$ 300: uma sessão semanal, acompanhamento contínuo e cuidado personalizado com Medicina Tradicional Chinesa.",
      },
      { property: "og:title", content: "Efflorens | Acupuntura por Assinatura em Chapecó/SC" },
      {
        property: "og:description",
        content:
          "Sessões semanais de acupuntura por R$ 300 ao mês. Bem-estar, equilíbrio e qualidade de vida em Chapecó/SC.",
      },
      { name: "twitter:title", content: "Efflorens | Acupuntura por Assinatura" },
      {
        name: "twitter:description",
        content: "Plano mensal com sessão semanal de acupuntura em Chapecó/SC.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Efflorens",
          description: "Clínica de acupuntura por assinatura em Chapecó/SC.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chapecó",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          telephone: "+5549999775932",
          sameAs: [INSTAGRAM],
        }),
      },
    ],
  }),
  component: Index,
});

const included = [
  "1 sessão por semana",
  "Até 4 sessões por mês",
  "Atendimento personalizado",
  "Acompanhamento contínuo",
  "Ambiente acolhedor",
];

const benefits = [
  { icon: HeartPulse, title: "Alívio das dores", text: "Redução de dores crônicas, musculares e tensionais." },
  { icon: Brain, title: "Controle da ansiedade", text: "Regulação emocional e sensação de calma duradoura." },
  { icon: Leaf, title: "Redução do estresse", text: "Momento de pausa e recuperação para corpo e mente." },
  { icon: BedDouble, title: "Melhora do sono", text: "Noites mais profundas e despertar mais tranquilo." },
  { icon: Sun, title: "Mais disposição", text: "Energia renovada para a rotina do dia a dia." },
  { icon: Activity, title: "Equilíbrio físico e emocional", text: "Harmonia sustentada por um cuidado contínuo." },
];

const testimonials = [
  {
    name: "Mariana L.",
    role: "Assinante há 6 meses",
    text: "Minhas dores nas costas diminuíram muito e eu durmo melhor. A rotina semanal fez toda a diferença.",
  },
  {
    name: "Rafael S.",
    role: "Assinante há 4 meses",
    text: "Chegava sempre tenso do trabalho. Hoje consigo lidar com a ansiedade de um jeito muito mais leve.",
  },
  {
    name: "Cristiane A.",
    role: "Assinante há 1 ano",
    text: "O acolhimento é impecável. Sinto que meu cuidado é acompanhado de perto, sessão após sessão.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Efflorens"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40"
            />
            <span className="font-display text-2xl leading-none tracking-wide">Efflorens</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#plano">Plano</a>
            <a className="transition-colors hover:text-primary" href="#beneficios">Benefícios</a>
            <a className="transition-colors hover:text-primary" href="#sobre">Sobre</a>
            <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] items-center pt-20">
        <img
          src={heroImg}
          alt="Pessoa relaxando durante uma sessão de acupuntura em ambiente acolhedor"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/15 px-4 py-1.5 text-xs tracking-[0.18em] text-primary-foreground uppercase backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" /> Medicina Tradicional Chinesa
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              Acupuntura por Assinatura em Chapecó/SC
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              Cuidado contínuo para sua saúde física e emocional através da Medicina Tradicional
              Chinesa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
              </a>
              <a
                href="#plano"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/60 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Conheça o Plano
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plano */}
      <section id="plano" className="section-pad" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Como funciona</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Plano Mensal Efflorens</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Tenha acesso a um acompanhamento contínuo com sessões semanais de acupuntura,
              promovendo prevenção, equilíbrio e melhora da qualidade de vida.
            </p>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[0.975rem]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-4xl border border-gold/40 bg-card p-9 shadow-[var(--shadow-lift)] md:p-11">
              <span className="absolute -top-3 right-8 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-foreground uppercase">
                Preço Popular
              </span>
              <p className="font-display text-2xl">Assinatura Mensal</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl leading-none text-primary">R$ 300</span>
                <span className="pb-2 text-muted-foreground">/ mês</span>
              </div>
              <p className="mt-4 text-[0.975rem] text-muted-foreground">Sessão semanal inclusa</p>
              <div className="my-8 h-px bg-border" />
              <ul className="space-y-3 text-sm">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Leaf className="h-4 w-4 shrink-0 text-leaf" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Quero assinar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-xl">
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Benefícios</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              O que muda na sua rotina
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section-pad bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImg}
              alt="Pedras de equilíbrio, bambu e folhas verdes"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full rounded-4xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Sobre</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Sobre a Efflorens</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              “A Efflorens acredita que cuidar da saúde deve ser simples, acessível e contínuo. Nosso
              plano por assinatura permite que você mantenha uma rotina de cuidados através da
              acupuntura, promovendo bem-estar e qualidade de vida.”
            </p>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-leaf" /> Chapecó • Santa Catarina
            </p>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-xl">
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Depoimentos</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Quem já cuida com a gente</h2>
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 90}>
                <figure className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                  <Quote className="h-6 w-6 text-gold" />
                  <blockquote className="mt-5 leading-relaxed text-muted-foreground">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-7">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <img
              src={logo.url}
              alt="Logo Efflorens"
              width={72}
              height={72}
              loading="lazy"
              className="mx-auto h-18 w-18 rounded-full object-cover ring-1 ring-gold/60"
            />
            <h2 className="mt-8 font-display text-4xl md:text-5xl">Agende sua primeira sessão</h2>
            <p className="mt-5 text-primary-foreground/80">
              Fale com a gente e comece hoje sua rotina de cuidado contínuo.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 text-base font-semibold text-gold-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-6 w-6" /> (49) 99977-5932
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Instagram className="h-5 w-5" /> @efflorens
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Efflorens</p>
            <p className="mt-2 text-sm text-muted-foreground">Acupuntura por Assinatura</p>
            <p className="text-sm text-muted-foreground">Chapecó • Santa Catarina</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">WhatsApp</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              (49) 99977-5932
            </a>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Instagram</p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              @efflorens
            </a>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Efflorens. Todos os direitos reservados.
        </div>
      </footer>

      {/* Botão flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
