import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Code2, 
  Database, 
  Settings, 
  Users, 
  FileCode, 
  Layout, 
  Globe, 
  Server, 
  Shield, 
  GitBranch,
  Terminal,
  Network,
  DatabaseBackup,
  Key,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

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
                    <Code2 className="h-6 w-6 text-primary" />
                    <h2 className="font-semibold text-lg">Developer Dashboard</h2>
                  </div>
                </div>
                
                <nav className="p-3">
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">Development</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'overview' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Layout className="h-4 w-4" />
                        <span>Overview</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('pages')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'pages' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <FileCode className="h-4 w-4" />
                        <span>Pages</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('components')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'components' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Code2 className="h-4 w-4" />
                        <span>Components</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">Database</div>
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
                        onClick={() => setActiveTab('backup')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'backup' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <DatabaseBackup className="h-4 w-4" />
                        <span>Backup</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">System</div>
                  <ul className="space-y-1 mb-4">
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
                    <li>
                      <button 
                        onClick={() => setActiveTab('seo')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'seo' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Globe className="h-4 w-4" />
                        <span>SEO</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('security')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'security' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Shield className="h-4 w-4" />
                        <span>Security</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('deployment')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'deployment' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Server className="h-4 w-4" />
                        <span>Deployment</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase">Themes</div>
                  <ul className="space-y-1 mb-4">
                    <li>
                      <button 
                        onClick={() => setActiveTab('themes')}
                        className={`w-full flex items-center space-x-3 p-2.5 rounded-lg transition-colors ${
                          activeTab === 'themes' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Layout className="h-4 w-4" />
                        <span>Theme Management</span>
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
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Developer Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Active Pages</h3>
                          <FileCode className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">12</p>
                        <p className="text-xs text-primary mt-2">Last updated: 2h ago</p>
                      </div>
                      
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Components</h3>
                          <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">45</p>
                        <p className="text-xs text-primary mt-2">Last updated: 1h ago</p>
                      </div>
                      
                      <div className="glass-card rounded-lg p-5 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-muted-foreground font-medium">Database Tables</h3>
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold">8</p>
                        <p className="text-xs text-primary mt-2">Last updated: 5m ago</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Recent Changes</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Updated Homepage</p>
                                <p className="text-sm text-muted-foreground">Modified hero section</p>
                              </div>
                              <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">New User Component</p>
                                <p className="text-sm text-muted-foreground">Added user profile card</p>
                              </div>
                              <span className="text-xs text-muted-foreground">4h ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Database Migration</p>
                                <p className="text-sm text-muted-foreground">Added user roles table</p>
                              </div>
                              <span className="text-xs text-muted-foreground">1d ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">System Status</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Server Status</p>
                                <p className="text-sm text-muted-foreground">Running on port 8080</p>
                              </div>
                              <span className="text-xs text-green-500">Online</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Database Status</p>
                                <p className="text-sm text-muted-foreground">Connected to PostgreSQL</p>
                              </div>
                              <span className="text-xs text-green-500">Connected</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">API Status</p>
                                <p className="text-sm text-muted-foreground">REST API v1</p>
                              </div>
                              <span className="text-xs text-green-500">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'pages' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Page Management</h2>
                      <button className="btn-primary">Create New Page</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Homepage</h3>
                          <span className="text-xs text-green-500">Published</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Main landing page of the website</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Rooms</h3>
                          <span className="text-xs text-green-500">Published</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Room listing and details</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">About</h3>
                          <span className="text-xs text-yellow-500">Draft</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">About Acacia Camp</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'components' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Component Library</h2>
                      <button className="btn-primary">Create New Component</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Navbar</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Main navigation component</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">RoomCard</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Room display card component</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Footer</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Site footer component</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit</button>
                          <button className="btn-outline text-sm">Preview</button>
                          <button className="btn-outline text-sm text-destructive">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'themes' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Theme Management</h2>
                      <button className="btn-primary">Create New Theme</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Color Schemes</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Primary Color</label>
                              <div className="flex space-x-2">
                                <input 
                                  type="color" 
                                  className="w-12 h-12 rounded-lg cursor-pointer"
                                  value="#4F46E5"
                                />
                                <input 
                                  type="text" 
                                  value="#4F46E5"
                                  className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                <button className="btn-outline">Reset</button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Secondary Color</label>
                              <div className="flex space-x-2">
                                <input 
                                  type="color" 
                                  className="w-12 h-12 rounded-lg cursor-pointer"
                                  value="#10B981"
                                />
                                <input 
                                  type="text" 
                                  value="#10B981"
                                  className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                <button className="btn-outline">Reset</button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Background Color</label>
                              <div className="flex space-x-2">
                                <input 
                                  type="color" 
                                  className="w-12 h-12 rounded-lg cursor-pointer"
                                  value="#FFFFFF"
                                />
                                <input 
                                  type="text" 
                                  value="#FFFFFF"
                                  className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                <button className="btn-outline">Reset</button>
                              </div>
                            </div>
                            <button className="btn-primary w-full">Save Color Scheme</button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Typography</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Heading Font</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>Inter</option>
                                <option>Roboto</option>
                                <option>Open Sans</option>
                                <option>Montserrat</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Body Font</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>Inter</option>
                                <option>Roboto</option>
                                <option>Open Sans</option>
                                <option>Montserrat</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Base Font Size</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>16px</option>
                                <option>14px</option>
                                <option>18px</option>
                              </select>
                            </div>
                            <button className="btn-primary w-full">Save Typography</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Theme Preview</h3>
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                            <h4 className="font-semibold mb-2">Primary Button</h4>
                            <button className="btn-primary">Click Me</button>
                          </div>
                          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
                            <h4 className="font-semibold mb-2">Secondary Button</h4>
                            <button className="btn-secondary">Click Me</button>
                          </div>
                          <div className="p-4 rounded-lg bg-destructive text-destructive-foreground">
                            <h4 className="font-semibold mb-2">Destructive Button</h4>
                            <button className="btn-destructive">Click Me</button>
                          </div>
                          <div className="p-4 rounded-lg bg-muted">
                            <h4 className="font-semibold mb-2">Muted Text</h4>
                            <p className="text-muted-foreground">This is muted text</p>
                          </div>
                          <div className="p-4 rounded-lg bg-card">
                            <h4 className="font-semibold mb-2">Card Background</h4>
                            <p>This is card text</p>
                          </div>
                          <div className="p-4 rounded-lg bg-background">
                            <h4 className="font-semibold mb-2">Page Background</h4>
                            <p>This is page text</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'database' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Database Management</h2>
                      <button className="btn-primary">Create New Table</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Users</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">User management table</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit Schema</button>
                          <button className="btn-outline text-sm">View Data</button>
                          <button className="btn-outline text-sm text-destructive">Drop Table</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Rooms</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Room information table</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit Schema</button>
                          <button className="btn-outline text-sm">View Data</button>
                          <button className="btn-outline text-sm text-destructive">Drop Table</button>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">Bookings</h3>
                          <span className="text-xs text-green-500">Active</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Booking records table</p>
                        <div className="flex space-x-2">
                          <button className="btn-outline text-sm">Edit Schema</button>
                          <button className="btn-outline text-sm">View Data</button>
                          <button className="btn-outline text-sm text-destructive">Drop Table</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'backup' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Database Backup</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Create Backup</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Backup Name</label>
                              <input 
                                type="text" 
                                placeholder="Enter backup name" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Description</label>
                              <textarea 
                                rows={3}
                                placeholder="Enter backup description" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <button className="btn-primary w-full">Create Backup</button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Recent Backups</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Daily Backup</p>
                                <p className="text-sm text-muted-foreground">Full database backup</p>
                              </div>
                              <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Weekly Backup</p>
                                <p className="text-sm text-muted-foreground">Full database backup</p>
                              </div>
                              <span className="text-xs text-muted-foreground">1d ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Monthly Backup</p>
                                <p className="text-sm text-muted-foreground">Full database backup</p>
                              </div>
                              <span className="text-xs text-muted-foreground">7d ago</span>
                            </div>
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
                      <button className="btn-primary">Create New User</button>
                    </div>
                    
                    <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">All Users</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Admins</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Developers</button>
                        <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">Customers</button>
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
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                  <span className="text-primary font-medium">JD</span>
                                </div>
                                <span className="font-medium">John Doe</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">john.doe@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap">Developer</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">2023-01-15</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button className="text-primary text-sm">Edit</button>
                                <button className="text-destructive text-sm">Delete</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'seo' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">SEO Management</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Meta Tags</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Title</label>
                              <input 
                                type="text" 
                                placeholder="Enter page title" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Description</label>
                              <textarea 
                                rows={3}
                                placeholder="Enter meta description" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Keywords</label>
                              <input 
                                type="text" 
                                placeholder="Enter keywords (comma separated)" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              />
                            </div>
                            <button className="btn-primary w-full">Save Changes</button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">sitemap.xml</p>
                                <p className="text-sm text-muted-foreground">Last updated: 2h ago</p>
                              </div>
                              <button className="btn-outline text-sm">Regenerate</button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">robots.txt</p>
                                <p className="text-sm text-muted-foreground">Last updated: 1d ago</p>
                              </div>
                              <button className="btn-outline text-sm">Edit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Password Policy</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>Strong (Recommended)</option>
                                <option>Medium</option>
                                <option>Weak</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">2FA</label>
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                                <span className="text-sm">Enable Two-Factor Authentication</span>
                              </div>
                            </div>
                            <button className="btn-primary w-full">Save Changes</button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">API Security</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">API Key</label>
                              <div className="flex space-x-2">
                                <input 
                                  type="password" 
                                  placeholder="••••••••••••••••" 
                                  className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                <button className="btn-outline">Regenerate</button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Rate Limiting</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>100 requests per minute</option>
                                <option>50 requests per minute</option>
                                <option>25 requests per minute</option>
                              </select>
                            </div>
                            <button className="btn-primary w-full">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'deployment' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Deployment</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Environment</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Current Environment</label>
                              <select className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>Development</option>
                                <option>Staging</option>
                                <option>Production</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-muted-foreground mb-1">Build Command</label>
                              <input 
                                type="text" 
                                value="npm run build" 
                                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                readOnly
                              />
                            </div>
                            <button className="btn-primary w-full">Deploy</button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Deployment History</h3>
                        <div className="glass-card rounded-lg border border-border p-5">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">v1.2.0</p>
                                <p className="text-sm text-muted-foreground">Production deployment</p>
                              </div>
                              <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">v1.1.0</p>
                                <p className="text-sm text-muted-foreground">Staging deployment</p>
                              </div>
                              <span className="text-xs text-muted-foreground">1d ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">v1.0.0</p>
                                <p className="text-sm text-muted-foreground">Initial deployment</p>
                              </div>
                              <span className="text-xs text-muted-foreground">7d ago</span>
                            </div>
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

export default DeveloperDashboard; 