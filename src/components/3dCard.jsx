import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import cisco from "../../public/logos/cisco.png";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white"
        >
          PCAP - Programming Essentials in Python
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Cisco Networking Academy
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={cisco}
            height="100"
            width="100"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
