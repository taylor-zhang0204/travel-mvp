import * as WebBrowser from 'expo-web-browser';

export const openExternalLink = async (link: string) => {
  await WebBrowser.openBrowserAsync(link);
};

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Format a price with currency symbol and thousand separators.
 * e.g. formatCurrency(1234.5, "USD") => "$1,235"
 * Falls back to the raw value if currencyCode is missing.
 */
export const formatCurrency = (amount?: number, currencyCode?: string): string => {
  if (amount == null) return 'N/A';
  if (!currencyCode) return amount.toLocaleString('en');
  try {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currencyCode}${amount.toLocaleString('en')}`;
  }
};
