import Container from "@/app/components/common/Container";
import Sample_part from "@/app/components/Sample_part";
import React from "react";
import { ImFilePdf } from "react-icons/im";

const Samplereport_part = () => {
  return (
    <>
      <section className="bg-[url('/samplebannerimage.png')] bg-cover bg-center">
        <Container>
          <div className="space-y-6 py-[200px] ">
            <div className="bg-white mx-auto w-[1150px] py-12 px-12 rounded-[20px]">
              <h3 className="text-center text-[36px] font-bold mb-12">
                Sample Report
              </h3>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                <div className="flex items-center py-6 w-[450px] border border-gray-400 rounded-[20px]">
                  <div className="ml-3 border border-red-600 px-2 py-2">
                    <ImFilePdf className="text-red-600 text-xl" />
                  </div>
                  <p className="ml-[16px] text-third font-normal text-[16px]">
                    Electronics Products Inspection
                  </p>
                  <button className="ml-[72px] border border-primary px-2 py-2 rounded-full text-primary font-semibold text-[12px] transition duration-300 transform hover:text-third hover:bg-primary">
                    Get Report
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Sample_part />
    </>
  );
};

export default Samplereport_part;
