import React from 'react';

const Resources: React.FC = () => {
  const articles = [
    {
      title: "The Future of Lead Generation with AI",
      description: "Explore how artificial intelligence is reshaping the landscape of lead generation for service businesses.",
      imageUrl: "/public/test-image.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Maximizing ROI with Automated Outreach",
      description: "Learn strategies to optimize your outreach campaigns and achieve higher conversion rates.",
      imageUrl: "/public/test-image.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Data-Driven Decisions for Business Growth",
      description: "Understand how leveraging data analytics can provide actionable insights for sustainable business expansion.",
      imageUrl: "/public/test-image.jpg",
      link: "#", // Placeholder link
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/public/hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-4">Resources & Articles</h1>
            <p className="text-xl">Insights and guides to help your business thrive.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-md text-gray-600 mb-4">{article.description}</p>
                <a href={article.link} className="text-blue-600 hover:underline font-semibold">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl mb-8">
            Our team is here to provide you with the resources you need.
          </p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 smooth-transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;
