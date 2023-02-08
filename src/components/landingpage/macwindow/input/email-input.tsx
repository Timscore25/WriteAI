import './email-input.css'

function EmailInput () {
    return (
        <div className="email-input" id='emailInput'>
            <div className="input">
                <input className="input-text" type="text" autoComplete='off' placeholder="Your Name"></input>
                <input className="input-text" type="text" autoComplete='off' placeholder="Receiver's Name"></input>
                <input className="input-text" type="text" autoComplete='off' placeholder="Type of email [Business, Casual, etc.]"></input>
                {/*<input className="input-text" type="text" autoComplete='off' placeholder="Language ⏷"></input>*/}
                <div className="dropdown">
                    <div className="select">
                        <span className="selected-open">Language (English by default)</span>
                        <div className="caret"></div>
                    </div>
                    <ul className="menu">
                    <li>Arabic</li>
                    <li>Chinese</li>
                    <li className='active'>English</li>
                    <li>Hindi</li>
                    <li>Spanish</li>
                    </ul>
                </div>
                <textarea className="input-text big" autoComplete='off' placeholder="What's the email about: (ffor best results give as much detail as possible)"></textarea>
            </div>
            <div className="button">
                <button>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
    );
}

export default EmailInput;