import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHub = () => {
  const homeServices = [
    { name: 'Plumber', icon: 'plumbing', path: '/service/plumber' },
    { name: 'Electrician', icon: 'electrical_services', path: '/service/electrician' },
    { name: 'Carpenter', icon: 'carpenter', path: '/service/carpenter' },
    { name: 'Painter', icon: 'format_paint', path: '/service/painter' },
    { name: 'Cleaning', icon: 'cleaning_services', path: '/service/cleaning' },
    { name: 'Laundry', icon: 'local_laundry_service', path: '/service/laundry' },
    { name: 'Pest Control', icon: 'bug_report', path: '/service/pest-control' },
    { name: 'AC Repair', icon: 'ac_unit', path: '/service/ac-repair' }
  ];

  return (
    <div className="px-3 pb-6">
      <h2 className="font-bold text-gray-800 mb-3">Home Services</h2>
      <div className="grid grid-cols-4 gap-3">
        {homeServices.map((s, i) => (
          <Link key={i} to={s.path} className="flex flex-col items-center bg-white p-2 rounded-xl border shadow-sm hover:border-green-500 transition-all">
            <span className="material-icons text-green-700 text-xl">{s.icon}</span>
            <span className="text-[8px] font-bold mt-1 text-center">{s.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ServiceHub;
