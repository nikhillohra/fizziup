"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import { Bubbles } from "../Hero/Bubbles";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832]"
    >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="text-[34vw]">Soda</div>
        <div className="grid gap-[3vw] text-[32vw] text-center md:flex md:text-[11vw]">
          <span className="inline-block ">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="text-[32vw]">Smile</div>
      </h2>
    </section>
  );
};

export default BigText;
