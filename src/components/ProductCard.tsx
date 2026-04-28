import Icon from "@/components/ui/icon";

const CARD_IMG = "https://cdn.poehali.dev/projects/abf1b166-d868-4580-ae8d-70e96172ac04/files/bb492c3e-a214-45b8-a883-35ea54911e43.jpg";

export type Product = {
  id: number;
  game: string;
  title: string;
  price: string;
  rank: string;
  verified: boolean;
  insurance: boolean;
  img: string;
  seller: string;
};

export const PRODUCTS: Product[] = [
  { id: 1, game: "CS2", title: "Аккаунт Prime / 2500 часов", price: "1 290 ₽", rank: "MG2", verified: true, insurance: true, img: CARD_IMG, seller: "GameMaster_Pro" },
  { id: 2, game: "Dota 2", title: "Аккаунт MMR 6000+", price: "3 500 ₽", rank: "Ancient I", verified: true, insurance: true, img: CARD_IMG, seller: "DotaKing99" },
  { id: 3, game: "Valorant", title: "Аккаунт Radiant / Full Access", price: "8 900 ₽", rank: "Radiant", verified: true, insurance: false, img: CARD_IMG, seller: "ValorantPro" },
  { id: 4, game: "WoW", title: "Персонаж 80 лвл / BiS шмот", price: "5 200 ₽", rank: "Mythic+", verified: false, insurance: true, img: CARD_IMG, seller: "WarcraftLord" },
  { id: 5, game: "GTA Online", title: "Аккаунт $2B / Max Level", price: "2 100 ₽", rank: "Rank 500", verified: true, insurance: true, img: CARD_IMG, seller: "LosAngelesV" },
  { id: 6, game: "Fortnite", title: "500+ скинов / OG стаф", price: "4 400 ₽", rank: "Champion", verified: true, insurance: true, img: CARD_IMG, seller: "FortniteLegend" },
];

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-game rounded-2xl overflow-hidden">
      <div className="relative" style={{ height: 180, overflow: "hidden" }}>
        <img src={product.img} alt={product.title} className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--dark-card) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
          <span className="tag-game">{product.game}</span>
          {product.verified && (
            <span className="verified-badge flex items-center gap-1 px-2 py-0.5 rounded text-xs" style={{ fontSize: "0.65rem" }}>
              <Icon name="ShieldCheck" size={10} /> VERIFIED
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 style={{ color: "#fff", fontWeight: 600, lineHeight: 1.4 }}>{product.title}</h3>
          <div className="price-tag text-xl whitespace-nowrap">{product.price}</div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Icon name="TrendingUp" size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{product.rank}</span>
          <span className="text-sm ml-auto" style={{ color: "rgba(255,255,255,0.4)" }}>@{product.seller}</span>
        </div>
        <div className="flex gap-2 mb-4">
          {product.insurance && (
            <span className="flex items-center gap-1 text-xs px-2 py-1 rounded" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc" }}>
              <Icon name="Shield" size={10} /> Страховка
            </span>
          )}
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded" style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)", color: "var(--neon-cyan)" }}>
            <Icon name="Lock" size={10} /> Эскроу
          </span>
        </div>
        <button className="btn-neon-solid w-full py-2.5 rounded-xl text-sm" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
          Купить аккаунт
        </button>
      </div>
    </div>
  );
}
