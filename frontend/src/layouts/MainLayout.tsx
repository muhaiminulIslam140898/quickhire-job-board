import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;