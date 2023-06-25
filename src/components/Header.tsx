const Header = () => {
  const currentDate = new Date().toDateString();
  return (
    <div className="h-16 border-b border-peach flex items-center px-6">
      {currentDate}
    </div>
  );
};

export default Header;
