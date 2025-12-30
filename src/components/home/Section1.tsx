import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Shivam.", "Shivam."]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>

          <div className="mt-6 w-full flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12">
            <div className="w-40 h-40 md:w-56 md:h-56 relative">
              <Image
                src="/photo/Shivam2.png"
                alt="Shivam"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>

            <p className="mt-6 md:mt-0 md:max-w-xl text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)] text-center md:text-left">
              AI/ML Engineer with 3+ years of experience in Machine Learning,
              Web Development, and Applied AI. Skilled in designing and
              fine-tuning large language models (LLMs), developing
              Retrieval-Augmented Generation (RAG) systems, and creating
              scalable AI agents. Proven ability to enhance operational
              efficiency, optimize model pipelines, and deliver measurable
              impact through innovative AI solutions. Passionate about
              applying advanced AI techniques to solve real-world problems and
              drive product innovation.
            </p>
          </div>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
