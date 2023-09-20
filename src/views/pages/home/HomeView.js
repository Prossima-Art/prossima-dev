
import Footer from '../../../components/footer/Footer';
import NavbarComp from '../../../components/navBar/navbar';
import Hero from './components/hero/TheHero';
import SeeActionTitle from './components/seeAction/SeeAction';
import StepOne, { StepFour, StepTwo, Stepthree } from './components/stepComp/StepComp';
import WaitListComp from './components/waitList/WaitList';
import TheSubtitle from './utils/TheSubtitle';


function HomeView() {
  return (
    <>
    
    <NavbarComp/>
    <Hero/>
    <TheSubtitle/>
    <StepOne/>
    <StepTwo/>
    <Stepthree/>
    <StepFour/>
    <SeeActionTitle/>
    <WaitListComp/>

    <Footer/>
    </>
        
  );
}

export default HomeView;
