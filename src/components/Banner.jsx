import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import CustomButton from "./CustomButton";
const Banner = () => {
  const snap = useSnapshot(state);
  return (
    <div className="max-w-7xl mx-auto overflow-hidden ">
      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="threejs.png"
                alt="logo"
                className="h-8 w-8 object-contain"
              />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET&apos;S <br className="xl:block hidden" /> DO IT!
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md text-normal text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customizable tool. <strong>Unless your imagination</strong>{" "}
                  and define your own style.
                </p>
                <CustomButton
                  type="field"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="px-4 py-2.5 font-bold text-sm w-fit"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
