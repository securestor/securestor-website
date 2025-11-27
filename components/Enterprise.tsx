import React from 'react';
import { Shield, Key, Globe, Server, Lock, FileText, CheckCircle } from 'lucide-react';

const Enterprise: React.FC = () => {
  const enterpriseFeatures = [
    {
      title: "Identity & Access Management",
      description: "Seamlessly integrate with your existing identity providers including Okta, Auth0, and Keycloak via OIDC/SAML.",
      icon: Key,
      items: ["Single Sign-On (SSO)", "Fine-grained RBAC", "API Token Scoping"]
    },
    {
      title: "Global Infrastructure",
      description: "Deploy across multiple regions with active-active replication to ensure low latency and high availability.",
      icon: Globe,
      items: ["Multi-Region Sync", "Geo-DNS Routing", "Disaster Recovery"]
    },
    {
      title: "Compliance & Auditing",
      description: "Maintain full visibility into your supply chain with immutable audit logs and automated compliance reporting.",
      icon: FileText,
      items: ["SOC 2 Compliance", "Immutable Audit Trails", "License Enforcement"]
    }
  ];

  return (
    <section id="enterprise" className="py-24 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Enterprise Ready</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Built for scale and control
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            SecureStor provides the governance, reliability, and performance controls needed for large-scale engineering organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {enterpriseFeatures.map((feature, idx) => (
            <div key={idx} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 mb-6 min-h-[80px]">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need a custom deployment?</h3>
            <p className="text-slate-400">We offer on-premise installation and dedicated support for enterprise clients.</p>
          </div>
          <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;