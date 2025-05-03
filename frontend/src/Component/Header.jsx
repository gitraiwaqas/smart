const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        {/* Logo (if image) */}
        {/* <img src={logo} alt="SmartCives Logo" className="h-8 w-auto" /> */}

        {/* Logo as text */}
        <p to="/" className="text-2xl font-bold text-gray-900 tracking-wide">
          SmartCives
        </p>
      </div>
    </header>
  );
};

export default Header;
