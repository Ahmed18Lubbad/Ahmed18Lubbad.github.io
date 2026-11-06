import { useSyncExternalStore } from "react";

export type PortfolioLanguage = "en" | "ar";
type Preferences = { language: PortfolioLanguage; dark: boolean };
const DEFAULTS: Preferences = { language: "en", dark: true };
const DEFAULT_SNAPSHOT = JSON.stringify(DEFAULTS);
const EVENT_NAME = "portfolio-preferences-change";

function getSnapshot() {
  return localStorage.getItem("portfolio-preferences") ?? DEFAULT_SNAPSHOT;
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT_NAME, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT_NAME, onChange);
  };
}

export function usePortfolioPreferences() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_SNAPSHOT);
  return parsePreferences(snapshot);
}

export function updatePortfolioPreference<K extends keyof Preferences>(key: K, value: Preferences[K]) {
  const current = parsePreferences(getSnapshot());
  current[key] = value;
  localStorage.setItem("portfolio-preferences", JSON.stringify(current));
  window.dispatchEvent(new Event(EVENT_NAME));
}

function parsePreferences(snapshot: string): Preferences {
  try {
    const parsed = JSON.parse(snapshot) as Partial<Preferences>;
    return { language: parsed.language === "ar" ? "ar" : "en", dark: typeof parsed.dark === "boolean" ? parsed.dark : true };
  } catch {
    return DEFAULTS;
  }
}
