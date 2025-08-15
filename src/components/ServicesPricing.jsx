
import React from "react";
import { CheckCircle, Star, Crown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPricing() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = [
    {
      icon: <CheckCircle size={40} className="text-green-400" />,
      title: "Basic Plan",
      price: "$99",
      features: [
        "Responsive Website",
        "Basic SEO",
        "3 Pages Design",
        "Email Support",
      ],
      aos: "fade-up",
    },
    {
      icon: <Star size={40} className="text-yellow-400" />,
      title: "Standard Plan",
      price: "$199",
      features: [
        "Everything in Basic",
        "5 Pages Design",
        "Advanced SEO",
        "24/7 Chat Support",
      ],
      aos: "zoom-in",
    },
    {
      icon: <Crown size={40} className="text-purple-400" />,
      title: "Premium Plan",
      price: "$399",
      features: [
        "Everything in Standard",
        "Unlimited Pages",
        "Custom Animations",
        "Priority Support",
      ],
      aos: "fade-up",
    },
  ];

  return (
    <section
      className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
          data-aos="fade-down"
        >
          Services & Pricing Plans
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-up">
          Choose the perfect plan that suits your needs and budget. All plans
          come with quality assurance and customer satisfaction guarantee.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos={plan.aos}
          >
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-2">
              {plan.title}
            </h3>
            <p className="text-center text-3xl font-extrabold text-yellow-400 mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
