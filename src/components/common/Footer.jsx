import { Link as RouterLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";
import MobileButton from "../buttons/MobileButton";


function SmartLink({ href = "", className = "", children, ...rest }) {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <RouterLink to={href} className={className} {...rest}>
        {children}
      </RouterLink>
    );
  }
  const resolved = href === "" ? "/" : href;
  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );
}

export default function Footer() {
  const quickLinksLine1 = [
    { label: "Home", href: "" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Our Mission", href: "/mission" },
    { label: "FAQ", href: "#FAQ" },
  ];

  const quickLinksLine2 = [
    { label: "Privacy Policy", href: "/PrivacyPolicy" },
    { label: "Terms of Use", href: "/TermsOfUse" },
  ];

  return (
    <footer
      id="footer"
      className="text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 font-sans bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===================== Mobile (xs–sm) ===================== */}
        <div className="block md:hidden space-y-4 sm:space-y-6">
          {/* Left panel */}
          <div
            className="rounded-xl p-4 sm:p-6 text-white bg-cover bg-center h-56 sm:h-64 mx-auto w-full max-w-sm"
            style={{ backgroundImage: "url('/images/Background.png')" }}
          >
            <div className="flex flex-col space-y-3 sm:space-y-4 h-full">
              <img
                className="mx-auto"
                src="/images/Group (1).png"
                alt="Logo"
                width={120}
                height={46}
              />
              <div className="mt-auto">
                <p className="text-white/80 text-xs sm:text-sm">Name</p>
                <a
                  href="/"
                  className="text-white/80 underline underline-offset-1 text-xs sm:text-sm break-all"
                >
                  example@gmail.com
                </a>
              </div>
              <div className="flex gap-2 justify-center">
                <img
                  src="/images/Link - call-block (1).png"
                  alt="Email Icon"
                  width={28}
                  height={28}
                  className="sm:w-8 sm:h-8"
                />
              </div>
            </div>
          </div>

          {/* Middle panel */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 mx-auto w-full max-w-sm">
            <h5 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center text-white/40">
              Quick Links
            </h5>
            <div className="space-y-4 sm:space-y-6">
              <ul className="flex flex-col gap-2 sm:gap-3 text-center">
                {quickLinksLine1.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      className="text-sm sm:text-base underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-2 sm:gap-3 text-center">
                {quickLinksLine2.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      className="text-sm sm:text-base underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 justify-center mt-4">
                <IoLogoFacebook className="text-blue-600 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                <IoLogoLinkedin className="text-blue-500 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                <AiFillInstagram className="text-[#C655D8] -mt-[1px] w-7 h-7 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 mx-auto w-full max-w-sm">
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-white font-bold text-lg sm:text-xl">
                Get The App
              </h1>
              <p className="text-white/60 text-xs sm:text-sm">
                No ads, No noise just calm.
              </p>

              <div className="flex gap-2 justify-center">
                <img
                  src="/images/Ios-icon.png"
                  alt="iOS"
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
                <img
                  src="/images/Android-icon → SVG.png"
                  alt="Android"
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
              </div>
              <MobileButton />
            </div>
          </div>

          {/* Bottom panel */}
          <div className="bg-white/5 rounded-xl p-3 sm:p-4 mx-auto w-full max-w-sm text-center">
            <h4 className="text-xs sm:text-sm font-bold">
              © 2025 <span className="text-[#9737ff]">Swish Strokes.</span> All
              rights reserved
            </h4>
            <p className="text-white/40 text-xs mt-2">
              Registered company: xxxxxx LTD / Company Id: xxxxxxx
            </p>
          </div>
        </div>

        {/* ===================== Tablet (md–lg) ===================== */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Left */}
            <div
              className="rounded-xl p-6 text-white bg-cover bg-center h-72 md:h-80"
              style={{ backgroundImage: "url('/images/Background.png')" }}
            >
              <div className="flex flex-col space-y-4 h-full">
                <img
                  className="mt-4 mx-auto"
                  src="/images/Group (1).png"
                  alt="Logo"
                  width={135}
                  height={52}
                />
                <div className="mt-auto mb-8">
                  <p className="text-white/80 text-center md:text-left">
                    Name
                  </p>
                  <a
                    href="/"
                    className="text-white/80 underline underline-offset-1 block text-center md:text-left"
                  >
                    example@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 justify-center">
                  <img
                    src="/images/Link - call-block (1).png"
                    alt="Email Icon"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white/5 rounded-xl p-6 h-72 md:h-80 flex flex-col">
              <h1 className="text-white font-bold text-xl mb-4 text-center">
                Get The App
              </h1>
              <p className="text-white/60 text-sm text-center mb-4 md:mb-6">
                No ads, No noise just calm.
              </p>

              <div className="flex justify-center mb-4 md:mb-6 flex-1 items-center">
                <a href="/">
                  <img
                    src="/images/qr-code.png"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="cursor-pointer"
                  />
                </a>
              </div>

              <div className="mt-auto">
                <div className="flex gap-2 justify-center mb-4">
                  <img
                    src="/images/Ios-icon.png"
                    alt="iOS"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <img
                    src="/images/Android-icon → SVG.png"
                    alt="Android"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
                <MobileButton />
              </div>
            </div>

            {/* Links row */}
            <div className="col-span-1 md:col-span-2 bg-white/5 rounded-xl p-4 md:p-6">
              <h5 className="text-xl font-bold mb-4 md:mb-6 text-center text-white/40">
                Quick Links
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-8 max-w-xs mx-auto">
                <ul className="flex flex-col gap-3 text-center">
                  {quickLinksLine1.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        className="underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3 text-center">
                  {quickLinksLine2.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        className="underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 justify-center mt-4 md:mt-6">
                <IoLogoFacebook className="text-blue-600 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                <IoLogoLinkedin className="text-blue-500 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                <AiFillInstagram className="text-[#C655D8] -mt-[1px] w-7 h-7 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
              </div>
            </div>

            {/* Bottom */}
            <div className="col-span-1 md:col-span-2 bg-white/5 rounded-xl p-4 md:p-6 text-center">
              <h4 className="text-sm md:text-base font-bold">
                © 2025 <span className="text-[#9737ff]">Swish Strokes.</span>{" "}
                All rights reserved
              </h4>
              <p className="text-white/40 text-xs md:text-sm mt-2">
                Registered company: xxxxxx LTD / Company Id: xxxxxxx
              </p>
            </div>
          </div>
        </div>

        {/* ===================== Desktop (lg+) ===================== */}
        <div className="hidden lg:block">
          {/* Use fixed row heights like the Next.js version */}
          <div className="grid grid-cols-[1fr_2fr_1fr] grid-rows-[280px_193px] gap-4 xl:gap-6 max-w-6xl mx-auto">
            {/* Left (spans both rows) */}
            <div
              className="row-span-2 rounded-xl p-4 xl:p-6 text-white bg-cover bg-center"
              style={{ backgroundImage: "url('/images/Background.png')" }}
            >
              <div className="flex flex-col space-y-4 h-full">
                <img
                  className="mt-4 mx-auto"
                  src="/images/Group (1).png"
                  alt="Logo"
                  width={135}
                  height={52}
                />
                <div className="mt-auto mb-6 xl:mb-8">
                  <p className="text-white/80 text-sm xl:text-base">Name</p>
                  <a
                    href="/"
                    className="text-white/80 underline underline-offset-1 text-sm xl:text-base"
                  >
                    example@gmail.com
                  </a>
                </div>
                <div className="flex gap-2">
                  <img
                    src="/images/Link - call-block (1).png"
                    alt="Email Icon"
                    width={32}
                    height={32}
                    className="hover:scale-[1.30] hover:brightness-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Middle (row 1, col 2) */}
            <div className="bg-white/5 rounded-xl p-4 xl:p-6">
              <h5 className="text-lg xl:text-xl font-bold mb-4 xl:mb-6 text-white/40">
                Quick Links
              </h5>
              <div className="grid grid-cols-2 gap-x-4 xl:gap-x-8 ml-4 xl:ml-8">
                <ul className="flex flex-col gap-2 xl:gap-3">
                  {quickLinksLine1.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        className="text-sm xl:text-base underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-2 xl:gap-3">
                  {quickLinksLine2.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        className="text-sm xl:text-base underline underline-offset-4 hover:text-[#9737ff] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                  <li className="mt-3 xl:mt-4">
                    <div className="flex gap-2">
                      <IoLogoFacebook className="text-blue-600 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                      <IoLogoLinkedin className="text-blue-500 w-6 h-6 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                      <AiFillInstagram className="text-[#C655D8] -mt-[1px] w-7 h-7 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right (row 1, col 3) */}
            <div className="bg-white/5 rounded-xl p-4 xl:p-6">
              <div className="flex items-start gap-2 xl:gap-4 mb-4 xl:mb-6">
                <div className="flex-1">
                  <h1 className="text-white font-bold text-lg xl:text-xl mb-2 mt-10">
                    Get The App
                  </h1>
                  <p className="text-white/60 text-xs xl:text-sm">
                    No ads, No noise just calm.
                  </p>
                </div>
                <a href="/">
                  <img
                    src="/images/qr-code.png"
                    alt="QR Code"
                    width={100}
                    height={100}
                    className="cursor-pointer flex-shrink-0 xl:w-[100px] xl:h-[100px] mt-10 transition-transform duration-300 hover:scale-[1.30] hover:brightness-110"
                  />
                </a>
              </div>

              <div className="flex gap-2 mb-3 xl:mb-4">
                <img
                  src="/images/Ios-icon.png"
                  alt="iOS"
                  width={24}
                  height={24}
                  className="transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer"
                />
                <img
                  src="/images/Android-icon → SVG.png"
                  alt="Android"
                  width={24}
                  height={24}
                  className="transition-transform duration-300 hover:scale-[1.30] hover:brightness-110 cursor-pointer"
                />
              </div>

              {/* Keep desktop tidy — only show CTA button on smaller screens if desired */}
              <div className="md:hidden">
                <MobileButton />
              </div>
            </div>

            {/* Bottom (row 2, col 2) */}
            <div className="bg-white/5 rounded-xl p-4 xl:p-6 text-center flex flex-col justify-center">
              <h4 className="text-sm xl:text-base font-bold">
                © 2025 <span className="text-[#9737ff]">Swish Strokes.</span>{" "}
                All rights reserved
              </h4>
              <p className="text-white/40 text-xs xl:text-sm mt-2">
                Registered company: xxxxxx LTD / Company Id: xxxxxxx
              </p>
            </div>

            {/* Image panel (row 2, col 3) */}
            <div
              className="bg-white/5 rounded-xl p-4 xl:p-6 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/bento-box-4.png')" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
