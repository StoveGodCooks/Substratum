export function money(n) {
  const v = Number(n);
  return v.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function byTags(items, tags = []) {
  if (!tags.length) return items;
  const set = new Set(tags);
  return items.filter(p => p.tags?.some(t => set.has(t)));
}

export function firstN(items, n) {
  return items.slice(0, n);
}

export function uniq(arr) {
  return Array.from(new Set(arr));
}
