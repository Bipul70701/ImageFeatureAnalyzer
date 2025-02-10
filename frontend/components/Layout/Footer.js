export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-purple-900 text-gray-300 py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-400/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-poppins font-semibold text-white mb-4">
              About FaceRate
            </h4>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-purple-300 transition-colors">How It Works</a>
              <a href="#" className="block hover:text-purple-300 transition-colors">Features</a>
              <a href="#" className="block hover:text-purple-300 transition-colors">Pricing</a>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-poppins font-semibold text-white mb-4">
              Legal
            </h4>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-purple-300 transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-purple-300 transition-colors">Terms of Service</a>
              <a href="#" className="block hover:text-purple-300 transition-colors">Data Security</a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-poppins font-semibold text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 01-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} FaceRate.co · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}