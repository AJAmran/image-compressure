import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

// Reusable Image Upload Component
const ImageUpload = ({ onChange }) => (
  <motion.div
    className="mb-6 flex justify-center md:justify-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <label className="block text-base md:text-lg font-medium text-gray-100 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-3 md:p-4 lg:p-5 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
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

// Reusable Image Card Component
const ImageCard = ({ file, originalSize, compressedSize }) => {
  const reduction = (
    ((originalSize - compressedSize) / originalSize) *
    100
  ).toFixed(2);

  return (
    <motion.li
      className="p-4 border rounded-lg bg-white shadow-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <img
          src={URL.createObjectURL(file)}
          alt="compressed preview"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <p className="text-sm text-gray-800 font-medium">{file.name}</p>
          <p className="text-xs text-gray-500">
            Original: {(originalSize / 1024).toFixed(2)} KB, Compressed:{" "}
            {(compressedSize / 1024).toFixed(2)} KB
          </p>
          <p className="text-xs text-green-600 font-medium">
            {reduction}% size reduction
          </p>
        </div>
      </div>
      <a
        href={URL.createObjectURL(file)}
        download={`compressed-${file.name}.webp`}
        className="text-indigo-600 hover:text-indigo-900 font-medium shadow px-2 py-1 rounded-md"
      >
        Download
      </a>
    </motion.li>
  );
};

// Progress Indicator Component
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

// Image Compressor Component
const ImageCompressor = () => {
  const [compressedFiles, setCompressedFiles] = useState([]);
  const [originalSizes, setOriginalSizes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageCompression = async (event) => {
    try {
      const files = event.target.files;
      if (!files) return;

      setLoading(true);
      setCompressedFiles([]);
      setOriginalSizes([]);
      let compressedArray = [];
      let sizesArray = [];

      for (let i = 0; i < files.length; i++) {
        const imageFile = files[i];
        sizesArray.push(imageFile.size);

        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          fileType: "image/webp",
        };

        const compressedImage = await imageCompression(imageFile, options);
        compressedArray.push(compressedImage);
      }

      setCompressedFiles(compressedArray);
      setOriginalSizes(sizesArray);
      setError(null);
    } catch (error) {
      setError("Failed to compress images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = () => {
    setCompressedFiles([]);
    setOriginalSizes([]);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    compressedFiles.forEach((file) => {
      zip.file(`compressed-${file.name}.webp`, file);
    });
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "compressed-images.zip");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600 shadow-xl rounded-lg mt-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Image Compressor
      </motion.h2>

      <ImageUpload onChange={handleImageCompression} />

      {loading && <ProgressIndicator />}

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {compressedFiles.length > 0 && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-6">
            Compressed Images
          </h3>
          <ul className="space-y-6">
            {compressedFiles.map((file, index) => (
              <ImageCard
                key={index}
                file={file}
                originalSize={originalSizes[index]}
                compressedSize={file.size}
              />
            ))}
          </ul>

          <div className="mt-10 flex justify-between">
            <button
              onClick={handleClearAll}
              className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-lg transition-all duration-300"
            >
              Clear All
            </button>
            <button
              onClick={handleDownloadAll}
              className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-lg transition-all duration-300"
            >
              Download All
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageCompressor;
