import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
}

const BlurPopup = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as="div"
          className="relative z-50"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-white/10 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className="w-[60vw] h-[85vh] bg-black p-7 rounded-4xl ">
                <div className="flex justify-end items-center">
                  <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl mb-4 text-black cursor-pointer bg-white p-1 rounded-full"
                >
                  <IoClose />
                </button>
                </div>
                <div className="px-10 h-[69vh] text-[#86868b] font-semibold overflow-y-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default BlurPopup;
