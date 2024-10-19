// eslint-disable-next-line react/prop-types
const ImageUpload = ({ onChange }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700">
      Upload your images
    </label>
    <input
      type="file"
      accept="image/*"
      multiple
      onChange={onChange}
      className="block w-full text-sm text-gray-500 mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
    />
  </div>
);

export default ImageUpload;
