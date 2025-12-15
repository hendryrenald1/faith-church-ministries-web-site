export interface Location {
  id: string;
  name: string;
  churchName: string;
  address: string;
  time: string;
  period: "AM" | "PM";
  day: string;
  phone?: string;
}

export interface Ministry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Event {
  id: string;
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}
