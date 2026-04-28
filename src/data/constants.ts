export const HERO_IMG = "https://cdn.poehali.dev/projects/abf1b166-d868-4580-ae8d-70e96172ac04/files/f1ac628c-9087-4792-ac57-b85a582d3e43.jpg";
export const CARD_IMG = "https://cdn.poehali.dev/projects/abf1b166-d868-4580-ae8d-70e96172ac04/files/bb492c3e-a214-45b8-a883-35ea54911e43.jpg";

export const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "purchases", label: "Мои покупки" },
  { id: "reviews", label: "Отзывы" },
  { id: "support", label: "Поддержка" },
  { id: "contacts", label: "Контакты" },
  { id: "profile", label: "Профиль" },
];

export const PRODUCTS = [
  { id: 1, game: "CS2", title: "Аккаунт Prime / 2500 часов", price: "1 290 ₽", rank: "MG2", verified: true, insurance: true, img: CARD_IMG, seller: "GameMaster_Pro" },
  { id: 2, game: "Dota 2", title: "Аккаунт MMR 6000+", price: "3 500 ₽", rank: "Ancient I", verified: true, insurance: true, img: CARD_IMG, seller: "DotaKing99" },
  { id: 3, game: "Valorant", title: "Аккаунт Radiant / Full Access", price: "8 900 ₽", rank: "Radiant", verified: true, insurance: false, img: CARD_IMG, seller: "ValorantPro" },
  { id: 4, game: "WoW", title: "Персонаж 80 лвл / BiS шмот", price: "5 200 ₽", rank: "Mythic+", verified: false, insurance: true, img: CARD_IMG, seller: "WarcraftLord" },
  { id: 5, game: "GTA Online", title: "Аккаунт $2B / Max Level", price: "2 100 ₽", rank: "Rank 500", verified: true, insurance: true, img: CARD_IMG, seller: "LosAngelesV" },
  { id: 6, game: "Fortnite", title: "500+ скинов / OG стаф", price: "4 400 ₽", rank: "Champion", verified: true, insurance: true, img: CARD_IMG, seller: "FortniteLegend" },
];

export const PURCHASES = [
  { id: 1, game: "CS2", title: "Аккаунт Prime / 1800 часов", price: "990 ₽", date: "22 апр 2026", status: "completed" },
  { id: 2, game: "Dota 2", title: "Аккаунт MMR 5500", price: "2 800 ₽", date: "15 апр 2026", status: "completed" },
  { id: 3, game: "Valorant", title: "Аккаунт Immortal", price: "3 200 ₽", date: "29 апр 2026", status: "pending" },
];

export const REVIEWS = [
  { id: 1, name: "Alexei_K", avatar: "A", rating: 5, game: "CS2", text: "Купил аккаунт Prime — всё чисто, данные сразу пришли. Страховка реально работает, продавец честный. Рекомендую!", date: "27 апр 2026" },
  { id: 2, name: "Nika_Pro", avatar: "N", rating: 5, game: "Valorant", text: "Верификация аккаунта дала уверенность. Купила Radiant аккаунт, всё соответствует описанию. Гарантия подлинности — не просто слова.", date: "24 апр 2026" },
  { id: 3, name: "DarkWolf88", avatar: "D", rating: 4, game: "Dota 2", text: "Хороший маркетплейс. Страховка сделок — топ фича. Единственное пожелание — больше аккаунтов Dota.", date: "20 апр 2026" },
  { id: 4, name: "StarPlayer", avatar: "S", rating: 5, game: "WoW", text: "Уже 3-я покупка здесь. Проверка аккаунтов работает — ни разу не попал на мошенника. Сервис на уровне!", date: "18 апр 2026" },
];

export const FAQ = [
  { q: "Как работает гарантия подлинности?", a: "Каждый аккаунт проходит ручную проверку нашими модераторами. Мы верифицируем ранг, часы игры, состояние аккаунта и историю." },
  { q: "Что такое страховка сделок?", a: "Деньги замораживаются до момента передачи аккаунта. Если что-то пошло не так — возвращаем 100% стоимости в течение 24 часов." },
  { q: "Как связаться с продавцом?", a: "После оплаты открывается защищённый чат с продавцом. Все переписки хранятся и при необходимости служат доказательством в споре." },
  { q: "Сколько времени занимает верификация?", a: "Стандартная проверка — до 2 часов. Срочная верификация доступна за дополнительную плату — 30 минут." },
];
