'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function TermsOfService() {
  const { language, t } = useLanguage();

  return (
    <>
      <LanguageSwitcher />

      <div className="privacy-container">
        {language === 'da' ? (
          <DanishContent backToHome={t.backToHome} />
        ) : (
          <EnglishContent backToHome={t.backToHome} />
        )}
      </div>

      <Footer />
    </>
  );
}

function DanishContent({ backToHome }: { backToHome: string }) {
  return (
    <div className="lang-content">
      <h1 className="privacy-title">Brugsbetingelser for UdenUSA</h1>
      <p className="privacy-date">Ikrafttrædelsesdato: 7. marts 2025</p>

      <div>
        <h2 className="section-title">1. Accepter af vilkår</h2>
        <p className="privacy-text">
          Ved at downloade, installere eller bruge UdenUSA-appen, accepterer
          du at være bundet af disse brugsbetingelser. Hvis du ikke accepterer
          disse vilkår, må du ikke bruge appen.
        </p>
      </div>

      <div>
        <h2 className="section-title">2. Beskrivelse af tjenesten</h2>
        <p className="privacy-text">
          UdenUSA er en app, der hjælper brugere med at identificere produkters
          oprindelse og foreslår danske alternativer til amerikanske produkter.
          Appen bruger kameraet på din enhed til at scanne produktemballage og
          analysere produktinformation.
        </p>
      </div>

      <div>
        <h2 className="section-title">3. Brugerkonti og abonnementer</h2>
        <p className="privacy-text">
          3.1 Gratis brugere har adgang til 3 scanninger pr. dag.
        </p>
        <p className="privacy-text">
          3.2 Pro-abonnenter har adgang til ubegrænset antal scanninger.
        </p>
        <p className="privacy-text">
          3.3 Abonnementer fornyes automatisk, medmindre de opsiges mindst 24
          timer før slutningen af den aktuelle periode.
        </p>
        <p className="privacy-text">
          3.4 Priser for abonnementer kan ændres. Brugere vil blive informeret
          om prisændringer før de træder i kraft.
        </p>
      </div>

      <div>
        <h2 className="section-title">4. Brugerens forpligtelser</h2>
        <p className="privacy-text">
          4.1 Du må kun bruge appen til lovlige formål og i overensstemmelse
          med disse vilkår.
        </p>
        <p className="privacy-text">
          4.2 Du må ikke bruge appen på en måde, der kan skade, deaktivere,
          overbelaste eller forringe appen.
        </p>
        <p className="privacy-text">
          4.3 Du må ikke forsøge at få uautoriseret adgang til systemer eller
          netværk forbundet med appen.
        </p>
        <p className="privacy-text">
          4.4 Du er ansvarlig for at sikre, at din brug af appen overholder
          alle gældende love og regler.
        </p>
      </div>

      <div>
        <h2 className="section-title">5. Intellektuel ejendomsret</h2>
        <p className="privacy-text">
          5.1 Appen og alt indhold, funktioner og funktionalitet er ejet af
          UdenUSA og er beskyttet af danske og internationale love om ophavsret,
          varemærker og andre intellektuelle ejendomsrettigheder.
        </p>
        <p className="privacy-text">
          5.2 Du må ikke reproducere, distribuere, modificere, skabe afledte
          værker af, offentligt vise, offentligt fremføre, genudgive,
          downloade, lagre eller overføre noget indhold fra appen, undtagen som
          tilladt af disse vilkår.
        </p>
      </div>

      <div>
        <h2 className="section-title">6. Ansvarsfraskrivelse</h2>
        <p className="privacy-text">
          6.1 Appen leveres &apos;som den er&apos; og &apos;som
          tilgængelig&apos; uden nogen garantier, hverken udtrykkelige eller
          underforståede.
        </p>
        <p className="privacy-text">
          6.2 Vi garanterer ikke, at appen vil være fejlfri eller uafbrudt,
          eller at eventuelle fejl vil blive rettet.
        </p>
        <p className="privacy-text">
          6.3 Vi garanterer ikke nøjagtigheden af produktanalyser eller
          anbefalinger af danske alternativer.
        </p>
        <p className="privacy-text">
          6.4 Du accepterer, at produktanbefalinger er vejledende og at du selv
          er ansvarlig for at verificere produktinformation.
        </p>
      </div>

      <div>
        <h2 className="section-title">7. Ansvarsbegrænsning</h2>
        <p className="privacy-text">
          7.1 I det maksimale omfang tilladt ved lov, vil UdenUSA ikke være
          ansvarlig for nogen indirekte, tilfældige, særlige, følgeskader eller
          strafbare skader.
        </p>
        <p className="privacy-text">
          7.2 Vores samlede ansvar for alle krav i forbindelse med disse vilkår
          vil ikke overstige det beløb, du har betalt til os for brug af appen
          i de foregående 12 måneder.
        </p>
      </div>

      <div>
        <h2 className="section-title">8. Ændringer af vilkår</h2>
        <p className="privacy-text">
          Vi forbeholder os retten til at ændre disse vilkår til enhver tid.
          Ændringer vil træde i kraft, når de er blevet offentliggjort i appen.
          Din fortsatte brug af appen efter sådanne ændringer udgør din accept
          af de nye vilkår.
        </p>
      </div>

      <div>
        <h2 className="section-title">9. Opsigelse</h2>
        <p className="privacy-text">
          9.1 Vi kan opsige eller suspendere din adgang til appen øjeblikkeligt,
          uden forudgående varsel eller ansvar, af enhver grund, herunder uden
          begrænsning, hvis du overtræder disse vilkår.
        </p>
        <p className="privacy-text">
          9.2 Du kan opsige dit abonnement via App Store-indstillingerne på din
          enhed.
        </p>
      </div>

      <div>
        <h2 className="section-title">10. Gældende lov</h2>
        <p className="privacy-text">
          Disse vilkår er underlagt og fortolkes i overensstemmelse med dansk
          lovgivning, uden hensyn til dets konfliktregler.
        </p>
      </div>

      <div>
        <h2 className="section-title">11. Kontakt</h2>
        <p className="privacy-text">
          Hvis du har spørgsmål om disse brugsbetingelser, kontakt os venligst
          på:
        </p>
        <p className="privacy-text">E-mail: info@nonusa.org</p>
        <p className="privacy-text">Adresse: Vocata Studio, Danmark</p>

        <h2 className="section-title">Tilbagebetalingspolitik</h2>
        <p className="privacy-text">
          Tilbagebetalinger håndteres i overensstemmelse med App Stores
          retningslinjer. UdenUSA tilbyder ikke direkte tilbagebetalinger for
          abonnementer købt gennem App Store. Anmodninger om skal rettes til
          Apple.
        </p>
      </div>

      <div className="privacy-footer">
        <p>Ved at bruge UdenUSA accepterer du disse brugsbetingelser.</p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

function EnglishContent({ backToHome }: { backToHome: string }) {
  return (
    <div className="lang-content">
      <h1 className="privacy-title">Terms of Service for UdenUSA</h1>
      <p className="privacy-date">Effective Date: March 7, 2025</p>

      <div>
        <h2 className="section-title">1. Acceptance of Terms</h2>
        <p className="privacy-text">
          By downloading, installing, or using the UdenUSA app, you agree to be
          bound by these terms of service. If you do not accept these terms,
          you may not use the app.
        </p>
      </div>

      <div>
        <h2 className="section-title">2. Service Description</h2>
        <p className="privacy-text">
          UdenUSA is an app that helps users identify product origins and
          suggests Danish alternatives to American products. The app uses your
          device&apos;s camera to scan product packaging and analyze product
          information.
        </p>
      </div>

      <div>
        <h2 className="section-title">3. User Accounts and Subscriptions</h2>
        <p className="privacy-text">
          3.1 Free users have access to 3 scans per day.
        </p>
        <p className="privacy-text">
          3.2 Pro subscribers have access to unlimited scans.
        </p>
        <p className="privacy-text">
          3.3 Subscriptions renew automatically unless canceled at least 24
          hours before the end of the current period.
        </p>
        <p className="privacy-text">
          3.4 Subscription prices may change. Users will be informed of price
          changes before they take effect.
        </p>
      </div>

      <div>
        <h2 className="section-title">4. User Obligations</h2>
        <p className="privacy-text">
          4.1 You may only use the app for lawful purposes and in accordance
          with these terms.
        </p>
        <p className="privacy-text">
          4.2 You may not use the app in any way that could damage, disable,
          overburden, or impair the app.
        </p>
        <p className="privacy-text">
          4.3 You may not attempt to gain unauthorized access to systems or
          networks connected to the app.
        </p>
        <p className="privacy-text">
          4.4 You are responsible for ensuring that your use of the app
          complies with all applicable laws and regulations.
        </p>
      </div>

      <div>
        <h2 className="section-title">5. Intellectual Property Rights</h2>
        <p className="privacy-text">
          5.1 The app and all content, features, and functionality are owned by
          UdenUSA and are protected by Danish and international copyright,
          trademark, and other intellectual property laws.
        </p>
        <p className="privacy-text">
          5.2 You may not reproduce, distribute, modify, create derivative
          works of, publicly display, publicly perform, republish, download,
          store, or transmit any content from the app, except as permitted by
          these terms.
        </p>
      </div>

      <div>
        <h2 className="section-title">6. Disclaimer of Warranties</h2>
        <p className="privacy-text">
          6.1 The app is provided &apos;as is&apos; and &apos;as
          available&apos; without any warranties, either express or implied.
        </p>
        <p className="privacy-text">
          6.2 We do not guarantee that the app will be error-free or
          uninterrupted, or that any errors will be corrected.
        </p>
        <p className="privacy-text">
          6.3 We do not guarantee the accuracy of product analyses or
          recommendations for Danish alternatives.
        </p>
        <p className="privacy-text">
          6.4 You acknowledge that product recommendations are advisory and
          that you are responsible for verifying product information.
        </p>
      </div>

      <div>
        <h2 className="section-title">7. Limitation of Liability</h2>
        <p className="privacy-text">
          7.1 To the maximum extent permitted by law, UdenUSA will not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages.
        </p>
        <p className="privacy-text">
          7.2 Our total liability for all claims related to these terms will
          not exceed the amount you have paid us for use of the app in the
          preceding 12 months.
        </p>
      </div>

      <div>
        <h2 className="section-title">8. Changes to Terms</h2>
        <p className="privacy-text">
          We reserve the right to change these terms at any time. Changes will
          take effect when posted in the app. Your continued use of the app
          after such changes constitutes your acceptance of the new terms.
        </p>
      </div>

      <div>
        <h2 className="section-title">9. Termination</h2>
        <p className="privacy-text">
          9.1 We may terminate or suspend your access to the app immediately,
          without prior notice or liability, for any reason, including without
          limitation if you breach these terms.
        </p>
        <p className="privacy-text">
          9.2 You may cancel your subscription through the App Store settings
          on your device.
        </p>
      </div>

      <div>
        <h2 className="section-title">10. Governing Law</h2>
        <p className="privacy-text">
          These terms are governed by and construed in accordance with Danish
          law, without regard to its conflict of law provisions.
        </p>
      </div>

      <div>
        <h2 className="section-title">11. Contact</h2>
        <p className="privacy-text">
          If you have questions about these terms of service, please contact us
          at:
        </p>
        <p className="privacy-text">Email: info@nonusa.org</p>
        <p className="privacy-text">Address: Vocata Studio, Denmark</p>

        <h2 className="section-title">Refund Policy</h2>
        <p className="privacy-text">
          Refunds are handled in accordance with App Store guidelines. UdenUSA
          does not offer direct refunds for subscriptions purchased through the
          App Store. Refund requests should be directed to Apple.
        </p>
      </div>

      <div className="privacy-footer">
        <p>By using UdenUSA, you accept these terms of service.</p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}
