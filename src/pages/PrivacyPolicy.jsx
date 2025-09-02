

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-white text-black px-4 py-6 font-poppins relative overflow-x-hidden">
        {/* Back Button */}
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black text-xs font-medium text-white hover:bg-gray-300"
          >
            <span className="text-lg">←</span> Back
          </a>
          <span className="ml-2 text-xs text-black/40">Privacy Policy</span>
        </div>
  
        {/* Large watermark backgrounds */}
        <div className="absolute left-0 top-[100px] opacity-100 pointer-events-none select-none z-0">
          <img
            src="/images/Vector (1).png"
            alt="Watermark"
            width={1000}
            height={980}
            className="object-cover"
          />
        </div>
  
        <div className="absolute left-0 md:top-[230px] top-[140px] opacity-100 pointer-events-none select-none z-0">
          <img
            src="/images/Vector (2).png"
            alt="Watermark"
            width={500}
            height={480}
            className="md:w-[600px] w-[250px] md:h-[580px] h-[280px]"
          />
        </div>
  
        <div className="absolute right-0 md:top-20 top-[15px] opacity-100 pointer-events-none select-none z-0">
          <img
            src="/images/Vector (3).png"
            alt="Watermark"
            width={200}
            height={380}
            className="md:w-[200px] w-[100px] md:h-[380px] h-[220px]"
          />
        </div>
  
        {/* Main Content */}
        <div className="relative z-10 max-w-md md:max-w-[710px] mx-auto">
          <h1 className="text-3xl font-bold mb-2 font-poppins mt-[15px] md:mt-0">
            Privacy
            <br className="block md:hidden" /> Policy
          </h1>
  
          <div className="text-xs text-black/70 mb-4 mt-[20px] md:mt-0">
            <span className="font-semibold">Last updated:</span> 11 June 2025 16:50
          </div>
  
          <p className="mb-4 text-sm leading-relaxed">
            Swish Strokes is deeply committed to protecting your emotional data, creative
            content, and personal information. This Privacy Policy explains how we collect,
            use, store, and protect your information when you use the Swish Strokes wellness
            app (the “App”), in accordance with Sri Lanka’s Personal Data Protection Act
            (PDPA) and other applicable laws.
          </p>
  
          <div className="p-3 mb-4 text-sm text-black/80 border-l-4 border-black">
            By using Swish Strokes, you agree to the practices described in this policy. If
            you do not agree, please refrain from using the app.
          </div>
  
          <hr className="border-gray-200 mb-4" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">1. Scope and Jurisdiction</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Swish Strokes is developed primarily for users in Sri Lanka, but is available
            internationally. All data handling practices follow Sri Lanka’s Personal Data
            Protection Act (PDPA).<br />
            <br />
            By using Swish Strokes outside Sri Lanka, you acknowledge and agree that your
            data may be processed under Sri Lankan law.<br />
            <br />
            We minimize external data handling, focusing on on-device processing and user
            control, and only share anonymized data with third-party services when essential
            for app functionality (as explained in Section 4).
          </p>
  
          <hr className="border-gray-200 mb-4" />
  
          <h2 className="text-lg font-bold mb-2 mt-8">2. Data Collection and Use</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Swish Strokes collects limited, purpose-driven information to power key
            features like mood tracking, music recommendations, art activities, and user
            progress.
          </p>
  
          <h3 className="text-base font-bold mb-3 mt-6">2.1 What We Collect</h3>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.1 – Mood Selections &amp; Check-ins
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              Your manually selected mood (Relaxed, Focused, Energetic, or Lazy) is stored
              locally to personalize your wellness experience. No sensitive biometric or
              mental health assessments are collected.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">2.1.2 – Music Interactions</h4>
            <p className="text-sm leading-relaxed mb-2">
              We log which playlists or songs are played for the purpose of improving
              recommendations. This is stored anonymously and never shared externally.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.3 – Mandala Artwork &amp; Creative Activity
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              We log which playlists or songs are played for the purpose of improving
              recommendations. This is stored anonymously and never shared externally.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.4 – Subscription Plans &amp; Billing Information
            </h4>
            <p className="text-sm leading-relaxed mb-3">
              Swish Strokes offers optional premium features through subscription plans. We
              collect and manage basic subscription-related data to ensure proper access and
              billing, in compliance with app store policies.
            </p>
            <ul className="list-disc list-inside text-sm ml-0 mb-3">
              <li>
                <span className="font-semibold">Annual Plan:</span> First 30 days free,
                then Rs. xxx/year (billed via Google Play or Apple App Store).
              </li>
              <li>
                <span className="font-semibold">Monthly Plan:</span> First 7 days free,
                then Rs. xx/month (billed via Google Play or Apple App Store).
              </li>
            </ul>
            <p className="text-sm leading-relaxed mb-2">
              We do not collect or store your full payment information. All billing and
              transactions are securely handled by the respective app store services (Google
              Play or Apple App Store).
            </p>
            <p className="text-sm leading-relaxed mb-2">
              We may access anonymized subscription metadata (such as plan type, renewal
              date, and status) via our subscription management service to enable premium
              features and notify you about renewals or expirations.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.5 – Achievements &amp; Leaderboards
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              When you participate in community activities (like challenges or tournaments),
              your username, avatar, and score are displayed. You can opt out at any time
              via settings.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.6 – Usage Analytics (Optional)
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              To improve design and performance, Swish Strokes may collect anonymized usage
              data (like feature taps, screen transitions, session time) using tools like
              Firebase Analytics. No personal identifiers or emotional data are tracked.
            </p>
          </div>
  
          <div className="mb-4">
            <h4 className="underline underline-offset-2 mb-2">
              2.1.7 – Support Messages &amp; Feedback
            </h4>
            <p className="text-sm leading-relaxed mb-2">
              If you contact us through support or feedback features, we retain your
              messages solely for improving the app and responding to inquiries.
            </p>
          </div>
  
          <h3 className="text-base font-bold mb-2 mt-8 underline underline-offset-2">
            2.2 Why We Collect
          </h3>
          <ul className="list-disc list-inside text-sm ml-4 mb-4">
            <li>To personalize your wellness journey based on your selected mood.</li>
            <li>To enhance music and art recommendations.</li>
            <li>To support participation in gamified challenges and display leaderboards.</li>
            <li>To improve app design and features based on anonymized analytics.</li>
            <li>To respond to your support requests and feedback.</li>
          </ul>
  
          <h3 className="text-base font-bold mb-2 mt-8 underline underline-offset-2">
            2.3 What We Don’t Do
          </h3>
          <ul className="mb-8 md:ml-0 ml-6">
            <li className="flex items-start gap-2 mb-2">
              <span className="text-base text-red-500 font-bold">X</span>{" "}
              <span>We do not access or store sensitive health or biometric data.</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span className="text-base text-red-500 font-bold">X</span>{" "}
              <span>We do not sell or monetize your data—ever.</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span className="text-base text-red-500 font-bold">X</span>{" "}
              <span>
                We do not store your artwork or mood data in the cloud unless you share it
                voluntarily.
              </span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span className="text-base text-red-500 font-bold">X</span>{" "}
              <span>We do not collect personal contacts, messages, or unrelated device content.</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span className="text-base text-red-500 font-bold">X</span>{" "}
              <span>
                We do not share any data with advertisers or third parties without your
                explicit consent.
              </span>
            </li>
          </ul>
  
          <h2 className="text-lg font-bold mb-2 mt-10">3. Contact Us</h2>
          <p className="mb-2 text-sm">
            If you have any questions, concerns, or requests related to your privacy, feel
            free to reach out:
          </p>
          <p className="text-sm">
            <b>Email: </b>
            <a
              href="mailto:swishstrokes.help@gmail.com"
              className="underline text-gray-600"
            >
              swishstrokes.help@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  }
  