import axios from "axios";
import React, { useEffect, useState } from "react";
import { unstable_HistoryRouter,useNavigate,useRoutes } from "react-router-dom";
import Swal from "sweetalert2";

const CreateInvoices = () => {
  const [products, setProducts] = useState([]);

  const [selects, setSelects] = useState({
    product: "",
    quantity: "",
    price: "",
    name: "",
  });

  const [items, setItems] = useState([]);
  const router = useNavigate()
  // router.push('/');
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddProduct = (e) => {
    setItems([...items, selects]);
    setSelects({
      product: "",
      quantity: "",
      price: "",
      name: "",
    });
  };

  const handleCreateInvoice = (e) => {
    axios
      .post("http://localhost:8080/invoices", {
        discount: 0,
        total: items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0),
        subTotal: items.reduce((acc, item) => { 
            return acc + item.price * item.quantity;
        }, 0),
        invoiceItems: items,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: 'Success',
          text: 'Invoice Created Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      router('/invoices')



      });
  };

  const getTotal = () => {
   return items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)
  }

  return (
    <div>
      {/* Top bar */}
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="">
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">
            Product
          </label>
          <select
            value={selects.product}
            onChange={(e) => {
              setSelects({
                ...selects,
                product: e.target.value,
                price: products.find((product) => product.id === parseInt(e.target.value)).price,
                name: products.find((product) => product.id === parseInt(e.target.value)).name,
              });
            }}
            id="product"
            name="product"
            autoComplete="product"
            className="border-[1px] p-3 mt-1 block w-full py-3 px-3  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select a Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <label htmlFor="qty" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            value={selects.quantity}
            onChange={(e) => {
              setSelects({
                ...selects,
                quantity: e.target.value,
                price: selects.price,
              });
            }}
            type="text"
            name="brand"
            id="qty"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3"
          />
        </div>
        <div className="">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            value={selects.price}
            onChange={(e) => {
              setSelects({
                ...selects,
                price: e.target.value,
              });
            }}
            type="text"
            name="brand"
            id="price"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3"
          />
        </div>
        <div className="col-span-12">
          <button onClick={handleAddProduct} className="bg-blue-600 py-2 px-5 rounded shadow text-white">
            Add
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.price}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
          <p>Total: {getTotal()}</p>
      </div>

      <div className="mt-8">
        <button onClick={handleCreateInvoice} className="bg-blue-600 py-2 px-5 rounded shadow text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateInvoices;
