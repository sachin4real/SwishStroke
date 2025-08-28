import { Link } from "react-router-dom";

export default function MobileButton() {
  return (
    <div className="mobile-only-button flex justify-center mt-5">
      {/* If you don't have a Tailwind config, replace w-90 with w-[90%] */}
      <div className="flex text-center px-6 py-6 p-3 rounded-2xl bg-[#9737FF] w-[90%] sm:w-auto">
        <Link to="/" className="text-white mx-auto">
          Try it for free
        </Link>
      </div>
    </div>
  );
}
