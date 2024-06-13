import { Link } from "react-router-dom"
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
           <img src={arrow} className="w-4 h-4 object-contain"/> 
        </Link>

    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-cyan py-4 px-8 text-white mx-5'>
            Hi there, I am <span className='font-semibold'>Eric</span> 👋🏾
            <br />
            A Software Engineer from Kenya
        </h1>
    ),
    2: (
        <InfoBox 
            text="Worked with many companies and clients, acquiring many skills along the way"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Deployed several successful projects over the years. Curious what they are?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo