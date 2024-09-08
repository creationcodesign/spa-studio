import specialOfferImg from '../assets/images/special-offer-img.png'

export default function OfferSpecial() {
    return (
        <div className="offer-special">
            <div className='offer-content'>
                <div className='offer-text'>
                    <h2>Special Offer</h2>
                    <p>This special massage includes the use of aromatic and essential oils.</p>
                    <p className='description'>Hydrating mineral oil and light to moderate pressure  to reduce stress,
                        <br />
                        promote relaxation, improve circulation and stimulate  the nervous system.</p>
                    <button className='btn-secondary'>
                        book now

                    </button>
                </div>
                <span className='small-text'>*Available for females only</span>
            </div>

            <div className='offer-price'>
                <div className='offer-price-tag'>
                    <span>90 min</span>
                    <p className='price'>$158</p>
                </div>
            </div>
            <img src={specialOfferImg} alt="special offer" />
        </div>
    )
}
