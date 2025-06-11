import { useEffect, useState } from "react";
import { getAttendanceList } from "../utils/firestore";
import { CalendarDays, UserSearch } from "lucide-react";

function formatTime(timestamp) {
  if (!timestamp) return "-";
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(timestamp) {
  if (!timestamp) return "-";
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}

function Dashboard() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    getAttendanceList().then((res) => {
      setData(res);
    });
  }, []);

  const filteredData = data.filter((item) => {
    const matchName = item.name.toLowerCase().includes(searchName.toLowerCase());
    const itemDate = new Date(item.timestamp).toISOString().split("T")[0];
    const withinRange =
      (!startDate || itemDate >= startDate) &&
      (!endDate || itemDate <= endDate);
    return matchName && withinRange;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
     <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center mx-auto">
      Dashboard Kehadiran
    </h1>

      {/* Search Container */}
      <div className="w-full max-w-5xl mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full md:w-[60%]">
          <UserSearch className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Cari nama..."
            className="flex-1 outline-none text-sm"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        {/* Tanggal */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-lg shadow px-3 py-1">
            <CalendarDays className="text-gray-400 mr-2" size={16} />
            <input
              type="date"
              value={startDate}
              className="outline-none text-sm"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <span className="text-gray-600">to</span>
          <div className="flex items-center bg-white rounded-lg shadow px-3 py-1">
            <CalendarDays className="text-gray-400 mr-2" size={16} />
            <input
              type="date"
              value={endDate}
              className="outline-none text-sm"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-white w-full max-w-[1050px] mx-auto">
        <table className="w-full bg-white shadow-xl rounded-2xl text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-gradient-to-r from-red-700 to-black text-white text-center">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Waktu</th>
              <th className="py-3 px-4">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Tidak ada data yang ditemukan.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white hover:shadow-md transition-shadow text-center"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{formatTime(item.timestamp)}</td>
                  <td className="px-4 py-3 rounded-r-lg">{formatDate(item.timestamp)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
