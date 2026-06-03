"use client";

import { 
  Music, 
  Palette, 
  Utensils, 
  Trees, 
  Ticket, 
  Baby, 
  Dumbbell, 
  Film, 
  GraduationCap, 
  PartyPopper, 
  Theater, 
  Gamepad2 
} from "lucide-react";

const categories = [
  { name: "Live Music", icon: Music, count: 234, color: "bg-orange-500/10 text-orange-600" },
  { name: "Arts & Crafts", icon: Palette, count: 156, color: "bg-purple-500/10 text-purple-600" },
  { name: "Food & Drink", icon: Utensils, count: 312, color: "bg-red-500/10 text-red-600" },
  { name: "Outdoor", icon: Trees, count: 189, color: "bg-green-500/10 text-green-600" },
  { name: "Festivals", icon: Ticket, count: 78, color: "bg-pink-500/10 text-pink-600" },
  { name: "Kids & Family", icon: Baby, count: 267, color: "bg-cyan-500/10 text-cyan-600" },
  { name: "Sports & Fitness", icon: Dumbbell, count: 145, color: "bg-blue-500/10 text-blue-600" },
  { name: "Movies", icon: Film, count: 98, color: "bg-indigo-500/10 text-indigo-600" },
  { name: "Education", icon: GraduationCap, count: 112, color: "bg-yellow-500/10 text-yellow-600" },
  { name: "Celebrations", icon: PartyPopper, count: 89, color: "bg-rose-500/10 text-rose-600" },
  { name: "Theater", icon: Theater, count: 67, color: "bg-violet-500/10 text-violet-600" },
  { name: "Gaming", icon: Gamepad2, count: 134, color: "bg-emerald-500/10 text-emerald-600" },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            Explore by Category
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated categories to find the perfect activity for you and your family
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="group flex flex-col items-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-200"
              >
                <div className={`p-3 rounded-xl ${category.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-sm text-center">{category.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{category.count} events</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
