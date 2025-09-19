import React,{ useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [activeTab, setActiveTab] = useState('Email')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // 🔗 integrate your backend login API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-green-200   px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Welcome Back
        </h2>
        
          <h5>Login With:</h5>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="flex gap-2">
              <button onClick={()=>setActiveTab('Email')} className= {`${activeTab==='Email'  ? 'bg-green-600 text-white': 'text-black'} px-3 rounded-lg font-semibold hover:bg-green-700 transition py-2 border-1`}>Email</button>
              <button onClick={()=>setActiveTab('Phone')} className={`${activeTab==='Phone'  ? 'bg-green-600 text-white': 'text-black'} px-3 rounded-lg font-semibold hover:bg-green-700 transition py-2 border-1`}>Phone Number</button>
               </div>

             {activeTab==='Email' &&  (
            <>
              <div >
            <label className="block text-sm font-medium text-gray-700">Email</label>
           
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-3 py-2"
              placeholder="you@example.com"
            />


          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-3 py-2"
              placeholder="••••••••"
            />
          </div>
      </>
               ) 
           }

           {
            activeTab === 'Phone' && (
              <>
              <div >
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                type="tel"
                name="phone"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-3 py-2"
                placeholder="Mobile No.."/>
              </div>

                <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 px-3 py-2"
              placeholder="••••••••"
            />
          </div>
                </>

            )
           }
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mt-3"
          >
            Log In
          </button>
           </div>
        </form>
       

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
