"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  List, 
  Clock, 
  MapPin, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Users
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "May 24",
    time: "2:00 PM",
    location: "Golden Gate Park",
    category: "Live Music",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    attendees: 1250,
    price: "Free",
    featured: true,
  },
  {
    id: 2,
    title: "Family Art Workshop",
    date: "May 25",
    time: "10:00 AM",
    location: "Community Center",
    category: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=400&h=300&fit=crop",
    attendees: 45,
    price: "$15",
    featured: false,
  },
  {
    id: 3,
    title: "Outdoor Movie Night",
    date: "May 25",
    time: "8:00 PM",
    location: "Marina Green",
    category: "Movies",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    attendees: 320,
    price: "Free",
    featured: true,
  },
  {
    id: 4,
    title: "Kids Science Fair",
    date: "May 26",
    time: "11:00 AM",
    location: "Exploratorium",
    category: "Education",
    image: "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=400&h=300&fit=crop",
    attendees: 180,
    price: "$10",
    featured: false,
  },
  {
    id: 5,
    title: "Food Truck Festival",
    date: "May 26",
    time: "12:00 PM",
    location: "Fort Mason",
    category: "Food & Drink",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&h=300&fit=crop",
    attendees: 890,
    price: "Free Entry",
    featured: true,
  },
  {
    id: 6,
    title: "Yoga in the Park",
    date: "May 27",
    time: "7:00 AM",
    location: "Dolores Park",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    attendees: 65,
    price: "Free",
    featured: false,
  },
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthDays = Array.from({ length: 35 }, (_, i) => {
  const day = i - 3; // Start from Thursday (May 2026 starts on a Friday, offset by 3)
  return {
    day: day > 0 && day <= 31 ? day : null,
    hasEvents: [18, 19, 24, 25, 26, 27].includes(day),
    isToday: day === 18,
    isWeekend: i % 7 === 0 || i % 7 === 6,
  };
});

const eventsByDay: Record<number, typeof events> = {
  18: events.filter((_, i) => i < 2),
  19: events.filter((_, i) => i >= 1 && i < 4),
  24: events.filter((_, i) => i === 0),
  25: events.filter((_, i) => i === 1 || i === 2),
  26: events.filter((_, i) => i === 3 || i === 4),
  27: events.filter((_, i) => i === 5),
};

export function EventsSection() {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(18);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="calendar" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover what&apos;s happening in your area this week
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={viewMode === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("calendar")}
              className="gap-2"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  {event.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  <button
                    onClick={() => toggleFavorite(event.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.includes(event.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} interested</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-primary">{event.price}</span>
                    <Button size="sm">Learn More</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl border border-border p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
                May 2026
              </h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-medium text-muted-foreground"
                >
                  {day}
                </div>
              ))}
              {monthDays.map((item, i) => {
                const isSelected = item.day === selectedDay;
                return (
                  <button
                    key={i}
                    disabled={!item.day}
                    onClick={() => item.day && setSelectedDay(item.day)}
                    className={`
                      p-3 text-center rounded-lg transition-all duration-150 relative
                      ${!item.day ? "invisible" : "cursor-pointer"}
                      ${isSelected && item.isToday ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" : ""}
                      ${isSelected && !item.isToday ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" : ""}
                      ${!isSelected && item.isToday ? "bg-primary/20 text-primary font-semibold" : ""}
                      ${!isSelected && item.isWeekend ? "text-muted-foreground" : ""}
                      ${item.day && !isSelected ? "hover:bg-secondary" : ""}
                    `}
                  >
                    <span className="text-sm">{item.day}</span>
                    {item.hasEvents && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {item.hasEvents && isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Day Events */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium mb-4">
                {eventsByDay[selectedDay]?.length
                  ? `Events on May ${selectedDay}`
                  : `No events on May ${selectedDay}`}
              </h4>
              {eventsByDay[selectedDay]?.length ? (
                <div className="space-y-3">
                  {eventsByDay[selectedDay].map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium truncate group-hover:text-primary transition-colors">{event.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {event.time} • {event.location}
                        </p>
                      </div>
                      <Badge variant="outline">{event.price}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Select a day with a dot indicator to see its events.
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
