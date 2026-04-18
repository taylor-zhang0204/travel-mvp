import * as WebBrowser from 'expo-web-browser';

export const openExternalLink = async (link: string) => {
  await WebBrowser.openBrowserAsync(link);
};

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
