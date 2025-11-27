import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { AlertTriangle, ShieldCheck, Package } from 'lucide-react';

const VULN_DATA = [
  { name: 'Mon', critical: 4, high: 10, low: 20 },
  { name: 'Tue', critical: 3, high: 12, low: 25 },
  { name: 'Wed', critical: 2, high: 8, low: 22 },
  { name: 'Thu', critical: 5, high: 15, low: 30 },
  { name: 'Fri', critical: 1, high: 5, low: 18 },
  { name: 'Sat', critical: 0, high: 4, low: 15 },
  { name: 'Sun', critical: 0, high: 2, low: 12 },
];

const STORAGE_DATA = [
  { name: 'Docker', value: 450, color: '#3b82f6' },
  { name: 'NPM', value: 320, color: '#ef4444' },
  { name: 'Maven', value: 210, color: '#f59e0b' },
  { name: 'PyPI', value: 150, color: '#10b981' },
];

const DashboardPreview: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-medium mb-6">
              <ShieldCheck className="h-4 w-4" />
              Security First Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Real-time insights into your security posture
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              SecureStor doesn't just store files. It actively scans every artifact for known vulnerabilities using industry-standard tools like Grype and Trivy. Get instant alerts and block vulnerable deployments automatically.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                   <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Vulnerability Blocking</h4>
                  <p className="text-sm text-slate-400">Automatically prevent pulls for artifacts with critical CVEs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                   <Package className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Supply Chain Visibility</h4>
                  <p className="text-sm text-slate-400">Generate SBOMs automatically for all Docker images.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual Dashboard */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
              <h3 className="text-white font-bold text-lg">Security Overview</h3>
              <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">Last 7 Days</span>
            </div>

            <div className="space-y-8">
              {/* Chart 1: Vulnerabilities */}
              <div className="h-48 w-full">
                <h4 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">Vulnerabilities Detected</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={VULN_DATA}>
                    <defs>
                      <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#64748b" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                      itemStyle={{ fontSize: 12 }}
                    />
                    <Area type="monotone" dataKey="critical" stroke="#ef4444" fillOpacity={1} fill="url(#colorCritical)" strokeWidth={2} />
                    <Area type="monotone" dataKey="high" stroke="#f59e0b" fillOpacity={1} fill="url(#colorHigh)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Chart 2: Storage */}
              <div className="h-40 w-full">
                <h4 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">Storage Usage by Format (GB)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={STORAGE_DATA} layout="vertical">
                    <XAxis type="number" stroke="#64748b" hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" width={60} tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                      {STORAGE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;