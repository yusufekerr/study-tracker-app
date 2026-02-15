import { Link } from "react-router-dom"

function Navbar({ user, logout }) {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      <h2 className="text-xl font-bold text-blue-600">
        Study Tracker
      </h2>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/lessons" className="hover:text-blue-600 transition">
          Lessons
        </Link>
        <Link to="/add-study" className="hover:text-blue-600 transition">
          Add Study
        </Link>
        <Link to="/reports" className="hover:text-blue-600 transition">
          Reports
        </Link>
        {user && (
  <button
    onClick={logout}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
  >
    Logout
  </button>
)}

      </div>

    </nav>
  )
}

export default Navbar

