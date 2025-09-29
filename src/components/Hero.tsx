import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text animate-glow">
            {siteConfig.hero.headline}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto sm:block hidden font-light">
          {siteConfig.hero.subtext}
        </p>

        {/* Trust Badges - Horizontally Scrollable */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center gap-8 text-sm text-gray-300 min-w-max px-4">
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <span className="font-medium">Fast Withdrawals</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🆕</span>
              </div>
              <span className="font-medium">New Casinos</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <span className="font-medium">Best Casinos</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-purple-500/20 to-violet-500/20 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <span className="font-medium">Top Casinos</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🎰</span>
              </div>
              <span className="font-medium">Live Casino</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <span className="font-medium">Big Bonuses</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-gradient-to-r from-pink-500/20 to-rose-500/20 px-4 py-2 rounded-full border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">📱</span>
              </div>
              <span className="font-medium">Mobile Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
