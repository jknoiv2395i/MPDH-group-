import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentEditor from '../components/admin/ContentEditor';
import PropertyManager from '../components/admin/PropertyManager';
import { LayoutDashboard, FileText, Building2, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <LayoutDashboard size={24} className="text-blue-600" />
              MPDH Admin
            </h1>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'content'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText size={20} />
              Site Content
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'properties'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Building2 size={20} />
              Properties
            </button>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-gray-50 p-6 md:p-8">
        {activeTab === 'content' && <ContentEditor />}
        {activeTab === 'properties' && <PropertyManager />}
      </main>
    </div>
  );
};

export default AdminDashboard;
