import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          v2.0 is now available
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
          Secure Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            Software Supply Chain
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          The enterprise-grade artifact repository that combines high-performance storage with automated security scanning and compliance management.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://github.com/securestor/securestor" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
            Start Open Source <ArrowRight className="h-5 w-5" />
          </a>
          <a href="https://github.com/securestor/securestor#readme" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-lg transition-all border border-slate-700">
            View Documentation
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Production Ready
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> SOC2 Compliant
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 99.99% Uptime
          </div>
        </div>

        {/* Social Proof / Trust Signals */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
           <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-6">Built for security-critical teams</p>
           <div className="flex justify-center items-center gap-8 md:gap-12 opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-80">
              <span className="flex items-center gap-2 text-lg font-bold text-slate-300"><ShieldCheck className="h-6 w-6"/> SOC2 Type II</span>
              <span className="text-lg font-bold text-slate-300">ISO 27001</span>
              <span className="text-lg font-bold text-slate-300">OpenSSF</span>
              <span className="text-lg font-bold text-slate-300">CNCF</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;