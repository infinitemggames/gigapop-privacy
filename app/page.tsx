import { CONTACT_EMAIL, DEVELOPER, DEVELOPER_SITE, GAME, POLICY_DATE } from "@/lib/site";

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
const site = <a href={DEVELOPER_SITE}>{new URL(DEVELOPER_SITE).host}</a>;

export default function PrivacyPolicy() {
  return (
    <article>
      <h1>Privacy Policy – {GAME}</h1>
      <p className="lead">
        Developer: {DEVELOPER} · Effective date: {POLICY_DATE}
      </p>

      <div className="summary">
        <strong>In short</strong>
        <ul>
          <li>{GAME} has no accounts, and I (the developer) do not collect personal information.</li>
          <li>Your progress and purchases are saved only on your device.</li>
          <li>
            The game shows optional rewarded ads from Google AdMob. Google may collect device and usage data to show and
            measure ads, as described below.
          </li>
          <li>Payments are handled by Google Play or the Apple App Store. I never see your card or payment details.</li>
        </ul>
      </div>

      <h2>1. Who I am</h2>
      <p>
        {GAME} (the “Game”) is developed and published by {DEVELOPER}, an independent developer (“I”, “me”). If you have
        any question about this policy or your data, contact me at {mail}. My website: {site}.
      </p>

      <h2>2. Data stored on your device</h2>
      <p>
        The Game saves the following on your device only: game progress and upgrade levels, coins, settings (such as
        sound), the items you own and use, ad cooldown timers, and the date of the first launch (used for a limited-time
        offer). This data is not sent to me — I do not run any servers. It is deleted when you uninstall the Game.
      </p>

      <h2>3. Advertising (Google AdMob)</h2>
      <p>
        The Game uses the Google Mobile Ads SDK (Google AdMob, provided by Google LLC) to show optional rewarded ads: you
        can choose to watch an ad to get a temporary 2× boost or a free upgrade level. To show, measure and protect these
        ads, the SDK may automatically collect and send to Google:
      </p>
      <ul>
        <li>
          device identifiers, such as the advertising ID on Android, the IDFA on iOS (only if you allow tracking) and the
          app set ID;
        </li>
        <li>your IP address, which can be used to estimate your general (approximate) location;</li>
        <li>ad and app interactions, such as ad views, taps and app launches;</li>
        <li>diagnostic information, such as crash and performance data.</li>
      </ul>
      <p>
        Google uses this data to serve ads (personalized or non-personalized, depending on your choices and your region),
        to measure ad performance, for analytics, and to prevent fraud and abuse. The data is encrypted in transit. I
        cannot see this data; AdMob only gives me anonymous, aggregated reports, such as the number of ads shown. Google
        processes it under its own privacy policy:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites">
            How Google uses information from sites or apps that use its services
          </a>
        </li>
      </ul>

      <h2>4. Your choices about ads</h2>
      <ul>
        <li>
          <strong>EEA, UK and Switzerland:</strong> before personalized ads are shown, the Game asks for your consent with
          Google’s consent form. You can change your choice at any time in the Game: pause menu → <code>AD PRIVACY</code>.
        </li>
        <li>
          <strong>iPhone:</strong> the Game asks for permission to track (App Tracking Transparency). You can change it
          later in iOS Settings → Privacy &amp; Security → Tracking.
        </li>
        <li>
          <strong>Android:</strong> you can reset or delete your advertising ID in your device settings (Settings → Google
          → Ads, or Settings → Privacy → Ads, depending on the device).
        </li>
        <li>
          You can also manage ad personalization at <a href="https://myadcenter.google.com">myadcenter.google.com</a>.
        </li>
      </ul>
      <p>Watching ads is always optional. The Game works without them.</p>

      <h2>5. In-app purchases</h2>
      <p>
        Purchases are processed by Google Play or the Apple App Store under their own terms and privacy policies. I do not
        receive or store your name, card number or other payment details. The store only tells the Game which item was
        bought (a product identifier and a purchase confirmation), so that the Game can unlock it on your device and
        restore it later.
      </p>

      <h2>6. Sharing and selling of data</h2>
      <p>
        I do not sell personal information and I do not share any data myself. The only data that leaves your device is
        the data the Google Mobile Ads SDK and the app store collect, as described above.
      </p>

      <h2>7. Children</h2>
      <p>
        The Game is not directed at children under the age of 13, and I do not knowingly collect personal information
        from children. If you believe a child has provided personal information through the Game, please contact me and I
        will help to get it removed.
      </p>

      <h2>8. Data retention, deletion and your rights</h2>
      <p>
        Because I do not collect or store personal data on any server, I have no personal data about you to view, correct
        or delete. You can delete everything the Game saved by uninstalling it. For data processed by Google for
        advertising, you can use the controls listed in section 4. If you live in a region with data protection laws (for
        example the EU GDPR), you can contact me at any time with questions or requests, and you can withdraw your ad
        consent in the Game.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        I may update this policy, for example when the Game gets new features. The new version will be posted on this page
        with a new effective date.
      </p>

      <h2>10. Contact</h2>
      <p>
        {DEVELOPER}
        <br />
        {mail}
        <br />
        {site}
      </p>
    </article>
  );
}
