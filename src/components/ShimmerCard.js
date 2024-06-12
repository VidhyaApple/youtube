import React from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

//implement framer motion later
const animationVariants = {
  // initial: {
  //   backgroundPosition: ["-1200px 0"],
  // },
  // animate: {
  //   backgroundPosition: ["1200px 0"],
  //   transition: {
  //     duration: 2.2,
  //     ease: "linear",
  //     repeat: Infinity,
  //     repeatDelay: 5,
  //   },
  // },
  initial: {
    // opacity: 0.8,
    backgroundPosition: ["-1200px 0"],
  },
  animate: (i) => {
    const delay = 5 + i * 0.5; // (now unused)
    return {
      opacity: 1,
      backgroundPosition: ["1200px 0"],
      transition: {
        duration: 1.5,
        opacity: 0,
        x: 0,
        repeat: Infinity,
        repeatDelay: 1,
      },
    };
  },
};

const ShimmerCard = () => {
  // return (
  //   <SkeletonTheme color="grey" highlightColor="#444">
  //     <p>
  //       <Skeleton height={250} width={300} count={20}>
  //       </Skeleton>
  //     </p>
  //   </SkeletonTheme>
  // );
  return Array(20)
    .fill(0)
    .map((n, i) => {
      return (
        <motion.div key={i} variants={animationVariants} initial={"initial"} animate={"animate"} className="m-2 p-2 shadow-lg border border-gray-100">
          <motion.div variants={animationVariants} className="w-64 h-56 bg-gray-100 rounded-md"></motion.div>
          <motion.ul variants={animationVariants} className="m-2 flex flex-wrap flex-col text-sm">
            <motion.li variants={animationVariants} className="h-5 bg-gray-100 rounded-md"></motion.li>
            <motion.li variants={animationVariants} className="mt-2 h-5 bg-gray-100 rounded-md"></motion.li>
          </motion.ul>
        </motion.div>
      );
    });
};

export default ShimmerCard;
