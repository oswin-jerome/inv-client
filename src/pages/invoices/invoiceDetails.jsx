import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetails = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState({
        invoiceItems:[]
    });
    useEffect(() => {
        axios.get(`http://localhost:8080/invoices/${id}`).then((res) => {
            console.log(res);
            setInvoice(res.data);
        });
    },[id])
    return ( 
        <div>

            <div className="mb-5 flex gap-4">
                <div className="shadow-lg rounded-lg p-3 w-40">
                    <p>Total :</p>
                    <p className="font-bold text-xl">{invoice.total}</p>
                </div>
                <div className="shadow-lg rounded-lg p-3 w-40">
                    <p># of items :</p>
                    <p className="font-bold text-xl">{invoice.invoiceItems.length}</p>
                </div>
            </div>
            Invoice Details {id}

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
                  {invoice.invoiceItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{parseInt(item.product.price) * item.quantity}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"></td>
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
 
export default InvoiceDetails;