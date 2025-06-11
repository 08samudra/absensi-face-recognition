import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { saveAttendance } from "../utils/firestore";
import Toast from "../components/Toast";

function Absensi() {
  const webcamRef = useRef(null);
  const [status, setStatus] = useState("Belum memulai absensi");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleAbsensi = async () => {
    setLoading(true);
    setStatus("Mendeteksi wajah...");

    setTimeout(async () => {
      const fakeName = "Widia";
      const timestamp = new Date().toISOString();

      const success = await saveAttendance(fakeName, timestamp);
      setStatus(success ? `Absensi berhasil: ${fakeName}` : "Gagal menyimpan absensi");
      setLoading(false);

      setToastMessage(success ? `Absensi tercatat untuk ${fakeName}` : "Terjadi kesalahan saat menyimpan.");
      setToastType(success ? "success" : "error");
      setShowToast(true);
    }, 2000);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-100">
      <Toast show={showToast} message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />
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
          className="w-full bg-gradient-to-r from-red-600 to-black text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          {loading ? "Memproses absensi..." : "Mulai Absensi"}
        </button>
        <p className="mt-4 text-gray-700 text-center">{status}</p>
      </div>
    </div>
  );
}

export default Absensi;