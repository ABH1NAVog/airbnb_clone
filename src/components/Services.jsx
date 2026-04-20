import HeartButton from "../components/heartButton";
import Footer from "./Footer";
import "../style/services.css";

const topServices = [
  { title: "Photography", sub: "3 available", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/f920cda5-f821-49e8-921e-e064d4a8e85f.png?im_w=240" },
  { title: "Chefs", sub: "After five days", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/08d0fbb1-ed24-405c-a7de-159fbc963e60.png?im_w=240" },
  { title: "Massage", sub: "8 available", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/e15588ed-1690-4691-a970-bd309bf144ba.png?im_w=240" },
  { title: "Prepared meals", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/e5f868d0-c8c8-4610-b6f8-d339198fda01.png?im_w=240" },
  { title: "Training", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/c9521b82-e972-4a51-ac6e-13ba2fd4b04c.png?im_w=240" },
  { title: "Make-up", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/7c21131b-c749-4e1e-a1f0-94bcb461edb2.png?im_w=240" },
  { title: "Hair", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/d3ae98a3-1c66-4c7c-a2c6-307c52d3ae22.png?im_w=240" },
  { title: "Spa treatments", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/c779734e-7fd8-4925-9425-852431633bd4.png?im_w=240" },
  { title: "Catering", sub: "Coming soon", link: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/3021d523-2aa5-4c91-bbb4-259930ef5157.png?im_w=240" },
];

const chefServices = [
  {
    title: "Authentic Roman meal",
    price: "From ₹3,847 / guest",
    extra: "Minimum ₹7,694 to book",
    rating: "4.97",
    image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1270677-active_media/original/64a9113d-05fa-44f7-95c8-24088567bf0d.jpg?im_w=480",
  },
  {
    title: "Hyperlocal, foraged fare",
    price: "From ₹9,223 / guest",
    extra: "Minimum ₹17,699 to book",
    rating: "5.0",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068057/original/4bc4102d-3381-40b8-bf43-be3142c040ee.jpeg?im_w=480",
  },
  {
    title: "Fusion flavors by Erick",
    price: "From ₹6,478 / guest",
    extra: "Minimum ₹11,336 to book",
    rating: "5.0",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6099393/original/6cc0ffd7-bd7c-450b-9be0-a4ff434c6308.jpeg?im_w=960",
  },
  {
    title: "Mediterranean Fare",
    price: "From ₹6,055 / group",
    extra: "",
    rating: "5.0",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982667/original/ccf6d547-5504-4188-9bf7-6e61169b8ce6.jpeg?im_w=480",
  },
  {
    title: "Catalan cuisine",
    price: "From ₹4,397 / guest",
    extra: "",
    rating: "4.6",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6093232/original/e4b6f0c2-8816-4c16-80ff-9649a67bc842.jpeg?im_w=480",
  },
  {
    title: "Gourmet fusion",
    price: "From ₹8,384 / guest",
    extra: "",
    rating: "4.8",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6074083/original/3c9d07cf-cddf-489e-a850-ebe3ada9cf45.jpeg?im_w=480",
  },
  {
    title: "Vegan delights",
    price: "From ₹4,397 / guest",
    extra: "",
    rating: "4.9",
    image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-ServicesTypeCarousel/original/3021d523-2aa5-4c91-bbb4-259930ef5157.png?im_w=240",
  },

];

export default function Service() {
  return (
    <div className="service-page">
      <h2>Services in New Delhi</h2>

      {/* Top small cards */}
      <div className="top-services-row">
        {topServices.map((item, index) => (
          <div className="small-service-card" key={index}>
            <img src={item.link} alt="" className="small-image-placeholder" />
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>

      <h1>Discover services on Airbnb</h1>
      <h2 className="section-title">Chefs</h2>

      {/* Bottom large cards */}
      <div className="bottom-services-row">
        {chefServices.map((item, index) => (
          <div className="large-service-card" key={index}>
            <img src={item.image} alt="" className="large-image-placeholder" />
            <HeartButton />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            {item.extra && <span>{item.extra}</span>}
            {item.rating && <h5>★ {item.rating}</h5>}
          </div>
        ))}
      </div>      <Footer />    </div>
  );
}