import AboutHero from "../components/Slice/About/Hero/aboutHero";
import Leadership from "../components/Slice/About/Leadership/leadership";
import MissionVision from "../components/Slice/About/MV/missionVision";
import StatsB from "../components/Slice/About/Stats/statsB";


export default function AboutUs() {
    return(
        <>
            <AboutHero />
            <MissionVision />
            <StatsB />
            <Leadership />
        </>
    )
}