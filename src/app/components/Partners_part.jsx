import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  { img: "/partnersone.png" },
  { img: "/partnerstwo.png" },
  { img: "/partnersthree.png" },
  { img: "/partnersfour.png" },
  { img: "/partnersfive.png" },
  { img: "/partnerssix.png" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const PartnersPart = ({ img }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center h-24 w-40 rounded-xl border bg-white dark:bg-black",
          "border-gray-200 dark:border-gray-700",
        )}
      >
        <img
          src={img}
          alt="partner logo"
          className="h-16 w-auto object-contain"
        />
      </div>
    </>
  );
};

export default function PartnersMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="text-center">
        <h2 className="py-12 text-[32px] font-bold leading-4 text-center">Partners</h2>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item, index) => (
          <PartnersPart key={index} img={item.img} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
        {secondRow.map((item, index) => (
          <PartnersPart key={index} img={item.img} />
        ))}
      </Marquee>
    </div>
  );
}
