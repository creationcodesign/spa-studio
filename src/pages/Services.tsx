import servises from '../data/services'
import Offer from '../components/Offer'
import OfferSpecial from '../components/OfferSpecial'

export default function Services() {
    const servisesPartOne = servises.slice(0, 4)
    const servisesPartTwo = servises.slice(4, 8)

    return (
        <div className='services-page'>
            <h1>Our Service to Revitalize & Reset </h1>
            <div className='services-list-container'>
                <ul className='services-list services-list-1'>
                    {servisesPartOne.map(service => (
                        <li className='services-item' key={service.id}>
                            <p className='services-title'>{service.title}</p>
                            <div className='services-img'>
                                <img src={`./assets/images/${service.img}`} alt={service.title} width={200} />
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className='services-list services-list-2'>
                    {servisesPartTwo.map(service => (
                        <li className='services-item' key={service.id}>
                            <div className='services-img'>
                                <img src={`./assets/images/${service.img}`} alt={service.title} width={200} />
                            </div>
                            <p className='services-title'>{service.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Offer />
            <OfferSpecial />
        </div>
    )
}
