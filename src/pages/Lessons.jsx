import { useState } from "react"

function Lessons({ studies, deleteStudy, updateStudy }) {

  const [editingId, setEditingId] = useState(null)
const [editedLesson, setEditedLesson] = useState("")
const [editedDuration, setEditedDuration] = useState("")

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Study Records
      </h1>

      {studies.length === 0 && (
        <p className="text-gray-500">No study records yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
  {editingId === study.id ? (
    <>
      <input
        type="text"
        value={editedLesson}
        onChange={(e) => setEditedLesson(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-2"
      />

      <input
        type="number"
        value={editedDuration}
        onChange={(e) => setEditedDuration(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
    </>
  ) : (
    <>
      <h3 className="text-xl font-semibold text-gray-800">
        {study.lesson}
      </h3>
      <p className="text-gray-500 mt-2">
        {study.duration} minutes
      </p>
    </>
  )}
</div>


            <div className="flex gap-3 mt-4">

  {editingId === study.id ? (
    <>
      <button
        onClick={() => {
          updateStudy(study.id, {
            lesson: editedLesson,
            duration: editedDuration
          })
          setEditingId(null)
        }}
        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
      >
        Save
      </button>

      <button
        onClick={() => setEditingId(null)}
        className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500 transition"
      >
        Cancel
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => {
          setEditingId(study.id)
          setEditedLesson(study.lesson)
          setEditedDuration(study.duration)
        }}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
      >
        Edit
      </button>

      <button
        onClick={() => {
          const confirmDelete = window.confirm("Are you sure?")
          if (confirmDelete) {
            deleteStudy(study.id)
          }
        }}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </>
  )}

</div>


          </div>
        ))}
      </div>

    </div>
  )
}

export default Lessons

