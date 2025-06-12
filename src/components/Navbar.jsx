import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white py-3 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-[32px] font-bold italic">FaceAttend</div>
        {/* Menu kiri */}
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive ? "bg-white text-black font-semibold" : "hover:bg-red-800"
              }`
            }
          >
            Absensi
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive ? "bg-white text-black font-semibold" : "hover:bg-red-800"
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
