export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Casino Guide?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We stand apart from typical casino comparison platforms. Discover what sets us apart and why countless British players rely on our expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Independent & Unbiased</h3>
                <p className="text-gray-300">
                  No gambling operator owns us. Every assessment we provide remains entirely impartial and stems from authentic player feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">UK-Focused Expertise</h3>
                <p className="text-gray-300">
                  Our expertise centers solely on UK-licensed gambling sites, with deep insight into what British players want and need.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Regular Testing & Updates</h3>
                <p className="text-gray-300">
                  Continuous evaluation of gaming selections, promotional offers, and support services keeps our data fresh and reliable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Player Protection First</h3>
                <p className="text-gray-300">
                  Our suggestions exclusively feature sites with robust safer gambling features, protected transactions, and superior player safety standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">UK Regulated Sites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Satisfied Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Help On Demand</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5★</div>
                <div className="text-gray-300 text-sm">User Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}