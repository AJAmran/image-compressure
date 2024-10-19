/* eslint-disable react/prop-types */
const ImageCard = ({ file, originalSize, compressedSize }) => {
  const reduction = (
    ((originalSize - compressedSize) / originalSize) *
    100
  ).toFixed(2);

  return (
    <li className="p-4 border rounded-lg bg-gray-50 flex justify-between items-center space-x-4">
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
        className="text-indigo-600 hover:text-indigo-900 font-medium"
      >
        Download WebP
      </a>
    </li>
  );
};

export default ImageCard;
