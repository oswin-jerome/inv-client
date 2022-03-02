import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateInvoices from "./pages/invoices/createInvoice";
import InvoiceDetails from "./pages/invoices/invoiceDetails";
import Invoices from "./pages/invoices/invoices";
import CreateProducts from "./pages/products/createProduct";
import EditProduct from "./pages/products/editProduct";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="flex min-h-screen">
      <nav className="bg-white shadow-lg w-52 p-5">
        <ul className="list-none mt-20 flex flex-col gap-4">
          <li>
            <Link className="cursor-pointer" to="/">
              Dashboard
            </Link>
          </li>

          <li>
            <Link className="cursor-pointer" to="products">
              Products
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer" to="invoices">
              Invoices
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products/>} />
          <Route path="products/create" element={<CreateProducts/>} />
          <Route path="products/:id/edit" element={<EditProduct/>} />


          <Route path="invoices" element={<Invoices/>} />
          <Route path="invoices/:id" element={<InvoiceDetails/>} />
          <Route path="invoices/create" element={<CreateInvoices/>} />
        


          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
