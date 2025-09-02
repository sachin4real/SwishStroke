import { motion } from "framer-motion";

export default function HowItWorks() {
  // Shared classes
  const cardBase =
    "bg-white/5 rounded-2xl border border-white/10 px-6 py-4 motion-safe:transition-all motion-safe:duration-300";
  const cardHover =
    "hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(151,55,255,0.15)] hover:scale-[1.01]";

  const innerCardBase =
    "bg-black/40 rounded-2xl motion-safe:transition-all motion-safe:duration-300";
  const innerCardHover =
    "hover:bg-black/60 hover:shadow-[0_8px_24px_rgba(151,55,255,0.15)] hover:scale-[1.01]";

  const pillBase =
    "text-white/90 flex text-center justify-center px-6 py-3 rounded-xl border border-[#9737ff] max-w-xs motion-safe:transition-all motion-safe:duration-300";
  const pillActive = "bg-[#6903F999]";
  const pillHover =
    "hover:shadow-[0_0_15px_rgba(151,55,255,0.4)] hover:scale-[1.02]";

  const imgHover =
    "motion-safe:transition-transform motion-safe:duration-300 hover:scale-[1.02]";

  const moodImgHover =
    "motion-safe:transition-transform motion-safe:duration-300 hover:scale-110 hover:rotate-3";

  return (
    <div
      id="how"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1073px] mx-auto mt-20 text-sm cursor-pointer"
    >
      {/* Left Panel (Top Row) */}
      <div className={`${cardBase} ${cardHover}`}>
        <h3 className="text-[16px] ml-5 mb-4">One-Time Setup</h3>
        <p className="text-white/60 text-sm">
          Select your level and mood once—then let the app guide your wellness
          journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mt-5">
          {/* Left Panel (inner Row) */}
          <div className={`${innerCardBase} ${innerCardHover} p-4 text-sm`}>
            <img
              src="/images/gg_profile.png"
              alt="profile"
              width={43}
              height={43}
              className={imgHover}
            />
            <p className="text-[#9737ff] mt-2">
              Create your account and log in.
            </p>
            <p className="text-white/80 mt-3 text-[12px]">
              It’s quick, secure, and only takes a moment.
              <br />
              You’re all set to begin your wellness journey!
            </p>
          </div>

          {/* Right Panel (inner Row) */}
          <div className={`${innerCardBase} ${innerCardHover} p-6 text-sm`}>
            <p className="text-[#9737ff]">Select Level</p>
            <div className="grid grid-cols-1 md:grid-rows-3 gap-2 mt-2">
              <p className={`${pillBase} ${pillActive} ${pillHover}`}>
                Beginner
              </p>
              <p className={`${pillBase} ${pillHover}`}>Intermediate</p>
              <p className={`${pillBase} ${pillHover}`}>Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Top Row) */}
      <div className={`${cardBase} ${cardHover}`}>
        <h3 className="text-[16px] mb-4 ml-6">
          One-Ding! You Set the MoodTime Setup
        </h3>
        <p className="text-white/60">
          Every time you check in with how you feel, Swish Strokes listens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mt-10">
          {/* Left Panel (inner Row) */}
          <div className={`${innerCardBase} ${innerCardHover} p-6 text-sm`}>
            <p className="text-[#9737ff]">Choose Mood</p>
            <div className="grid grid-cols-2 mt-5 gap-3 ml-4">
              <img
                src="/images/Frame 427321035.png"
                alt="moods"
                width={65}
                height={65}
                className={moodImgHover}
              />
              <img
                src="/images/Frame 427321036 (1).png"
                alt="moods"
                width={65}
                height={65}
                className={`object-contain ${moodImgHover}`}
              />
              <img
                src="/images/Frame 427321037.png"
                alt="moods"
                width={65}
                height={65}
                className={`object-contain ${moodImgHover}`}
              />
              <img
                src="/images/Frame 427321038.png"
                alt="moods"
                width={65}
                height={65}
                className={`object-contain ${moodImgHover}`}
              />
            </div>
          </div>

          {/* Right Panel (inner Row) */}
          <div className={`${innerCardBase} ${innerCardHover} p-5 text-sm`}>
            <img
              src="/images/gg_profile (1).png"
              alt="profile"
              width={43}
              height={43}
              className={imgHover}
            />
            <p className="text-[#9737ff] mt-2">
              Choose your vibe with mood-based music.
            </p>
            <p className="text-white/80 mt-3 text-[12px]">
              Pick a track that matches how you feel.
              <br />
              You're all set to press play! 🎵
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Panel - Full Width */}
      <div className={`${cardBase} ${innerCardHover} md:col-span-2`}>
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-2 text-white">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2">
            <div className={`${innerCardBase} bg-white/0 hover:bg-black/50 rounded-xl p-4 mb-4 motion-safe:transition-colors`}>
              <div className="flex items-center mb-2">
                <span className="text-base text-[#9737ff] mr-2">🧘‍♂️</span>
                <h3 className="text-base">Calm & Mindful</h3>
              </div>
              <p className="text-white/60">
                Each time you select a mood, Swish Strokes gently tunes your
                world—your music, your colors, your experience—all in harmony
                with you.
              </p>
            </div>

            <div className={`${innerCardBase} bg-white/0 hover:bg-black/50 rounded-xl p-4 mb-4 motion-safe:transition-colors`}>
              <div className="flex items-center mb-2">
                <span className="text-base text-[#9737ff] mr-2">🎨</span>
                <h3 className="text-base">Creative & Expressive</h3>
              </div>
              <p className="text-white/60">
                Whether you're feeling relaxed or energetic, your mood unlocks a
                personalized flow of art, sound, and calm.
              </p>
            </div>

            <div className={`${innerCardBase} bg-white/0 hover:bg-black/50 rounded-xl p-4 mb-4 motion-safe:transition-colors`}>
              <div className="flex items-center mb-2">
                <span className="text-base text-[#9737ff] mr-2">🧠</span>
                <h3 className="text-base">Insightful & Reflective</h3>
              </div>
              <p className="text-white/60">
                That one tap is more than a mood it's the start of clarity,
                expression, and emotional balance. Swish Strokes takes it from
                there.
              </p>
            </div>

            <div className={`${innerCardBase} bg-white/0 hover:bg-black/50 rounded-xl p-4 mb-4 motion-safe:transition-colors`}>
              <div className="flex items-center mb-2">
                <span className="text-base text-[#9737ff] mr-2">🎵</span>
                <h3 className="text-base">Musical & Playful</h3>
              </div>
              <p className="text-white/60">
                You choose how you feel—Swish Strokes picks the perfect playlist
                and sets the creative moodboard in motion.
              </p>
            </div>

            <div className={`${innerCardBase} bg-white/0 hover:bg-black/50 rounded-xl p-4 motion-safe:transition-colors`}>
              <div className="flex items-center mb-2">
                <span className="text-base text-[#9737ff] mr-2">🔐</span>
                <h3 className="text-base">Minimal & Clean</h3>
              </div>
              <p className="text-white/60">
                Mood selected.
                <br />
                Experience tailored.
                <br />
                You're in control.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            className="hidden md:flex gap-4 justify-center md:mt-[120px]"
            initial={{ opacity: 0, y: 24, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {/* Animate wrapper only */}
            <motion.div
              className="hidden md:block"
              initial={{ rotate: -1.5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
            >
              <img
                src="/images/Group 6974.png"
                alt="preview"
                width={520}
                height={415}
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>

          <div className="w-full flex justify-center md:hidden mt-4">
            <img
              src="/images/Group 6974.png"
              alt="preview"
              width={315}
              height={252}
              className="w-full max-w-[215px] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
