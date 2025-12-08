import heroShot from './assets/heroShot.jpg'
import './App.css'
import {ContactButtons} from "./components/ContactButtons.tsx";

function App() {
    return (
        <div>
            <main className={'container'}>
                <div className={'sectionBox left twoColumns'}>
                    <div className={'heroShotContainer'}>
                        <img
                            className={'heroShot'}
                            src={heroShot}
                            alt={'Yvette wearing a purple puffy jacket with the Sandia mountains behind her'}
                        />
                    </div>
                    <div>
                        <h1 className={'title'}>
                            <b>Organized</b> by Yvette
                        </h1>
                        <p>
                            Albuquerque, New Mexico and surrounding areas.
                        </p>
                        <p>
                            Compassionate, judgment-free <b>home organizing services</b> for anyone going through a life
                            transition or struggling with long term disorganization. I bring empathy and practical solutions
                            to help
                            transform your space in a way that works for you, to support the life you want.
                        </p>
                        <ContactButtons/>
                    </div>
                </div>
                <div className={'sectionBox twoColumns'}>
                    <div style={{padding: '0'}}>
                        <h2 className={'subTitle'} style={{padding: '0'}}>
                            Services offered
                        </h2>
                        <ul style={{padding: '0 0 0 1rem'}}>
                            <li style={{textAlign: 'left'}}>
                                Whole-home organizing sessions (kitchens, bedrooms, offices, garages, etc.)
                            </li>
                            <li style={{textAlign: 'left'}}>
                                Customized organization systems design
                            </li>
                            <li style={{textAlign: 'left'}}>
                                Decluttering assistance with compassionate support
                            </li>
                            <li style={{textAlign: 'left'}}>
                                Maintenance planning for long-term organization success
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={'subTitle'} style={{padding: '0'}}>
                            Pricing
                        </h2>
                        <ul style={{padding: '0 0 0 1rem'}}>
                            <li style={{textAlign: 'left'}}>
                                Hourly rate $70
                            </li>
                            <li style={{textAlign: 'left'}}>
                                One car load of donations per session included
                            </li>
                            <li style={{textAlign: 'left'}}>
                                Small and large projects - from sock drawers to workshops!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'sectionBox center'}>
                    <h2 className={'subTitle centerText'} style={{padding: '0', paddingBottom: '1rem', margin: '0'}}>
                        Ready to create a more organized space that works for you?
                    </h2>
                    <p style={{padding: '0', margin: '0'}}>
                        Call or text: (505) 595-2554
                    </p>
                    <p style={{padding: '0', margin: '0'}}>
                        Email: hello@organizedbyyvette.com
                    </p>
                    <ContactButtons/>
                </div>
            </main>
            <footer>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '0'}}>
                    <p style={{lineHeight: '1.25'}}>Organized by Yvette, LLC</p>
                    <p style={{lineHeight: '1.25'}}><a
                        href={'https://napo.empowereddirectory.com/index.php/viewProfile/78950037'}>NAPO</a> and <a
                        href={'https://www.challengingdisorganization.org/organizer-profile/helloorganizedbyyvette-com/'}>ICD</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
