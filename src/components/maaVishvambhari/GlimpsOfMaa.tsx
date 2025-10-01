import { HiArrowLongRight } from "react-icons/hi2";
import BlurPopup from "../BlurPopup";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../function";

const GlimpsOfMaa = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black py-10">
      <motion.h2
        className="text-4xl font-bold text-white w-3/5 mx-auto"
        {...fadeUp()}
      >
        Glimpse of Mother Vishvambhari
      </motion.h2>
      <motion.div className="mt-15 w-3/5 mx-auto" {...fadeUp()}>
        <p className="font-bold text-[#86868b] indent-8 pb-5">
          For briefing <span className="text-white">Mother VISHVAMBHARI</span>,
          really entire intellectuality of this world, words of all the
          languages on this earth and collective emotions of all lives of this
          world are not enough to brief the Mother VISHVAMBHARI. Even though,
          one can't resist singing the laurels of{" "}
          <span className="text-white">
            Form, Quality and Deeds of Mother VISHVAMBHARI.
          </span>
        </p>
        <p className="font-bold text-[#86868b] indent-8 pb-5">
          Mother VISHVAMBHARI is the creator of this endless{" "}
          <span className="text-white">Universe and entire world.</span> Mother
          created{" "}
          <span className="text-white">
            Brahma, Vishnu and Mahesh (three Lords)
          </span>{" "}
          and she is also the creator of minutest lifes to the gigantic animals;
          small mote to skyward ranges of Himalayas; small drop of water to
          seven seas; skies covering little cloud to stars, planets and nebulas.
          By arranging mysterious play of evolution,{" "}
          <span className="text-white">
            she has created special niche for humans and given the super most
            position to human beings in this world.{" "}
          </span>
          So that he/she can attain the self-emancipation by singing lyrics of
          her <span className="text-white">Extra-terrestrial power</span>.
          Mother VISHVAMBHARI is the mother of all Gods and Goddesses. She is
          omnipresent, almighty and omniscient.
        </p>
        <p className="font-bold text-[#86868b] indent-8 pb-5">
          Mother's existence was always there, even there were no before the
          presence of Sun and Moon, no gods and demons, no Saints-sages and
          friars, this world or any other creations.{" "}
          <span className="text-white">
            She is present today and will exist even after destruction of the
            world.
          </span>
        </p>
        <p
          className="text-end text-[#FF8127] flex w-fit ms-auto gap-3 items-center pe-4"
          onClick={() => setIsOpen(true)}
        >
          More details{" "}
          <span className="inline text-2xl">
            <HiArrowLongRight />
          </span>
        </p>
      </motion.div>
      <BlurPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Demo Popup</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          ligula id metus aliquet, vel consequat erat porta. Quisque nec justo
          nec libero tempor cursus non nec urna. Proin ac massa nec libero
          facilisis tincidunt. Fusce ut tincidunt lectus. Integer a risus
          sagittis, laoreet odio vel, varius justo. Vivamus luctus quam eu
          tellus tincidunt, sit amet ultricies justo accumsan. Vestibulum
          tristique eros vel velit faucibus pretium.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          Close
        </button>
      </BlurPopup>
    </div>
  );
};

export default GlimpsOfMaa;
