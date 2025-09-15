import { Menu, Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[480px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Menu */}
          <button className="p-2">
            <Menu className="w-5 h-5" />
          </button>

          {/* Center - Logo */}
          <h1 className="text-lg font-medium">LIVING IDEA</h1>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}