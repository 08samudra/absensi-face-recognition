import { useEffect, useState } from "react";
import { getAttendanceList } from "../utils/firestore";

function Dashboard() {
  const [data, setData] = useState([]);

  // Ambil data absensi dari Firestore saat halaman dibuka
  useEffect(() => {
    getAttendanceList().then(setData);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard Kehadiran</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">Nama</th>
                <th className="py-2 px-4">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-4 px-4 text-center text-gray-500">
                    Belum ada data absensi
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
