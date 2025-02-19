import SlimHero from "../components/SlimHero";
import kjvimage from "../assets/why-the-kjv-bible.jpg";

export default function WhyKJV() {
  return (
    <div>
      {/* <SlimHero
        title="Why KJV?"
        subtitle="The King James Version is God's translated word for english speaking people."
      /> */}
      <section className="container is-max-desktop pt-5 mt-5 pb-5 mb-5 is-clearfix">
        <img
          src={kjvimage}
          alt="The King James Version"
          className="featured-image"
        />
        <h2 className="title is-3 is-left mt-5">
          Why use the King James Bible?
        </h2>
      </section>
    </div>
  );
}
