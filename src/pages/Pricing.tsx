import  { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/nav';

function App() {
  const [count, setCount] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);

  const getData = async (URL: string) => {
    try {
      const { data } = await axios.get(URL);
      setProducts(data.products);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    const URL = `https://dummyjson.com/products`;
    getData(URL);
  }, []);

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 p-6">
      <div className="text-center mb-8">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Products Clicked: {count}
        </button>
        <h1 className="mt-4 text-4xl font-bold text-slate-800">🛍️ Product Showcase</h1>
        <p className="text-slate-600 mt-2">Explore dummy products fetched from API</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-slate-800">{product.title}</h2>
            <p className="text-slate-600 mt-1 line-clamp-2">{product.description}</p>
            <p className="text-indigo-600 font-bold mt-3">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
