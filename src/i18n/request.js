import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'zh'];

export default getRequestConfig(async ({ locale }) => {
  // Fallback to default if undefined (common in early render phases in Next 15/16)
  const activeLocale = locale || 'en';
  
  if (!locales.includes(activeLocale)) {
    notFound();
  }

  try {
    const messages = (await import(`../../messages/${activeLocale}.json`)).default;
    return { 
      locale: activeLocale, // Mandatory in next-intl v4.0
      messages 
    };
  } catch (err) {
    console.error('Error loading messages for', activeLocale, err);
    notFound();
  }
});
