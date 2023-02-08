import './essay-input.css';

function EssayInput () {
    return (
        <div className="essayInput" id='essayInput'>
            <div className="input">
                <input className="input-text" type="number" placeholder='How many words? [Optimal]'/>
                <input className="input-text" type="text" placeholder='Title [Optimal]'/>
                <textarea className="input-text big essay" autoComplete='off' placeholder="What's this essay about: (for best results give as much detail as possible)"></textarea>
            </div>
            <div className="button">
                <button>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
    );
}

export default EssayInput;