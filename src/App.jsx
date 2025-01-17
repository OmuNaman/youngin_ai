import React, { useState, useEffect } from 'react';
import { Bomb, Flame, Zap, Upload, Crown, Sparkles } from 'lucide-react';

const FunkyLandingPage = () => {
  const [blink, setBlink] = useState(false);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    const rotateInterval = setInterval(() => {
      setRotate(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-black to-red-900 opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 border-b-4 border-yellow-500 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bomb className={`w-10 h-10 text-yellow-400 ${blink ? 'opacity-50' : 'opacity-100'}`} 
                   style={{ transform: `rotate(${rotate}deg)` }} />
              <div className="absolute inset-0 animate-ping bg-yellow-500 rounded-full opacity-20" />
            </div>
            <span className="text-4xl font-black bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 
                           bg-clip-text text-transparent animate-pulse">
              HOOD_DEBUGGA_3000
            </span>
          </div>
          
          <div className="flex space-x-8">
            <button className="text-xl hover:text-yellow-400 transition-all hover:scale-125 transform 
                             font-bold tracking-wider">
              GANG_STORIES
            </button>
            <button className="text-xl hover:text-yellow-400 transition-all hover:scale-125 transform 
                             font-bold tracking-wider">
              DA_SQUAD
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 
                             text-black font-black rounded-xl hover:opacity-80 transition-all 
                             hover:scale-110 transform text-xl tracking-wider">
              GET_LIT() 🔥
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500/20 
                          via-red-500/20 to-purple-500/20 rounded-full mb-12 animate-bounce">
              <Crown className="w-6 h-6 text-yellow-500 mr-3 animate-spin" />
              <span className="text-yellow-400 font-black text-xl tracking-wider">
                NO_CAP_JUST_FACTS.js
              </span>
            </div>
            
            <h1 className="text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 
                             bg-clip-text text-transparent animate-pulse">
                YO CODE GON'
              </span>
              <span className="block text-9xl mt-4 bg-gradient-to-r from-red-500 via-purple-600 
                             to-yellow-500 bg-clip-text text-transparent relative">
                GET THAT DRIP! 💧
                <span className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r 
                               from-yellow-500 via-red-500 to-purple-600 animate-pulse"></span>
              </span>
            </h1>

            <p className="text-gray-300 max-w-4xl mx-auto mb-16 text-3xl font-bold">
              We finna turn yo struggle code into a MASTERPIECE! From hood bugs to hood hugs,
              we gotchu covered! No 🧢 frfr! 
            </p>

            <div className="flex justify-center space-x-8">
              <button className="group px-10 py-6 bg-gradient-to-r from-yellow-500 via-red-500 
                               to-purple-600 rounded-2xl transition-all transform hover:scale-110 
                               hover:rotate-2 font-black text-2xl text-black flex items-center 
                               tracking-wider shadow-lg shadow-yellow-500/50">
                <Upload className="mr-3 w-8 h-8 group-hover:animate-bounce" />
                DROP_THAT_HEAT() 🔥
              </button>
              <button className="px-10 py-6 bg-black/50 rounded-2xl border-4 border-yellow-500 
                               hover:border-purple-500 transition-all transform hover:scale-110 
                               hover:-rotate-2 font-black text-2xl tracking-wider 
                               shadow-lg shadow-purple-500/50">
                SEE_DA_SAMPLES() 👀
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">
            {[
              {
                icon: Sparkles,
                title: "STREET_SMART.analyze()",
                desc: "We catch them bugs like they running from the ops! Your code bout to get that PLATINUM treatment! 💎"
              },
              {
                icon: Zap,
                title: "HOOD_CERTIFIED.optimize()",
                desc: "Turn yo janky code into a CERTIFIED hood classic! Running faster than them ops on a Friday night! 🏃‍♂️"
              },
              {
                icon: Flame,
                title: "KEEP_IT_100.feedback()",
                desc: "We ain't sugar coating nothing! Your code gonna get that raw, uncut feedback straight from the streets! 💯"
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 bg-gradient-to-br from-yellow-500/10 via-red-500/10 
                                   to-purple-500/10 rounded-3xl border-4 border-yellow-500/30 
                                   hover:border-yellow-500 transition-all hover:scale-105 transform 
                                   group hover:rotate-2">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 via-red-500 to-purple-600 
                              rounded-2xl flex items-center justify-center mb-8 group-hover:animate-bounce">
                  <feature.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r 
                             from-yellow-500 to-red-500">{feature.title}</h3>
                <p className="text-gray-300 text-xl font-bold">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-32 text-center">
            <div className="inline-flex flex-col items-center px-12 py-8 bg-gradient-to-br 
                          from-yellow-500/20 via-red-500/20 to-purple-500/20 rounded-3xl border-4 
                          border-yellow-500/30 transform hover:scale-105 transition-all">
              <p className="text-3xl font-black mb-6 bg-gradient-to-r from-yellow-500 to-red-500 
                          bg-clip-text text-transparent">
                "This debugger got more sauce than a cookout! NO CAP FR FR! 🔥" 
              </p>
              <div className="text-xl text-yellow-500 font-bold">
                - CERTIFIED HOOD DEV FROM ZONE 6 💯
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-yellow-500 mt-32 py-8 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 
                           bg-clip-text text-transparent">
              KEEPING_IT_💯.since(2024) • BUILT_DIFFERENT.in("THE A") 🎯
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FunkyLandingPage;