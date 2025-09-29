import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">About UK Top Casinos</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted guide to finding the best UK-licensed online casinos with exclusive bonuses and safe gaming experiences.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                UK Top Casinos is an independent casino comparison website dedicated to helping UK players find safe, 
                licensed, and rewarding online casino experiences. We are not affiliated with any casino operator, 
                ensuring our reviews remain completely unbiased and focused on what matters most to players.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team consists of experienced gambling industry professionals who understand the UK market, 
                regulatory requirements, and player needs. We've personally tested every casino we recommend, 
                from registration and deposits to game play and withdrawals.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our mission is simple: to provide UK players with accurate, up-to-date information about the best 
                online casinos available to them. We believe that gambling should be fun, safe, and fair, which is 
                why we only recommend casinos that meet our strict criteria for licensing, security, and player protection.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're committed to promoting responsible gambling and ensuring that all our recommended casinos 
                provide adequate tools and support for players who may need help managing their gambling activity.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Choose Casinos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every casino on our site undergoes a rigorous evaluation process. We assess multiple factors including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>UK Gambling Commission licensing and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Game variety and software providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Bonus offers and wagering requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Banking options and withdrawal speeds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Customer support quality and availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Mobile compatibility and user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Responsible gambling tools and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to You</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We promise to always provide honest, unbiased information about online casinos. When you see a 
                casino on our site, you can trust that it has been thoroughly vetted and meets our high standards 
                for safety, fairness, and player satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We regularly update our information to ensure accuracy, and we're always transparent about any 
                commercial relationships we may have with casino operators. Our primary goal is to help you make 
                informed decisions about where to play.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Have questions about our recommendations or need help finding the right casino for you? 
                We're here to help. You can reach us at:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> info@uktopcasinos.org</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
