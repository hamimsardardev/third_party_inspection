import React from "react";
import Banner from "../components/Banner";
import Chooseme from "../components/Chooseme";
import Ourstory from "../components/Ourstory";
import Service from "../components/Service";
import Whatwedo from "../components/Whatwedo";
import Audit from "../components/Audit";
import Products_part from "../components/Products_part";
import Sample_part from "../components/Sample_part";

const Page = () => {
  return (
    <div>
      <Banner />
      <Ourstory />
      <Chooseme />
      <Whatwedo />
      <Service />
      <Audit />
      <Products_part />
      <Sample_part/>
    </div>
  );
};

export default Page;
