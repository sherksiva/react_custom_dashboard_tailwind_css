import { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";
import TrackingMap from "../components/tracking/TrackingMap";
import TrackingSidebar from "../components/tracking/TrackingSidebar";

interface TrackingRoute {
  id: number;
  from: string;
  to: string;
  status: string;
  eta: string;
  progress: number;
  checkpoints: string[];
  markers: Array<{
    latLng: [number, number];
    name: string;
    style?: Record<string, unknown>;
  }>;
}

const routes: TrackingRoute[] = [
  {
    id: 1,
    from: "Chicago, USA",
    to: "Rotterdam Port",
    status: "In Transit",
    eta: "2h 18m",
    progress: 78,
    checkpoints: ["Milwaukee Hub", "Hamburg Gate", "Rotterdam Port"],
    markers: [
      {
        latLng: [41.8781, -87.6298],
        name: "Chicago",
        style: { fill: "#22c55e", borderWidth: 2, borderColor: "white" },
      },
      {
        latLng: [51.9244, 4.4777],
        name: "Rotterdam",
        style: { fill: "#2563eb", borderWidth: 2, borderColor: "white" },
      },
    ],
  },
  {
    id: 2,
    from: "Mumbai, India",
    to: "Dubai, UAE",
    status: "Delayed",
    eta: "5h 40m",
    progress: 62,
    checkpoints: ["Delhi Hub", "Karachi Transit", "Dubai Customs"],
    markers: [
      {
        latLng: [19.076, 72.8777],
        name: "Mumbai",
        style: { fill: "#f97316", borderWidth: 2, borderColor: "white" },
      },
      {
        latLng: [25.2048, 55.2708],
        name: "Dubai",
        style: { fill: "#2563eb", borderWidth: 2, borderColor: "white" },
      },
    ],
  },
  {
    id: 3,
    from: "New York, USA",
    to: "London, UK",
    status: "Delivered",
    eta: "Delivered",
    progress: 100,
    checkpoints: ["Newark Hub", "Reykjavik Stop", "London Gateway"],
    markers: [
      {
        latLng: [40.7128, -74.006],
        name: "New York",
        style: { fill: "#22c55e", borderWidth: 2, borderColor: "white" },
      },
      {
        latLng: [51.5074, -0.1278],
        name: "London",
        style: { fill: "#2563eb", borderWidth: 2, borderColor: "white" },
      },
    ],
  },
];

export default function Tracking() {
  const [fromLocation, setFromLocation] = useState(routes[0].from);
  const [toLocation, setToLocation] = useState(routes[0].to);
  const [selectedRoute, setSelectedRoute] = useState<TrackingRoute | null>(routes[0]);
  const [message, setMessage] = useState("");

  const fromOptions = useMemo(
    () => Array.from(new Set(routes.map((route) => route.from))),
    []
  );

  const toOptions = useMemo(
    () => Array.from(new Set(routes.map((route) => route.to))),
    []
  );

  const handleTrack = () => {
    const route = routes.find(
      (item) => item.from === fromLocation && item.to === toLocation
    );

    if (route) {
      setSelectedRoute(route);
      setMessage("");
    } else {
      setSelectedRoute(null as any);
      setMessage("No tracking route found for this selection.");
    }
  };

  return (
    <>
      <PageMeta
        title="Tracking Dashboard | TailAdmin - React.js Admin Dashboard"
        description="Track shipments and delivery status with an interactive map and live sidebar."
      />
      <div className="space-y-6">
        <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                Tracking Route
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                Choose tracking origin and destination
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                Select the shipment source and destination, then click to display the live tracking route.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_auto]">
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">From</span>
                <select
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {fromOptions.map((from) => (
                    <option key={from} value={from}>
                      {from}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">To</span>
                <select
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {toOptions.map((to) => (
                    <option key={to} value={to}>
                      {to}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                onClick={handleTrack}
                className="rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Show Track
              </button>
            </div>
          </div>
          {message ? (
            <p className="mt-4 text-sm text-orange-600 dark:text-orange-400">{message}</p>
          ) : (
            <div className="mt-6 rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Current route</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    {selectedRoute?.from} → {selectedRoute?.to}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">
                    <p className="text-slate-500 dark:text-slate-400">Status</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {selectedRoute?.status}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">
                    <p className="text-slate-500 dark:text-slate-400">ETA</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {selectedRoute?.eta}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">
                    <p className="text-slate-500 dark:text-slate-400">Progress</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {selectedRoute?.progress}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.65fr_1fr]">
          <TrackingMap routeMarkers={selectedRoute?.markers} />
          <TrackingSidebar />
        </div>
      </div>
    </>
  );
}
