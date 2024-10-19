import { motion } from "framer-motion";
const ImageUpload = ({ onChange }) => (
  <motion.div
    className="mb-6 flex justify-center md:justify-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <label className="block text-base md:text-lg font-medium text-gray-100 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-3 md:p-2 lg:p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
      Upload Your Images
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onChange}
        className="hidden"
      />
    </label>
  </motion.div>
);

export default ImageUpload;
