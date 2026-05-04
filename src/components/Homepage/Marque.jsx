import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
        className="py-4 text-white text-lg font-semibold bg-gradient-to-r from-[#085041] via-[#0d6b59] to-[#0a3f34]"
      >
        <span className="mx-12 flex items-center gap-2">
          📚 New Arrivals
        </span>

        <span className="mx-12 flex items-center gap-2">
          📖 Story Collection
        </span>

        <span className="mx-12 flex items-center gap-2">
          ⚛️ Tech Learning
        </span>

        <span className="mx-12 flex items-center gap-2">
          🔬 Science Discoveries
        </span>

        <span className="mx-12 flex items-center gap-2">
          🚀 Start Reading Today
        </span>

        <span className="mx-12 flex items-center gap-2">
          🎉 Membership Discount Available
        </span>

        <span className="mx-12 flex items-center gap-2">
          💡 Learn Faster Read Smarter
        </span>
      </Marquee>
    </div>
  );
};

export default Marque;