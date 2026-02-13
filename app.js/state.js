const KEY = "tmb_state_v1";

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function save(s) {
  localStorage.setItem(KEY, JSON.stringify(s));
}

const defaultState = {
  pro: false,
  cart: {}, // { [productId]: qty }
  rewards: {
    cardsCollected: 0,
    xp: 0
  }
};

let state = load() ?? defaultState;

export function getState() {
  return state;
}

export function setPro(on) {
  state = { ...state, pro: Boolean(on) };
  save(state);
}

export function addToCart(productId, qty = 1) {
  const cart = { ...state.cart };
  cart[productId] = (cart[productId] ?? 0) + qty;

  // light demo rewards loop
  const rewards = { ...state.rewards };
  rewards.cardsCollected = Math.min(50, rewards.cardsCollected + 1);
  rewards.xp += 35;

  state = { ...state, cart, rewards };
  save(state);
}

export function cartCount() {
  return Object.values(state.cart).reduce((a, b) => a + b, 0);
}
