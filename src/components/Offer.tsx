import offerImg from '../assets/images/offer-img.png'

export default function Offer() {
    return (
        <div className='offer'>
            <img src={offerImg} alt="offer img" />
            <div className='offer-text'>
                <h2> GET 15% OFF </h2>
                <p>Register to unlock exclusive content, discounts, tickets and access to the very best now.
                </p>
                <input type="text" placeholder="Enter your email" id="" />
                <button className='btn-primary'>
                    subscribe now
                </button>
            </div>
        </div>
    )
}
