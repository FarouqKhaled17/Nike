import Hero from "./sections/Hero.jsx";
import { CustomerReviews, Footer, Subscribe,PopularProducts,SuperQuality,SpecialOffer, Services } from "./sections/index.js";

const App=()=>(


<main className="relative">
  {/* nav */}
  <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
  </section>
  <section className="padding">
    <PopularProducts/>
  </section>
  <section className="padding">
    <SuperQuality/>
  </section>
  <section className="padding padding-x py-10">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="padding bg-pale-blue padding">
    <CustomerReviews/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
  </section>
  <section className="padding bg-black padding-x padding-t pb-8">
    <Footer/>
  </section>

</main>


);

export default App;