import servises from '../data/services'
import therapists from '../data/therapists'
import img1 from '../assets/images/book-img-1.png'
import img2 from '../assets/images/book-img-2.png'
import img3 from '../assets/images/book-img-3.png'


export default function Appointment() {
    const servisesOptions = servises.map(service => (
        <option key={service.id} value={service.id}>{service.title}</option>
    ))

    const therapistsOptions = therapists.map(therapist => (
        <option key={therapist.id} value={therapist.id}>{therapist.name}</option>
    ))

    return (
        <div className="appointment-page">
            <h1>Make an Appointment</h1>
            <div className='appointment-container'>
                <div className='appointment-form-container'>
                    <form >
                        <div className='flex-row'>
                            <div>
                                <label htmlFor="name">
                                    Name
                                    <input type="text" placeholder="Max Jonson" id="name" />
                                </label>
                                <label htmlFor="email">
                                    Email
                                    <input type="email" placeholder="jonson@mail.com" id="email" />
                                </label>
                                <label htmlFor="phone">
                                    Phone
                                    <input type="phone" placeholder="03890506280" id="phone" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="service">
                                    Service
                                    <select name="service" id="service">
                                        <option value="service-1">select service</option>
                                        {servisesOptions}
                                    </select>
                                </label>
                                <label htmlFor="therapist">
                                    Therapist
                                    <select name="therapist" id="therapist">
                                        <option value="therapist-1">select therapist </option>
                                        {therapistsOptions}
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="date">
                                    Chose Date
                                    <input type="date" id="date" />
                                </label>
                                <label htmlFor="date">
                                    Chose Time
                                    <input type="time" id="time" />
                                </label>
                            </div>
                        </div>
                        <div className='flex-column'>
                            <label htmlFor="confirm" className='label-checkbox'>
                                <input type="checkbox" id="confirm" />
                                <span>
                                    I confirm that I am 18 years of age or older and have read and agree to the <a href="#">terms and conditions</a>
                                </span>
                            </label>
                            <button className='btn-primary'>
                                book now
                            </button>
                        </div>
                    </form>

                </div>
                <div className='appointment-images'>
                    <img src={img1} alt="relax image" />
                    <img src={img2} alt="relax image" />
                    <img src={img3} alt="relax image" />
                </div>
            </div>
        </div>
    )
}
