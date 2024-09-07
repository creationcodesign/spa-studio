import img1 from '../assets/images/massage-men.png'
import img2 from '../assets/images/massage-img.png'
import img3 from '../assets/images/massage-women.png'
import imgHero from '../assets/images/massagr-img-hero.png'
import imgBig from '../assets/images/massage-big-img.png'
import Label from './Label'

export default function Massages() {
    return (
        <div className='massages'>
            <div className="massages-images">
                <img src={img1} alt="massages-img" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='massages-offer flex-row'>
                <div>
                    <h2>Massages</h2>
                    <ul className='massages-list'>
                        <li>Full Body Massage</li>
                        <li>Head or Face Massage</li>
                        <li>Food Massage</li>
                        <li>Hot Oil Massage</li>
                        <li>Hot Stones Massage</li>
                        <li>Aromatherapy</li>
                        <li>Deep Tissue Massage</li>
                        <li>Dry Cupping Massage</li>
                        <li>Sea Salt Scrub & 30 Minute Massage</li>
                    </ul>
                </div>
                <img src={imgHero} alt="massages hero img" width={830} />
            </div>
            <div className="massage-choose flex-row">
                <img src={imgBig} alt="massage-choose" />
                <div className='massage-choose-text'>
                    <p>
                        Choose from a variety of indulgent massages, including Swedish  relaxation, deep tissue therapy, hot stone massage, and aromatherapy.
                    </p>
                    <Label />
                </div>
            </div>
        </div>
    )
}
