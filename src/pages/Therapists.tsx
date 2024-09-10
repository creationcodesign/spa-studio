import therapists from '../data/therapists'

export default function Therapists() {
    return (
        <div className='therapists-page'>
            <h1>Our Therapists</h1>
            <p className='text'>Our staff, with a specialized training, certified by the Po Temple in  Bangkok and by the Health Ministry of Thailand, have a long professional  career at the best Spas. They work on the energetic, physical and  spiritual areas of the body, making every therapy a unique experience.</p>

            <div className="therapists-cards">
                {therapists.map(therapist => (
                    <div className='therapist-card' key={therapist.id}>
                        <img src={`./assets/images/${therapist.img}`} alt={therapist.name} width={150} />
                        <div className="therapist-info">
                            <h3>{therapist.name}</h3>
                            <p>{therapist.titleLong}</p>
                            <p className='experince'>{therapist.experince}</p>
                            <button className='btn-primary'>
                                make appointment
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
