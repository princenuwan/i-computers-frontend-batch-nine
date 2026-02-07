import ProductCard from "./components/productCard";

function App() {

  return (
    <div className="bg-amber-50" >
      <h1 className="bg-blue-200 text-4xl font-bold tracking-tight text-gray-800 text-center"> Hello world</h1>
      <img className="rounded-full w-100 h-100 object-cover hover:scale-110 cursor-pointer " src="https://picsum.photos/id/237/200/300" alt="black_dog"/>
      <p>price = 10000LKR</p>
      <ProductCard/>
    </div>
  )
}

export default App
