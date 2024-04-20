import Image from "next/image";

const CardLatest = ({ alt, src, title, description }) => (
  <div className="group">
    <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <Image
        alt={alt}
        width="800"
        height="400"
        className="w-full h-[15rem] sm:h-[13rem] object-cover group-hover:scale-105 transition"
        src={src}
      />
    </div>
    <h1 className="mt-5 text-gray-900 dark:text-gray-100 text-lg">{title}</h1>
    <h2 className="mt-3 text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed">
      {description}
    </h2>
  </div>
);

export default CardLatest;
