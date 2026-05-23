import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "framer-motion";

const Ourwork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into Powerful Digital Solution that Connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_mobile_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((Data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-110 duration-500 transition-all cursor-pointer"
          >
            <img src={Data.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{Data.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{Data.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Ourwork;
