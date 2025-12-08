import heroShot from "../assets/heroShot.jpg";

export const HeroShot=()=>{
    return (
        <div className={'heroShotContainer'}>
            <img
                className={'heroShot'}
                src={heroShot}
                alt={'Yvette wearing a purple puffy jacket with the Sandia mountains behind her'}
            />
        </div>
    )
}