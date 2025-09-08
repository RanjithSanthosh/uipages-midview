'use client';
import React, { useState } from "react";
import {
  FiUsers,
  FiClock,
  FiSend,
  FiAlertCircle,
  FiEdit,
  FiUpload,
  FiX,
  FiSave,
  FiFileText,
  FiImage,
} from "react-icons/fi";

interface HospitalData {
  id: string;
  patient: string;
  doctor: string;
  department: string;
  status: "Processing" | "Completed" | "Pending";
  message: string;
  time: string;
  reports: string[];
  notes: string;
}

interface HospitalCenterDashboardProps {
  handleViewStudy: () => void;
}

const HospitalCenterDashboard: React.FC<HospitalCenterDashboardProps> = ({ handleViewStudy }) => {
  const [selectedData, setSelectedData] = useState<HospitalData | null>(null);
  const [editMode, setEditMode] = useState(false);

  const stats = [
    {
      title: "Total Patients",
      value: "540",
      icon: <FiUsers className="w-6 h-6" />,
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Doctors Available",
      value: "35",
      icon: <FiSend className="w-6 h-6" />,
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      title: "Reports Processed",
      value: "220",
      icon: <FiFileText className="w-6 h-6" />,
      color: "bg-purple-500",
      textColor: "text-purple-500",
    },
    {
      title: "Pending Actions",
      value: "18",
      icon: <FiClock className="w-6 h-6" />,
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
  ];

  const [records, setRecords] = useState<HospitalData[]>([
    {
      id: "REC00101",
      patient: "JOHN DOE",
      doctor: "Dr. Smith",
      department: "Cardiology",
      status: "Processing",
      message: "Assigned patient JOHN DOE to Dr. Smith in Cardiology",
      time: "1 hour ago",
      reports: [
        "https://via.placeholder.com/150x150/3B82F6/ffffff?text=ECG",
      ],
      notes: "ECG report uploaded. Awaiting review.",
    },
    {
      id: "REC00102",
      patient: "SARAH LEE",
      doctor: "Dr. Johnson",
      department: "Radiology",
      status: "Completed",
      message: "MRI scan for SARAH LEE uploaded",
      time: "3 hours ago",
      reports: [
        "https://via.placeholder.com/150x150/EF4444/ffffff?text=MRI",
      ],
      notes: "MRI reviewed. Results sent to patient.",
    },
    {
      id: "REC00103",
      patient: "MARK EVANS",
      doctor: "Unassigned",
      department: "Emergency",
      status: "Pending",
      message: "New admission awaiting doctor assignment",
      time: "6 hours ago",
      reports: [],
      notes: "Patient admitted with chest pain. Doctor yet to be assigned.",
    },
  ]);

  const handleEdit = (item: HospitalData) => {
    setSelectedData({ ...item });
    setEditMode(true);
  };

  const handleSave = () => {
    if (selectedData) {
      setRecords(records.map(r => (r.id === selectedData.id ? selectedData : r)));
    }
    setEditMode(false);
    setSelectedData(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Hospital Center Dashboard
        </h1>
        <p className="text-gray-600">
          Central hub for managing hospital data flow and assignments.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <div className={stat.textColor}>{stat.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Data Flow</h2>
        </div>
        <div className="p-6 space-y-4">
          {records.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.status === "Completed"
                      ? "bg-green-500"
                      : item.status === "Processing"
                      ? "bg-blue-500"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <p className="text-sm font-medium text-gray-800">
                      {item.message}
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>ID: {item.id}</span>
                    <span>Patient: {item.patient}</span>
                    <span>Doctor: {item.doctor}</span>
                    <span>Dept: {item.department}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleEdit(item)}
                className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <FiEdit className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <FiUsers className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium text-gray-800">Add New Patient</p>
                <p className="text-sm text-gray-500">Register patient details</p>
              </div>
            </div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <FiUpload className="w-5 h-5 text-purple-500" />
              <div>
                <p className="font-medium text-gray-800">Upload Reports</p>
                <p className="text-sm text-gray-500">Add lab/scan results</p>
              </div>
            </div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <FiSend className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium text-gray-800">Assign Doctor</p>
                <p className="text-sm text-gray-500">Send case to available doctor</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCenterDashboard;
