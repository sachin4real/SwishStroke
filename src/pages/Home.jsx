import { motion } from "framer-motion";
import FeatureList from "../components/FeatureList";
import QrButton from "../components/buttons/QrButton";
import Button from "../components/buttons/Button";
import FeaturesGrid from "../components/grids/FeaturesGrid";
import HowItWorks from "../components/grids/HowItWorksGrid";
import TextAnimation from "../components/TextAnimation";
import FAQSection from "../components/FAQSection";
import MobileButton from "../components/buttons/MobileButton";
import FeaturesMobileGrid from "../components/grids/FeaturesMobileGrid";
import Navbar from "../components/common/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* ============ HERO ============ */}
      <section className="relative overflow-visible">
        {/* Watermarks (positioned exactly like the Next.js page) */}
        <img
          src="/images/Vector (1).png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[100px] opacity-100 -z-10 w-full max-w-[1000px]"
        />
        <img
          src="/images/Vector (2).png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 md:left-1/2 md:translate-x-[-50%] md:top-[210px] top-[140px] opacity-100 -z-10 w-full max-w-[600px]"
        />
        <img
          src="/images/Vector (3).png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 md:top-20 top-[60px] opacity-100 -z-10 w-full max-w-[200px]"
        />

        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h1
            className="md:text-8xl font-bold text-center mt-[60px] font-atkinson text-[48px]/11"
            style={{ fontFamily: "Atkinson Hyperlegible, Arial, sans-serif" }}
          >
            {"Relax with".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.6 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"Swish Strokes".split("").map((char, i) => (
              <motion.span
                key={i + 20}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06 }}
                viewport={{ once: true, amount: 0.6 }}
                className="text-[#9737ff]"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-center mt-10 text-white/80 md:text-[16px] text-[12px]"
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {
              "Sri Lanka's first all-in-one stress relief app. Swish Strokes helps you manage your \n mood, unwind with music, and express yourself through art-automatically guiding \n you to a calmer, happier you."
            }
          </motion.p>

          <FeatureList />
          <QrButton />
          <MobileButton />

          {/* Trust Note */}
          <div className="mt-8 text-sm text-center md:text-base">
            ⭐⭐⭐⭐⭐
            <p>Already trusted by 100+ Sri Lankans</p>
          </div>

          {/* Desktop mockup */}
          <motion.div
            className="hidden md:flex justify-center mt-[120px]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              initial={{ rotate: -2 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
            >
              <img
                src="/images/Frame 427321028.png"
                alt="App preview"
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Mobile mockups */}
          <div className="flex flex-wrap justify-center md:hidden mt-20">
            <div className="w-[22%]">
              <img
                src="/images/mockup/iMockup - iPhone 14 (2).png"
                alt="App Preview 1"
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <div className="w-[55%]">
              <img
                src="/images/mockup/iMockup - iPhone 14 (1).png"
                alt="App Preview 2"
                className="mx-auto w-[400px] max-w-full h-auto"
              />
            </div>
            <div className="w-[22%]">
              <img
                src="/images/mockup/iMockup - iPhone 15 (1).png"
                alt="App Preview 3"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>

          <Button />
        </div>
      </section>

      {/* ============ FEATURES GRIDS ============ */}
      <section className="max-w-[1200px] mx-auto px-4">
        <FeaturesGrid />
        <FeaturesMobileGrid />
      </section>

      {/* ============ TEXT BLOCK + IMAGE ============ */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div>
          {/* Mobile-only heading (below md) — word-by-word animation */}
          <motion.h1
            className="md:hidden text-4xl font-bold text-center mt-6 leading-tight font-atkinson"
            style={{ fontFamily: "Atkinson Hyperlegible, Arial, sans-serif" }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {/* helper variants for each word */}
            {[
              { line: ["Stop", "stressing", "over", "self-care"] }, // note the non-breaking hyphen U+2011
              { line: ["Let", "Swish", "Strokes"], highlight: [1, 2] },
              { line: ["do", "the", "heavy", "lifting"] },
            ].map((row, rIdx) => (
              <div key={rIdx} className="block">
                {row.line.map((word, wIdx) => (
                  <motion.span
                    key={`${rIdx}-${wIdx}`}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className={`inline-block whitespace-nowrap ${
                      row.highlight?.includes(wIdx) ? "text-[#9737ff]" : ""
                    }`}
                    style={{
                      marginRight:
                        wIdx === row.line.length - 1 ? 0 : "0.25em",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.h1>

          <motion.h1
            className="hidden md:block text-5xl md:text-6xl font-bold text-center md:text-left md:pl-[40px] mt-5 md:mt-20 font-atkinson"
            style={{ fontFamily: "Atkinson Hyperlegible, Arial, sans-serif" }}
          >
            {"Stop stressing over self-care".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"Let ".split("").map((char, i) => (
              <motion.span
                key={`let-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (35 + i) * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {"Swish".split("").map((char, i) => (
              <motion.span
                key={`swish-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (40 + i) * 0.06 }}
                className="text-[#9737ff]"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className="md:hidden" />
            {" Strokes".split("").map((char, i) => (
              <motion.span
                key={`swish2-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (40 + i) * 0.06 }}
                className="text-[#9737ff]"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {" do the heavy".split("").map((char, i) => (
              <motion.span
                key={`heavy-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (53 + i) * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            {"lifting".split("").map((char, i) => (
              <motion.span
                key={`lifting-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (65 + i) * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Right-aligned paragraph under the headline */}
          <div className="mt-10 md:mt-0 max-w-[1200px] mx-auto px-4 md:translate-x-[16px]">
            <motion.p
              className="text-[14px] md:text-[18px] text-center md:text-left md:max-w-[560px] md:ml-auto"
              style={{ whiteSpace: "pre-line" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            >
              {"It's easy to ignore your emotions.\nIt's hard to stay mindful when self-care feels like a chore."}
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center sm:w-[320px] md:w-full md:ml-0 -ml-3 mt-10 md:mt-10"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ rotate: -1 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="w-full"
            >
              <img
                src="/images/Frame 427321029.png"
                alt="Preview"
                className="imagemockup1 w-full max-w-[1072px] h-auto mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ TEXT + CTA STRIP ============ */}
      <section className="max-w-[1200px] mx-auto px-4">
        <TextAnimation />

        <div className="text-center mt-10 mx-auto md:text-[18px] text-[16px] font-inter">
          <motion.p
            className="text-[#9737ff]"
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {"We know taking care of your mental health\nisn't always easy."}
          </motion.p>

          <motion.p
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            {"That's why we built Swish Strokes—to make it simpler, more\nsoothing, and just one tap away."}
          </motion.p>

          <div className="flex justify-center w-full mt-20">
            <div
              className="flex text-center px-6 py-3 rounded-[2rem] border border-[#9737ff]/40 max-w-xs 
              transition-all duration-300 hover:border-[#9737ff] hover:shadow-[0_0_15px_rgba(151,55,255,0.5)]"
            >
              <a
                className="text-[#9737ff] hover:text-white transition-colors duration-300"
                href="#how"
              >
                And Here's How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS GRID ============ */}
      <section id="how" className="max-w-[1200px] mx-auto px-4">
        <HowItWorks />
      </section>

      {/* ============ PRIVACY SECTION ============ */}
      <section className="w-full mt-[72px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Panel */}
          <div className="bg-[#110028] w-full">
            <div className="hidden md:block">
              {/* Heading */}
              <motion.h1
                className="text-5xl md:text-6xl leading-[1.05] font-atkinson font-bold text-center md:text-left md:ps-10 md:pt-20 pt-10"
                style={{
                  fontFamily: "Atkinson Hyperlegible, Arial, sans-serif",
                }}
              >
                {("Let's Talk").split("").map((char, i) => (
                  <motion.span
                    key={`wellness-a-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-[#9737ff]"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br className="md:hidden" />
                {(" Wellness. ").split("").map((char, i) => (
                  <motion.span
                    key={`wellness-b-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: (15 + i) * 0.06 }}
                    className="text-[#9737ff]"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                {"Your Emotions Stay Yours.".split("").map((char, i) => (
                  <motion.span
                    key={`emotions-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: (25 + i) * 0.06 }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                {"Always.".split("").map((char, i) => (
                  <motion.span
                    key={`always-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: (55 + i) * 0.06 }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Mobile-only version */}
            <motion.h1
              className="md:hidden text-4xl font-bold text-center pt-10 leading-tight font-atkinson"
              style={{ fontFamily: "Atkinson Hyperlegible, Arial, sans-serif" }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {[
                { words: ["Let\u2019s", "Talk"], color: "text-[#9737ff]" },
                { words: ["Wellness."], color: "text-[#9737ff]" },
                { words: ["Your", "Emotions"] },
                { words: ["Stay", "Yours."] },
                { words: ["Always."] },
              ].map((row, rIdx) => (
                <div key={rIdx} className="block">
                  {row.words.map((word, wIdx) => (
                    <motion.span
                      key={`${rIdx}-${wIdx}`}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className={`inline-block whitespace-nowrap ${
                        row.color ?? ""
                      }`}
                      style={{
                        marginRight:
                          wIdx === row.words.length - 1 ? 0 : "0.25em",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.h1>

            {/* Purple divider (desktop); thin hr on mobile */}
            <div className="hidden md:block border-t border-[#9737ff] my-8" />
            <hr className="md:hidden border-[#9737ff]/50 max-w-[800px] mx-auto mt-[60px]" />

            {/* Two-column content */}
            <div className="flex flex-col md:flex-row w-full items-start  gap-[210px] max-w-[1150px] mx-auto p-6 text-white">
              {/* Left: Buttons */}
              <div className="order-2 md:order-1 flex flex-col gap-4 w/full md:w-auto text-base ml-0 md:ml-2 -mt-[65px] md:mt-0">
                <button className="bg-transparent border border-white/10 hover:bg-[#9737ff]/10 rounded-full px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer">
                  Calming & Reassuring
                </button>
                <button className="bg-transparent border border-white/10 hover:bg-[#9737ff]/10 rounded-full px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer">
                  Privacy Meets Peace
                </button>
                <button className="bg-transparent border border-white/10 hover:bg-[#9737ff]/10 rounded-full px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer">
                  Peace of Mind, Built In
                </button>
                <button className="bg-transparent border border-white/10 hover:bg-[#9737ff]/10 rounded-full px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer">
                  Calm in Every Click
                </button>
                <button className="bg-transparent border border-white/10 hover:bg-[#9737ff]/10 rounded-full px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer">
                  Gentle and Grounded
                </button>
              </div>

              {/* Right: Text */}
              <div className="order-1 md:order-2 w-full md:w-1/2">
                <motion.h2
                  className="text-[19px] font-bold mb-6 text-center md:text-left"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Your Peace of Mind Is Non-Negotiable.
                </motion.h2>

                <motion.p
                  className="text-white/80 mb-4 leading-relaxed text-sm md:text-base text-center md:text-left"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  We built Swish Strokes because, like you, we're tired of apps that overcomplicate
                  wellness—or worse, collect and misuse your personal reflections and emotional data.
                </motion.p>

                <motion.p
                  className="text-white/80 mb-4 leading-relaxed text-center md:text-left text-sm md:text-base"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                  We believe mental wellness should come with complete emotional safety.
                </motion.p>

                <motion.p
                  className="text-white/80 mb-4 leading-relaxed text-center md:text-left text-sm md:text-base"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                  That's why everything Swish Strokes does happens right on your phone.
                </motion.p>

                <motion.p
                  className="text-white/80 leading-relaxed text-center md:text-left text-sm md:text-base"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                >
                  Your mood entries, journal notes, music history, and artwork are never uploaded, tracked, or shared.
                </motion.p>
              </div>
            </div>

            {/* Mockup image */}
            <motion.div
              className="flex justify-center sm:w-[320px] md:ml-1 -ml-3 md:w-full mt-10"
              initial={{ opacity: 0, y: 28, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
                className="w-full"
              >
                <img
                  src="/images/mockuuups-iphone-mockup-on-multicolodred-background 1.png"
                  alt="mockup"
                  className="imagemockup2 w-full h-auto mx-auto rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div>
          <motion.h3
            className="md:text-6xl text-5xl font-bold text-center mt-[60px] font-atkinson"
            style={{ fontFamily: "Atkinson Hyperlegible, Arial, sans-serif" }}
          >
            {"Let's Clear ".split("").map((char, i) => (
              <motion.span
                key={`clear-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className="md:hidden" />
            {"Things Up".split("").map((char, i) => (
              <motion.span
                key={`thingsup-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: (12 + i) * 0.06 }}
                className="text-[#9737ff]"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h3>

          <motion.p
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="md:text-xl text-sm mt-10 text-center"
          >
            {"That's why we built Swish Strokes—to make it simpler, more\nsoothing, and just one tap away."}
          </motion.p>
        </div>

        <FAQSection />
      </section>
    </div>
  );
}
