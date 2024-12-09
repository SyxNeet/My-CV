import AboutMe from "@/components/pages/designer-about-me/AboutMe";
import Education from "@/components/pages/designer-about-me/Education";
import Experience from "@/components/pages/designer-about-me/Experience";
import Infomation from "@/components/pages/designer-about-me/Infomation";
import Skill from "@/components/pages/designer-about-me/Skill";
import Software from "@/components/pages/designer-about-me/Software";

export default function IndexProjext() {
    return (
        <div className="md:px-[6.67rem] md:pt-[3.89rem] pt-[1.39rem] max-md:pb-[2.22rem] px-[1.39rem] flex max-md:flex-col">
            <Infomation />
            <div className="flex flex-col md:gap-[3.89rem] max-md:grid gap-[3.33rem]">
                <AboutMe />
                <Software />
                <Skill />
                <Experience />
                <Education />
            </div>
        </div>
    );
}
