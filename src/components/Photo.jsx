function Photo({ img,username,name }) {
  return (
    <div className="photo relative">
      <img
        className="photo object-cover absolute"
        src={
          "https://usvilimpqyyjzznmnpkx.supabase.co//storage/v1/object/public/photos/" +
          img
        }
      />
      <div className="opacity-0 transition-all hover:bg-gradient-to-t from-black to-transparent hover:opacity-100 photo absolute flex flex-col justify-end text-white">
        <div className="p-5">
          <div className="text-white photo-text font-bold">{name}</div>
          <div className="italic photo-text text-white/50">{username}</div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
