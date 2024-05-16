import BannerNLI from '../component/BannerNLI'
import Navigationabar from '../component/Navigationbar'
import KatpopularNLI from '../component/KatpopularNLI'
import PromoNLI from '../component/PromoNLI'

export default function HomeNLI() {
    return (
        <>
            <Navigationabar log={0}/>
            <BannerNLI/>
            <KatpopularNLI/>
            <PromoNLI/>
        </>
    )
}
  
