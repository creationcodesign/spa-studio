import Hero from '../components/Hero'
import Massages from '../components/Massages'
import Offer from '../components/Offer'
import OfferSpecial from '../components/OfferSpecial'
import Therapists from '../components/Therapists'

export default function Home() {
    return (
        <div className="home home-page">
            <Hero />
            <Massages />
            <Therapists />
            <Offer />
            <OfferSpecial />
        </div>
    )
}
