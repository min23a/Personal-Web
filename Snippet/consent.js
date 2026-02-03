export const CONSENT_KEY = "analytics_consent";

export function getConsent() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(CONSENT_KEY);
}

export function setConsent(value) {
    if (typeof window === "undefined") return;
    localStorage.setItem(CONSENT_KEY, value);
}

export function hasAnalyticsConsent() {
    return getConsent() === "granted";
}
