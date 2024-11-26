import AboutMe from "@/components/landing/about-me/about-me";
import Card from "@/components/common/card";
import ContactMe from "@/components/landing/contact-me/contact-me";
import Photo from "@/components/landing/about-me/photo";
import Technologies from "@/components/landing/tecnologias/my-tecnologias";
import CodePocketExperience from "@/components/landing/work-experience/my-experience";
import Projects from "@/components/landing/projects/my-projects";
import ProcasaExperience from "@/components/landing/work-experience/procasa-exp"

export default function Home() {
  return (
    <main className="lg:grid lg:place-items-center  flex justify-center items-center h-full pb-0 mb-0">
      <div className="p-6 max-w-max flex flex-col md:mt-20">
        <div className="pt-20  md:pt-12 grid grid-cols-1  md:flex md:justify-center md:items-center">
          <AboutMe />
          <div className="mt-10 flex justify-center items-center md:pl-5">
          <Photo />
          </div>
        </div>
        <Technologies />
        <section className=" mt-28 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid  lg:grid-col-2 lg:justify-around place-items-center ">
          <CodePocketExperience />
          <div className="flex justify-end items-end md:pt-40 md:mr-12">
            <Card header="Featured tasks" body="I implement the backend infrastructure of multiple projects. Additionally I developed the frontend and backend of the backoffice using technologies such as Tanstack and AWS S3 Lamba." />
          </div>
          <ProcasaExperience />
          <div className="flex justify-end items-end md:pt-16 md:mr-12">
            <Card header="Featured tasks" body=" I collaborated on the optimization and refactoring of olds codebases to enhance performance and maintainability. Furthermore, I spearheaded the end-to-end development of new applications using Python and Flask, ensuring seamless integration with multiple server architectures and scalable infrastructure." />
          </div>
        </section>
        <Projects />
        <div className="border-t-2 border-customColor1-600 mt-16 pt-10 ">
          <ContactMe />
        </div>
      </div>
    </main>
  );
}
