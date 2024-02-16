/* eslint-disable react/no-unescaped-entities */
import {Link} from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading"> ABOUT US</h1>
          </div>
          <p className="mid">
            Welcome to <b> EATO FOODS</b>, where passion meets palate. Our
            culinary team is dedicated to creating exquisite dishes that delight
            the senses and leave a lasting impression. From the freshest
            ingredients to innovative techniques, every plate reflects our
            commitment to culinary excellence. Join us and embark on a journey
            of flavors, where each bite tells a story of craftsmanship and
            creativity.
          </p>
          <Link to={"/"}>
           Explore Mennu{" "}
           <span>
           <HiOutlineArrowRight />
           </span>
          </Link>
        </div>
        <div className="banner">
        <img src="about.png" alt="about"></img>
        </div>
      </div>
    </section>
  );
}
export default About;
