import Webcam from "react-webcam";
import { useRef, useState } from "react";

function Absensi() {
  const webcamRef = useRef(null);
  const [status, setStatus] = useState("Belum memulai absensi");

  const handleAbsensi = () => {
    setStatus("Mendeteksi wajah...");
    setTimeout(() => {
      setStatus("Absensi berhasil: Widia (09:12)");
    }, 2000);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Halaman Absensi</h2>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          className="rounded-lg shadow-md w-full mb-4"
          style={{ transform: "scaleX(-1)" }}
        />
        <button
          onClick={handleAbsensi}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Mulai Absensi
        </button>
        <p className="mt-4 text-gray-700 text-center">{status}</p>
      </div>
    </div>
  );
}

export default Absensi;
