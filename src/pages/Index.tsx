import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const WALLET = '0x6a9a1cf0f6e8112488a28a224ce2bf9657d9b948';
const TRC_WALLET = 'TDXAwumr344NeTnURW5fJ6285xuBZaPjhQ';
const BYBIT_LINK = 'https://i.bybit.com/k9MPabl';
const QR_IMAGE = 'https://cdn.poehali.dev/projects/bad6a5f5-1729-4487-844b-48b354cc27f8/bucket/fad18337-8809-4284-8a08-1afc925101b7.png';

type Lang = 'en' | 'ru' | 'zh';

const content = {
  en: {
    brand: 'Warm Light',
    navAbout: 'About',
    navCauses: 'Programs',
    navDonate: 'Donate',
    donateBtn: 'Donate',
    badge: 'Charity with an open heart',
    heroTitle1: 'Giving warmth',
    heroTitle2: 'to those who need it',
    heroText:
      'We bring kind people together to help honestly and transparently. Every donation in USDT reaches its goal — and we show you exactly how.',
    supportBtn: 'Support the Fund',
    learnBtn: 'Learn More',
    familiesHelped: 'families helped',
    causesTitle: 'Our Programs',
    causesText: "Three directions in which we make people's lives warmer every day.",
    applyBtn: 'Apply',
    applyHint: 'Activates once the program help limit is reached',
    causes: [
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
    ],
    stats: [
      { value: '0', label: 'families supported' },
      { value: '0', label: 'projects completed' },
      { value: '100%', label: 'reporting transparency' },
    ],
    donateTitle: "Top Up the Fund's Wallet",
    donateText:
      "Send USDT (Ethereum / ERC-20 network) to the fund's official address. All incoming donations are published in open reports.",
    walletLabel: 'Wallet Address · USDT (ERC-20)',
    copyBtn: 'Copy Address',
    copiedBtn: 'Address Copied',
    walletLabelTrc: 'Wallet Address · USDT (TRC-20)',
    bybitLabel: 'Top up via link',
    bybitBtn: 'Open Bybit Link',
    qrLabel: 'Top up via QR code',
    disclaimer: 'Donations are voluntary and non-refundable',
    footer: '© 2026 Warm Light Charity Foundation. Helping openly.',
    heroImgAlt: 'Hands holding warm light',
  },
  ru: {
    brand: 'Тёплый Свет',
    navAbout: 'О фонде',
    navCauses: 'Программы',
    navDonate: 'Помочь',
    donateBtn: 'Пожертвовать',
    badge: 'Благотворительность с открытым сердцем',
    heroTitle1: 'Дарим тепло',
    heroTitle2: 'тем, кто в нём нуждается',
    heroText:
      'Мы объединяем добрых людей, чтобы помогать честно и прозрачно. Каждое пожертвование в USDT доходит до цели — и мы это показываем.',
    supportBtn: 'Поддержать фонд',
    learnBtn: 'Узнать больше',
    familiesHelped: 'семей с нашей помощью',
    causesTitle: 'Наши программы',
    causesText: 'Три направления, в которых мы делаем жизнь людей теплее каждый день.',
    applyBtn: 'Заявка',
    applyHint: 'Активируется при достижении лимита на помощь программ',
    causes: [
      {
        icon: 'Heart',
        title: 'Тёплый дом',
        text: 'Помощь семьям в трудной ситуации: еда, одежда и крыша над головой.',
      },
      {
        icon: 'BookOpen',
        title: 'Свет знаний',
        text: 'Оплата обучения и школьных наборов для детей из малообеспеченных семей.',
      },
      {
        icon: 'Stethoscope',
        title: 'Рука помощи',
        text: 'Сбор средств на лечение и реабилитацию тех, кому это жизненно необходимо.',
      },
    ],
    stats: [
      { value: '0', label: 'семей получили помощь' },
      { value: '0', label: 'проектов завершено' },
      { value: '100%', label: 'прозрачность отчётов' },
    ],
    donateTitle: 'Пополнить кошелёк фонда',
    donateText:
      'Переведите USDT (сеть Ethereum / ERC-20) на официальный адрес фонда. Все поступления публикуются в открытых отчётах.',
    walletLabel: 'Адрес кошелька · USDT (ERC-20)',
    copyBtn: 'Скопировать адрес',
    copiedBtn: 'Адрес скопирован',
    walletLabelTrc: 'Адрес кошелька · USDT (TRC-20)',
    bybitLabel: 'Пополнение через ссылку',
    bybitBtn: 'Открыть ссылку Bybit',
    qrLabel: 'Пополнение через QR-код',
    disclaimer: 'Пожертвования добровольны и не подлежат возврату',
    footer: '© 2026 Благотворительный фонд «Тёплый Свет». Помогаем открыто.',
    heroImgAlt: 'Руки, держащие тёплый свет',
  },
  zh: {
    brand: '暖光',
    navAbout: '关于我们',
    navCauses: '项目',
    navDonate: '捐赠',
    donateBtn: '捐赠',
    badge: '用真心做慈善',
    heroTitle1: '传递温暖',
    heroTitle2: '给需要帮助的人',
    heroText:
      '我们汇聚善良的人们,以诚实透明的方式提供帮助。每一笔 USDT 捐赠都会到达目的地——我们向您展示全过程。',
    supportBtn: '支持基金会',
    learnBtn: '了解更多',
    familiesHelped: '个家庭已获帮助',
    causesTitle: '我们的项目',
    causesText: '三大方向,让人们的生活每天都更加温暖。',
    applyBtn: '申请',
    applyHint: '达到项目援助上限后激活',
    causes: [
      {
        icon: 'Heart',
        title: '温暖之家',
        text: '为陷入困境的家庭提供食物、衣物和住所支持。',
      },
      {
        icon: 'BookOpen',
        title: '知识之光',
        text: '资助低收入家庭儿童的教育和学习用品。',
      },
      {
        icon: 'Stethoscope',
        title: '援助之手',
        text: '为最需要帮助的人筹集治疗和康复资金。',
      },
    ],
    stats: [
      { value: '0', label: '个家庭获得支持' },
      { value: '0', label: '个项目已完成' },
      { value: '100%', label: '报告透明度' },
    ],
    donateTitle: '为基金会钱包充值',
    donateText:
      '请将 USDT(以太坊 / ERC-20 网络)发送至基金会官方地址。所有捐款均在公开报告中公布。',
    walletLabel: '钱包地址 · USDT (ERC-20)',
    copyBtn: '复制地址',
    copiedBtn: '地址已复制',
    walletLabelTrc: '钱包地址 · USDT (TRC-20)',
    bybitLabel: '通过链接充值',
    bybitBtn: '打开 Bybit 链接',
    qrLabel: '通过二维码充值',
    disclaimer: '捐赠为自愿行为,不可退款',
    footer: '© 2026 暖光慈善基金会。公开透明地提供帮助。',
    heroImgAlt: '双手捧着温暖的光',
  },
} as const;

export default function Index() {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const t = content[lang];

  const [copiedTrc, setCopiedTrc] = useState(false);

  const copyWallet = () => {
    navigator.clipboard.writeText(WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyTrcWallet = () => {
    navigator.clipboard.writeText(TRC_WALLET);
    setCopiedTrc(true);
    setTimeout(() => setCopiedTrc(false), 2000);
  };

  return (
    <div className="min-h-screen warm-gradient text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon name="Sun" size={22} />
          </div>
          <span className="font-display text-2xl font-semibold">{t.brand}</span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-primary">{t.navAbout}</a>
          <a href="#causes" className="transition-colors hover:text-primary">{t.navCauses}</a>
          <a href="#donate" className="transition-colors hover:text-primary">{t.navDonate}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-card/70 p-1 text-sm font-medium">
            <button
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === 'ru' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === 'zh' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              中文
            </button>
          </div>
          <Button asChild className="rounded-full">
            <a href="#donate">{t.donateBtn}</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container grid items-center gap-12 py-14 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Icon name="Sparkles" size={16} className="text-accent" />
            {t.badge}
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            {t.heroTitle1} <br />
            <span className="text-primary">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full text-base">
              <a href="#donate">
                <Icon name="HandHeart" size={20} className="mr-1" />
                {t.supportBtn}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base">
              <a href="#about">{t.learnBtn}</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" />
          <img
            src="https://cdn.poehali.dev/projects/bad6a5f5-1729-4487-844b-48b354cc27f8/files/618794cb-aa02-4054-8deb-44a06205e1d8.jpg"
            alt={t.heroImgAlt}
            className="relative w-full rounded-[2rem] object-cover shadow-2xl grain"
          />
          <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-xl sm:block">
            <p className="font-display text-3xl font-semibold text-primary">{t.stats[0].value}</p>
            <p className="text-sm text-muted-foreground">{t.familiesHelped}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="container grid gap-6 py-10 sm:grid-cols-3">
        {t.stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-8 text-center">
            <p className="font-display text-4xl font-semibold text-primary">{s.value}</p>
            <p className="mt-2 text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Causes */}
      <section id="causes" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{t.causesTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.causesText}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.causes.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={c.icon} size={26} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
              <Button disabled className="mt-5 w-full rounded-full text-base">
                {t.applyBtn}
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">{t.applyHint}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="container pb-24">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground md:px-16">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">{t.donateTitle}</h2>
            <p className="mt-4 text-primary-foreground/85">{t.donateText}</p>

            <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="mb-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                {t.walletLabel}
              </p>
              <p className="break-all font-mono text-sm md:text-base">{WALLET}</p>
              <Button
                onClick={copyWallet}
                size="lg"
                variant="secondary"
                className="mt-5 w-full rounded-full text-base sm:w-auto"
              >
                <Icon name={copied ? 'Check' : 'Copy'} size={20} className="mr-1" />
                {copied ? t.copiedBtn : t.copyBtn}
              </Button>
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="mb-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                {t.walletLabelTrc}
              </p>
              <p className="break-all font-mono text-sm md:text-base">{TRC_WALLET}</p>
              <Button
                onClick={copyTrcWallet}
                size="lg"
                variant="secondary"
                className="mt-5 w-full rounded-full text-base sm:w-auto"
              >
                <Icon name={copiedTrc ? 'Check' : 'Copy'} size={20} className="mr-1" />
                {copiedTrc ? t.copiedBtn : t.copyBtn}
              </Button>
            </div>

            <div className="mt-6 grid gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur sm:grid-cols-2 sm:text-left">
              <div className="flex flex-col items-center justify-center gap-3 sm:items-start">
                <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
                  {t.bybitLabel}
                </p>
                <Button asChild size="lg" variant="secondary" className="rounded-full text-base">
                  <a href={BYBIT_LINK} target="_blank" rel="noopener noreferrer">
                    <Icon name="ExternalLink" size={20} className="mr-1" />
                    {t.bybitBtn}
                  </a>
                </Button>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
                  {t.qrLabel}
                </p>
                <img
                  src={QR_IMAGE}
                  alt="Bybit QR code"
                  className="h-40 w-40 rounded-xl bg-white p-2"
                />
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
              <Icon name="ShieldCheck" size={16} />
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="Sun" size={18} className="text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">{t.brand}</span>
          </div>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}