import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Invoices = () => {
    const [invoices,setInvoices] =useState([
        {
            id:1,
            date:"13/02/2022",
            total:1000,
            status:"paid"
        }
    ])
    useEffect(() => {
      axios.get("http://localhost:8080/invoices").then(res => {
        setInvoices(res.data)
      });
  }, []);
 
  const parseDate = (date)=>{
    var d = new Date(date);
    return d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
  }
    return (
      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <div className="w-full flex justify-end p-2">
                  <Link to="/invoices/create" className="bg-blue-600 text-white px-3 py-2 rounded shadow-lg mt-2">Add New Invoice</Link>
                  </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
              
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Inv #
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                   
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                <Link to={`/invoices/${product.id}`} >{product.id}</Link>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{parseDate(product.created)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.total}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.status}</td>
                 
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Invoices;