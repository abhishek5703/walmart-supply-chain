const Signup = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
