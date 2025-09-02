import { useState } from "react";

export default function FeaturesGrid() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pc-only-items max-w-[1073px] mx-auto mt-10 px-4 lg:ml-6 cursor-pointer">
      {/* Desktop Layout (xl and above) */}
      <div className="hidden xl:grid grid-cols-3 gap-4">
        {/* Top Row */}
        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col h-[392px] w-[520px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-base mb-2">Mood Selection</h3>
          <p className="text-white/60 mb-4 text-sm">
            Select your mood right when you open Swish Strokes.
          </p>
          <div>
            <img
              src="/images/bento-img_mask-group.png"
              alt="Mood selection"
              className="object-cover max-w-[110%] -ml-6 mt-6"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col h-[392px] w-[260px] mx-44 transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-base mb-2">Personalized Music Recommendations</h3>
          <p className="text-white/60 mb-4 text-sm mt-1">
            Enjoy curated playlists based on how you're feeling.
          </p>
          <img
            src="/images/music-notes-stave-staff 1.png"
            alt="Music notes"
            className="object-contain mx-auto"
          />
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col h-[392px] w-[260px] ml-[88px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-base mb-2">Interactive Art & Coloring Canvas</h3>
          <p className="text-white/60 mb-4 text-sm">
            Express yourself creatively with a variety of artistic tools.
          </p>
          <img
            src="/images/bento-img → X38W7nUpNtIoWbphbwU4VmU28Y.svg.png"
            alt="Art canvas"
            className="object-contain -ml-6 mt-3 max-w-[122%]"
          />
        </div>

        {/* Bottom Row */}
        <div className="md:row-span-2 bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col h-[392px] w-[520px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/bento-img → b9Ul08A6CFtpK0OS9NJj30NTk.svg.png"
            alt="Mood trends"
            className="object-contain mx-auto mt-5"
          />
          <h3 className="text-base mb-2 mt-10">Mood Insight & Trends</h3>
          <p className="text-white/60 mb-4 text-sm">
            Gain insights into your emotional patterns over time.
          </p>
        </div>

        <div className="md:col-span-2 bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex h-[185px] w-[528px] ml-44 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/bento-img.png"
            alt="Trophy"
            className="object-contain max-w-[110%]"
          />
          <div>
            <h3 className="text-base mb-2">
              Community Challenges & Tournaments
            </h3>
            <p className="text-white/60 mb-4 text-sm">
              Engage in challenges with peers for shared growth.
            </p>
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col h-[185px] w-[260px] ml-44 transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-base mb-2">Built for Privacy</h3>
          <p className="text-white/60 mb-4 text-sm">
            All your personal data stays private and secure.
          </p>
          <img
            src="/images/Group 6969.png"
            alt="Privacy shield"
            className="object-contain mx-auto"
          />
        </div>

        <div
          className="rounded-xl p-6 flex flex-col h-[185px] bg-cover bg-center bg-no-repeat w-[260px] ml-[88px] transition-transform duration-300 hover:scale-[1.02]"
          style={{
            backgroundImage: `url(${
              isHovered
                ? "/images/bento-box-8.png"
                : "/images/bento-box-7.png"
            })`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Tablet Layout (lg to xl) */}
      <div className="hidden lg:grid xl:hidden grid-cols-2 gap-4">
        <div className="col-span-2 bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col min-h-[300px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">Mood Selection</h3>
          <p className="text-white/60 mb-4 text-sm">
            Select your mood right when you open Swish Strokes.
          </p>
          <div className="flex-1 flex items-end justify-center overflow-hidden">
            <img
              src="/images/bento-img_mask-group.png"
              alt="Mood selection"
              className="object-cover w-full max-w-[500px]"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col min-h-[300px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">
            Personalized Music Recommendations
          </h3>
          <p className="text-white/60 mb-4 text-sm">
            Enjoy curated playlists based on how you're feeling.
          </p>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/images/music-notes-stave-staff 1.png"
              alt="Music notes"
              className="object-contain max-w-[150px]"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col min-h-[300px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">
            Interactive Art & Coloring Canvas
          </h3>
          <p className="text-white/60 mb-4 text-sm">
            Express yourself creatively with a variety of artistic tools.
          </p>
          <div className="flex-1 flex items-end justify-center overflow-hidden">
            <img
              src="/images/bento-img → X38W7nUpNtIoWbphbwU4VmU28Y.svg.png"
              alt="Art canvas"
              className="object-contain w-full max-w-[200px]"
            />
          </div>
        </div>

        <div className="col-span-2 bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col min-h-[300px] transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex-1 flex items-start justify-center mb-4">
            <img
              src="/images/bento-img → b9Ul08A6CFtpK0OS9NJj30NTk.svg.png"
              alt="Mood trends"
              className="object-contain w-full max-w-[400px]"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Mood Insight & Trends</h3>
          <p className="text-white/60 text-sm">
            Gain insights into your emotional patterns over time.
          </p>
        </div>

        <div className="col-span-2 bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-row items-center gap-4 min-h-[150px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/bento-img.png"
            alt="Trophy"
            className="object-contain flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Community Challenges & Tournaments
            </h3>
            <p className="text-white/60 text-sm">
              Engage in challenges with peers for shared growth.
            </p>
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-6 flex flex-col justify-between min-h-[150px] transition-transform duration-300 hover:scale-[1.02]">
          <div>
            <h3 className="text-lg font-semibold mb-2">Built for Privacy</h3>
            <p className="text-white/60 text-sm">
              All your personal data stays private and secure.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <img
              src="/images/Group 6969.png"
              alt="Privacy shield"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col min-h-[150px] bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-[1.02]"
          style={{
            backgroundImage: `url(${
              isHovered
                ? "/images/bento-box-8.png"
                : "/images/bento-box-7.png"
            })`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Mobile Layout (below lg) */}
      <div className="grid lg:hidden grid-cols-1 gap-4">
        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col min-h-[250px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">Mood Selection</h3>
          <p className="text-white/60 mb-4 text-sm">
            Select your mood right when you open Swish Strokes.
          </p>
          <div className="flex-1 flex items-end justify-center overflow-hidden">
            <img
              src="/images/bento-img_mask-group.png"
              alt="Mood selection"
              className="object-cover w-full max-w-[300px]"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col min-h-[250px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">
            Personalized Music Recommendations
          </h3>
          <p className="text-white/60 mb-4 text-sm">
            Enjoy curated playlists based on how you're feeling.
          </p>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/images/music-notes-stave-staff 1.png"
              alt="Music notes"
              className="object-contain max-w-[150px]"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col min-h-[250px] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-semibold mb-2">
            Interactive Art & Coloring Canvas
          </h3>
          <p className="text-white/60 mb-4 text-sm">
            Express yourself creatively with a variety of artistic tools.
          </p>
          <div className="flex-1 flex items-end justify-center overflow-hidden">
            <img
              src="/images/bento-img → X38W7nUpNtIoWbphbwU4VmU28Y.svg.png"
              alt="Art canvas"
              className="object-contain w-full max-w-[200px]"
            />
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col min-h-[250px] transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex-1 flex items-start justify-center mb-4">
            <img
              src="/images/bento-img → b9Ul08A6CFtpK0OS9NJj30NTk.svg.png"
              alt="Mood trends"
              className="object-contain w-full max-w-[250px]"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Mood Insight & Trends</h3>
          <p className="text-white/60 text-sm">
            Gain insights into your emotional patterns over time.
          </p>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 min-h-[150px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/bento-img.png"
            alt="Trophy"
            className="object-contain flex-shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-2">
              Community Challenges & Tournaments
            </h3>
            <p className="text-white/60 text-sm">
              Engage in challenges with peers for shared growth.
            </p>
          </div>
        </div>

        <div className="bg-white/5 hover:bg-stone-300/20 rounded-xl p-4 flex flex-col justify-between min-h-[150px] transition-transform duration-300 hover:scale-[1.02]">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Built for Privacy</h3>
            <p className="text-white/60 text-sm">
              All your personal data stays private and secure.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <img
              src="/images/Group 6969.png"
              alt="Privacy shield"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="rounded-xl p-4 flex flex-col min-h-[150px] bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-[1.02]"
          style={{
            backgroundImage: `url(${
              isHovered
                ? "/images/bento-box-8.png"
                : "/images/bento-box-7.png"
            })`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
