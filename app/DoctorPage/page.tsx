'use client';
import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiRefreshCw, FiMoreVertical } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import DoctorSidebar from './DoctorSidebar';
import DoctorDashboard from './DoctorDashboard';
import DoctorStudiesTable from './DoctorStudiesTable';
import DoctorProfile from './DoctorProfile';
import DoctorPaymentPage from './DoctorPaymentPage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Add import
import DoctorHistory from './DoctorHistory';

const DoctorPage = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalEarnings, setTotalEarnings] = useState(900); // Example value, should be fetched from your data

  // Update the renderContent function
  const renderContent = () => {
      switch (currentView) {
        case 'dashboard':
          return <DoctorDashboard />;
        case 'pending':
          return <DoctorStudiesTable statusFilter="pending" title="Pending Cases" />;
        case 'active':
          return <DoctorStudiesTable statusFilter="active" title="Active Cases" />;
        case 'completed':
          return <DoctorStudiesTable statusFilter="completed" title="Completed Cases" />;
        case 'payment':
          return <DoctorPaymentPage />;
        case 'history':
          return <DoctorHistory />;
        case 'profile':
          return <DoctorProfile />;
        default:
          return <DoctorDashboard />;
      }
    };

  return (
    <div className="min-h-screen bg-medical-gray-50 flex">
      <DoctorSidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        sidebarOpen={sidebarOpen}
        onToggleSidebar={setSidebarOpen}
      />
      
      <div className="flex-1">
        <header className="bg-white border-b border-medical-gray-200 px-4 lg:px-6 h-20 flex items-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden mr-4 text-medical-gray-600 hover:text-medical-gray-700"
              >
                {sidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
              <h1 className="text-xl font-semibold text-medical-gray-700">CyberTeckNinja</h1>
              <div className="flex items-center text-medical-blue text-lg font-semibold">
                <BiRupee className="w-5 h-5" />
                <span>{totalEarnings.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-medical-gray-500">
                Welcome <span className="text-medical-blue font-medium">CyberTeckNinja Doctor Page</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                className="px-3 bg-red-500 text-white border-medical-gray-300  hover:bg-medical-gray-50"
                onClick={() => {
                  // Add your logout logic here
                  window.location.href = '/';
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DoctorPage;
