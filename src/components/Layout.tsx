import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex column">
      <Sidebar />
      <div className={`w-full`}>
        <Header />
        <div className="p-6 h-full flex justify-center">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
