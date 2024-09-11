import img1 from '../assets/images/about-img-1.png'
import img2 from '../assets/images/about-img-2.png'
import img3 from '../assets/images/about-img-3.png'
import { navigateTo } from '../helper/navigation'

export default function About() {
    return (
        <div className='about about-page'>
            <h1>About Spa</h1>
            <div className="about-content">
                <div className="about-content-text">
                    <div className='about-text'>
                        <p>Welcome to Relax Oasis Spa & Massage Studio!</p>
                        <p>Escape the chaos of everyday life and discover a haven of tranquility at  Serenity Spa Studio. Nestled in the heart of Barcelona, our boutique  spa offers a serene retreat where you can relax, rejuvenate, and restore  your sense of well-being.</p>
                        <p>At Serenity Spa Studio, we believe in the power of self-care and  holistic wellness. That's why we use only the finest natural and organic  products, carefully selected to nourish your skin and enhance your  overall well-being.</p>
                        <p>Whether you're seeking relief from stress and tension or simply craving a  moment of relaxation, our dedicated team is here to help you look and  feel your best. Let us take you on a journey to inner harmony and  serenity.</p>
                        <p>Take a break from the hustle and bustle of city life and treat yourself to the ultimate spa experience at Serenity Spa Studio. </p>
                        <p>Book your appointment today and embark on a path to total relaxation and rejuvenation.</p>
                        <p>Your journey to serenity begins here.</p>
                        <button className='btn-primary' onClick={() => navigateTo('/appointment')}>
                            make appointment
                        </button>
                    </div>
                    <img src={img3} alt="spa" className='about-img-small' />
                </div>
                <div className="about-images">
                    <img src={img1} alt="spa room" width={648} />
                    <img src={img2} alt="spa" width={648} />
                </div>
            </div>
        </div>
    )
}
