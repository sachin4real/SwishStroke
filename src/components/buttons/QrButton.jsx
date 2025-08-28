import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function QrButton() {
  return (
    <motion.div
      className="pc-only-items flex justify-center w-full mt-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card hover effect */}
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 25px rgba(151, 55, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex items-center rounded-lg border border-[#9737ff]/40 max-w-[361px] w-full px-2 py-3 bg-[#06142a] cursor-pointer"
      >
        <div className="flex flex-col justify-center flex-1 mx-5">
          <h1 className="text-white font-bold text-xl font-poppins mb-1">
            Try it for free
          </h1>
          <p className="text-white/60 text-base font-poppins">
            We're on iOS & Android
          </p>
        </div>

        <Link to="/">
          {/* QR hover effect */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <img
              src="/images/qr-code.png"
              alt="QR"
              width={80}
              height={80}
              className="object-cover rounded-lg bg-white/0"
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
