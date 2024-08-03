import React from "react";
import Image from "next/image";
import aboutimg1 from "../../../public/images/about-food-1.jpg";
import aboutimg2 from "../../../public/images/about-food-2.jpg";

function content() {
  return (
    <div className="container text-justify">
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <div>
          <Image
            src={aboutimg1}
            alt="About Food 1"
            className="w-[300px] lg:w-[800px]"
          />
        </div>
        <div className="flex flex-col space-x-0 lg:space-x-20 mt-5">
          <div>
            <h1 className="font-bold text-[28px] text-center">
              A Lifestyle of Deliciousness
            </h1>
          </div>
          <div>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum.<br></br>
              {""}
              <br></br> Simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10 mb-auto">
        <div className="flex flex-col mr-0 mt-0 lg:mr-20 md:mt-10">
          <div>
            <h1 className="font-bold text-[28px] text-center">
              A Lifestyle of Deliciousness
            </h1>
          </div>
          <div>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum.<br></br>
              {""}
              <br></br> Simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Image
            src={aboutimg2}
            alt="About Food 1"
            className="w-[300px] lg:w-[800px]"
          />
        </div>
      </div>
    </div>
  );
}

export default content;
