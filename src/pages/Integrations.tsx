import React from 'react';

const Integrations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/public/hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-4">Integrations</h1>
            <p className="text-xl">Seamlessly connect Fieson AI with your existing tools.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Connect Your Workflow</h2>
          <p className="text-lg text-gray-600 mb-4">
            Fieson AI is designed to integrate effortlessly with the tools you already use every day. Our robust API and pre-built connectors ensure that your lead generation efforts are synchronized with your CRM, marketing automation platforms, and communication tools.
          </p>
          <p className="text-lg text-gray-600">
            This seamless integration means less manual data entry, fewer errors, and a more efficient sales pipeline. Focus on what you do best, while Fieson AI handles the heavy lifting of finding and nurturing leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Example Integration Cards */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <img src="/public/placeholder.svg" alt="CRM Icon" className="mx-auto mb-6 h-24 w-24" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">CRM Systems</h3>
            <p className="text-md text-gray-600">Sync leads directly to your CRM like Salesforce, HubSpot, and Zoho CRM.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <img src="/public/placeholder.svg" alt="Email Icon" className="mx-auto mb-6 h-24 w-24" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Marketing</h3>
            <p className="text-md text-gray-600">Automate email campaigns with integrations to Mailchimp, ActiveCampaign, and more.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <img src="/public/placeholder.svg" alt="Communication Icon" className="mx-auto mb-6 h-24 w-24" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Communication Tools</h3>
            <p className="text-md text-gray-600">Connect with Slack, Microsoft Teams, and other communication platforms for instant alerts.</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Custom Integrations</h2>
          <p className="text-lg text-gray-600">
            Don't see your preferred tool listed? Our flexible API allows for custom integrations, ensuring Fieson AI fits perfectly into your unique tech stack. Contact us to discuss your specific needs.
          </p>
        </div>
      </div>

      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Workflow?</h2>
          <p className="text-xl mb-8">
            Explore the full potential of Fieson AI integrations.
          </p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 smooth-transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
