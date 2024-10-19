# Image Compressor

## Overview

Image Compressor is a powerful web application that allows users to effortlessly compress multiple images while maintaining quality. The application provides a simple and intuitive interface, enabling users to upload, preview, and download their images in a web-friendly format. This tool is designed for photographers, designers, and anyone who needs to optimize images for web use.

## Features

- **Multiple Image Upload**: Users can upload multiple images at once for compression.
- **Image Compression**: Reduces image file sizes without significant quality loss, supporting formats such as JPG, PNG, and WEBP.
- **Preview of Compressed Images**: Users can preview their images before downloading.
- **Download Options**: Individual downloads for each compressed image and a bulk download option in a ZIP file.
- **Responsive Design**: The application is fully responsive and works seamlessly on mobile and desktop devices.
- **Error Handling**: Displays appropriate error messages for a better user experience.
- **Progress Indicator**: Shows a loading spinner while images are being processed.
- **Clear All Option**: Allows users to reset the image list quickly.

## Technologies Used

- **Frontend**:

  - React: A JavaScript library for building user interfaces.
  - TypeScript: A superset of JavaScript that provides static typing.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.
  - Framer Motion: A library for animations and transitions in React applications.
  - JSZip: A library for creating and managing ZIP files in JavaScript.
  - Browser Image Compression: A library for client-side image compression.

- **Deployment**:
  - Deployed using Vercel or Netlify for easy hosting and continuous deployment.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AJAmran/image-compressure.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-compressor
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`.

## Usage

1. Click the "Upload Your Images" button to select images from your device.
2. Wait for the images to be compressed. A progress spinner will indicate the processing status.
3. Once the compression is complete, preview your images and their sizes.
4. Download individual images by clicking the "Download" button next to each image, or click "Download All" to get a ZIP file of all compressed images.
5. Use the "Clear All" button to reset the image list.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## Acknowledgements

- [React](https://reactjs.org/) - For building the user interface.
- [Tailwind CSS](https://tailwindcss.com/) - For styling the application.
- [Framer Motion](https://www.framer.com/docs/) - For animations and transitions.
- [JSZip](https://stuk.github.io/jszip/) - For ZIP file handling.
- [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression) - For image compression.

## Contact

For inquiries or feedback, please reach out to:

- **Name**: Md. Amran Hossen
- **Email**: mdamranhossen77@gmail.com
- **GitHub**: [your-username](https://github.com/AJAmran/image-compressure.git)

```