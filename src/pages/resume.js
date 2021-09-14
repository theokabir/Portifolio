import Profile from "../components/resume/Profile";
import Body from "../components/resume/Body";

const Resume = ({ language }) => {
  return ( 
    <div className="
    border border-white w-full lg:w-9/12 mx-auto my-8
    md:grid md:grid-cols-3 grid-cols-1 font-page text-white
    ">
      <Profile language={language} />
      <Body language={language} />
    </div>
  );
}
 
export default Resume;