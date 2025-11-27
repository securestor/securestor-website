import React from 'react';
import { Globe, ShieldAlert, FileCheck, Landmark } from 'lucide-react';

const REGIONS = [
  {
    region: 'United States',
    flag: '🇺🇸',
    title: 'Executive Order 14028',
    description: 'Mandates SBOMs (Software Bill of Materials) for all software sold to the federal government.',
    solution: 'SecureStor automatically generates CycloneDX SBOMs for every Docker image push.',
    color: 'border-blue-500/30'
  },
  {
    region: 'European Union',
    flag: '🇪🇺',
    title: 'Cyber Resilience Act (CRA)',
    description: 'Requires manufacturers to ensure cybersecurity for the entire lifecycle of products with digital elements.',
    solution: 'Our automated vulnerability scanning ensures you never ship a product with known critical CVEs.',
    color: 'border-yellow-500/30'
  },
  {
    region: 'India',
    flag: '🇮🇳',
    title: 'CERT-In Directives',
    description: 'Mandates secure development practices and 6-hour reporting windows for cyber incidents.',
    solution: 'Immutable audit logs track every artifact access, aiding in rapid incident forensics and reporting.',
    color: 'border-orange-500/30'
  },
  {
    region: 'Global',
    flag: '🌍',
    title: 'ISO 27001 & SOC 2',
    description: 'International standards for information security management and data privacy.',
    solution: 'SecureStor is SOC 2 Type II ready with end-to-end encryption and strict RBAC enforcement.',
    color: 'border-emerald-500/30'
  }
];

const GlobalCompliance: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background world map hint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <Globe className="w-[800px] h-[800px] absolute -right-40 top-20 text-indigo-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Regulatory Compliance</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Don't let compliance slow you down
            </p>
            <p className="mt-4 text-xl text-slate-400">
              Cybersecurity regulations are tightening globally. Whether it's the <strong>US Executive Order</strong> or the <strong>EU Cyber Resilience Act</strong>, using non-compliant tools puts your business at risk of fines and contract losses.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                <ShieldAlert className="h-4 w-4 text-red-400" /> Avoid Fines
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                <FileCheck className="h-4 w-4 text-emerald-400" /> Auto-Report
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 backdrop-blur-sm">
             <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Landmark className="h-5 w-5 text-indigo-400"/> Why this matters now</h3>
             <p className="text-slate-400 mb-4">
                "By 2025, 60% of organizations will use cybersecurity risk as a primary determinant in conducting third-party transactions and business engagements."
             </p>
             <cite className="text-slate-500 not-italic block text-right">— Gartner Research</cite>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REGIONS.map((item, index) => (
            <div key={index} className={`bg-slate-900 rounded-xl p-6 border ${item.color} hover:border-indigo-500/50 transition-all duration-300 group`}>
              <div className="flex items-start justify-between mb-4">
                 <div>
                    <span className="text-3xl mb-2 block">{item.flag}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-indigo-400 uppercase tracking-widest font-bold mt-1">{item.region}</p>
                 </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 min-h-[40px]">{item.description}</p>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800/50">
                <p className="text-sm text-slate-300"><span className="text-emerald-400 font-bold">SecureStor Fix:</span> {item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCompliance;