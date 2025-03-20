
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Users, 
  Hotel, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut, 
  BarChart3, 
  MessageSquare, 
  FileText,
  Tag,
  BotMessageSquare,
  Database,
  Shield
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

// Sample data for mock admin dashboard
const mockUsers = [
  { id: 'user-001', name: 'John Doe', email: 'john.doe@example.com', role: 'Customer', status: 'active', joined: '2023-01-15' },
  { id: 'user-002', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Customer', status: 'active', joined: '2023-02-20' },
  { id: 'user-003', name: 'Robert Johnson', email: 'robert.j@example.com', role: 'Customer', status: 'inactive', joined: '2023-03-05' },
  { id: 'user-004', name: 'Emily Davis', email: 'emily.d@example.com', role: 'Staff', status: 'active', joined: '2023-01-10' }
];

const mockRooms = [
  { id: 'room-001', name: 'Desert View Suite', type: 'Suite', capacity: 2, price: 250, status: 'available' },
  { id: 'room-002', name: 'Garden Oasis Room', type: 'Standard', capacity: 2, price: 180, status: 'occupied' },
  { id: 'room-003', name: 'Beachfront Villa', type: 'Villa', capacity: 4, price: 450, status: 'available' },
  { id: 'room-004', name: 'Mountain Retreat', type: 'Suite', capacity: 3, price: 320, status: 'maintenance' }
];

const mockReservations = [
  { id: 'res-001', guest: 'John Doe', room: 'Desert View Suite', checkIn: '2023-08-15', checkOut: '2023-08-20', status: 'completed', amount: 1250 },
  { id: 'res-002', guest: 'Jane Smith', room: 'Garden Oasis Room', checkIn: '2023-12-10', checkOut: '2023-12-15', status: 'upcoming', amount: 900 },
  { id: 'res-003', guest: 'Robert Johnson', room: 'Beachfront Villa', checkIn: '2023-07-22', checkOut: '2023-07-26', status: 'cancelled', amount: 1800 },
  { id: 'res-004', guest: 'Emily Davis', room: 'Mountain Retreat', checkIn: '2023-09-05', checkOut: '2023-09-12', status: 'completed', amount: 2240 }
];

const mockAiServices = [
  { id: 'ai-001', name: 'ChatGPT', provider: 'OpenAI', status: 'active', lastUsed: '2023-08-12' },
  { id: 'ai-002', name: 'Gemini', provider: 'Google', status: 'inactive', lastUsed: '2023-07-30' },
  { id: 'ai-003', name: 'Claude', provider: 'Anthropic', status: 'inactive', lastUsed: '2023-06-15' }
];

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="page-container py-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/5">
              <div className="glass-card rounded-xl overflow-hidden sticky top-24">
                <div className="p-6 border-b border-border bg-primary/5">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="font-semibold text-lg">Admin Panel</h2>
                  </div>
                </div>
                
                <nav className="p-3">
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">General</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'dashboard' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <BarChart3 className="h-4 w-4" />
                        <span>Dashboard</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('users')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'users' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Users className="h-4 w-4" />
                        <span>Users</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">Management</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('rooms')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'rooms' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Hotel className="h-4 w-4" />
                        <span>Rooms</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('reservations')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'reservations' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>Reservations</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('payments')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'payments' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Payments</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('discounts')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'discounts' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Tag className="h-4 w-4" />
                        <span>Discounts</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">Content</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('content')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'content' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <FileText className="h-4 w-4" />
                        <span>Content</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('messages')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'messages' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Messages</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">System</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('database')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'database' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Database className="h-4 w-4" />
                        <span>Database</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('ai')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'ai' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <BotMessageSquare className="h-4 w-4" />
                        <span>AI Services</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'settings' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="border-t border-border mt-2 pt-3">
                    <NavLink 
                      to="/"
                      className="w-full flex items-center space-x-3 p-2.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-4/5">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-6"
              >
                {activeTab === 'dashboard' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Total Users</h3>
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">126</p>
                        <p className="text-xs text-primary mt-2">↑ 12% from last month</p>
                      </div>
                      
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Room Occupancy</h3>
                          <Hotel className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">78%</p>
                        <p className="text-xs text-primary mt-2">↑ 5% from last month</p>
                      </div>
                      
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Revenue</h3>
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">$24,850</p>
                        <p className="text-xs text-destructive mt-2">↓ 3% from last month</p>
                      </div>
                      
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">New Bookings</h3>
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">42</p>
                        <p className="text-xs text-primary mt-2">↑ 8% from last month</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Calendar className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">New Reservation</p>
                              <p className="text-sm text-muted-foreground">Jane Smith booked Garden Oasis Room for Dec 10-15</p>
                              <p className="text-xs text-muted-foreground mt-1">Just now</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">New User Registration</p>
                              <p className="text-sm text-muted-foreground">Robert Johnson created a new account</p>
                              <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Payment Received</p>
                              <p className="text-sm text-muted-foreground">Emily Davis paid $2,240 for Mountain Retreat</p>
                              <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                              <Calendar className="h-4 w-4 text-destructive" />
                            </div>
                            <div>
                              <p className="font-medium">Reservation Cancelled</p>
                              <p className="text-sm text-muted-foreground">Robert Johnson cancelled Beachfront Villa reservation</p>
                              <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Room Availability</h3>
                        <div className="glass-card rounded-lg border border-border p-5 h-[300px]">
                          <div className="flex h-full items-center justify-center">
                            <p className="text-muted-foreground">Chart visualization will be displayed here</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Revenue Trends</h3>
                        <div className="glass-card rounded-lg border border-border p-5 h-[300px]">
                          <div className="flex h-full items-center justify-center">
                            <p className="text-muted-foreground">Chart visualization will be displayed here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'users' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">User Management</h2>
                      <button className="btn-primary">Add New User</button>
                    </div>
                    
                    <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">All Users</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Customers</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Staff</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Inactive</button>
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Search users..." 
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Joined</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="text-primary font-medium">{user.name.charAt(0)}</span>
                                  </div>
                                  <span className="font-medium">{user.name}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  user.status === 'active' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-400'
                                }`}>
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{new Date(user.joined).toLocaleDateString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                  <button className="text-primary text-sm">Edit</button>
                                  <button className="text-destructive text-sm">Delete</button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Showing 4 of 126 users</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Previous</button>
                        <button className="px-3 py-1 rounded bg-primary text-primary-foreground">1</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">2</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">3</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Next</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'rooms' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Room Management</h2>
                      <button className="btn-primary">Add New Room</button>
                    </div>
                    
                    <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">All Rooms</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Available</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Occupied</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Maintenance</button>
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Search rooms..." 
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Room Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Capacity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Price/Night</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockRooms.map((room) => (
                            <tr key={room.id} className="hover:bg-muted/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap font-medium">{room.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{room.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{room.capacity} persons</td>
                              <td className="px-6 py-4 whitespace-nowrap">${room.price}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  room.status === 'available' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                                    : room.status === 'occupied'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400'
                                    : 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-400'
                                }`}>
                                  {room.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                  <button className="text-primary text-sm">Edit</button>
                                  <button className="text-gray-500 text-sm">View</button>
                                  <button className="text-destructive text-sm">Delete</button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Showing 4 of 24 rooms</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Previous</button>
                        <button className="px-3 py-1 rounded bg-primary text-primary-foreground">1</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">2</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">3</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Next</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reservations' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Reservation Management</h2>
                      <button className="btn-primary">Create Reservation</button>
                    </div>
                    
                    <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">All</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Upcoming</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Completed</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Cancelled</button>
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Search reservations..." 
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Reservation ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Guest</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Room</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Check In</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Check Out</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockReservations.map((reservation) => (
                            <tr key={reservation.id} className="hover:bg-muted/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{reservation.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{reservation.guest}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{reservation.room}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{new Date(reservation.checkIn).toLocaleDateString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{new Date(reservation.checkOut).toLocaleDateString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">${reservation.amount}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  reservation.status === 'upcoming' 
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400' 
                                    : reservation.status === 'completed'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                                }`}>
                                  {reservation.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                  <button className="text-primary text-sm">Edit</button>
                                  <button className="text-gray-500 text-sm">View</button>
                                  {reservation.status === 'upcoming' && (
                                    <button className="text-destructive text-sm">Cancel</button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Showing 4 of 78 reservations</p>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Previous</button>
                        <button className="px-3 py-1 rounded bg-primary text-primary-foreground">1</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">2</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">3</button>
                        <button className="px-3 py-1 rounded border border-border hover:bg-muted transition-colors">Next</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'ai' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">AI Services Management</h2>
                      <button className="btn-primary">Connect New Service</button>
                    </div>
                    
                    <div className="mb-8">
                      <div className="glass-card rounded-lg border border-border p-5">
                        <h3 className="text-lg font-semibold mb-4">Current AI Configuration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Active AI Service</p>
                            <p className="font-semibold">ChatGPT (OpenAI)</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">API Usage This Month</p>
                            <p className="font-semibold">1,245 requests</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Service Status</p>
                            <p className="text-green-600 font-semibold flex items-center">
                              <span className="h-2 w-2 rounded-full bg-green-600 mr-2"></span>
                              Operational
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Last Maintenance</p>
                            <p className="font-semibold">August 10, 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">Available AI Services</h3>
                    <div className="space-y-4">
                      {mockAiServices.map((service) => (
                        <div key={service.id} className="glass-card rounded-lg border border-border p-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-semibold text-lg">{service.name}</h4>
                                {service.status === 'active' && (
                                  <span className="ml-3 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                                    Active
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">Provider: {service.provider}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Last used: {new Date(service.lastUsed).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex space-x-3">
                              {service.status === 'active' ? (
                                <button className="btn-outline border-destructive text-destructive hover:bg-destructive/10 py-1.5 px-3">
                                  Deactivate
                                </button>
                              ) : (
                                <button className="btn-primary py-1.5 px-3">
                                  Activate
                                </button>
                              )}
                              <button className="btn-outline py-1.5 px-3">
                                Configure
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">AI Assistant Settings</h3>
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">AI Model</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <option>GPT-4</option>
                              <option>GPT-3.5 Turbo</option>
                              <option>Claude 2</option>
                              <option>Gemini Pro</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Temperature</label>
                            <input 
                              type="range" 
                              min="0" 
                              max="1" 
                              step="0.1" 
                              value="0.7" 
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>More Focused (0.0)</span>
                              <span>More Creative (1.0)</span>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">System Prompt</label>
                            <textarea 
                              rows={4}
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              placeholder="You are an AI assistant for Acacia Camp..."
                              defaultValue="You are an AI assistant for Acacia Camp, a luxury resort in South Sinai. Your purpose is to assist guests and staff with information about the resort, booking services, and answering questions."
                            ></textarea>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">API Key</label>
                            <div className="flex space-x-2">
                              <input 
                                type="password" 
                                placeholder="••••••••••••••••••••••••" 
                                className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                              <button className="btn-outline py-2 px-4">Update</button>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center">
                              <input type="checkbox" id="enable_learning" className="rounded border-gray-300 text-primary focus:ring-primary" checked />
                              <label htmlFor="enable_learning" className="ml-2 text-sm text-muted-foreground">Enable continuous learning from interactions</label>
                            </div>
                            <button className="btn-primary">Save Settings</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">System Settings</h2>
                    
                    <div className="space-y-8">
                      <div className="glass-card rounded-lg border border-border p-6">
                        <h3 className="text-lg font-semibold mb-4">General Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Resort Name</label>
                            <input 
                              type="text" 
                              value="Acacia Camp" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Contact Email</label>
                            <input 
                              type="email" 
                              value="info@acaciacamp.com" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Contact Phone</label>
                            <input 
                              type="tel" 
                              value="+20 123 456 789" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Default Currency</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <option>USD ($)</option>
                              <option>EUR (€)</option>
                              <option>GBP (£)</option>
                              <option>EGP (£)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Timezone</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <option>Africa/Cairo (GMT+2)</option>
                              <option>Europe/London (GMT+0)</option>
                              <option>America/New_York (GMT-5)</option>
                              <option>Asia/Tokyo (GMT+9)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Date Format</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <option>MM/DD/YYYY</option>
                              <option>DD/MM/YYYY</option>
                              <option>YYYY-MM-DD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-6">
                        <h3 className="text-lg font-semibold mb-4">Booking Settings</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Allow Online Bookings</p>
                              <p className="text-sm text-muted-foreground">Enable guests to book rooms through the website</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Minimum Advance Booking (days)</label>
                            <input 
                              type="number" 
                              value="1" 
                              min="0" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Maximum Advance Booking (days)</label>
                            <input 
                              type="number" 
                              value="365" 
                              min="1" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Check-in Time</label>
                            <input 
                              type="time" 
                              value="14:00" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Check-out Time</label>
                            <input 
                              type="time" 
                              value="12:00" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-6">
                        <h3 className="text-lg font-semibold mb-4">Payment Settings</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Payment Gateway</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <option>Stripe</option>
                              <option>PayPal</option>
                              <option>Square</option>
                              <option>Manual Payment</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">API Key</label>
                            <div className="flex space-x-2">
                              <input 
                                type="password" 
                                placeholder="••••••••••••••••••••••••" 
                                className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                              <button className="btn-outline py-2 px-4">Update</button>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Require Deposit</p>
                              <p className="text-sm text-muted-foreground">Require a deposit payment to confirm bookings</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Deposit Amount (%)</label>
                            <input 
                              type="number" 
                              value="20" 
                              min="0" 
                              max="100" 
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button className="btn-primary">Save All Settings</button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
