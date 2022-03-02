
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const CreateProducts = () => {

    const handleCreateProduct = (e) => {
        e.preventDefault();
   
        axios.post("http://localhost:8080/products", {
            name: e.target.name.value,
            category: e.target.category.value,
            brand: e.target.brand.value,
            price: e.target.price.value,
            avl_qty: e.target.avl_qty.value,
        }).then(res => {
            console.log(res);

            Swal.fire({
                title: 'Success',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

              e.target.reset();
              
        });
    }

   

  return (
    <div>
 

      <div className="mt-10 sm:mt-0">
        <div className="">

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handleCreateProduct}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                        Product Name
                      </label>
                      <input type="text" name="name" id="product-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-[1px] p-3 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="category-name" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <input type="text" name="category" id="category-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="brand-name" className="block text-sm font-medium text-gray-700">
                        Brand
                      </label>
                      <input type="text" name="brand" id="brand-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3" />
                    </div>                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                        Unit
                      </label>
                      <select id="unit" name="unit" autoComplete="unit-name" className="border-[1px] p-3 mt-1 block w-full py-3 px-3  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>KG</option>
                        <option>pc</option>
                        <option>ltr</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="cost-price" className="block text-sm font-medium text-gray-700">
                         Price
                      </label>
                      <input type="text" name="price" id="cost-price" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="selling-price" className="block text-sm font-medium text-gray-700">
                        Qty
                      </label>
                      <input type="text" name="selling-price" id="avl_qty" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] p-3" />
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CreateProducts;
