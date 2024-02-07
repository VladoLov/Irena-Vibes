import { features } from "../data";
import Title from "./Title";

const Features = () => {
  return (
    <section className="section services" id="features">
      <Title title="our" subTitle="services" />
      <article className="service">
        <div className="section-center services-center ">
          <div className="service-info grid-center">
            {features.map((feature) => (
              <li className="service-title" key={feature.id}>
                {feature.title}
              </li>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Features;
