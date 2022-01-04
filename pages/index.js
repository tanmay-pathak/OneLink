import Head from "next/head";

export default function Home() {
  return (
    <div className="body">
      <Head>
        {/* Page Information */}
        <meta charSet="utf-8" />
        <title>OneLink</title>
        <meta name="description" content="Find us online!" />
        <meta name="author" content="Tanmay Pathak" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Mobile Specific Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="column" style={{ paddingTop: "10%" }}>
            {/* 
          ## Getting Started with LittleLink
          This page has been built with every pre-designed button available in LittleLink by default. You can rearrange and delete as needed.
          You can add your own brand or others brands you may need in the `css/brands.css` file. 
          You can add custom icons to `/icons/...`. It is recommended to use a 24x24 .SVG.
          Edit the "Your Image Here" section to add your own personal branding, like a picture of yourself or your brand logo!
          Edit the "Title" section to change the page heading. You can use something like your name, your social handle, or your brand name.
          Edit the "Short Bio" section tell users about yourself or your brand.
           */}

            {/* Your Image Here */}
            <img src="/avatar.png" alt="LittleLink Logo" />

            {/* Title */}
            <h1>OneLink</h1>

            {/* Short Intro */}
            <p>
              OneLink is an open source DIY alternative to services like{" "}
              <a href="https://linktr.ee" target="_blank" rel="noreferrer">
                Linktree
              </a>{" "}
              and{" "}
              <a href="https://many.link" target="_blank" rel="noreferrer">
                many.link
              </a>
              . OneLink was built using{" "}
              <a
                href="http://www.getskeleton.com"
                target="_blank"
                rel="noreferrer"
              >
                Skeleton
              </a>
              , a dead simple, responsive boilerplate with some branded buttons.
              This is a Next.JS implementation of the original project{" "}
              <a
                href="https://github.com/sethcottle/littlelink"
                target="_blank"
                rel="noreferrer"
              >
                LittleLink
              </a>{" "}
              by{" "}
              <a
                href="https://github.com/sethcottle"
                target="_blank"
                rel="noreferrer"
              >
                Seth Cottle
              </a>
              .
            </p>

            {/* Links */}

            {/* Github */}
            <a
              className="button button-github"
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/github.svg" alt="GitHub Logo" />
              GitHub
            </a>
            <br />

            {/* Twitter */}
            <a
              className="button button-twit"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/twitter.svg"
                alt="Twitter Logo"
              />
              Twitter
            </a>
            <br />

            {/* Instagram */}
            <a
              className="button button-instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/instagram.svg"
                alt="Instagram Logo"
              />
              Instagram
            </a>
            <br />

            {/* Facebook */}
            <a
              className="button button-faceb"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/facebook.svg"
                alt="Facebook Logo"
              />
              Find us on Facebook
            </a>
            <br />

            {/* Facebook Messenger */}
            <a
              className="button button-messenger"
              href="https://www.messenger.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/messenger.svg"
                alt="Facebook Messenger Logo"
              />
              Chat on Messenger
            </a>
            <br />

            {/* LinkedIn */}
            <a
              className="button button-linked"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/linkedin.svg"
                alt="LinkedIn Logo"
              />
              LinkedIn
            </a>
            <br />

            {/* YouTube */}
            <a
              className="button button-yt"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/youtube.svg"
                alt="YouTube Logo"
              />
              YouTube
            </a>
            <br />

            {/* Discord */}
            <a
              className="button button-discord"
              href="https://www.discord.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/discord.svg"
                alt="Discord Logo"
              />
              Discord
            </a>
            <br />

            {/* Twitch */}
            <a
              className="button button-twitch"
              href="https://www.twitch.tv"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/twitch.svg" alt="Twitch Logo" />
              Twitch
            </a>
            <br />

            {/* ProductHunt */}
            <a
              className="button button-producthunt"
              href="https://www.producthunt.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/producthunt.svg"
                alt="Product Hunt Logo"
              />
              Product Hunt
            </a>
            <br />

            {/* Snapchat */}
            <a
              className="button button-snapchat"
              href="https://www.snapchat.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/snapchat.svg"
                alt="Snapchat Logo"
              />
              Snapchat
            </a>
            <br />

            {/* Spotify */}
            <a
              className="button button-spotify"
              href="https://www.spotify.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/spotify.svg"
                alt="Spotify Logo"
              />
              Spotify
            </a>
            <br />

            {/* Reddit */}
            <a
              className="button button-reddit"
              href="https://www.reddit.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/reddit.svg" alt="Reddit Logo" />
              Reddit
            </a>
            <br />

            {/* Mastodon */}
            <a
              className="button button-mastodon"
              href="https://www.mastodon.social"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/mastodon.svg"
                alt="Mastodon Logo"
              />
              Mastodon
            </a>
            <br />

            {/* Medium */}
            <a
              className="button button-medium"
              href="https://www.medium.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/medium.svg" alt="Medium Logo" />
              Medium
            </a>
            <br />

            {/* Pinterest */}
            <a
              className="button button-pinterest"
              href="https://www.pininterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/pinterest.svg"
                alt="Pinterest Logo"
              />
              Follow on Pinterest
            </a>
            <br />

            {/* TikTok */}
            <a
              className="button button-tiktok"
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/tiktok.svg" alt="TikTok Logo" />
              TikTok
            </a>
            <br />

            {/* Email */}
            <a
              className="button button-default"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/email.svg" alt="Email Icon" />
              hello@littlelink.io
            </a>
            <br />

            {/* Email Alternative */}
            <a
              className="button button-default"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/email_alt.svg"
                alt="Email Icon"
              />
              hello@littlelink.io
            </a>
            <br />

            {/* SoundCloud */}
            <a
              className="button button-soundcloud"
              href="https://www.soundcloud.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/soundcloud.svg"
                alt="SoundCloud Logo"
              />
              SoundCloud
            </a>
            <br />

            {/* Figma */}
            <a
              className="button button-figma"
              href="https://www.figma.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/figma.svg" alt="Figma Logo" />
              Figma
            </a>
            <br />

            {/* Kit */}
            <a
              className="button button-kit"
              href="https://www.kit.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/kit.svg" alt="Kit Logo" />
              Kit
            </a>
            <br />

            {/* Telegram */}
            <a
              className="button button-telegram"
              href="https://www.telegram.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/telegram.svg"
                alt="Telegram Logo"
              />
              Telegram
            </a>
            <br />

            {/* Tumblr */}
            <a
              className="button button-tumb"
              href="https://www.tumblr.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/tumblr.svg" alt="Tumblr Logo" />
              Tumblr
            </a>
            <br />

            {/* Steam */}
            <a
              className="button button-steam"
              href="https://www.steam.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/steam.svg" alt="Steam Logo" />
              Steam
            </a>
            <br />

            {/* Vimeo */}
            <a
              className="button button-vimeo"
              href="https://www.vimeo.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/vimeo.svg" alt="Vimeo Logo" />
              Vimeo
            </a>
            <br />

            {/* PayPal */}
            <a
              className="button button-paypal"
              href="https://www.paypal.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/paypal.svg" alt="PayPal Logo" />
              PayPal
            </a>
            <br />

            {/* WhatsApp */}
            <a
              className="button button-whatsapp"
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/whatsapp.svg"
                alt="WhatsApp Logo"
              />
              WhatsApp
            </a>
            <br />

            {/* Wordpress */}
            <a
              className="button button-wordpress"
              href="https://www.wordpress.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/wordpress.svg"
                alt="Wordpress Logo"
              />
              Wordpress
            </a>
            <br />

            {/* Goodreads */}
            <a
              className="button button-goodreads"
              href="https://www.goodreads.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/goodreads.svg"
                alt="Goodreads Logo"
              />
              Goodreads
            </a>
            <br />

            {/* Skoob */}
            <a
              className="button button-skoob"
              href="https://www.skoob.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/skoob.svg" alt="Skoob Logo" />
              Skoob
            </a>
            <br />

            {/* Gitlab */}
            <a
              className="button button-gitlab"
              href="https://www.gitlab.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/gitlab.svg" alt="GitLab Logo" />
              GitLab
            </a>
            <br />

            {/* XING */}
            <a
              className="button button-xing"
              href="https://www.xing.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/xing.svg" alt="xing Logo" />
              Xing
            </a>
            <br />

            {/* Bandcamp */}
            <a
              className="button button-bandcamp"
              href="https://www.bandcamp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/bandcamp.svg"
                alt="Bandcamp Logo"
              />
              Bandcamp
            </a>
            <br />

            {/* Patreon */}
            <a
              className="button button-patreon"
              href="https://www.patreon.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon"
                src="/icons/patreon.svg"
                alt="Patreon Logo"
              />
              Patreon
            </a>
            <br />

            {/* Signal */}
            <a
              className="button button-signal"
              href="https://www.signal.org"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/signal.svg" alt="Signal Logo" />
              Signal
            </a>
            <br />

            {/* Venmo */}
            <a
              className="button button-venmo"
              href="https://www.venmo.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/icons/venmo.svg" alt="Venmo Logo" />
              Venmo
            </a>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
