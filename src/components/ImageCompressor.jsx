import { useState } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import ImageUpload from "./ImageUpload";
import ProgressIndicator from "./ProgressIndicator";
import ImageCard from "./ImageCard";

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
        className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Image Compressor
      </motion.h2>
      <motion.h3
        className="text-lg md:text-xl font-semibold text-gray-200 mb-1 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Compress Your Images Effortlessly
      </motion.h3>
      <motion.p
        className="text-sm md:text-base text-gray-300 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Reduce image file sizes without losing quality. Upload multiple images
        and get them in web-friendly formats!
      </motion.p>

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
