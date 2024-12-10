import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  try {
    // Access cookies using next/headers
    const cookieStore = cookies();
 // Logs cookies to the console for debugging

    // Retrieve the locale from the cookie, or default to "en"
    const locale = await cookieStore.get("locale")?.value || "en";

    console.log('locale',locale)

    // Load the locale-specific messages
    const messages = {
      ...(await import(`../../messages/${locale}/modules/modules.json`)).default,
    };

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error("Error in getRequestConfig:", error);
    throw new Error("Failed to configure locale.");
  }
});
