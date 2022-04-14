import { allBrands } from "components/filters";
import { brandLogos } from "utils";
import "css/homepage.css";
import img1 from "assets/images/homepage/balenciaga-white-track-low-top-sneakers-1.jpg";
import img2 from "assets/images/homepage/balenciaga-track-faded-effect-sneakers-2.jpg";
import img3 from "assets/images/homepage/balenciaga-grey-track-clear-sole-sneakers-3.jpg";
import img4 from "assets/images/homepage/balenciaga-grey-triple-s-chunky-sneaker-4.jpg";
import img5 from "assets/images/homepage/balenciaga-black-runner-sneakers-5.jpg";
// import vid1 from "assets/videos/vid1.mp4";
import { Link } from "react-router-dom";
import useProduct from "hooks/useProducts";
import { FILTER_BY_BRAND } from "types/product";

export default function Home() {
  const images = [img1, img2, img3, img4, img5];
  const { dispatch } = useProduct();
  return (
    <main>
      {/* <video loop autoPlay muted className="bg-video">
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className="bg-trs">
        <div>Ts</div>
      </div> */}
      {images.map((img) => (
        <div className="item" key={img}>
          <img src={img} alt="" />
    <main className="main-home">
      <section className="homepage-section">
        <div className="backdrop">
          <div className="backdrop-tint">
            <div className="cta-header">
              <h1 className="h1">GET BEST SNEAKERS IN TOWN</h1>
              <h2 className="h2">Curated collection by the Sneakerheads</h2>
              <Link to="/products">
                <button className="cta-btn mt-10" type="button">
                  Shop Now
                  <i className="far fa-arrow-right pl-10" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
        <div className="categories-container">
          <div className="brands">
            <h2 className="h2 mt-32">Shop by Brands</h2>
            <div className="flex flex-wrap justify-center cta-categories mt-10">
              {allBrands.map((brand, i) => (
                <button
                  type="button"
                  className="cta-brand"
                  onClick={() =>
                    dispatch({
                      type: FILTER_BY_BRAND,
                      payload: brand,
                    })
                  }
                  key={Math.random()}
                >
                  <Link to="/products">
                    {brand}
                    <img src={brandLogos[i]} className="brand-logo" alt="" />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}