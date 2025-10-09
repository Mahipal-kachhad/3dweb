const Contact = () => {
  return (
    <div className="bg-black">
      <div className="w-[85vw] max-w-6xl mx-auto py-10">
        <img src="/icons/star.png" className="w-[150px] mx-auto" alt="star image" />
        <h2 className="uppercase text-center text-6xl font-bold my-10">Get In Touch</h2>
        <p className="text-[#FF8127] w-1/2 mx-auto text-2xl text-center">
          join the Ranks of those who demand the best. Upgrade your experience
          today!
        </p>
        <form className="w-1/2 mx-auto">
          <div className="flex justify-between items-center my-10 gap-10">
            <input type="text" className="w-full border-1 border-[#FF8127] px-5 py-3 rounded-full" placeholder="Enter Your Name" />
            <input type="text" className="w-full" placeholder="Enter Your Email Id" />
          </div>
          <div>
            <textarea name="" id=""></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
