import { useState, useRef, useEffect } from "react";
import { UploadCloud } from "lucide-react";

const UploadCv = () => {
  const [fileName, setFileName] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file) {
      setFileName(file.name);
      setIsUploaded(false);
      setUploadProgress(0);
      simulateUpload(); // Fake upload
    }
  };

  const handleFileSelect = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;

      if (progress >= 100) {
        progress = 100;
        setIsUploaded(true);
        clearInterval(interval);
      }
      setUploadProgress(Math.floor(progress));
    }, 300);
  };

  return (
    <div className="flex flex-col items-center rounded-2xl  justify-center min-h-screen bg-gray-100 px-4">
      <div
        className="w-full max-w-md p-6 border-2 border-dashed border-gray-400 rounded-2xl bg-white shadow-lg hover:border-blue-500 transition-all duration-200 cursor-pointer"
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <UploadCloud className="w-12 h-12 text-blue-500 mb-4" />
          <p className="text-gray-700 font-semibold text-lg">
            Drag & drop your resume here
          </p>
          <p className="text-gray-500 text-sm">or click to select a file</p>
          <p className="mt-3 text-sm text-gray-400">
            (PDF, DOC, DOCX formats accepted)
          </p>
        </div>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {fileName && (
        <div className="mt-4 w-full max-w-md">
          <div className="text-sm font-medium text-blue-700 mb-1">
            Uploading: {fileName}
          </div>
          <div className="w-full bg-blue-100 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {uploadProgress < 100
              ? `Uploading... ${uploadProgress}%`
              : "Upload complete!"}
          </div>
        </div>
      )}

      {isUploaded && (
        <button
          className="mt-6 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
          onClick={() => alert("Next Step")}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default UploadCv;
