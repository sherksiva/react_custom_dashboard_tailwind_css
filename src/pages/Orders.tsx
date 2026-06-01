import { Link } from "react-router";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import ComponentCard from "../components/common/ComponentCard";
import PageMeta from "../components/common/PageMeta";
import RecentOrders from "../components/ecommerce/RecentOrders";

const products = [
  {
    id: 1,
    name: "MacBook Pro 16”",
    category: "Laptop",
    price: "$2,499.00",
    stock: "In Stock",
    image: "/images/product/product-01.jpg",
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    category: "Wearable",
    price: "$799.00",
    stock: "Low Stock",
    image: "/images/product/product-02.jpg",
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    price: "$1,199.00",
    stock: "In Stock",
    image: "/images/product/product-03.jpg",
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Accessories",
    price: "$249.00",
    stock: "Out of Stock",
    image: "/images/product/product-05.jpg",
  },
];

export default function Orders() {
  return (
    <>
      <PageMeta
        title="Orders Dashboard | TailAdmin - React.js Tailwind CSS Admin Dashboard"
        description="View orders, recent deliveries and product catalog in the admin dashboard."
      />
      <PageBreadcrumb pageTitle="Orders" />

      <div className="space-y-6">
        <ComponentCard title="Order Summary" desc="Live order metrics and quick product inventory overview.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-white/[0.04]">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white/90">124</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-white/[0.04]">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white/90">$34,580</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-white/[0.04]">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Shipments</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white/90">18</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-white/[0.04]">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Products in Catalog</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white/90">36</p>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Recent Orders">
          <RecentOrders />
        </ComponentCard>

        <ComponentCard title="Amazon-style Purchase" desc="Open the purchasing page for a product detail experience.">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              View the purchasing page to see a product detail layout with Amazon-style actions.
            </p>
            <Link
              to="/orders/purchasing"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400"
            >
              Go to Purchasing Page
            </Link>
          </div>
        </ComponentCard>

        <ComponentCard title="Products" desc="Browse the featured products available in the Orders dashboard.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-brand-500 dark:border-gray-800 dark:bg-white/[0.03]"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      className="h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-white/90">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {product.category}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
                      Price
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white/90">
                      {product.price}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-white/[0.05] dark:text-slate-300">
                    {product.stock}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
