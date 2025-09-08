'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiActivity, FiUser, FiArrowRight, FiLogIn, FiX } from 'react-icons/fi';

const AuthRoleSelect: React.FC = () => {
  const router = useRouter();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-12 flex flex-col items-center border border-white/20">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <FiActivity className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
            CyberTechNinja
          </span>
        </div>

        <h2 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Role</h2>
        <p className="text-gray-600 mb-12 text-center max-w-md">
          Select your role to access the appropriate dashboard and features
        </p>

        {/* Role Buttons */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
          {/* Center */}
          <button
            onClick={() => router.push('/CenterPage')}
            className="group flex flex-col items-center p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 hover:scale-105 focus:outline-none relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <FiActivity className="w-12 h-12 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-700 group-hover:text-indigo-600">CENTER</span>
                <div className="flex items-center mt-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm mr-2">Access Dashboard</span>
                    <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </button>

          {/* Technician */}
          <button
            onClick={() => router.push('/TechnicianPage')}
            className="group flex flex-col items-center p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 hover:scale-105 focus:outline-none relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <FiUser className="w-12 h-12 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-700 group-hover:text-indigo-600">TECHNICIAN</span>
                <div className="flex items-center mt-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm mr-2">Access Dashboard</span>
                    <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </button>

          {/* Doctor */}
           <button
            onClick={() => router.push('/DoctorPage')}
            className="group flex flex-col items-center p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 hover:scale-105 focus:outline-none relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <FiUser className="w-12 h-12 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-700 group-hover:text-indigo-600">DOCTOR</span>
                <div className="flex items-center mt-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm mr-2">Access Dashboard</span>
                    <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </button>
        </div>

        {/* Auth Section */}
        <button
          onClick={() => setShowAuthModal(true)}
          className="mt-12 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          <FiLogIn className="w-5 h-5" />
          Authentication
        </button>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl w-96 relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FiX className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Authentication
            </h3>

            <div className="flex flex-col gap-4">
              {/* Corrected: Use string URL paths */}
              <button
                onClick={() => router.push('/HospitalAuth')}
                className="hover:cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Hospital / Center Login
              </button>
              {/* Corrected: Use string URL paths */}
              <button
                onClick={() => router.push('/RadiologistAuth')}
                className=" hover:cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Radiologist Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthRoleSelect;

