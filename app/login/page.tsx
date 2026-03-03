import { Plus_Jakarta_Sans } from 'next/font/google';
import { ArrowRight, Mail } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function AuthPage() {
  return (
    // 1. Full-screen background using Space Indigo
    <main className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      
      {/* 2. The Main 2-Column Panel */}
      <div className="w-full max-w-4xl min-h-[550px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Column (Hero/Welcome) */}
        <div className={`${plusJakarta.className} w-full md:w-1/2 bg-[#2e1760] p-12 flex flex-col justify-between relative`}>
          {/* Logo / App Name */}
            <div>
                <h1 className="text-2xl font-bold tracking-tighter">.Jibe</h1>
            </div>

            {/* Welcome Message Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-extrabold leading-tight">
                Welcome <br /> back!
                </h2>
                
                <div className="space-y-1">
                <p className="text-lg font-light opacity-90">
                    Aligning more skills to your dream roles?
                </p>
                <p className="text-lg font-semibold">
                    We got you!
                </p>
                </div>

                {/* Small Arrow Icon */}
                <div className="mt-8 flex items-center justify-center w-10 h-10 rounded-full border border-[#dff3e4]/30">
                <ArrowRight size={20} className="text-[#dff3e4]" />
                </div>
            </div>
        </div>

        {/* Right Column (Form) */}
        <div className={`${plusJakarta.className} w-full md:w-1/2 bg-[#2e1760] text-white p-12 flex flex-col items-center justify-center`}>
  
            {/* 1. Title */}
            <h2 className="text-4xl font-extrabold mb-8">
                Sign in
            </h2>

            {/* 2. Social Icons */}
            <div className="flex gap-4 mb-6">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#7180b9] transition-colors">
                <FaGithub size={20}/>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#7180b9] transition-colors">
                <FaFacebook size={20}/>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#7180b9] transition-colors">
                <FaLinkedin size={20}/>
                </button>
            </div>

            {/* 3. Optional Message */}
            <p className="text-sm mb-8 font-light">
                or use your email account
            </p>

            {/* 4. Sign-in Forms */}
            <form className="w-full max-w-sm space-y-4">
                <div className="relative">
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 bg-[#f0f4f8] border-none rounded-xl focus:ring-2 focus:ring-[#7180b9] outline-none transition-all placeholder-[#171738]"
                />
                </div>
                <div className="relative">
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-3 bg-[#f0f4f8] border-none rounded-xl focus:ring-2 focus:ring-[#7180b9] outline-none transition-all placeholder-[#171738]"
                />
                </div>

                {/* 5. Forgot Password */}
                <div className="text-center">
                <button type="button" className="text-sm hover:underline transition-all">
                    Forgot your password?
                </button>
                </div>

                {/* 6. Sign-in Button */}
                <button className="w-full bg-[#3423a6] font-bold py-3 rounded-xl hover:bg-[#7180b9] transition-transform active:scale-95 shadow-lg mt-4">
                SIGN IN
                </button>
            </form>

            {/* 7. Sign-up Message */}
            <div className="mt-12 text-sm]">
                Don&apos;t have an account? 
                <button className="ml-1 font-bold hover:underline">
                Register now
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}