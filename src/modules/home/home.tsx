import Header from "@/shared/widgets/header/header"
import Banner from "./elements/banner"
import Branding from "@/modules/home/elements/branding"
import Benefits from "@/modules/home/elements/benefits"
import FeatureHighlight from "./elements/feature.highlight"
import Pricing from "./elements/pricing"
const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benefits/>
      <FeatureHighlight/>
      <Pricing/>
     
    </div>
  )
}

export default Home