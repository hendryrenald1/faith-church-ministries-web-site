import { Event } from '@/types';

const events: Event[] = [
  {
    id: '1',
    month: 'Oct',
    day: '15',
    title: 'Sunday Worship Service',
    time: '10:00 AM',
    location: 'Main Sanctuary',
  },
  {
    id: '2',
    month: 'Oct',
    day: '18',
    title: 'Youth Fellowship Night',
    time: '7:00 PM',
    location: 'Youth Hall',
  },
  {
    id: '3',
    month: 'Oct',
    day: '22',
    title: 'Prayer & Fasting Week',
    time: 'All Day',
    location: 'Online & In-Person',
  },
];

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-text-main dark:text-white">Upcoming Events</h2>
        <a href="#" className="text-sm font-bold text-primary hover:underline">
          Full Calendar
        </a>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 rounded-xl bg-background-light dark:bg-background-dark p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent hover:border-primary/20"
          >
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-primary/10 text-center">
              <span className="text-xs font-bold uppercase text-text-muted dark:text-primary-light">
                {event.month}
              </span>
              <span className="text-xl font-black text-primary">{event.day}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text-main dark:text-white">{event.title}</h3>
              <p className="text-sm text-text-muted dark:text-gray-400">
                {event.time} • {event.location}
              </p>
            </div>
            <button className="hidden sm:block rounded-full p-2 text-text-muted hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
