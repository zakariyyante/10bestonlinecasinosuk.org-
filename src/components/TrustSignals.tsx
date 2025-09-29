export default function TrustSignals() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Trust Our Recommendations?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're committed to providing honest, unbiased reviews of UK-licensed casinos. 
            Every casino we recommend has been thoroughly tested and verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* UK Licensed */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">UK Licensed</h3>
            <p className="text-gray-300 text-sm">
              All casinos are licensed by the UK Gambling Commission for your protection
            </p>
          </div>

          {/* Independent Reviews */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Independent Reviews</h3>
            <p className="text-gray-300 text-sm">
              Our reviews are unbiased and based on real player experiences
            </p>
          </div>

          {/* Secure Banking */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Secure Banking</h3>
            <p className="text-gray-300 text-sm">
              All recommended casinos use SSL encryption for safe transactions
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🎧</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-300 text-sm">
              Round-the-clock customer support available at all recommended casinos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
