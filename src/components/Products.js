import { useEffect, useState } from "react"
import axios from "axios"

export default function Proucts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://dummyjson.com/products").then((data) => {
      const product_list = data.data.products.slice(0, 10)
      console.log(product_list);
      setProducts(product_list)
    })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className="bg-white">
      <div className="mx-28">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
