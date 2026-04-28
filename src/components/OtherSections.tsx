import { useState } from "react";
import Icon from "@/components/ui/icon";
import ProductCard, { PRODUCTS } from "@/components/ProductCard";

const PURCHASES = [
  { id: 1, game: "CS2", title: "Аккаунт Prime / 1800 часов", price: "990 ₽", date: "22 апр 2026", status: "completed" },
  { id: 2, game: "Dota 2", title: "Аккаунт MMR 5500", price: "2 800 ₽", date: "15 апр 2026", status: "completed" },
  { id: 3, game: "Valorant", title: "Аккаунт Immortal", price: "3 200 ₽", date: "29 апр 2026", status: "pending" },
];

const REVIEWS = [
  { id: 1, name: "Alexei_K", avatar: "A", rating: 5, game: "CS2", text: "Купил аккаунт Prime — всё чисто, данные сразу пришли. Страховка реально работает, продавец честный. Рекомендую!", date: "27 апр 2026" },
  { id: 2, name: "Nika_Pro", avatar: "N", rating: 5, game: "Valorant", text: "Верификация аккаунта дала уверенность. Купила Radiant аккаунт, всё соответствует описанию. Гарантия подлинности — не просто слова.", date: "24 апр 2026" },
  { id: 3, name: "DarkWolf88", avatar: "D", rating: 4, game: "Dota 2", text: "Хороший маркетплейс. Страховка сделок — топ фича. Единственное пожелание — больше аккаунтов Dota.", date: "20 апр 2026" },
  { id: 4, name: "StarPlayer", avatar: "S", rating: 5, game: "WoW", text: "Уже 3-я покупка здесь. Проверка аккаунтов работает — ни разу не попал на мошенника. Сервис на уровне!", date: "18 апр 2026" },
];

const FAQ = [
  { q: "Как работает гарантия подлинности?", a: "Каждый аккаунт проходит ручную проверку нашими модераторами. Мы верифицируем ранг, часы игры, состояние аккаунта и историю." },
  { q: "Что такое страховка сделок?", a: "Деньги замораживаются до момента передачи аккаунта. Если что-то пошло не так — возвращаем 100% стоимости в течение 24 часов." },
  { q: "Как связаться с продавцом?", a: "После оплаты открывается защищённый чат с продавцом. Все переписки хранятся и при необходимости служат доказательством в споре." },
  { q: "Сколько времени занимает верификация?", a: "Стандартная проверка — до 2 часов. Срочная верификация доступна за дополнительную плату — 30 минут." },
];

const StatusBadge = ({ status }: { status: string }) => {
  if (status === "completed") return (
    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded" style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
      <Icon name="CheckCircle" size={12} /> Завершена
    </span>
  );
  return (
    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}>
      <Icon name="Clock" size={12} /> В обработке
    </span>
  );
};

interface SectionProps {
  navTo: (id: string) => void;
}

export function CatalogSection({ navTo: _navTo }: SectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGame, setFilterGame] = useState("all");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchGame = filterGame === "all" || p.game === filterGame;
    return matchSearch && matchGame;
  });

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>КАТАЛОГ <span className="neon-cyan">АККАУНТОВ</span></h1>
      <div className="glitch-line w-32 mb-8" />

      <div className="flex flex-wrap gap-3 mb-8">
        <div className="relative flex-1 min-w-[220px]">
          <Icon name="Search" size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Поиск по игре или описанию..."
            style={{ width: "100%", background: "var(--dark-card)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px 10px 42px", color: "#fff", fontFamily: "'Rubik', sans-serif", outline: "none" }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["all", "CS2", "Dota 2", "Valorant", "WoW", "GTA Online", "Fortnite"].map(g => (
            <button key={g} onClick={() => setFilterGame(g)}
              className="px-4 py-2 rounded-lg text-sm transition-all"
              style={{
                fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em",
                background: filterGame === g ? "var(--neon-cyan)" : "var(--dark-card)",
                color: filterGame === g ? "#060a0f" : "rgba(255,255,255,0.6)",
                border: `1px solid ${filterGame === g ? "var(--neon-cyan)" : "rgba(255,255,255,0.1)"}`,
                fontWeight: filterGame === g ? 700 : 400,
              }}>
              {g === "all" ? "Все игры" : g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
        {filteredProducts.length === 0 && (
          <div className="col-span-3 text-center py-20" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Icon name="PackageSearch" size={48} style={{ margin: "0 auto 16px", opacity: 0.4 }} />
            <p>Ничего не найдено. Попробуйте другой запрос.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PurchasesSection({ navTo }: SectionProps) {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>МОИ <span className="neon-cyan">ПОКУПКИ</span></h1>
      <div className="glitch-line w-32 mb-8" />

      <div className="space-y-4">
        {PURCHASES.map(p => (
          <div key={p.id} className="card-game rounded-xl p-5 flex flex-wrap items-center gap-4">
            <div style={{ width: 48, height: 48, background: "rgba(0,245,255,0.1)", borderRadius: 10, border: "1px solid rgba(0,245,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="Gamepad2" size={24} style={{ color: "var(--neon-cyan)" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="tag-game">{p.game}</span>
              </div>
              <div className="font-medium" style={{ color: "#fff" }}>{p.title}</div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{p.date}</div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <div className="price-tag text-xl">{p.price}</div>
              <StatusBadge status={p.status} />
            </div>
            <button className="btn-neon px-4 py-2 rounded-lg text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Детали
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 card-game rounded-xl p-6 flex items-center gap-4">
        <Icon name="Info" size={24} style={{ color: "var(--neon-cyan)", flexShrink: 0 }} />
        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Все покупки застрахованы на 30 дней. При возникновении проблем обратитесь в{" "}
          <button onClick={() => navTo("support")} className="underline" style={{ color: "var(--neon-cyan)" }}>поддержку</button>.
        </p>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>ОТЗЫВЫ <span className="neon-cyan">ПОКУПАТЕЛЕЙ</span></h1>
      <div className="glitch-line w-32 mb-4" />

      <div className="flex items-center gap-6 mb-10 flex-wrap">
        <div className="stat-card rounded-xl p-6 text-center">
          <div className="section-title text-5xl mb-1" style={{ color: "#fbbf24" }}>4.9</div>
          <div className="flex justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(s => <Icon key={s} name="Star" size={16} style={{ color: "#fbbf24", fill: "#fbbf24" }} />)}
          </div>
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>1 247 отзывов</div>
        </div>
        <div className="flex-1 min-w-[200px]">
          {[5,4,3,2,1].map(star => (
            <div key={star} className="flex items-center gap-3 mb-2">
              <span className="text-sm w-4" style={{ color: "rgba(255,255,255,0.5)" }}>{star}</span>
              <Icon name="Star" size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
              <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <div style={{ height: "100%", borderRadius: 3, background: "#fbbf24", width: star === 5 ? "85%" : star === 4 ? "12%" : star === 3 ? "2%" : "1%" }} />
              </div>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", width: 32, textAlign: "right" }}>{star === 5 ? "85%" : star === 4 ? "12%" : star === 3 ? "2%" : "1%"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {REVIEWS.map(r => (
          <div key={r.id} className="card-game rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 18, color: "#060a0f", flexShrink: 0 }}>
                {r.avatar}
              </div>
              <div className="flex-1">
                <div style={{ color: "#fff", fontWeight: 600 }}>{r.name}</div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <Icon key={s} name="Star" size={12} style={{ color: "#fbbf24", fill: s <= r.rating ? "#fbbf24" : "transparent" }} />)}</div>
                  <span className="tag-game">{r.game}</span>
                </div>
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{r.date}</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SupportSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [supportForm, setSupportForm] = useState({ subject: "", description: "" });

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>ЦЕНТР <span className="neon-cyan">ПОДДЕРЖКИ</span></h1>
      <div className="glitch-line w-32 mb-10" />

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          { icon: "MessageCircle", title: "Онлайн-чат", desc: "Ответим в течение 5 минут", color: "var(--neon-cyan)", rgb: "0,245,255" },
          { icon: "Mail", title: "Эл. почта", desc: "support@gamevault.ru", color: "var(--neon-purple)", rgb: "168,85,247" },
          { icon: "Phone", title: "Телефон", desc: "+7 800 000-00-00", color: "#00ff88", rgb: "0,255,136" },
        ].map((c, i) => (
          <div key={i} className="card-game rounded-xl p-6 text-center cursor-pointer">
            <div style={{ width: 56, height: 56, borderRadius: 14, background: `rgba(${c.rgb},0.1)`, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={c.icon} size={28} style={{ color: c.color }} />
            </div>
            <div className="section-title text-xl mb-1" style={{ color: "#fff" }}>{c.title}</div>
            <div style={{ color: c.color }}>{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="card-game rounded-2xl p-8 mb-12">
        <h2 className="section-title text-2xl mb-6" style={{ color: "#fff" }}>СОЗДАТЬ <span className="neon-cyan">ТИКЕТ</span></h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>ТЕМА ОБРАЩЕНИЯ</label>
            <select
              value={supportForm.subject}
              onChange={e => setSupportForm(f => ({ ...f, subject: e.target.value }))}
              style={{ width: "100%", background: "var(--dark-card2)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px", color: supportForm.subject ? "#fff" : "rgba(255,255,255,0.4)", fontFamily: "'Rubik', sans-serif", outline: "none" }}>
              <option value="">Выберите тему...</option>
              <option>Проблема с покупкой</option>
              <option>Гарантийный случай</option>
              <option>Страховка сделки</option>
              <option>Технические проблемы</option>
              <option>Другое</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>ОПИСАНИЕ ПРОБЛЕМЫ</label>
            <textarea
              rows={5}
              value={supportForm.description}
              onChange={e => setSupportForm(f => ({ ...f, description: e.target.value }))}
              placeholder="Опишите проблему подробно..."
              style={{ width: "100%", background: "var(--dark-card2)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px", color: "#fff", fontFamily: "'Rubik', sans-serif", outline: "none", resize: "vertical" }} />
          </div>
          <button className="btn-neon-solid px-8 py-3 rounded-xl" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
            Отправить тикет
          </button>
        </div>
      </div>

      <h2 className="section-title text-2xl mb-6" style={{ color: "#fff" }}>ЧАСТЫЕ <span className="neon-cyan">ВОПРОСЫ</span></h2>
      <div className="space-y-3">
        {FAQ.map((f, i) => (
          <div key={i} className="card-game rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
              style={{ color: "#fff" }}>
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: 16 }}>{f.q}</span>
              <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} style={{ color: "var(--neon-cyan)", flexShrink: 0, marginLeft: 16 }} />
            </button>
            {openFaq === i && (
              <div className="px-5 pb-5" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, borderTop: "1px solid rgba(0,245,255,0.1)" }}>
                <div className="pt-4">{f.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactsSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>КОНТАКТЫ <span className="neon-cyan">/ СВЯЗЬ</span></h1>
      <div className="glitch-line w-32 mb-10" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-game rounded-2xl p-8">
          <h2 className="section-title text-xl mb-6" style={{ color: "var(--neon-cyan)" }}>НАПИСАТЬ НАМ</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>ИМЯ</label>
              <input value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Ваше имя" style={{ width: "100%", background: "var(--dark-card2)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px", color: "#fff", fontFamily: "'Rubik', sans-serif", outline: "none" }} />
            </div>
            <div>
              <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>EMAIL</label>
              <input value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com" type="email" style={{ width: "100%", background: "var(--dark-card2)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px", color: "#fff", fontFamily: "'Rubik', sans-serif", outline: "none" }} />
            </div>
            <div>
              <label className="block text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>СООБЩЕНИЕ</label>
              <textarea rows={4} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Ваш вопрос или предложение..." style={{ width: "100%", background: "var(--dark-card2)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 10, padding: "10px 14px", color: "#fff", fontFamily: "'Rubik', sans-serif", outline: "none", resize: "vertical" }} />
            </div>
            <button className="btn-neon-solid w-full py-3 rounded-xl" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
              Отправить сообщение
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { icon: "MapPin", label: "Адрес", value: "Москва, Россия", color: "var(--neon-cyan)", rgb: "0,245,255" },
            { icon: "Mail", label: "Email", value: "support@gamevault.ru", color: "var(--neon-purple)", rgb: "168,85,247" },
            { icon: "Phone", label: "Телефон", value: "+7 800 000-00-00", color: "#00ff88", rgb: "0,255,136" },
            { icon: "Clock", label: "Режим работы", value: "24/7 — мы всегда онлайн", color: "#fbbf24", rgb: "251,191,36" },
          ].map((c, i) => (
            <div key={i} className="card-game rounded-xl p-5 flex items-center gap-4">
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `rgba(${c.rgb},0.1)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={c.icon} size={22} style={{ color: c.color }} />
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>{c.label}</div>
                <div style={{ color: "#fff", fontWeight: 500 }}>{c.value}</div>
              </div>
            </div>
          ))}

          <div className="card-game rounded-xl p-5">
            <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}>МЫ В СОЦСЕТЯХ</div>
            <div className="flex gap-3">
              {["TELEGRAM", "VK", "DISCORD"].map(s => (
                <button key={s} className="btn-neon px-4 py-2 rounded-lg text-xs" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{s}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileSection() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="section-title text-4xl mb-2" style={{ color: "#fff" }}>МОЙ <span className="neon-cyan">ПРОФИЛЬ</span></h1>
      <div className="glitch-line w-32 mb-10" />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card-game rounded-2xl p-8 text-center">
          <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: "#060a0f", boxShadow: "0 0 30px rgba(0,245,255,0.4)" }}>
            P
          </div>
          <div className="section-title text-2xl mb-1" style={{ color: "#fff" }}>Player_One</div>
          <div className="verified-badge inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs mb-4">
            <Icon name="ShieldCheck" size={12} /> Верифицирован
          </div>
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>На платформе с апреля 2025</div>
          <button className="btn-neon w-full mt-6 py-2.5 rounded-xl text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Редактировать
          </button>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Покупок", value: "3", icon: "ShoppingBag", color: "var(--neon-cyan)" },
              { label: "Потрачено", value: "6 990 ₽", icon: "Wallet", color: "#00ff88" },
              { label: "Отзывов", value: "2", icon: "Star", color: "#fbbf24" },
              { label: "Рейтинг", value: "5.0", icon: "Award", color: "var(--neon-purple)" },
            ].map((s, i) => (
              <div key={i} className="stat-card rounded-xl p-5">
                <Icon name={s.icon} size={24} style={{ color: s.color, marginBottom: 10 }} />
                <div className="section-title text-2xl" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="card-game rounded-xl p-6">
            <h3 className="section-title text-lg mb-4" style={{ color: "#fff" }}>НАСТРОЙКИ <span className="neon-cyan">АККАУНТА</span></h3>
            <div className="space-y-3">
              {["Email уведомления", "Push-уведомления", "Двухфакторная аутентификация", "Страховка по умолчанию"].map((setting, i) => (
                <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{setting}</span>
                  <div style={{ width: 44, height: 24, borderRadius: 12, background: i % 2 === 0 ? "var(--neon-cyan)" : "rgba(255,255,255,0.1)", cursor: "pointer", position: "relative", flexShrink: 0 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: i % 2 === 0 ? 23 : 3, transition: "left 0.2s" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 py-10 px-4" style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Icon name="Zap" size={18} style={{ color: "var(--neon-cyan)" }} />
          <span className="section-title" style={{ color: "rgba(255,255,255,0.5)" }}>GAMEVAULT © 2026</span>
        </div>
        <div className="flex gap-6">
          {["Условия", "Конфиденциальность", "Оферта"].map(l => (
            <button key={l} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Rajdhani', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--neon-cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
