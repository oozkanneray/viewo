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
      <div className="image-holder photo absolute flex flex-col justify-end text-white">
        <div className="p-5">
          <div className="text-white font-bold">{name}</div>
          <div className="italic text-white/50">{username}</div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
