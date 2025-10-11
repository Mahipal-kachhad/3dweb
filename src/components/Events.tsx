"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const accordionData = [
  {
    title: "Live Satsang & Events",
    content: [
      "Join Maa's divine presence right now. The live broadcast is happening as we speak.",
    ],
  },
  {
    title: "Upcoming Events",
    content: [
      "Akhatrij (30-4-2026)",
      "Vaishakh Sud Punam (12-5-2026)",
      "Jeth Sud Punam (11-6-2026)",
      "Rathyatra Ashadhi Bij (27-6-2026)",
      "Guru Purnima (10-7-2026)",
    ],
  },
  {
    title: "List Of Celebrated Events",
    content: [
      "Akhatrij Event 2019",
      "Chaitra Navaratri Event 2021",
      "Akhatrij Event 2022",
      "Chaitra Navaratri Event 2022",
      "Utrayan Event 2023",
      "Vaishakh Sud Punam (12-5-2025)",
      "Jeth Sud Punam (11-6-2025)",
    ],
  },
];

const imageArray = [
  { url: "/dham/event1.jpg" },
  { url: "/dham/event2.jpg" },
  { url: "/dham/event2.jpg" },
];

const Events = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const handleToggle = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div className="h-fit w-full flex items-center justify-center py-15">
      <div className="flex mx-auto w-[85vw] max-w-6xl p-6 lg:p-10 rounded-4xl bg-black justify-between gap-10 items-center">
        <div className="w-sm lg:w-md rounded-lg text-white h-[300px] lg:h-[400px] overflow-y-auto flex flex-col justify-between [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {" "}
          {accordionData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.title}
                className="border-b border-neutral-800 last:border-b-0"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="flex justify-between items-center w-full py-2 lg:py-4 text-left font-semibold"
                >
                  <span className="text-[0.9rem] lg:text-lg">{item.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {idx === 0 ? (
                        <div className="pb-2 lg:pb-4 text-neutral-300">
                          <p className="text-[#FF8127] text-[0.7rem] lg:text-sm ">
                            Join Maa's divine presence right now. The live
                            broadcast is happening as we speak.
                          </p>
                          <p className="py-2 lg:py-3 text-[0.8rem]">
                            "Click below to join the event."
                          </p>
                          <button className="px-9 py-3 text-[0.9rem] text-[#FF8127]  font-bold rounded-full bg bg-[#ff8127]/10 hover:bg-[#ff8127]/20 active:bg-[#ff8127]/10 transition ease-in cursor-pointer border-t-1 border-t-white/20 border-l-1 border-l-white/20">
                            Participate
                          </button>
                          <p className="py-2 text-sm text-neutral-500">
                            Join us live on:
                          </p>
                          <div className="flex gap-3 lg:gap-5 text-[#FF8127] text-2xl lg:text-4xl items-end">
                            <img src="/icons/tv.svg" alt="social media" />
                            <img src="/icons/youtube.svg" alt="social media" />
                            <img
                              src="/icons/instagram.svg"
                              alt="social media"
                            />
                            <img src="/icons/facebook.svg" alt="social media" />
                          </div>
                        </div>
                      ) : (
                        <ol className="list-decimal list-inside pl-2 pb-4 text-neutral-400 space-y-1">
                          {item.content.map((event) => (
                            <li
                              className="text-[#FF8127] text-[0.8rem] lg:text-lg"
                              key={event}
                            >
                              {event}
                            </li>
                          ))}
                        </ol>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit object-cover">
          <AnimatePresence mode="wait">
            <motion.img
              key={openIndex}
              src={imageArray[openIndex].url}
              alt="dham events images"
              className="rounded-2xl w-ful object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Events;
