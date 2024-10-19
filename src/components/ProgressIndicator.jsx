import { motion } from "framer-motion";

const ProgressIndicator = () => (
    <div className="flex justify-center">
      <motion.svg
        className="animate-spin h-8 w-8 text-indigo-600"
        viewBox="0 0 24 24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </motion.svg>
    </div>
  );
export default ProgressIndicator;
