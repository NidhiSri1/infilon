import ChoosePlan from "../components/choosePlan/ChoosePlan";
import Footer from "../components/footer/footer";
import HomePage from "../components/homePage/HomePage";
import Navbar from "../components/navbar/NavBar";
import Notes from "../components/notes/Notes";
import Sponsors from "../components/sponsors/Spnosors";

function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <ChoosePlan></ChoosePlan>
      <Notes></Notes>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
