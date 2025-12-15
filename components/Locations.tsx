import { Location } from '@/types';

const locationsData: Location[] = [
  {
    id: 'sutton',
    name: 'Sutton',
    churchName: 'Faith Church Ministries',
    address: '1A Throwley Way, Sutton SM1 4AF',
    time: '10:30',
    period: 'AM',
    day: 'Sunday',
  },
  {
    id: 'wembley',
    name: 'Wembley',
    churchName: 'Elmfied Church',
    address: '89 Imperial Drive, Harrow HA2 7DX',
    time: '03:00',
    period: 'PM',
    day: 'Sunday',
  },
  {
    id: 'leicester',
    name: 'Leicester',
    churchName: 'W H G M CHURCH',
    address: 'Brighton Road, LE5 0HD',
    time: '01:30',
    period: 'PM',
    day: 'Sunday',
  },
  {
    id: 'manchester',
    name: 'Manchester',
    churchName: 'St Lukes Church',
    address: '43 Derby Road, Salford M6 5YD',
    time: '11:00',
    period: 'AM',
    day: 'Sunday',
  },
  {
    id: 'luton',
    name: 'Luton',
    churchName: 'Stanton Road Baptist Church',
    address: '7 Stanton Road, Luton LU4 0BH',
    time: '02:00',
    period: 'PM',
    day: 'Sunday',
  },
  {
    id: 'eastham',
    name: 'East Ham',
    churchName: 'Trinity Community Center',
    address: 'East Avenue, East Ham E12 6SG',
    time: '04:00',
    period: 'PM',
    day: 'Sunday',
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    churchName: 'Dixons Croxteth Academy',
    address: 'Carr Lane East Croxteth, Liverpool L11 4SG',
    time: '03:00',
    period: 'PM',
    day: 'Sunday',
    phone: '+44 7404 179759',
  },
];

const Locations = () => {
  return (
    <div id="locations-list" className="w-full grid gap-4 lg:grid-cols-2 text-left max-w-5xl mx-auto">
      {locationsData.map((loc) => (
        <div
          key={loc.id}
          className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#251e30] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${
            loc.id === 'liverpool' ? 'lg:col-span-2' : ''
          }`}
        >
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-bold text-xl text-text-main dark:text-white">{loc.name}</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-primary/10 text-primary dark:bg-primary/30 dark:text-white">
                {loc.day}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{loc.churchName}</p>
            <p className="text-sm text-text-muted dark:text-gray-400">{loc.address}</p>
            {loc.phone && (
              <p className="mt-2 text-xs text-primary font-bold dark:text-primary-light font-mono bg-primary/5 dark:bg-primary/20 inline-block px-2 py-1 rounded">
                {loc.phone}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right mr-2">
              <span className="block text-2xl font-black text-primary dark:text-primary-light">
                {loc.time}
                <span className="text-sm font-bold ml-0.5 align-top">{loc.period}</span>
              </span>
            </div>
            <button className="h-10 px-5 rounded-full bg-gray-100 dark:bg-white/10 text-sm font-bold text-text-main dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center gap-1 group-hover:bg-primary group-hover:text-white">
              Directions <span className="material-symbols-outlined text-base">near_me</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
