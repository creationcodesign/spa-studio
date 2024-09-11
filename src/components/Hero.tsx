import heroImg from '../assets/images/hero-img.png'
import Label from '../components/Label'
import { navigateTo } from '../helper/navigation'

export default function Hero() {
    return (
        <div className="hero flex-row">
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>
                        Revitalize & Reset
                        your Body, Mind & Soul
                    </h1>
                    <p>
                        Renew and relax in our oasis in the middle of the city in a peaceful and caring enviroment.
                    </p>
                    <p>
                        Whether you seek relief from stress, tension, or simply wish to indulge in some well-deserved pampering, we have the perfect treatment for you.
                    </p>
                    <button className="btn-primary" onClick={() => navigateTo('/appointment')}>
                        make appointment
                    </button>
                </div>
                <Label />
            </div>
            <div className="hero-img-container">
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
}

