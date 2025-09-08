// 'use client';
// import React, { useState } from 'react';
// import { FiEye, FiEyeOff, FiShield, FiGlobe, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';

// const HospitalAuthPage: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       quote: "This platform has made our radiology workflow seamless. Reports are always on time and accessible in the required format.",
//       name: "Dr. Priya Sharma",
//       role: "Head of Radiology",
//       company: "City Hospital"
//     },
//     {
//       quote: "The integration with our diagnostic center was smooth and the support team is excellent.",
//       name: "Ramesh Kumar",
//       role: "Lab Manager",
//       company: "Sunrise Diagnostics"
//     },
//     {
//       quote: "We can now deliver faster and more accurate reports to our patients, thanks to this platform.",
//       name: "Anita Desai",
//       role: "Technician",
//       company: "Metro Medical Centre"
//     }
//   ];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle authentication logic here
//     console.log('Hospital Login attempt:', { email, password });
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel - Medical Content */}
//       <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-medical-sidebar to-medical-blue-dark relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
//           <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
//           <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
//           {/* Logo and Header */}
//           <div>
//             <div className="flex items-center space-x-2 mb-8">
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-medical-blue-dark font-bold text-2xl">C</span>
//               </div>
//               <span className="text-3xl font-bold">CyberTechNinja</span>
//             </div>
            
//             <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-medical-yellow-400 to-yellow-400 bg-clip-text text-transparent">
//               India's Digital Diagnostics Platform
//             </h1>
            
//             <p className="text-lg text-gray-200 mb-8">
//               Welcome to the future of radiology and diagnostics.
//             </p>
            
//             <p className="text-gray-300 leading-relaxed">
//               Fast, smooth, intuitive and supported by cutting-edge technology, 
//               CyberTechNinja's platform brings out the best in your hospital or diagnostic center, 
//               so you can deliver better care and faster results to your patients.
//             </p>
//           </div>

//           {/* Testimonials */}
//           <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
//             <div className="flex items-start space-x-4">
//               <div className="flex-1">
//                 <p className="text-gray-200 italic mb-4 text-lg leading-relaxed">
//                   "{testimonials[currentTestimonial].quote}"
//                 </p>
//                 <div className="border-l-4 border-medical-yellow-300 pl-4">
//                   <p className="font-semibold text-white text-lg">
//                     {testimonials[currentTestimonial].name}
//                   </p>
//                   <p className="text-gray-300 text-sm">
//                     {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={prevTestimonial}
//                   className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110"
//                 >
//                   <FiArrowLeft className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110"
//                 >
//                   <FiArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Panel - Login Form */}
//       <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
//         <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
//           <CardContent className="p-8">
//             {/* Header */}
//             <div className="flex items-center justify-center mb-8">
//               <div className="flex items-center space-x-2 bg-gradient-to-r from-medical-blue/10 to-medical-blue-dark/10 px-4 py-2 rounded-full">
//                 <FiShield className="w-5 h-5 text-medical-blue" />
//                 <span className="text-sm font-semibold text-medical-blue">SECURE PLATFORM</span>
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
//                 Hospital/Diagnostic Centre Login
//               </h2>
//               <p className="text-gray-600">Sign in to access your dashboard</p>
//             </div>

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Id <span className="text-red-500">*</span>
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter Email Id"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full pr-10"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
//                   </button>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <a href="#" className="text-sm text-medical-blue hover:text-medical-blue-dark transition-colors">
//                   Forgot Password?
//                 </a>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-medical-blue to-medical-blue-dark hover:from-medical-blue-dark hover:to-medical-blue text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               >
//                 Sign In
//               </Button>
//             </form>

//             {/* Footer */}
//             <div className="mt-8 text-center">
//               <p className="text-xs text-gray-500">
//                 © Copyright 2024 - 2025 by CyberTechNinja. All Rights Reserved.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default HospitalAuthPage;



'use client';
import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiShield, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const HospitalAuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "This platform has made our radiology workflow seamless. Reports are always on time and accessible in the required format.",
      name: "Dr. Priya Sharma",
      role: "Head of Radiology",
      company: "City Hospital"
    },
    {
      quote: "The integration with our diagnostic center was smooth and the support team is excellent.",
      name: "Ramesh Kumar",
      role: "Lab Manager",
      company: "Sunrise Diagnostics"
    },
    {
      quote: "We can now deliver faster and more accurate reports to our patients, thanks to this platform.",
      name: "Anita Desai",
      role: "Technician",
      company: "Metro Medical Centre"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Hospital Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Medical Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
          {/* Logo and Header */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-indigo-800 font-bold text-2xl">C</span>
              </div>
              <span className="text-3xl font-bold">CyberTechNinja</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
              India's Digital Diagnostics Platform
            </h1>
            
            <p className="text-lg text-gray-200 mb-8">
              Welcome to the future of radiology and diagnostics.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Fast, smooth, intuitive and supported by cutting-edge technology, 
              CyberTechNinja's platform brings out the best in your hospital or diagnostic center, 
              so you can deliver better care and faster results to your patients.
            </p>
          </div>

          {/* Testimonials */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <p className="text-gray-200 italic mb-4 text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="border-l-4 border-amber-300 pl-4">
                  <p className="font-semibold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <FiArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl border p-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 px-4 py-2 rounded-full">
                <FiShield className="w-5 h-5 text-indigo-700" />
                <span className="text-sm font-semibold text-indigo-700">SECURE PLATFORM</span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                Hospital/Center Login
              </h2>
              <p className="text-gray-600">Sign in to access your dashboard</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                © Copyright 2024 - 2025 by CyberTechNinja. All Rights Reserved.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalAuthPage;

