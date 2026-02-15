function Reports({ studies }) {

  const totalStudies = studies.length

  const totalDuration = studies.reduce(
    (sum, study) => sum + Number(study.duration),
    0
  )

  const averageDuration =
    totalStudies > 0
      ? Math.round(totalDuration / totalStudies)
      : 0

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Study Reports
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Total Studies</h2>
          <p className="text-2xl font-bold mt-2">
            {totalStudies}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Total Minutes</h2>
          <p className="text-2xl font-bold mt-2">
            {totalDuration}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Average Minutes</h2>
          <p className="text-2xl font-bold mt-2">
            {averageDuration}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Reports
