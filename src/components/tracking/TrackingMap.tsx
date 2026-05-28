import CountryMap from "../ecommerce/CountryMap";

interface TrackingMapProps {
  routeMarkers?: Array<{
    latLng: [number, number];
    name: string;
    style?: Record<string, unknown>;
  }>;
}

const TrackingMap: React.FC<TrackingMapProps> = ({ routeMarkers }) => {
  return (
    <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Live Tracking Map
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monitor active shipments across global locations.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Updated 5 mins ago
        </span>
      </div>

      <div className="relative h-[520px] overflow-hidden rounded-[20px] bg-slate-100 dark:bg-slate-900">
        <CountryMap mapColor="#F8FAFC" markers={routeMarkers} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="mb-2 h-2 w-12 rounded-full bg-emerald-500" />
          <p className="text-slate-500 dark:text-slate-400">In Transit</p>
          <p className="mt-1 font-semibold text-slate-900 dark:text-white">18</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="mb-2 h-2 w-12 rounded-full bg-orange-500" />
          <p className="text-slate-500 dark:text-slate-400">Delayed</p>
          <p className="mt-1 font-semibold text-slate-900 dark:text-white">3</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="mb-2 h-2 w-12 rounded-full bg-blue-500" />
          <p className="text-slate-500 dark:text-slate-400">Delivered</p>
          <p className="mt-1 font-semibold text-slate-900 dark:text-white">24</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingMap;
