import { HiArrowLongRight } from "react-icons/hi2";
import BlurPopup from "../BlurPopup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fadeUp from "../function";
import Slider from "../Slider";
import axios from "axios";

const VitthalbhaiBio = () => {
  const [images, setImages] = useState<{ url: string }[]>([
    { url: "/dham/patr1.png" },
    { url: "/dham/patr15.png" },
    { url: "/dham/patr1.png" },
    { url: "/dham/patr15.png" },
    { url: "/dham/patr1.png" },
    { url: "/dham/patr15.png" },
  ]);

  useEffect(() => {
    axios
      .get("https://dhamadmin.cesihpl.com/edit_shree_mahapatra_image.php?action=list")
      .then((data: any) => {
        setImages(
          data.data.images[0].sub_images.map((val: any) => {
            return {
              url: `https://dhamadmin.cesihpl.com/${val.url}`,
            };
          })
        );
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const moreDetailsParagraphs: string[] = [
    "Shri Vitthalbhai, the revered founder of Maa Vishwambhari Tirtha Dham, came to be known as “Mahapatra”, a sacred title personally bestowed upon him by Maa Vishwambhari. Behind this honor lies a deeply inspiring story, shaped by his unique way of life and unshakable devotion.",
    "From childhood, his personality reflected a quest for knowledge, courage in thought, and a perspective on life unlike others. Born on Vaishakh Sud Akhatrij in 1969, in a small village of Gujarat, he was the only son of farmer Nagjibhai and mother Laduben. Even as a child, he was filled with curiosity, a love for exploration, and an independent outlook on living.",
    "Alongside his daily duties, Vitthalbhai devoted himself to the worship of the Supreme Power. His ultimate goal was to discover the highest among all divine forces and to attain their direct vision. His virtuous deeds radiated far and wide, until Maa Vishwambhari herself chose him as her medium to descend to earth.",
    "Before granting her vision, Maa subjected him to seventeen severe and extraordinary trials—tests of financial struggle, social challenges, physical hardship, anger, patience, endurance, attachment, illusion, greed, temptation, bravery, fearlessness, and purity of character.",
    "Like gold that must endure fire and hammer before it shines, Vitthalbhai faced every trial and countless struggles with steadfast faith in Shakti. His yearning for the Divine was so pure and intense that he successfully overcame all sixteen initial tests.",
    "On 6th September 1999, Maa appeared before him in the form of a radiant eighteen-year-old maiden, testing his character in the seventeenth and final ordeal—a trial so demanding that even sages might falter. Vitthalbhai emerged unshaken and pure.",
    "At that moment, Maa revealed her true divine form in a celestial Panchkarmi Rath, granted him direct vision, and blessed him with the title “Mahapatra.” She spoke with him for forty-five minutes, saying:",
    "“O Mahapatra, you have passed all my trials and filled me with joy. The fruits of many lifetimes of karma have ripened within you. Ask, and I shall grant whatever you desire.”",
    "With humility, Mahapatra replied:",
    "“Maa, I am a karma-yogi. I live only by the fruits of my labor. I seek no wealth, luxury, or worldly treasures. To have found you in this lifetime is my greatest blessing. I wish only to remain forever in your lap.”",
    "Despite Maa's repeated insistence, he asked for no comforts for himself or his family. Free from all temptation, his only prayer was to become the “Best of Men.”",
    "Through him, Maa then delivered a message for all humanity:",
    "“Abandon blind faith. Return to your homes. Make your homes themselves temples. Establish the highest peak of true dharma and karma.”",
    "To spread this divine message swiftly and to serve the cause of Vedic culture, Mahapatra renounced his ancestral land and property without hesitation. By his example, he demonstrated that one who has realized the true path of dharma and karma does not grieve over worldly loss.",
    "Following Maa's command, he resolved to establish a sacred dham at Rabda village in Valsad district. With complete dedication of body, mind, and wealth, he laid the foundation of Maa Vishwambhari Tirtha Dham. Day and night, without pause, he advanced the divine mission, kindling the flame of a global and spiritual awakening.",
    "What he received from Maa—Vedic wisdom, true devotion, the path to liberation—he never kept for himself. Instead, in pure selflessness, he shared it with the world. Having walked the thorny path alone, facing struggle after struggle and worshiping Shakti across seven lifetimes without any Guru, he reached Maa and now shows humanity a clear, simple, and direct path to the same Supreme Power.",
    "Through the Panchkarmi Rath and the living form of Maa he once witnessed, he allows the world to also experience her presence. He leads people away from blind superstition, guiding them instead toward true devotion. His life itself—marked by discipline, humility, and devotion—is a living example for all. He teaches people to follow dharma and karma, to walk in truth, and to rise above worldly joys and sorrows. He inspires devotees to remove blind faith and to kindle the flame of genuine devotion within their hearts.",
    "Even today, at the Tirtha Dham, Mahapatra can be seen living as a karma-yogi—performing his duties, engaging in karma-bhakti, and guiding pilgrims toward truth. His path embraces three steps of devotion: duty (kartavya-karma), devotion through action (karma-bhakti), and union through action (karma-yoga). By practicing the seventeen Vedic virtues beloved to Maa, he both lives the ideal life himself and teaches others to do the same.",
    "In today's world, where millions spend their lives searching for the true essence of faith, Mahapatra—through tireless struggle, devotion, and divine vision—has created a perfect union of faith and devotion. He has turned countless devotees away from blind rituals, inspiring them to transform their very homes into sacred temples. As a result, innumerable people today live free from suffering, following Maa's vision in purity, peace, and truth.",
  ];
  return (
    <div className="bg-black py-10 pt-19">
      <motion.h2
        className="text-3xl lg:text-[2.5rem] xl:text-[3.2rem] font-bold w-[85vw] max-w-6xl mx-auto uppercase text-center text-[#ff8127]"
        {...fadeUp()}
      >
        Shri Mahapatra, Founder of MVTY Dham
      </motion.h2>
      <motion.div
        className="mt-10 w-[85vw] max-w-6xl mx-auto text-sm lg:text-lg"
        {...fadeUp()}
      >
        <p className="font-bold text-[#86868b] indent-50 pb-5 text-justify leading-7 lg:leading-8.5">
          <span className="text-white font-extrabold">
            Shri Vitthalbhai, the founder of Maa Vishvambhari Tirthyatra Dham,
            became a <b>“Mahapatra”</b>
          </span>{" "}
          - a highly revered soul - as per the title conferred upon him by Maa
          Vishvambhari herself. There is an inspiring story behind this divine
          recognition. A significant reason behind it is the unique way in which
          he lived his life. Observing the sequence of events from the beginning
          of his life until now reveals glimpses of his divine personality.
        </p>

        <p className="font-bold text-[#86868b] indent-50 pb-5 text-justify leading-7 lg:leading-8.5">
          He was <span className="text-white font-extrabold">born in 1969</span>{" "}
          on the auspicious day of{" "}
          <span className="text-white font-extrabold">
            Vaishakh Sud Akhatrij
          </span>{" "}
          in a small village in Gujarat. His{" "}
          <span className="text-white font-extrabold">father, Nagjibhai,</span>{" "}
          was a farmer by profession, and his{" "}
          <span className="text-white font-extrabold">mother, Laduben,</span>{" "}
          was a homemaker. He was their only son. Since childhood, he had an
          intense curiosity to learn new things. He always had a passion for
          exploration and research. From a young age, his approach to life was
          different from others, and his perspective toward living was truly
          unique.
        </p>

        <p className="font-bold text-[#86868b] indent-50 pb-5 text-justify leading-7 lg:leading-8.5">
          While sincerely fulfilling his worldly duties, Shri Vitthalbhai{" "}
          <span className="text-white font-extrabold">
            also devoted himself to the worship of the Supreme Power.
          </span>{" "}
          His ultimate goal was to discover who among all deities is the
          supreme, the highest of all, and to attain their divine vision. The
          fragrance of his good deeds had already spread across the universe. So
          much so that{" "}
          <span className="text-white font-extrabold">
            Maa Vishvambhari herself chose to descend to Earth, using him as the
            divine medium.
          </span>
        </p>
        <p
          className="text-end text-[#FF8127] flex w-fit ms-auto gap-3 items-center pe-4 pt-5 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          More details{" "}
          <span className="inline text-2xl">
            <HiArrowLongRight />
          </span>
        </p>
      </motion.div>
      <BlurPopup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="text-3xl lg:text-[2.5rem] xl:text-[3.4rem] font-bold text-[#ff8127] text-center mb-5 lg:mb-10 uppercase">
          SHree Mahapatra
        </h2>

        {moreDetailsParagraphs.map((val, idx) => (
          <p
            key={idx}
            className="pb-3 text-justify leading-7 lg:leading-8 indent-25"
          >
            {val}
          </p>
        ))}
      </BlurPopup>

      <div className="py-10">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default VitthalbhaiBio;
