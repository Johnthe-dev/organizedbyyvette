import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import text from "../assets/text.svg";

export const ContactButtons = () => {
    return (
        <div className={'buttonRow'} style={{paddingTop: '1rem', margin: '0'}}>
            <a
                className={'iconButton'}
                href={'mailTo:hello@organizedbyyvette.com'}
                role={'button'}
                aria-labelledby={'emailLabel'}
            >
                <img
                    className={'icon'}
                    src={mail}
                    alt={''}
                />
                <span
                    id={"emailLabel"}
                    hidden
                >
                    Email Me
                </span>
            </a>
            <a
                className={'iconButton'}
                href={'tel:1-505-595-2554'}
                role={'button'}
                aria-labelledby={'callLabel'}
            >
                <img
                    className={'icon'}
                    src={phone}
                    alt={''}
                />
                <span
                    id={"callLabel"}
                    hidden
                >
                    Call Me
                </span>
            </a>
            <a
                className={'iconButton'}
                href={'sms:1-505-595-2554'}
                role={'button'}
                aria-labelledby={'textLabel'}
            >
                <img
                    className={'icon'}
                    src={text}
                    alt={''}
                />
                <span
                    id={"textLabel"}
                    hidden
                >
                    Text Me
                </span>
            </a>
        </div>
    )
}