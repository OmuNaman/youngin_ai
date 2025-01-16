import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  Code,
  Zap,
  Users,
  ShieldCheck,
  Settings,
  Smile,
  Clock,
  CheckCircle,
  Languages,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code className="w-10 h-10 text-purple-400" />,
      title: "Straight-Up Code Analysis",
      description:
        "Youngin AI ain't playin'. We analyze your code deep, findin' them sneaky bugs and weak spots.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-400" />,
      title: "Fast as a Drive-By",
      description:
        "Ain't nobody got time to waste. Get your code reviewed in a flash, faster than a cop chase.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-400" />,
      title: "Real-World Tested",
      description:
        "This AI learned from the streets, not just books. It knows the code game inside and out.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-400" />,
      title: "Fort Knox Security",
      description:
        "Your code's locked down tighter than a vault. We ain't about that snitchin' life.",
    },
    {
      icon: <Settings className="w-10 h-10 text-purple-400" />,
      title: "Customize Your Review",
      description:
        "Tweak the AI to fit your style. It's all about keepin' it real, your way.",
    },
    {
      icon: <Smile className="w-10 h-10 text-purple-400" />,
      title: "No-Nonsense Feedback",
      description:
        "Straight talk, no sugar-coatin'. We tell you what's good and what's whack about your code.",
    },
  ];

  const pricingPlan = {
    title: "Free Plan",
    price: "$0",
    features: [
      "Access to core AI review features",
      "Limited number of code reviews per month",
      "Standard code analysis",
      "Community support",
    ],
    buttonText: "Get Started for Free",
    buttonAction: () => navigate("/dashboard"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 text-purple-500 font-heading">
            Youngin AI: Code Reviews That Don't Play
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get your code checked by the streets' smartest AI. We find the
            weak spots, expose the bugs, and keep it 100.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Try It Now
            </button>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 cursor-pointer"
            >
              Learn More
            </ScrollLink>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-10" id="features">
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-500 font-heading">
            Why Youngin AI Runs These Streets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:border-purple-400"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section
          className="container mx-auto px-6 py-10 relative"
          id="pricing"
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl shadow-lg relative z-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-purple-500 font-heading">
                Start Ballin' with the Free Plan
              </h2>
              <p className="text-lg mb-2">
                No need to drop bands, get your code checked for free.
              </p>
              {/* Testimonial (Static Example) */}
              <div className="mb-4">
                <p className="text-gray-400 italic">
                  "Youngin AI kept it real with my code. Found issues I ain't
                  even know I had. This AI a real G."
                </p>
                <p className="text-gray-400 font-bold mt-2">- Lil' Code, Aspiring Dev</p>
              </div>
              <div className="flex justify-center space-x-4 mb-8">
                {/* Replace these with actual icons and data */}
                <div className="flex items-center">
                  <Clock className="text-blue-400 mr-2 w-5 h-5" />
                  <span className="text-sm">
                    Under <span className="font-semibold">5 mins</span>{" "}
                    processing
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 w-5 h-5" />
                  <span className="text-sm">
                    <span className="font-semibold">99.9%</span> accuracy
                  </span>
                </div>
                <div className="flex items-center">
                  <Languages className="text-purple-400 mr-2 w-5 h-5" />
                  <span className="text-sm">
                    <span className="font-semibold">50+</span> languages
                  </span>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 max-w-md mx-auto">
                <div className="mb-4 flex justify-center">
                  <Code className="text-purple-500 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-semibold mb-2 text-purple-400 font-heading">
                  {pricingPlan.title}
                </h3>
                <p className="text-6xl font-bold text-purple-400 mb-6">
                  {pricingPlan.price}
                  <span className="text-xl text-gray-400">/month</span>
                </p>
                <ul className="text-gray-400 mb-6 space-y-2">
                  {pricingPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={pricingPlan.buttonAction}
                  className="bg-gradient-to-r from-purple-500 to-purple-900 hover:from-purple-600 hover:to-purple-800 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 w-full"
                >
                  {pricingPlan.buttonText}
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Join{" "}
                  <span className="text-white font-bold">
                    over 10,000+
                  </span>{" "}
                  ballers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;