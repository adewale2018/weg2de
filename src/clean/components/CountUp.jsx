import React, { useRef } from "react";

import tw from "twin.macro";
import { useCountUp } from "react-countup";

const Counter = tw.section`mt-5 mb-5 lg:mb-20 flex-col flex items-center`;
const Text = tw.p`font-light text-gray-300 uppercase tracking-widest`;
const Count = tw.span`font-medium text-gray-500 text-3xl sm:text-4xl lg:text-5xl`;

const CustomerCount = ({ title, startCount, endCount, countDuration }) => {
  const countUpRef = useRef(null);
  useCountUp({
    ref: countUpRef,
    start: startCount,
    end: endCount,
    duration: countDuration,
    enableScrollSpy: true,
  });
  return (
    <Counter>
      <Count ref={countUpRef} />
      <Text>{title}</Text>
    </Counter>
  );
};

export default CustomerCount;
