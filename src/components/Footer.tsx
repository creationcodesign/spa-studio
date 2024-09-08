import whatsapp from '../assets/icons/whatsapp.svg'
import instagram from '../assets/icons/instagram.svg'
import telegram from '../assets/icons/telegram.svg'
import youtube from '../assets/icons/youtube.svg'


export default function Footer() {
    return (
        <footer>
            <h2>Come meet us</h2>

            <div className="footer-contact">
                <div className="contact">
                    <span>Phone</span>
                    <p className="bold-text">0826 9328 2800</p>
                </div>

                <div className="contact">
                    <span>Email</span>
                    <p className="bold-text">info@spa.com</p>
                </div>

                <div className="contact">
                    <span>Address</span>
                    <p className="bold-text">C/ Valencia 28,</p>
                    <p className="bold-text">08009 Barcelona</p>
                </div>
            </div>

            <div className="footer-info">
                <div className="contact">
                    <span>Opening hours</span>
                    <p className="bold-text">Monday to Sunday to 8 am to 8 pm</p>
                </div>
                <span>*free parking  till 2 hours</span>
                <div className="social">
                    <img src={instagram} alt="instagram" />
                    <img src={telegram} alt="telegram" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={youtube} alt="youtube" />
                </div>
                <p>all rigths reserved</p>
            </div>
        </footer>
    )
}
