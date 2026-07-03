import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const WALLET = '0x6a9a1cf0f6e8112488a28a224ce2bf9657d9b948';

const causes = [
  {
    icon: 'Heart',
    title: 'Warm Home',
    text: 'Support for families in hardship: food, clothing, and shelter.',
  },
  {
    icon: 'BookOpen',
    title: 'Light of Knowledge',
    text: 'Funding education and school supplies for children from low-income families.',
  },
  {
    icon: 'Stethoscope',
    title: 'Helping Hand',
    text: 'Fundraising for treatment and rehabilitation for those who need it most.',
  },
];

const stats = [
  { value: '1,240+', label: 'families supported' },
  { value: '38', label: 'projects completed' },
  { value: '100%', label: 'reporting transparency' },
];

export default function Index() {
  const [copied, setCopied] = useState(false);

  const copyWallet = () => {
    navigator.clipboard.writeText(WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen warm-gradient text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon name="Sun" size={22} />
          </div>
          <span className="font-display text-2xl font-semibold">Warm Light</span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#causes" className="transition-colors hover:text-primary">Programs</a>
          <a href="#donate" className="transition-colors hover:text-primary">Donate</a>
        </nav>
        <Button asChild className="rounded-full">
          <a href="#donate">Donate</a>
        </Button>
      </header>

      {/* Hero */}
      <section className="container grid items-center gap-12 py-14 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Icon name="Sparkles" size={16} className="text-accent" />
            Charity with an open heart
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            Giving warmth <br />
            <span className="text-primary">to those who need it</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            We bring kind people together to help honestly and transparently. Every
            donation in USDT reaches its goal — and we show you exactly how.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full text-base">
              <a href="#donate">
                <Icon name="HandHeart" size={20} className="mr-1" />
                Support the Fund
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" />
          <img
            src="https://cdn.poehali.dev/projects/bad6a5f5-1729-4487-844b-48b354cc27f8/files/618794cb-aa02-4054-8deb-44a06205e1d8.jpg"
            alt="Hands holding warm light"
            className="relative w-full rounded-[2rem] object-cover shadow-2xl grain"
          />
          <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-xl sm:block">
            <p className="font-display text-3xl font-semibold text-primary">1,240+</p>
            <p className="text-sm text-muted-foreground">families helped</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="container grid gap-6 py-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-8 text-center">
            <p className="font-display text-4xl font-semibold text-primary">{s.value}</p>
            <p className="mt-2 text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Causes */}
      <section id="causes" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Our Programs</h2>
          <p className="mt-4 text-muted-foreground">
            Three directions in which we make people's lives warmer every day.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {causes.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={c.icon} size={26} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="container pb-24">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground md:px-16">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Top Up the Fund's Wallet
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Send USDT (Ethereum / ERC-20 network) to the fund's official address.
              All incoming donations are published in open reports.
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="mb-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                Wallet Address · USDT (ERC-20)
              </p>
              <p className="break-all font-mono text-sm md:text-base">{WALLET}</p>
              <Button
                onClick={copyWallet}
                size="lg"
                variant="secondary"
                className="mt-5 w-full rounded-full text-base sm:w-auto"
              >
                <Icon name={copied ? 'Check' : 'Copy'} size={20} className="mr-1" />
                {copied ? 'Address Copied' : 'Copy Address'}
              </Button>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
              <Icon name="ShieldCheck" size={16} />
              Donations are voluntary and non-refundable
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="Sun" size={18} className="text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">Warm Light</span>
          </div>
          <p>© 2026 Warm Light Charity Foundation. Helping openly.</p>
        </div>
      </footer>
    </div>
  );
}
