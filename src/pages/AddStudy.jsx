import { useState } from "react"

function AddStudy({ addStudy }) {

  const [lesson, setLesson] = useState("")
  const [duration, setDuration] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!lesson || !duration) return

    const newStudy = {
      id: Date.now(),
      lesson,
      duration
    }

    addStudy(newStudy)

    setLesson("")
    setDuration("")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Study Record
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Lesson Name"
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Duration (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Study
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddStudy
