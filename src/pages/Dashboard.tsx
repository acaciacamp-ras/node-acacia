
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  User, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut, 
  Home, 
  Bell, 
  MessageSquare, 
  Tag
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const mockReservations = [
  {
    id: 'res-001',
    roomType: 'Desert View Suite',
    checkIn: '2023-08-15',
    checkOut: '2023-08-20',
    status: 'completed',
    amount: 1250
  },
  {
    id: 'res-002',
    roomType: 'Garden Oasis Room',
    checkIn: '2023-12-10',
    checkOut: '2023-12-15',
    status: 'upcoming',
    amount: 900
  }
];

const mockPayments = [
  {
    id: 'pay-001',
    date: '2023-08-01',
    amount: 1250,
    method: 'Visa •••• 4242',
    status: 'successful'
  },
  {
    id: 'pay-002',
    date: '2023-11-15',
    amount: 900,
    method: 'Mastercard •••• 5555',
    status: 'successful'
  }
];

const mockDiscounts = [
  {
    id: 'disc-001',
    code: 'SUMMER25',
    discount: '25% off',
    validUntil: '2023-09-30',
    description: 'Summer special discount on all rooms'
  },
  {
    id: 'disc-002',
    code: 'EARLYBIRD',
    discount: '15% off',
    validUntil: '2023-12-31',
    description: 'Early booking discount for next year'
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="page-container py-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="glass-card rounded-xl overflow-hidden sticky top-24">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                      <img 
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">John Doe</h3>
                      <p className="text-muted-foreground text-sm">Premium Member</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-primary/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Credits</p>
                      <p className="font-semibold text-lg">250 Points</p>
                    </div>
                    <button className="btn-primary py-1 px-3 text-sm">Redeem</button>
                  </div>
                </div>
                
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'overview' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Home className="h-5 w-5" />
                        <span>Overview</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('reservations')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'reservations' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Calendar className="h-5 w-5" />
                        <span>Reservations</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('payments')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'payments' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Payments</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('discounts')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'discounts' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Tag className="h-5 w-5" />
                        <span>Discounts</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('messages')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'messages' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <MessageSquare className="h-5 w-5" />
                        <span>Messages</span>
                        <span className="ml-auto bg-sea-dark text-white text-xs font-medium px-2 py-0.5 rounded-full">3</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('profile')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'profile' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <User className="h-5 w-5" />
                        <span>Profile</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          activeTab === 'settings' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="border-t border-border mt-4 pt-4">
                    <NavLink 
                      to="/"
                      className="w-full flex items-center space-x-3 p-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-6"
              >
                {activeTab === 'overview' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
                      <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors relative">
                          <Bell className="h-5 w-5" />
                          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                        <button 
                          onClick={() => setActiveTab('messages')}
                          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors relative"
                        >
                          <MessageSquare className="h-5 w-5" />
                          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <h3 className="text-muted-foreground font-medium mb-2">Upcoming Reservations</h3>
                        <p className="text-3xl font-bold">1</p>
                      </div>
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <h3 className="text-muted-foreground font-medium mb-2">Total Spent</h3>
                        <p className="text-3xl font-bold">$2,150</p>
                      </div>
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <h3 className="text-muted-foreground font-medium mb-2">Available Credits</h3>
                        <p className="text-3xl font-bold">250</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Recent Reservations</h3>
                        <button 
                          onClick={() => setActiveTab('reservations')}
                          className="text-primary font-medium hover:underline"
                        >
                          View All
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {mockReservations.map((reservation) => (
                          <div key={reservation.id} className="glass-card rounded-lg p-4 border border-border">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{reservation.roomType}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(reservation.checkIn).toLocaleDateString()} - {new Date(reservation.checkOut).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-center mt-2 md:mt-0">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  reservation.status === 'upcoming' 
                                    ? 'bg-sea-light text-sea-dark' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {reservation.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                                </span>
                                <span className="ml-4 text-lg font-semibold">${reservation.amount}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Available Discounts</h3>
                        <button 
                          onClick={() => setActiveTab('discounts')}
                          className="text-primary font-medium hover:underline"
                        >
                          View All
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {mockDiscounts.map((discount) => (
                          <div key={discount.id} className="glass-card rounded-lg p-4 border border-border">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div>
                                <div className="flex items-center mb-1">
                                  <span className="font-mono font-bold text-primary">{discount.code}</span>
                                  <span className="ml-3 text-sm font-semibold">{discount.discount}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{discount.description}</p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <p className="text-xs text-muted-foreground">Valid until: {new Date(discount.validUntil).toLocaleDateString()}</p>
                                <button className="mt-1 text-sm font-medium text-primary hover:underline">Apply Code</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reservations' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Your Reservations</h2>
                    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">All</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Upcoming</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Completed</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Canceled</button>
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Search reservations..." 
                          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {mockReservations.map((reservation) => (
                        <div key={reservation.id} className="glass-card rounded-lg p-6 border border-border">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4 h-32 rounded-lg overflow-hidden">
                              <img 
                                src={reservation.roomType === "Desert View Suite" 
                                  ? "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  : "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                } 
                                alt={reservation.roomType} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold">{reservation.roomType}</h3>
                                <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                                  reservation.status === 'upcoming' 
                                    ? 'bg-sea-light text-sea-dark' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {reservation.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-in</p>
                                  <p className="font-medium">{new Date(reservation.checkIn).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-out</p>
                                  <p className="font-medium">{new Date(reservation.checkOut).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Reservation ID</p>
                                  <p className="font-medium">{reservation.id}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Amount</p>
                                  <p className="font-medium">${reservation.amount}</p>
                                </div>
                              </div>
                              
                              <div className="flex flex-col md:flex-row gap-3 mt-4">
                                {reservation.status === 'upcoming' ? (
                                  <>
                                    <button className="btn-primary py-2">Modify Reservation</button>
                                    <button className="btn-outline text-destructive border-destructive hover:bg-destructive/10 py-2">Cancel Reservation</button>
                                  </>
                                ) : (
                                  <button className="btn-primary py-2">Book Again</button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'payments' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Payment History</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Payment Method</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockPayments.map((payment) => (
                            <tr key={payment.id}>
                              <td className="px-6 py-4 whitespace-nowrap">{new Date(payment.date).toLocaleDateString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap font-medium">${payment.amount}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{payment.method}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                  {payment.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                      <div className="space-y-4">
                        <div className="glass-card rounded-lg p-4 border border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-10 w-16 bg-blue-600 rounded-md mr-4 flex items-center justify-center text-white font-bold">VISA</div>
                              <div>
                                <p className="font-medium">Visa •••• 4242</p>
                                <p className="text-sm text-muted-foreground">Expires 09/25</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">Default</span>
                              <button className="text-sm text-muted-foreground hover:text-foreground">Edit</button>
                              <button className="text-sm text-destructive">Remove</button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card rounded-lg p-4 border border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-10 w-16 bg-orange-600 rounded-md mr-4 flex items-center justify-center text-white font-bold">MC</div>
                              <div>
                                <p className="font-medium">Mastercard •••• 5555</p>
                                <p className="text-sm text-muted-foreground">Expires 12/24</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="text-sm text-primary">Set as Default</button>
                              <button className="text-sm text-muted-foreground hover:text-foreground">Edit</button>
                              <button className="text-sm text-destructive">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="btn-outline mt-4">Add Payment Method</button>
                    </div>
                  </div>
                )}
                
                {activeTab === 'discounts' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Discounts & Deals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockDiscounts.map((discount) => (
                        <div key={discount.id} className="glass-card rounded-lg p-6 border border-border">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                              {discount.discount}
                            </span>
                            <p className="text-sm text-muted-foreground">Valid until: {new Date(discount.validUntil).toLocaleDateString()}</p>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{discount.description}</h3>
                          <div className="mt-4 p-3 bg-muted rounded-lg flex items-center justify-between">
                            <code className="font-mono font-bold text-primary">{discount.code}</code>
                            <button className="btn-primary py-1.5 px-3 text-sm">Apply Code</button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="glass-card rounded-lg p-6 border border-primary/20 bg-primary/5 mt-8">
                      <h3 className="text-lg font-semibold mb-3">Have a Promo Code?</h3>
                      <div className="flex flex-col md:flex-row gap-3">
                        <input 
                          type="text" 
                          placeholder="Enter promo code" 
                          className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <button className="btn-primary py-2 whitespace-nowrap">Apply Code</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'messages' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Messages</h2>
                    <p className="text-muted-foreground mb-4">Your conversations with Acacia Camp staff and other guests.</p>
                    <div className="flex h-[500px] border border-border rounded-lg overflow-hidden">
                      <div className="w-1/3 border-r border-border">
                        <div className="p-3 border-b border-border bg-muted">
                          <input 
                            type="text" 
                            placeholder="Search messages..." 
                            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div className="overflow-y-auto h-[calc(500px-57px)]">
                          <div className="p-3 border-b border-border bg-primary/5 flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm">Guest Services</h4>
                                <span className="text-xs text-muted-foreground">3m ago</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">Welcome to Acacia Camp! We hope you're...</p>
                            </div>
                          </div>
                          
                          <div className="p-3 border-b border-border flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm">Spa Services</h4>
                                <span className="text-xs text-muted-foreground">Yesterday</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">Your spa appointment has been confirmed...</p>
                            </div>
                          </div>
                          
                          <div className="p-3 border-b border-border flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm">Dining Reservations</h4>
                                <span className="text-xs text-muted-foreground">2 days ago</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">Thank you for your reservation at our...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-2/3 flex flex-col">
                        <div className="p-4 border-b border-border flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img 
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">Guest Services</h4>
                              <p className="text-xs text-muted-foreground">Online</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4">
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-end">
                              <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                                <img 
                                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                  alt="Profile" 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="bg-muted rounded-lg rounded-bl-none px-4 py-2 max-w-[80%]">
                                <p className="text-sm">Welcome to Acacia Camp! We hope you're enjoying your stay with us. Is there anything we can assist you with?</p>
                                <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                              </div>
                            </div>
                            
                            <div className="flex items-end justify-end">
                              <div className="bg-primary/10 rounded-lg rounded-br-none px-4 py-2 max-w-[80%]">
                                <p className="text-sm">Yes, I'd like to book a desert excursion for tomorrow. What options do you have available?</p>
                                <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
                              </div>
                            </div>
                            
                            <div className="flex items-end">
                              <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                                <img 
                                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                  alt="Profile" 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="bg-muted rounded-lg rounded-bl-none px-4 py-2 max-w-[80%]">
                                <p className="text-sm">We have several options for desert excursions:</p>
                                <ol className="list-decimal text-sm pl-5 mt-1">
                                  <li>Sunrise Desert Safari (5 AM - 9 AM)</li>
                                  <li>Bedouin Tea Experience (2 PM - 6 PM)</li>
                                  <li>Stargazing Desert Tour (7 PM - 10 PM)</li>
                                </ol>
                                <p className="text-sm mt-2">Would you like to book any of these?</p>
                                <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border-t border-border">
                          <div className="flex space-x-3">
                            <input 
                              type="text" 
                              placeholder="Type a message..." 
                              className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button className="btn-primary px-4">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                    <div className="glass-card rounded-lg p-6 border border-border mb-8">
                      <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/4 flex flex-col items-center">
                          <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-primary mb-4">
                            <img 
                              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Profile" 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <button className="btn-outline py-1.5 text-sm w-full">Change Photo</button>
                        </div>
                        
                        <div className="flex-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">First Name</label>
                              <input 
                                type="text" 
                                value="John" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Last Name</label>
                              <input 
                                type="text" 
                                value="Doe" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                              <input 
                                type="email" 
                                value="john.doe@example.com" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Phone Number</label>
                              <input 
                                type="tel" 
                                value="+1 (555) 123-4567" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Country</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Language</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>English</option>
                                <option>French</option>
                                <option>Spanish</option>
                                <option>German</option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-6">
                            <button className="btn-primary">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">Change Password</h3>
                    <div className="glass-card rounded-lg p-6 border border-border">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Current Password</label>
                          <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">New Password</label>
                          <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-1">Confirm New Password</label>
                          <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                        <div>
                          <button className="btn-primary">Update Password</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                    
                    <div className="space-y-8">
                      <div className="glass-card rounded-lg p-6 border border-border">
                        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-muted-foreground">Receive updates about your reservations and account via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">SMS Notifications</p>
                              <p className="text-sm text-muted-foreground">Receive text messages for important updates and reminders</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Marketing Communications</p>
                              <p className="text-sm text-muted-foreground">Receive special offers, discounts, and news about Acacia Camp</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg p-6 border border-border">
                        <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Profile Visibility</p>
                              <p className="text-sm text-muted-foreground">Allow other guests to see your profile and posts</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Data Sharing</p>
                              <p className="text-sm text-muted-foreground">Allow Acacia Camp to use your data to improve services</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked />
                              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg p-6 border border-border">
                        <h3 className="text-lg font-semibold mb-4">Account Management</h3>
                        <div className="space-y-4">
                          <button className="text-muted-foreground hover:text-foreground transition-colors">Download Your Data</button>
                          <div className="border-t border-border pt-4">
                            <button className="text-destructive hover:text-destructive/80 transition-colors">Delete Account</button>
                          </div>
                        </div>
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

export default Dashboard;
