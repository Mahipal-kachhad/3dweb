const Darshan = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center">
      <div className="w-[85vw] max-w-7xl mx-auto flex justify-between bg-[#1d1d1f] p-3 lg:p-7 my-15 gap-5 rounded-4xl">
        <div className=" text-white p-3 lg:p-8 w-[270px] lg:w-md ">
          <h2 className="text-xl lg:text-3xl font-bold text-orange-500 mb-8">
            Darshan Time
          </h2>

          <ul className="space-y-6 text-neutral-100">
            <li>
              <p className="font-semibold text-[0.8rem] lg:text-lg">
                What is the daily darshan time schedule?
              </p>
              <ul className="mt-2 text-neutral-400 space-y-1">
                <li className= "ps-4 lg:ps-10 text-[0.65rem] lg:text-lg">
                  - Morning: 7:30 AM to 1:00 PM (Everyday)
                </li>
                <li className= "ps-4 lg:ps-10 text-[0.65rem] lg:text-lg">
                  - Afternoon: 2:30 PM to 8:30 PM (Everyday)
                </li>
              </ul>
            </li>
            <li>
              <p className="font-semibold text-[0.8rem] lg:text-lg">
                What is the Himalaya darshan closing time?
              </p>
              <p className="mt-2 text-neutral-400  ps-4 lg:ps-10 text-[0.65rem] lg:text-lg">- Everyday: 7:00 PM</p>
            </li>
            <li>
              <p className="font-semibold text-[0.8rem] lg:text-lg">What is the aarti time?</p>
              <ul className="mt-2 text-neutral-400 space-y-1">
                <li className= "ps-4 lg:ps-10 text-[0.65rem] lg:text-lg">- Morning: 8:15 AM (Everyday)</li>
                <li className= "ps-4 lg:ps-10 text-[0.65rem] lg:text-lg">- Evening: 7:15 PM (Everyday)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-black text-white p-4 lg:p-7 rounded-4xl w-full">
          <h2 className="text-xl lg:text-3xl font-bold text-orange-500 mb-4 text-center">
            Darshan Rules
          </h2>
          <p className="font-bold text-white mb-4 text-[0.8rem] lg:text-lg">
            Following the new rules for Darshan at the Temple is mandatory.
          </p>

          <ul className="space-y-3 text-neutral-300 list-disc list-inside text-[0.7rem] lg:text-lg">
            <li>
              Women should come fully dressed (in saree or full attire) for
              Darshan.
            </li>
            <li>
              All visitors should come in proper, respectful attire and maintain
              decorum.
            </li>
            <li>
              Maintain peace and cleanliness in the premises and cooperate with
              the volunteers.
            </li>
            <li>
              Bringing pets or animals into the premises is strictly prohibited.
            </li>
            <li>Outside food or cooking is not allowed within the premises.</li>
            <li>
              Items like tobacco, gutkha, and alcohol are strictly prohibited
              inside the premises.
            </li>
            <li>
              Mobile phones, cameras, and loud talking are discouraged during
              the TirthYatra.
            </li>
            <li>
              Climbing trees, plucking flowers/fruits, or damaging plants is
              strictly prohibited.
            </li>
            <li>
              Vehicles, sound systems, and other disruptive equipment are not
              allowed without permission.
            </li>
            <li>
              For Darshan and Seva-related queries or help, please contact the
              office.
            </li>
          </ul>

          <div className="mt-2 lg:mt-4 bg-red-600 mx-auto px-5 lg:px-10 w-fit text-white text-[0.7rem] lg:text-sm font-semibold text-center p-1 lg:p-3 rounded-full">
            * Violation of the above rules may result in legal action.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darshan;
