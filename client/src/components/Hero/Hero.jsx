import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <br />
              Discover Space
              <br /> Live Better
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              Explore a wide range of rental properties tailored to your needs
            </span>
            <span>
              Make your home search effortless and stress-free with Rentify
            </span>
          </div>

          <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4000} end={5000} duration={3} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium LifeStyle</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={1800} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
