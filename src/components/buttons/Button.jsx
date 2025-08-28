import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div id="features" className="flex justify-center w-full mt-20">
      <div
        className="flex text-center px-6 py-3 rounded-[2rem] border border-[#9737ff]/40 max-w-xs
        transition-all duration-300 hover:border-[#9737ff] hover:shadow-[0_0_15px_rgba(151,55,255,0.5)]"
      >
        <Link
          to="/" 
          className="text-[#9737ff] hover:text-white transition-colors duration-300"
        >
          Built by Sri Lankans, for Global
        </Link>
      </div>
    </div>
  );
}
