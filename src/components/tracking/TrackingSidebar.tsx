const trackingTasks = [
  {
    id: 1,
    name: "Order #1835",
    status: "In Transit",
    location: "Chicago, USA",
    eta: "2h 18m",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    name: "Order #4510",
    status: "Delayed",
    location: "Frankfurt, Germany",
    eta: "5h 40m",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    id: 3,
    name: "Order #2271",
    status: "At Hub",
    location: "Mumbai, India",
    eta: "1h 05m",
    badge: "bg-sky-100 text-sky-700",
  },
];

const TrackingSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Tracking Overview
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              Shipment Status
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Active routes</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">45</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total deliveries</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">92</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Issues reported</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">4</p>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Active Shipments
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">Latest</span>
        </div>

        <ul className="space-y-4">
          {trackingTasks.map((task) => (
            <li key={task.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{task.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{task.location}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${task.badge}`}>
                  {task.status}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>ETA {task.eta}</span>
                <span className="font-medium text-slate-900 dark:text-white">Updated</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[20px] border border-gray-200 bg-slate-50 p-6 dark:border-gray-800 dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Live checkpoint</p>
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">East Logistics Hub</p>
          </div>
          <div className="rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white">
            On schedule
          </div>
        </div>

        <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p>Next stop: Rotterdam Port</p>
          <p>Temperature: 4°C / 39°F</p>
          <p>Vehicle: Fleet 03</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingSidebar;
