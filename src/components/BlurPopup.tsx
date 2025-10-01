import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BlurPopup = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as="div"
          className="relative z-50"
          open={isOpen}
          onClose={onClose}
        >
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
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
              <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                {children}
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default BlurPopup;
