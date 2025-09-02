// src/pages/TermsOfUse.jsx

export default function TermsOfUse() {
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
          <span className="ml-2 text-xs text-black/40">Terms of Use</span>
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
            Terms
            <br className="block md:hidden" /> of Use
          </h1>
  
          <div className="text-xs text-black/70 mb-4 mt-[20px] md:mt-0">
            <span className="font-semibold">Last updated:</span> 10 June 2025 16:50
          </div>
  
          <p className="mb-4 text-sm leading-relaxed">
            Swish Strokes us provides this app to help you manage your emotional wellness
            through mood tracking, music, and creative activities. By using Swish Strokes,
            you agree to these terms. If you don’t agree, please don’t use the app.
          </p>
  
          <div className="p-3 mb-4 text-sm text-black/80 border-l-4 border-black">
            By using Swish Strokes, you agree to the practices described in this policy. If
            you do not agree, please refrain from using the app.
          </div>
  
          <hr className="border-gray-200 mb-4" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">1.&nbsp;Who Can Use the App</h2>
          <ul className="list-disc list-inside text-sm mb-8 md:ml-0 ml-6">
            <li>You must be 18 or older to use Swish Strokes.</li>
            <li>You must agree to follow these terms and use the app responsibly.</li>
          </ul>
  
          <hr className="border-gray-200 mb-4 mt-2" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">2.&nbsp;What You Shouldn’t Do</h2>
          <p className="mb-2 text-sm">By using the app, you agree not to:</p>
          <ul className="list-disc list-inside text-sm mb-8 md:ml-0 ml-6">
            <li>Share false information or impersonate someone else.</li>
            <li>Use someone else's account or payment info.</li>
            <li>Post harmful or inappropriate content.</li>
            <li>Hack, modify, or misuse any part of the app.</li>
            <li>Copy or reuse our designs, code, or branding without permission.</li>
            <li>Use the app for advertising or unrelated business purposes.</li>
            <li>Break local or international laws.</li>
          </ul>
          <p className="text-sm font-bold">
            We may suspend or remove your account if you break these rules.
          </p>
  
          <hr className="border-gray-200 mb-4 mt-5" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">3.&nbsp;Subscriptions &amp; Payments</h2>
          <p className="mb-2 text-sm">Swish Strokes offers optional premium plans:</p>
          <ul className="list-disc list-inside text-sm mb-8 md:ml-0 ml-6">
            <li>Annual Plan: 30 days free, then Rs. xxxx/year.</li>
            <li>Monthly Plan: 7 days free, then Rs. xxx/month</li>
          </ul>
          <p className="text-sm font-bold">
            Payments are handled by Google Play and Apple App Store. Refunds follow their
            policies. Cancel anytime via your app store settings.
          </p>
  
          <hr className="border-gray-200 mb-4 mt-5" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">4.&nbsp;Your Content &amp; Data</h2>
          <ul className="list-disc list-inside text-sm mb-8 md:ml-0 ml-6">
            <li>
              Your mood entries, artwork, and journal logs are stored on your device and
              only shared if you choose to (e.g., for challenges).
            </li>
            <li>We don't sell or share your personal data.</li>
            <li>
              For more details, see our{" "}
              <a href="/privacy-policy" className="underline text-blue-600">
                Privacy Policy
              </a>
              .
            </li>
          </ul>
  
          <hr className="border-gray-200 mb-4" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">5.&nbsp;Intellectual Property</h2>
          <p className="mb-4 text-sm leading-relaxed">
            All designs, code, logos, and branding belong to <b>Swish Strokes.</b>
            <br />
            <br />
            Please don’t copy, modify, or use them without permission.
          </p>
  
          <hr className="border-gray-200 mb-4 mt-5" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">6.&nbsp;Disclaimer</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Swish Strokes is a wellness companion, not a medical or diagnostic tool. We try
            to keep everything accurate and helpful, but we can’t guarantee the app will
            always be error-free or available at all times.
            <br />
            <br />
            You are responsible for how you use the app and for managing your own device
            security.
          </p>
  
          <hr className="border-gray-200 mb-4 mt-5" />
  
          <h2 className="text-lg font-bold mb-2 mt-6">7.&nbsp;Termination</h2>
          <p className="mb-4 text-sm leading-relaxed">
            You may stop using the app anytime.
            <br />
            <br />
            We may suspend or delete your account if you break these terms or misuse the
            app.
          </p>
  
          <hr className="border-gray-200 mb-4 mt-5" />
  
          <h2 className="text-lg font-bold mb-2 mt-5">8.&nbsp;Contact Us</h2>
          <p className="text-sm">
            Need help or have a question? Reach out at:&nbsp;📧{" "}
            <a href="mailto:swishstrokes.help@gmail.com" className="underline text-blue-600">
              swishstrokes.help@gmail.com
            </a>
          </p>
          <p className="mb-2 text-sm mt-5">We typically respond within 7 working days.</p>
        </div>
      </div>
    );
  }
  