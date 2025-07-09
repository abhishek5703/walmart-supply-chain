import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 font-sans">
      <main className="px-6 md:px-20 py-16 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
              Empowering Retailers with Smart Supply Chains
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              AI-driven insights, automated supplier scoring, and real-time supply chain visibility — all in one platform.
            </p>
            <Link
              to="/signup"
              className="mt-6 inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-semibold transition"
            >
              Get Started
            </Link>
          </div>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-green-700 mb-2">Our Mission</h2>
              <p className="text-gray-700 text-sm">
                Track every purchase order. Automate every step. Trust your supply chain. With Sage Supply Chain Intelligence,
                consumer brands move faster and smarter without overhauling existing systems.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-green-700 mb-2">Retailer Challenges</h2>
              <p className="text-gray-700 text-sm">
                Retailers face issues like late deliveries and quality failures. Our system offers real-time analytics,
                supplier scoring, and smart alerts to keep your operations on track.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
              <h2 className="text-xl font-bold text-green-700 mb-2">What Makes Us Different</h2>
              <p className="text-gray-700 text-sm mb-4">
                We combine intuitive design with powerful analytics to give you complete control over supplier performance.
                Our dashboard simplifies decision-making and offers a proactive approach to managing supply chain risks.
              </p>
              <div
                className="aspect-[3/2] rounded-lg bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4XkkUJIC6JGspWUSyAPbXxJ4_kGjC4s7F_obGdnqhVZKPEA_LfRRJEWMzLmRiyCrD0m9h6_Qf-2JaN8oO2HgfvDRkmDcTxM7A1D39ZsXfT_F_U9AAx05V-n4TnKkInqkrgr3OtJ0n370-7ElUY5shJIxu554i-glipC1JnyQDnG74uEzpLOelXFN1qp1kCDHcmFqUip6SOPve7Tn4p1A0ffSVCKIUxED70yYal1JvmuWp9jvDp6vEuTh73tldrbMPqaYjy_ttEBg')",
                }}
              ></div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t py-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-6">
            {["Company", "About Us", "Contact", "Resources", "Support", "Legal", "Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" className="hover:text-green-600 transition">
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs">© 2025 Retail Insights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;