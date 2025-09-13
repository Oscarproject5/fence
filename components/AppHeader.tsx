'use client'

export default function AppHeader() {
  return (
    <>
      {/* App Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-center px-4 h-14">
          {/* App Title */}
          <div className="text-center">
            <h1 className="text-lg font-semibold text-gray-900">RGV Fencing</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Professional Services</p>
          </div>
        </div>
      </header>
    </>
  )
}