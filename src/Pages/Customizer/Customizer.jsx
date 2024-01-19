import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../../config/config";
import state from "../../store";
import { download } from "../../assets";
import { downloadCanvasToImage, reader } from "../../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../../config/constants";
import { fadeAnimation, slideAnimation } from "../../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <div className="max-w-7xl mx-auto">
      <AnimatePresence>
        {!snap.intro && (
          <>
            <motion.div
              key={"custom"}
              className="absolute left-0 top-0 z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center min-h-screen">
                <div className="editortabs-container tabs">
                  {EditorTabs.map((tab) => (
                    <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-5 z-10 right-5"
              {...fadeAnimation}
            >
              <CustomButton
                type="field"
                title="Go Back"
                handleClick={() => (state.intro = true)}
                customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Customizer;
