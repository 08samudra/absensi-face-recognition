function Dashboard() {
  const dummyData = [
    { name: "Widia", time: "09:12" },
    { name: "Taufik", time: "09:15" },
  ];

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
              {dummyData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
