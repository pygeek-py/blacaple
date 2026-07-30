import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="grain-overlay relative min-h-screen overflow-x-clip bg-ink text-bone">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
