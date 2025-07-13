import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // ตรวจสอบว่า locale มีค่าและถูกต้อง
  const validLocales = ["en", "th"];
  const currentLocale = validLocales.includes(locale) ? locale : "en";

  return {
    locale: currentLocale,
    messages: (await import(`./src/messages/${currentLocale}.json`)).default,
  };
});
