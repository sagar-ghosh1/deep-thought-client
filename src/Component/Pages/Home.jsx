import DynamicTitle from "../../DynamicTitle/DynamicTitle";
import Banner_Section from "../Sections/Banner_Section/Banner_Section";
import Popular_classes from "../Sections/Popular_classes/Popular_classes";
import Popular_instructor from "../Sections/Popular_instractor/Popular_instractor";
import Testimonial_Section from "../Sections/Testimonial_Section/Testimonial_Section";


const Home = () => {
    DynamicTitle("Home")

    return (
        <>
          <Banner_Section></Banner_Section>
          <Popular_classes></Popular_classes>
          <Popular_instructor></Popular_instructor>
          <Testimonial_Section></Testimonial_Section>
        </>
    );
};

export default Home;