import "../styles/brands.css";
import "../styles/normalize.css";
import Script from "next/script";

/*
 * Themes:
 * Auto: styles/skeleton-auto.css
 * Light: styles/skeleton-light.css
 * Dark: styles/skeleton-dark.css
 */
import "../styles/skeleton-auto.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
