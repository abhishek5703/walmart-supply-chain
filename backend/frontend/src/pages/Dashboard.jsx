const dummyProducts = [
  { id: 1, name: "Product A", description: "High-quality A", price: 100 },
  { id: 2, name: "Product B", description: "Reliable B", price: 200 }
]

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyProducts.map(product => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold mt-2">₹{product.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get Seller Recommendation
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
