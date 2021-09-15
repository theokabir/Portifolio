import Profile from "../components/resume/Profile";
import Body from "../components/resume/Body";
import bg from './../assets/space_wpp.jpg'

const Resume = ({ language }) => {
  return ( 
    <div className="
    w-full
    bg-cover bg-fixed bg-center bg-no-repeat
    " 
    style={{
      backgroundImage: `url(${bg})`,
    }}>
      <div className="
      w-full lg:w-9/12 mx-auto py-8
      md:grid md:grid-cols-3 grid-cols-1 font-page text-white
      opacity-80
      "
      style={{
        backgroundColor: "rgba(51, 65, 85, 0.8)"
      }}>
        <Profile language={language} />
        <Body language={language} />
      </div>
    </div>
  );
}
 
export default Resume;                                  