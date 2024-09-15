import { useState } from 'react'
import servises from '../data/services'
import therapists from '../data/therapists'
import img1 from '../assets/images/book-img-1.png'
import img2 from '../assets/images/book-img-2.png'
import img3 from '../assets/images/book-img-3.png'
import { IDataToSend } from '../interface/IDataToSend'


export default function Appointment() {
    const servisesOptions = servises.map(service => (
        <option key={service.id} value={service.id}>{service.title}</option>
    ))

    const therapistsOptions = therapists.map(therapist => (
        <option key={therapist.id} value={therapist.id}>{therapist.name}</option>
    ))

    const [dataToSend, setDataToSend] = useState<IDataToSend>({
        name: '',
        email: '',
        phone: '',
        service: '',
        therapist: '',
        date: '',
        time: '',
        confirmation: false
    })

    const handleChange = (e: any) => {
        setDataToSend({ ...dataToSend, [e.target.id]: e.target.value })
    }

    const handleConfirmationChange = (e: any) => {
        setDataToSend({ ...dataToSend, confirmation: e.target.checked })
    }


    return (
        <div className="appointment-page">
            <h1>Make an Appointment</h1>
            <div className='appointment-container'>
                <div className='appointment-form-container'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='form-part-1 flex-row'>
                            <div className='form-inner-part'>
                                <label htmlFor="name">
                                    Name
                                    <input type="text" placeholder="Max Jonson" id="name" onChange={handleChange} />
                                </label>
                                <label htmlFor="email">
                                    Email
                                    <input type="email" placeholder="jonson@mail.com" id="email" onChange={handleChange} />
                                </label>
                                <label htmlFor="phone">
                                    Phone
                                    <input type="phone" placeholder="03890506280" id="phone" onChange={handleChange} />
                                </label>
                            </div>
                            <div className='form-inner-part'>
                                <label htmlFor="service">
                                    Service
                                    <select name="service" id="service" onChange={handleChange}>
                                        <option value="service-1">select service</option>
                                        {servisesOptions}
                                    </select>
                                </label>
                                <label htmlFor="therapist">
                                    Therapist
                                    <select name="therapist" id="therapist" onChange={handleChange}>
                                        <option value="therapist-1">select therapist </option>
                                        {therapistsOptions}
                                    </select>
                                </label>
                            </div>
                            <div className='form-inner-part'>
                                <label htmlFor="date">
                                    Chose Date
                                    <input type="date" id="date" onChange={handleChange} />
                                </label>
                                <label htmlFor="date">
                                    Chose Time
                                    <input type="time" id="time" onChange={handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className='form-part-2 flex-column'>
                            <label htmlFor="confirm" className='label-checkbox'>
                                <input type="checkbox" id="confirm" onChange={handleConfirmationChange} />
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
