import therapists from '../data/therapists'
import { ITherapist } from '../interface/ITherapist'

export default function Therapists() {
    return (
        <div className='therapists'>
            <h2>Our Therapists</h2>
            <div className="therapists-images">
                {therapists.map((therapist: ITherapist) => (
                    <div className="therapist-image">
                        <img src={`./assets/images/${therapist.img}`} alt={therapist.name} width={150} />
                        <div className='therapist-text'>
                            <p className='therapist-name'>{therapist.name}</p>
                            <p>{therapist.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
