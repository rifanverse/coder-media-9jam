import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
  title: "About",
  description: "Who Am I",
};

const AboutPage = () => {
  return (
    <div className="">
      <HeaderSection title="About Us" subTitle="lorem ipsum dolor sit amet" />
      <section className="bg-white relative z-10 flex align-bottom">

        <div className="max-w-screen-xl mx-auto py-20 px-4 ">
          <div className="grid  md:grid-cols-2 gap-8">
            <Image
              src="/about-image.jpg"
              width={650}
              height={579}
              alt="about image"
            />

            <div>
              <h1 className="text-5xl font-semibold text-gray-900 mb-4">
                Who AM I
              </h1>

              <p className="text-gray-700 py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia libero excepturi alias, deleniti ea atque eius adipisci
                sequi obcaecati voluptates.
              </p>

              <ul className="list-item space-y-6 pt-8">
                <li className="flex gap-5">
                  <div>
                    <IoEyeOutline className="size-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                    <p className="text-gray-600">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate dolorum esse facere mollitia. Rerum, ad!
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div>
                    <IoLocateOutline className="size-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                    <p className="text-gray-600">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate dolorum esse facere mollitia. Rerum, ad!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
 
    </div>
  );
};

export default AboutPage;
