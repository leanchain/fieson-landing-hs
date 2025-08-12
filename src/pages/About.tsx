import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url(/public/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-4">About Fieson AI</h1>
            <p className="text-xl">
              Innovating lead generation for service businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Fieson AI, our mission is to empower local service businesses
            with cutting-edge artificial intelligence to revolutionize their
            lead generation and sales processes. We believe that every business,
            regardless of size, deserves access to powerful tools that can drive
            sustainable growth and efficiency.
          </p>
          <p className="text-lg text-gray-600">
            We are committed to developing intuitive, effective, and ethical AI
            solutions that not only find new customers but also foster lasting
            relationships between businesses and their communities.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To be the leading AI partner for service industries worldwide, known
            for our innovative technology, exceptional results, and unwavering
            commitment to client success. We envision a future where businesses
            can focus more on delivering excellent services and less on the
            complexities of customer acquisition.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>
              Innovation: Continuously pushing the boundaries of AI to deliver
              superior solutions.
            </li>
            <li>
              Integrity: Operating with transparency, honesty, and ethical
              practices.
            </li>
            <li>
              Customer Success: Prioritizing our clients' growth and
              satisfaction above all else.
            </li>
            <li>
              Excellence: Striving for the highest quality in everything we do.
            </li>
            <li>
              Collaboration: Working together with our clients and partners to
              achieve shared goals.
            </li>
          </ul>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pankaj Kumar */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src="/images/team/pankaj-kumar.jpeg"
                alt="Pankaj Kumar"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Pankaj Kumar
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Founding Technical Lead
              </p>
              <p className="text-md text-gray-700 mb-4">
                Pankaj has extensive experience in software engineering,
                particularly in building scalable distributed systems and
                implementing AI/ML algorithms. He previously led development at
                Google (YouTube) and Amazon, focusing on data infrastructure,
                cost optimization, and real-time systems.
              </p>
              <a
                href="https://www.linkedin.com/in/pankaj4u4m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                View LinkedIn Profile
              </a>
            </div>

            {/* Bart Rosier */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src="/images/team/bart-rosier.jpeg"
                alt="Bart Rosier"
                className="w-32 h-32 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Bart Rosier
              </h3>
              <p className="text-lg text-gray-600 mb-4">Co-Founder and CEO</p>
              <p className="text-md text-gray-700 mb-4">
                Bart is an experienced entrepreneur and startup growth expert
                with a strong background in product development, engineering,
                and commercial strategy. He co-founded Etergo (acquired by Ola
                Electric Mobility) and has advised numerous high-growth startups
                in both the US and EU.
              </p>
              <a
                href="https://www.linkedin.com/in/bartrosier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Learn more about how Fieson AI can help your business thrive.
          </p>
          <a
            href="https://cal.com/bart-rosier/session-bart"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 smooth-transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
