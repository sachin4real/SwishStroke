export default function GridHowItWorksmobile() {
  return (
    <div
      id="features"
      className="flex flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 lg:mt-12 lg:mb-12 max-w-7xl mx-auto mobile-only-button"
    >
      {/* Mood Selection */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/tabler_mood-smile.png"
            alt="Mood"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Mood Selection</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Select your mood right when you open Swish Strokes.
        </p>
      </div>

      {/* Personalized Music Recommendations */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/gg_profile (2).png"
            alt="Music"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">
            Personalized Music Recommendations
          </h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Enjoy curated playlists based on how you're feeling.
        </p>
      </div>

      {/* Interactive Art & Coloring Canvas */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/pepicons-pencil_paint-pallet.png"
            alt="Art"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Interactive Art & Coloring Canvas</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Express yourself creatively with a variety of artistic tools.
        </p>
      </div>

      {/* Mood Insight & Trends */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/SVG.png"
            alt="Trends"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Mood Insight & Trends</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Gain insights into your emotional patterns over time.
        </p>
      </div>

      {/* Community Challenges & Tournaments */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/pepicons-pop_trophy.png"
            alt="Community"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Community Challenges & Tournaments</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Engage in challenges with peers for shared growth.
        </p>
      </div>

      {/* Built for Privacy */}
      <div className="bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/Grid1mobile/majesticons_lock-line.png"
            alt="Privacy"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Built for Privacy</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          All your personal data stays private and secure.
        </p>
      </div>
    </div>
  );
}
