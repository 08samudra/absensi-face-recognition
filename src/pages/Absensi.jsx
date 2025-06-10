import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { saveAttendance } from "../utils/firestore";
import Toast from "../components/Toast";

function Absensi() {
  const webcamRef = useRef(null); 
  const [status, setStatus] = useState("Belum memulai absensi"); 
  const [loading, setLoading] = useState(false); 
  const [toast, setToast] = useState(null);

  // Fungsi untuk simulasi absensi
  const handleAbsensi = async () => {
    setLoading(true);
    setStatus("Mendeteksi wajah...");

    setTimeout(async () => {
      const fakeName = "Widia";
      const timestamp = new Date().toISOString(); 

      const success = await saveAttendance(fakeName, timestamp);
      setStatus(success ? `Absensi berhasil: ${fakeName}` : "Gagal menyimpan absensi");
      setLoading(false);

      setToast({
        message: success
          ? `Absensi tercatat untuk ${fakeName}`
          : "Terjadi kesalahan saat menyimpan.",
        type: success ? "success" : "error",
      });
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

        {/* Tombol absensi */}
        <button
          onClick={handleAbsensi}
          disabled={loading}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Memproses..." : "Mulai Absensi"}
        </button>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        {/* Status absensi */}
        <p className="mt-4 text-gray-700 text-center">{status}</p>
      </div>
    </div>
  );
}

export default Absensi;
