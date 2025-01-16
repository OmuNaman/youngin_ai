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
  Book,
  Shield,
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
    {
      icon: <Languages className="w-10 h-10 text-purple-400" />,
      title: "Speaks Your Language",
      description:
        "Don't matter if it's Python, JavaScript, or C++, this AI knows your language.",
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-400" />,
      title: "Always On the Clock",
      description:
        "24/7, this AI is ready to roll. Get your code reviewed anytime, day or night.",
    },
    {
      icon: <Book className="w-10 h-10 text-purple-400" />,
      title: "Street Smart Learning",
      description:
        "This AI is always learnin', always evolvin'. It stays on top of the latest coding trends.",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
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
              onClick={() => handleNavigation("/dashboard")}
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
      </div>
    </div>
  );
};

export default HomePage;