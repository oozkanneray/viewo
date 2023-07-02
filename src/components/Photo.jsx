function Photo({ img,username,name }) {
  return (
    <div className="w-[135px] h-[135px] sm:w-[500px] sm:h-[500px]">
      <img
        className="w-[135px] h-[135px] sm:w-[500px] sm:h-[500px] object-cover absolute"
        src={
          "https://usvilimpqyyjzznmnpkx.supabase.co//storage/v1/object/public/photos/" +
          img
        }
      />
      <div className="image-holder absolute flex flex-col justify-end text-white">
        <div className="p-5">
          <div className="text-white font-bold">{name}</div>
          <div className="italic text-white/50">{username}</div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
