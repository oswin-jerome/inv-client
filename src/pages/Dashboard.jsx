import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {

    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:8080/').then((res) => {
              console.log(res);
                setDashboard(res.data);
         });
    }, []);

    return ( <div>
        <div className="flex gap-5">
            <div className="shadow-lg rounded-lg bg-blue-500 p-5 w-60">
                <p className='text-white font-bold'># of Products</p>
                <p className='text-white font-bold text-3xl'>{dashboard.productCount}</p>
            </div>
            <div className="shadow-lg rounded-lg bg-green-500 p-5 w-60">
                <p className='text-white font-bold'># of Invoices</p>
                <p className='text-white font-bold text-3xl'>{dashboard.invoiceCount}</p>
            </div>

            <div className="shadow-lg rounded-lg bg-orange-500 p-5 w-60">
                <p className='text-white font-bold'>Total Invoice Amount</p>
                <p className='text-white font-bold text-3xl'>$ {dashboard.totalSales}</p>
            </div>
        </div>
    </div> );
}
 
export default Dashboard;