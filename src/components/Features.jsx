import { features } from "../data";
import Feature from "./Feature";
import Title from "./Title";

const Features = () => {
  return (
    <section className="section services" id="features">
      <Title title="our" subTitle="services" />
      <div className="service-info grid-center">
        <article className="service">
          <div className="section-center services-center ">
            {features.map((feature) => {
              return <Feature {...feature} key={feature.id} />;
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
