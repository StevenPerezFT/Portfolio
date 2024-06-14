import AboutMe from "@/components/landing/about-me/about-me";
import Card from "@/components/common/card";
import ContactMe from "@/components/landing/contact-me/contact-me";
import Photo from "@/components/landing/about-me/photo";
import Technologies from "@/components/landing/tecnologias/my-tecnologias";
import WorkExperience from "@/components/landing/work-experience/my-experience";
import Projects from "@/components/landing/projects/my-projects";
export default function Home() {
  return (
    <main className="lg:grid lg:place-items-center  flex justify-center items-center">
      <div className="p-6 max-w-max flex flex-col md:mt-20">
        <div className="mt-20 md:my-20 grid grid-cols-1 md:grid md:grid-cols-2  md:items-center  md:mx-10">
          <AboutMe />
          <div className="mt-0 flex justify-center items-center">
          <Photo />
          </div>
        </div>
        <Technologies />
        <section className=" mt-28 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:justify-around place-items-center ">
          <WorkExperience />
          <div className="flex justify-end items-end md:pt-40 md:mr-12">
            <Card header="Featured tasks" body="I implement the backend infrastructure of multiple projects. Additionally I developed the frontend and backend of the backoffice using technologies such as Tanstack and AWS S3 Lamba." />
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
