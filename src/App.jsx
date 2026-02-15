import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Lessons from "./pages/Lessons"
import AddStudy from "./pages/AddStudy"
import Reports from "./pages/Reports"

function App() {

  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user")
  return savedUser ? JSON.parse(savedUser) : null
})

const [toast, setToast] = useState("")

  const [studies, setStudies] = useState(() => {
  const saved = localStorage.getItem("studies")
  return saved ? JSON.parse(saved) : []
})

   useEffect(() => {
  localStorage.setItem("studies", JSON.stringify(studies))
}, [studies])


useEffect(() => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user))
  } else {
    localStorage.removeItem("user")
  }
}, [user])

useEffect(() => {
  if (toast) {
    const timer = setTimeout(() => {
      setToast("")
    }, 2500)

    return () => clearTimeout(timer)
  }
}, [toast])


  const addStudy = (study) => {
  setStudies([...studies, study])
  setToast("Study added successfully")
}


  const deleteStudy = (id) => {
  setStudies(studies.filter((study) => study.id !== id))
  setToast("Study deleted")
}


const updateStudy = (id, updatedData) => {
  const updatedStudies = studies.map((study) =>
    study.id === id ? { ...study, ...updatedData } : study
  )

  setStudies(updatedStudies)
  setToast("Study updated")
}


const logout = () => {
  setUser(null)
}



  return (
    <>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route
  path="/"
  element={<Login setUser={setUser} />}
/>

        <Route path="/register" element={<Register />} />
        <Route
  path="/lessons"
  element={
    user ? (
      <Lessons
        studies={studies}
        deleteStudy={deleteStudy}
        updateStudy={updateStudy}
      />
    ) : (
      <Navigate to="/" />
    )
  }
/>

        <Route
  path="/add-study"
  element={
    user ? (
      <AddStudy addStudy={addStudy} />
    ) : (
      <Navigate to="/" />
    )
  }
/>

        <Route
  path="/reports"
  element={
    user ? (
      <Reports studies={studies} />
    ) : (
      <Navigate to="/" />
    )
  }
/>

      </Routes>
      {toast && (
  <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg">
    {toast}
  </div>
)}

    </>
  )
}

export default App
