import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 font-sans">
      <main className="px-6 md:px-20 py-16 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col gap-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
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
          </motion.div>

          <section className="grid md:grid-cols-2 gap-8">
            {["Our Mission", "Retailer Challenges", "What Makes Us Different"].map((title, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${i === 2 ? "md:col-span-2" : ""}`}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <h2 className="text-xl font-bold text-green-700 mb-2">{title}</h2>
                <p className="text-gray-700 text-sm">
                  {i === 0
                    ? "Track every purchase order. Automate every step. Trust your supply chain. With Sage Supply Chain Intelligence, consumer brands move faster and smarter without overhauling existing systems."
                    : i === 1
                    ? "Retailers face issues like late deliveries and quality failures. Our system offers real-time analytics, supplier scoring, and smart alerts to keep your operations on track."
                    : "We combine intuitive design with powerful analytics to give you complete control over supplier performance. Our dashboard simplifies decision-making and offers a proactive approach to managing supply chain risks."}
                </p>
                {i === 2 && (
                  <div
                    className="aspect-[3/2] rounded-lg bg-center bg-cover mt-4"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4XkkUJIC6JGspWUSyAPbXxJ4_kGjC4s7F_obGdnqhVZKPEA_LfRRJEWMzLmRiyCrD0m9h6_Qf-2JaN8oO2HgfvDRkmDcTxM7A1D39ZsXfT_F_U9AAx05V-n4TnKkInqkrgr3OtJ0n370-7ElUY5shJIxu554i-glipC1JnyQDnG74uEzpLOelXFN1qp1kCDHcmFqUip6SOPve7Tn4p1A0ffSVCKIUxED70yYal1JvmuWp9jvDp6vEuTh73tldrbMPqaYjy_ttEBg')",
                    }}
                  ></div>
                )}
              </motion.div>
            ))}
          </section>
        </div>
      </main>

      <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 py-12 px-6 mt-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Resources</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm mb-2">Get the latest updates on product and features.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded-l bg-white border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r text-white font-semibold text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
          © 2025 Retail Insights. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
