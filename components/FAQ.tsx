import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "How does migration from JFrog Artifactory or Nexus work?",
    answer: "We provide a dedicated CLI tool 'securestor-migrate' that connects to your existing registry and seamlessly replicates artifacts, checksums, and metadata. For Enterprise customers, our solution engineering team handles the entire migration plan."
  },
  {
    question: "Can I host SecureStor on my own infrastructure?",
    answer: "Yes. Our Enterprise plan includes a self-hosted option that supports Kubernetes (Helm charts), OpenShift, and bare metal Docker deployments. We also support air-gapped environments."
  },
  {
    question: "Is SecureStor SOC 2 Type II compliant?",
    answer: "Yes, we are fully SOC 2 Type II compliant. Our infrastructure includes automated evidence collection, and we can provide our latest audit report upon request after signing an NDA."
  },
  {
    question: "How do you handle high availability?",
    answer: "SecureStor uses a distributed architecture with Redis Sentinel for metadata clustering and supports S3-compatible object storage (AWS S3, MinIO, GCS) for artifact data, ensuring 99.99% uptime and durability."
  },
  {
    question: "Do you support OIDC/SAML for Single Sign-On?",
    answer: "Absolutely. We integrate natively with Keycloak, Okta, Auth0, and Microsoft Entra ID (Azure AD) to map your existing groups to SecureStor RBAC policies."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-800 rounded-lg bg-slate-900 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;