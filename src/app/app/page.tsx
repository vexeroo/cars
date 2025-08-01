"use client";
import { useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "cars", label: "Cars", icon: "🚗", badge: 12 },
  { id: "rentals", label: "Rentals", icon: "📝", badge: 3 },
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

function ModernSidebar({ 
  activeItem, 
  onItemClick 
}: { 
  activeItem: string; 
  onItemClick: (id: string) => void; 
}) {
  return (
    <aside className="hidden lg:flex flex-col w-80 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 h-screen sticky top-0">
      {/* Header */}
      <div className="p-8 border-b border-gray-200/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Vexeroo</h1>
            <p className="text-sm text-gray-500">Car Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                activeItem === item.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  activeItem === item.id
                    ? "bg-white/20 text-white"
                    : "bg-purple-100 text-purple-600"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* User section */}
        <div className="mt-auto pt-6 border-t border-gray-200/50">
          <div className="flex items-center gap-3 p-4 bg-gray-50/80 rounded-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">John Doe</p>
              <p className="text-xs text-gray-500">john@vexeroo.com</p>
            </div>
            <button className="p-1 hover:bg-gray-200/50 rounded-lg transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function ModernBottomBar({ 
  activeItem, 
  onItemClick 
}: { 
  activeItem: string; 
  onItemClick: (id: string) => void; 
}) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200/50 px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
              activeItem === item.id
                ? "text-purple-600"
                : "text-gray-400"
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
            {activeItem === item.id && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
          <p className="text-purple-100 mb-6">You have 3 active rentals and 12 cars in your fleet</p>
          <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-medium hover:bg-white/30 transition-all duration-300">
            View All Rentals
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Cars", value: "124", change: "+12%", color: "purple" },
          { label: "Active Rentals", value: "89", change: "+5%", color: "blue" },
          { label: "Revenue", value: "$24,580", change: "+18%", color: "green" },
          { label: "Customers", value: "1,847", change: "+23%", color: "orange" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl`}></div>
              <span className="text-green-500 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 overflow-hidden">
        <div className="p-8 border-b border-gray-200/50">
          <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-8">
          <div className="space-y-4">
            {[
              { action: "New rental request", car: "Tesla Model S", time: "2 hours ago", status: "pending" },
              { action: "Rental completed", car: "BMW X5", time: "4 hours ago", status: "completed" },
              { action: "Car maintenance", car: "Audi A4", time: "1 day ago", status: "in-progress" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.car} • {activity.time}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                  activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppPage() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <ModernSidebar activeItem={activeItem} onItemClick={setActiveItem} />
        
        <main className="flex-1 lg:ml-0">
          {/* Mobile header */}
          <header className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-gray-200/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h1 className="text-lg font-bold text-gray-900">Vexeroo</h1>
              </div>
              <button className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12" />
                </svg>
              </button>
            </div>
          </header>

          <div className="p-8 pb-24 lg:pb-8">
            <DashboardContent />
          </div>
        </main>
      </div>

      <ModernBottomBar activeItem={activeItem} onItemClick={setActiveItem} />
    </div>
  );
}