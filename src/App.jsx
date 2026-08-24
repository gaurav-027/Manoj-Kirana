import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BrandStatement from "./components/BrandStatement.jsx";
import ProductCategories from "./components/ProductCategories.jsx";
import RetailWholesale from "./components/RetailWholesale.jsx";
import WholesaleProcess from "./components/WholesaleProcess.jsx";
import WhyManojKirana from "./components/WhyManojKirana.jsx";
import StoreVisual from "./components/StoreVisual.jsx";
import ContactCTA from "./components/ContactCTA.jsx";
import Footer from "./components/Footer.jsx";
import ConnectingLine from "./components/svg/ConnectingLine.jsx";
import { localBusinessSchema } from "./data/business.js";

export default function App() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <ProductCategories />
        <ConnectingLine />
        <RetailWholesale />
        <WholesaleProcess />
        <WhyManojKirana />
        <StoreVisual />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
