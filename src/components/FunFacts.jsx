import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

import LogoOutline from "../assets/LogoOutline.png";
import { getFunFacts } from "../services/funFactsService";

const Dots = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "4px",
      }}
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: "4px",
            height: "4px",
            backgroundColor: "currentColor",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const [funFactsData, setFunFactsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const portableTextComponents = {
    marks: {
      strong: ({ children }) => (
        <strong className="text-white">{children}</strong>
      ),
    },
    block: {
      normal: ({ children }) => <p className="text-gray">{children}</p>,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFunFacts();
        setFunFactsData(data);
      } catch (error) {
        console.error("Failed to fetch fun facts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="fun-facts" className="pt-16">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl text-white font-bold whitespace-nowrap font-mono">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="flex-1 h-px"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-4 font-mono">
        <div className="md:w-3/4 py-4 md:py-4 lg:py-4 flex flex-col gap-6 text-gray text-base leading-relaxed">
          <div className="flex flex-wrap items-start gap-x-2 gap-y-2">
            {isLoading ? (
              <div className="py-16 text-gray font-mono">
                Loading fun facts...
              </div>
            ) : funFactsData.length === 0 ? (
              <div className="text-gray font-mono italic">
                No fun facts to share yet!
              </div>
            ) : (
              funFactsData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray p-2 text-sm w-full whitespace-normal sm:w-fit sm:whitespace-nowrap"
                >
                  <PortableText
                    value={item.fact}
                    components={portableTextComponents}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="hidden md:flex md:w-1/4 relative w-full mt-8 md:mt-0">
          <Dots className="absolute top-6 left-6 lg:top-4 lg:left-4 xl:top-0 xl:left-0 2xl:top-0 2xl:left-4 text-gray w-16 h-16 z-20" />

          <img
            src={LogoOutline}
            alt="Logo Outline Decoration"
            className="absolute bottom-6 right-6 lg:bottom-4 lg:right-4 xl:bottom-0 xl:right-0 2xl:bottom-0 2xl:right-4 w-2/5 h-auto opacity-70"
            style={{
              filter:
                "invert(64%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(90%) contrast(100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
