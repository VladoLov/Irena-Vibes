import aboutImg from "../images/kitchen 2.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="kitchen" />
        </div>
        <article className="about-info">
          {/* <h3>explore the difference</h3> */}
          <p>
            Welcome to Vocation Vibes Apartment Mostar, where comfort meets
            style. Our apartments are designed to provide you with a cozy and
            luxurious living experience. With modern amenities and a prime
            location, Vocation Vibes Apartment Mostar is the perfect place to
            call home.
          </p>
          <p>
            Explore our spacious floor plans, enjoy the breathtaking views, and
            discover the convenience of city living. Our dedicated team is
            committed to ensuring your comfort and satisfaction throughout your
            stay.
          </p>
          <p>
            Whether you're looking for a temporary residence or a long-term
            home, Vocation Vibes Apartment Mostar offers a range of options to
            suit your needs. Come and experience the exceptional living at
            Vocation Vibes Apartment Mostar.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
