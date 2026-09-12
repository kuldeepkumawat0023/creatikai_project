// 'use client';
// import { useState } from 'react';
// import { CiUser } from 'react-icons/ci';
// import { FaPhoneVolume } from 'react-icons/fa6';
// import { TfiEmail } from 'react-icons/tfi';
// import { RiLockPasswordLine } from 'react-icons/ri';
// import { FaRegAddressCard } from 'react-icons/fa';
// import { GrSend } from 'react-icons/gr';
// import { MdImage } from 'react-icons/md';

// export default function RegisterPage() {
//   const [image, setImage] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 text-white py-[120px]">
//       <div className="w-full sm:w-[90%] md:w-[600px] border bg-gray-950 p-6 md:p-10 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-center mb-6 text-green-400">
//           Registration Form
//         </h2>

//         <form>
//           {/* Image Upload */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <MdImage className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <div className="pl-10 w-full">
//                 <label>
//                 <input
//                   id="image"
//                   type="file"
//                   accept="image/*"
//                   required
//                   onChange={handleImageChange}
//                   className="text-gray-300 w-full"
//                 />
//                 {preview && (
//                   <img
//                     src={preview}
//                     alt="Preview"
//                     className="mt-4 w-24 h-24 object-cover rounded-full border border-gray-600"
//                   />
//                 )}
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Name */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <CiUser className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="name" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Name"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Name
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <TfiEmail className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="email" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Email"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Email
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Password */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <RiLockPasswordLine className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="password" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   id="password"
//                   type="password"
//                   required
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Password"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Password
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <FaPhoneVolume className="text-2xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="number" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   id="number"
//                   type="number"
//                   required
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Phone"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Phone
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <FaRegAddressCard className="text-2xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="address" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   id="address"
//                   type="text"
//                   required
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Address"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Address
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-10 flex justify-center">
//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 w-[180px] bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all duration-300"
//             >
//               <GrSend className="text-xl" />
//               <span className="text-[16px]">Register</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';

import { CiUser } from 'react-icons/ci';
import { FaPhoneVolume } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegAddressCard } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { MdImage } from 'react-icons/md';

function RegisterPage() {
  
  const [Image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !number || !address) {
      swal('Error', 'Please fill all required fields (Name, Email, Phone, Address)', 'error');
      return;
    }

    try {
      setLoading(true);

      // ✅ Create FormData
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      if (password) {
        formData.append('password', password); // 👈 optional
      }
      formData.append('number', number);
      formData.append('address', address);
      if (Image) {
        formData.append('Image', Image); // 👈 optional
      }

      // ✅ Send request to backend
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        body: formData,
        credentials: 'include', // 🔥 allows cookies to be saved
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        // ✅ Save token and admin data in localStorage
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminData', JSON.stringify(data.admin || data.data));

        // ✅ Success alert + redirect to login
        swal('Success', 'Admin registered successfully', 'success').then(() => {
          router.push('/login'); // 👈 Redirect to login page
        });
      } else {
        swal('Error', data?.message || 'Registration failed. Please check backend connection.', 'error');
      }
    } catch (error: any) {
      swal('Error', error.message || 'Something went wrong', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 text-white py-[120px]">
      <div className="w-full sm:w-[90%] md:w-[600px] border bg-gray-950 p-6 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-400">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <MdImage className="text-3xl text-gray-500 absolute left-0 top-6" />
              <div className="pl-10 w-full">
                <label htmlFor="Image">
                  <input
                    id="Image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-gray-300 w-full"
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-4 w-24 h-24 object-cover rounded-full border border-gray-600"
                    />
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <CiUser className="text-3xl text-gray-500 absolute left-0 top-6" />
              <label htmlFor="name" className="w-full pl-10 relative group cursor-text">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Name"
                />
                <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
                  Name
                </p>
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <TfiEmail className="text-3xl text-gray-500 absolute left-0 top-6" />
              <label htmlFor="email" className="w-full pl-10 relative group cursor-text">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Email"
                />
                <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
                  Email
                </p>
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <RiLockPasswordLine className="text-3xl text-gray-500 absolute left-0 top-6" />
              <label htmlFor="password" className="w-full pl-10 relative group cursor-text">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Password"
                />
                <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
                  Password
                </p>
              </label>
            </div>
          </div>

          {/* Number (Phone) */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <FaPhoneVolume className="text-2xl text-gray-500 absolute left-0 top-6" />
              <label htmlFor="number" className="w-full pl-10 relative group cursor-text">
                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Number"
                />
                <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
                  Number
                </p>
              </label>
            </div>
          </div>

          {/* Address */}
          <div className="w-full pt-6 relative">
            <div className="flex items-center w-full py-3 relative">
              <FaRegAddressCard className="text-2xl text-gray-500 absolute left-0 top-6" />
              <label htmlFor="address" className="w-full pl-10 relative group cursor-text">
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Address"
                />
                <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
                  Address
                </p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-10 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-[180px] bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all duration-300"
            >
              <GrSend className="text-xl" />
              <span className="text-[16px]">{loading ? 'Please wait...' : 'Register'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;



// 'use client';
// import { useState, ChangeEvent, FormEvent } from "react";
// import { API_BASE } from "@/lib/api";
// import { useRouter } from "next/router";
// import { useAuth } from "@/hooks/useAuth";
// import { CiUser } from "react-icons/ci";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { TfiEmail } from "react-icons/tfi";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { FaRegAddressCard } from "react-icons/fa";
// import { GrSend } from "react-icons/gr";
// import { MdImage } from "react-icons/md";

// interface RegisterForm {
//   name: string;
//   email: string;
//   password: string;
//   number: string;
//   address: string;
// }

// export default function Register() {
//   const [form, setForm] = useState<RegisterForm>({
//     name: "",
//     email: "",
//     password: "",
//     number: "",
//     address: "",
//   });
//   const [image, setImage] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [msg, setMsg] = useState<string>("");
//   const router = useRouter();
//   const { login } = useAuth();

//   // handle text inputs
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // handle file upload + preview
//   const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // form submit
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const fd = new FormData();
//     Object.keys(form).forEach((key) =>
//       fd.append(key, form[key as keyof RegisterForm])
//     );
//     if (image) fd.append("Image", image);

//     try {
//       const res = await fetch(`${API_BASE}/admins`, {
//         method: "POST",
//         body: fd,
//       });
//       const data = await res.json();

//       if (data.success) {
//         login(data.token, data.data);
//         router.push("/dashboard");
//       } else {
//         setMsg(data.message || "Registration failed");
//       }
//     } catch (err: any) {
//       setMsg("Error: " + err.message);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 text-white py-[120px]">
//       <div className="w-full sm:w-[90%] md:w-[600px] border bg-gray-950 p-6 md:p-10 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-center mb-6 text-green-400">
//           Registration Form
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Image Upload */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <MdImage className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <div className="pl-10 w-full">
//                 <label>
//                   <input
//                     id="image"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFile}
//                     className="text-gray-300 w-full"
//                   />
//                   {preview && (
//                     <img
//                       src={preview}
//                       alt="Preview"
//                       className="mt-4 w-24 h-24 object-cover rounded-full border border-gray-600"
//                     />
//                   )}
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Name */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <CiUser className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="name" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   name="name"
//                   id="name"
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Name"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Name
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <TfiEmail className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="email" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   name="email"
//                   id="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Email"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Email
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Password */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <RiLockPasswordLine className="text-3xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="password" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   name="password"
//                   id="password"
//                   type="password"
//                   required
//                   value={form.password}
//                   onChange={handleChange}
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Password"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Password
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <FaPhoneVolume className="text-2xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="number" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   name="number"
//                   id="number"
//                   type="number"
//                   required
//                   value={form.number}
//                   onChange={handleChange}
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Phone"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Phone
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="w-full pt-6 relative">
//             <div className="flex items-center w-full py-3 relative">
//               <FaRegAddressCard className="text-2xl text-gray-500 absolute left-0 top-6" />
//               <label htmlFor="address" className="w-full pl-10 relative group cursor-text">
//                 <input
//                   name="address"
//                   id="address"
//                   type="text"
//                   required
//                   value={form.address}
//                   onChange={handleChange}
//                   className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500
//                     focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
//                   placeholder="Address"
//                 />
//                 <p className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
//                     peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300
//                     peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1">
//                   Address
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-10 flex flex-col items-center">
//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 w-[180px] bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all duration-300"
//             >
//               <GrSend className="text-xl" />
//               <span className="text-[16px]">Register</span>
//             </button>
//             {msg && (
//               <p className="mt-4 text-red-400 text-center">{msg}</p>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



