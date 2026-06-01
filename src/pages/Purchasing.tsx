import { Link } from "react-router";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const product = {
  name: "Apple iPhone 15 Pro Max",
  category: "Smartphone",
  price: "$1,299.00",
  rating: 4.8,
  reviewCount: 2_184,
  availability: "In Stock",
  description:
    "Experience next-level performance, pro-grade camera, and long battery life in a beautifully designed smartphone.",
  features: [
    "A17 Pro chip for unmatched speed",
    "48MP main camera with 5x optical zoom",
    "Titanium frame with Ceramic Shield",
    "Up to 29 hours of video playback",
  ],
  image: "/images/product/product-03.jpg",
};

export default function Purchasing() {
  return (
    <>
      <PageMeta
        title="Purchasing | TailAdmin - React.js Tailwind CSS Dashboard"
        description="Amazon-style purchasing page for the orders section."
      />
      <PageBreadcrumb pageTitle="Purchasing" />

      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
              <div className="rounded-3xl bg-slate-50 p-4 dark:bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {product.availability}
                    </span>
                  </div>
                  <h1 className="text-3xl font-semibold text-gray-900 dark:text-white/90">
                    {product.name}
                  </h1>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-4xl font-semibold text-gray-900 dark:text-white/90">
                      {product.price}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{product.rating} ★</span>
                      <span>·</span>
                      <span>{product.reviewCount.toLocaleString()} reviews</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400">
                      Buy Now
                    </button>
                    <button className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-white/[0.03]">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5 dark:bg-gray-900">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Shipping</p>
                    <p className="mt-2 font-semibold text-gray-900 dark:text-white/90">Free delivery by tomorrow</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 dark:bg-gray-900">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Seller</p>
                    <p className="mt-2 font-semibold text-gray-900 dark:text-white/90">Top-rated seller</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white/90">Product Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-gray-900">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500">
                Compare offers
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Amazon Prime</p>
                  <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white/90">Free delivery with Prime</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Standard</p>
                  <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white/90">Free 3-day delivery</p>
                </div>
              </div>
            </div>

            <Link
              to="/orders"
              className="block rounded-2xl border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-white/[0.03]"
            >
              Back to Orders
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
