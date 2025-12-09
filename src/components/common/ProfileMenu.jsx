import { useState, useRef, useEffect } from 'react';

function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 hover:border-primary transition-colors"
      >
        <div className="relative">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-600">JS</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M2 4L3.5 5.5L6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <span className="hidden sm:inline text-sm font-medium text-text-primary">John Smith</span>
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-600">JS</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 5L4.5 7L7.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">John Smith</p>
                <p className="text-xs text-text-secondary">johnsmith@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-gray-50">
              Profile Setting
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-gray-50">
              Property History
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-gray-50">
              Support
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-gray-50 flex items-center justify-between">
              <span>Logout</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;

