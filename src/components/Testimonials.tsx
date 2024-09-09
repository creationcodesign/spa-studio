import testimonials from '../data/testimonials'
import star from '../assets/icons/star.svg'

export default function Testimonials() {
    return (
        <div className='testimonials'>
            <h2>Testimonials</h2>
            <div className='testimonies'>
                {testimonials.map((test: any) => (
                    <div className='testimony' key={test.id}>
                        <div className='testimony__star'>
                            {Array.from(Array(test.stars), () => {
                                return <img src={star} alt="star" width={20} />
                            })}
                        </div>
                        <p className='testimony__title'>{test.title}</p>
                        <p className='testimony__discription'>{test.discription}</p>
                        <div className='testimony__info'>
                            <img src={`./assets/images/${test.img}`} alt={test.name} width={50} />
                            <div>
                                <p className='testimony__name'>{test.name}</p>
                                <p>{test.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
