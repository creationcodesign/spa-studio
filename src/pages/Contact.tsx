import img from '../assets/images/contact-img-spa-room.png'
import { navigateTo } from '../helper/navigation'

export default function Contact() {
    return (
        <div className='contact-page'>
            <div className='contact-text'>
                <h1>Get in touch and Relax with us  </h1>
                <p> Whether you're looking to book your next relaxation session or have questions about our services, we're here to help.</p>
                <p>Feel free to reach out, and our friendly team will get back to you as soon as possible.</p>
                <p> Your wellness journey starts here at Serenity Spa Studio!</p>
                <div className='contact-info'>
                    <h3>Have a Question?</h3>
                    <p>Send us a message and we'll get back to you shortly!</p>
                </div>
                <div className='contact-btn'>
                    <button className='btn-primary' onClick={() => navigateTo('/appointment')}>
                        make appointment
                    </button>
                    <button className='btn-secondary'>
                        send message
                    </button>
                </div>
            </div>
            <div className='contact-img'>
                <img src={img} alt="spa room" width={648} />
            </div>
        </div>
    )
}
