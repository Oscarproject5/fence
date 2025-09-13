export default function AppFooter() {
  return (
    <footer className="px-4 py-6 pb-24 bg-gray-100">
      {/* Company Info */}
      <div className="text-center mb-4">
        <h3 className="font-bold text-gray-900 mb-1">RGV Fencing</h3>
        <p className="text-xs text-gray-600">Professional Fence Services</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <a href="#services" className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <p className="text-xs font-medium text-gray-700">Our Services</p>
        </a>
        <a href="#why-choose" className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <p className="text-xs font-medium text-gray-700">About Us</p>
        </a>
        <a href="tel:+19568540899" className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <p className="text-xs font-medium text-gray-700">Call Now</p>
        </a>
        <a href="#quote-section" className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <p className="text-xs font-medium text-gray-700">Get Quote</p>
        </a>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700">📞 Call Us</p>
            <p className="text-sm font-bold text-primary-600">+1 (956) 854-0899</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-700">⏰ Hours</p>
            <p className="text-xs text-gray-600">Mon-Sat 7AM-7PM</p>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="text-center mb-4">
        <p className="text-xs text-gray-600 mb-1">Serving Rio Grande Valley</p>
        <p className="text-xs text-gray-500">Brownsville • McAllen • Harlingen • Edinburg</p>
      </div>

      {/* Copyright */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">© 2024 RGV Fencing. All rights reserved.</p>
      </div>
    </footer>
  )
}