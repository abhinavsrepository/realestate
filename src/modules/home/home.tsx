import Header from "@/shared/widgets/header/header"
import Banner from "./elements/banner"
import Branding from "@/modules/home/elements/branding"
import Benefits from "@/modules/home/elements/benefits"
const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benefits/>
    </div>
  )
}

export default Home