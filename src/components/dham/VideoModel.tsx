const VideoModel = () => {
  return (
    <div className="h-[300vh]">
      <div className="py-10 bg-black overflow-hidden w-full h-screen flex items-center justify-center sticky bottom-0">
        <div className="relative w-[110vw] h-[110vh] p-6">
          <video
            src="/dham/NewDham.mp4"
            className="w-full h-full object-cover z-10 rounded-[80px]"
          />
          <img
            src="/icons/phone.png"
            alt="phone image"
            className="absolute w-[110vw] h-full z-20 top-0 left-0 block"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModel;
