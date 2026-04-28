import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";

const HERO_IMG = "https://cdn.poehali.dev/projects/abf1b166-d868-4580-ae8d-70e96172ac04/files/f1ac628c-9087-4792-ac57-b85a582d3e43.jpg";
const CARD_IMG = "https://cdn.poehali.dev/projects/abf1b166-d868-4580-ae8d-70e96172ac04/files/bb492c3e-a214-45b8-a883-35ea54911e43.jpg";

const PRODUCTS = [
  { id: 1, game: "CS2", title: "Аккаунт Prime / 2500 часов", price: "1 290 ₽", rank: "MG2", verified: true, insurance: true, img: CARD_IMG, seller: "GameMaster_Pro" },
  { id: 2, game: "Dota 2", title: "Аккаунт MMR 6000+", price: "3 500 ₽", rank: "Ancient I", verified: true, insurance: true, img: CARD_IMG, seller: "DotaKing99" },
  { id: 3, game: "Valorant", title: "Аккаунт Radiant / Full Access", price: "8 900 ₽", rank: "Radiant", verified: true, insurance: false, img: CARD_IMG, seller: "ValorantPro" },
];

interface HomeSectionProps {
  navTo: (id: string) => void;
}

export default function HomeSection({ navTo }: HomeSectionProps) {
  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="GameVault" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,10,15,0.95) 0%, rgba(6,10,15,0.7) 50%, rgba(6,10,15,0.95) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="verified-badge flex items-center gap-2 px-3 py-1.5 rounded-full text-sm" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>
                <Icon name="ShieldCheck" size={16} /> ВЕРИФИЦИРОВАННЫЙ МАРКЕТПЛЕЙС
              </div>
            </div>
            <h1 className="section-title mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1, fontWeight: 700 }}>
              ТОРГУЙ <span className="neon-cyan">ИГРОВЫМИ</span><br />АККАУНТАМИ<br />
              <span style={{ color: "var(--neon-purple)", textShadow: "0 0 20px rgba(168,85,247,0.6)" }}>БЕЗ РИСКА</span>
            </h1>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Rubik', sans-serif", maxWidth: 520, lineHeight: 1.7 }}>
              Проверка каждого аккаунта, гарантия подлинности и страховка сделок. Покупай и продавай с полной защитой.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navTo("catalog")} className="btn-neon-solid px-8 py-4 rounded-xl text-lg" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
                Смотреть каталог
              </button>
              <button onClick={() => navTo("support")} className="btn-neon px-8 py-4 rounded-xl text-lg" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
                Как это работает
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "ShoppingBag", value: "12 400+", label: "Сделок завершено", color: "var(--neon-cyan)" },
            { icon: "ShieldCheck", value: "99.8%", label: "Подлинных аккаунтов", color: "#00ff88" },
            { icon: "Users", value: "45 000+", label: "Пользователей", color: "var(--neon-purple)" },
            { icon: "Star", value: "4.9 / 5", label: "Средний рейтинг", color: "#fbbf24" },
          ].map((s, i) => (
            <div key={i} className="stat-card rounded-xl p-6 text-center">
              <Icon name={s.icon} size={32} style={{ color: s.color, margin: "0 auto 12px", filter: `drop-shadow(0 0 8px ${s.color})` }} />
              <div className="section-title text-3xl mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl mb-3" style={{ color: "#fff" }}>ПОЧЕМУ <span className="neon-cyan">GAMEVAULT</span></h2>
            <div className="glitch-line w-32 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "SearchCheck", title: "Проверка аккаунтов", desc: "Каждый лот проходит ручную верификацию: ранг, часы, бан-история, привязки. Поддельные аккаунты блокируются автоматически.", color: "var(--neon-cyan)", rgb: "0,245,255" },
              { icon: "BadgeCheck", title: "Гарантия подлинности", desc: "Если аккаунт не соответствует описанию — возвращаем 100% стоимости без вопросов в течение 48 часов.", color: "#00ff88", rgb: "0,255,136" },
              { icon: "Lock", title: "Страховка сделок", desc: "Деньги хранятся у нас до получения доступа к аккаунту. Эскроу-система защищает обе стороны сделки.", color: "var(--neon-purple)", rgb: "168,85,247" },
            ].map((f, i) => (
              <div key={i} className="card-game rounded-2xl p-8" style={{ border: `1px solid rgba(${f.rgb},0.15)` }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `rgba(${f.rgb},0.1)`, border: `1px solid rgba(${f.rgb},0.3)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon name={f.icon} size={28} style={{ color: f.color }} />
                </div>
                <h3 className="section-title text-2xl mb-3" style={{ color: "#fff" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title text-3xl" style={{ color: "#fff" }}>ПОПУЛЯРНЫЕ <span className="neon-cyan">ЛОТЫ</span></h2>
            <button onClick={() => navTo("catalog")} className="btn-neon px-5 py-2.5 rounded-lg text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Все лоты →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.slice(0, 3).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
