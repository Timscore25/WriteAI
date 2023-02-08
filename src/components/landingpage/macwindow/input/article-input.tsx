import './article-input.css'

function ArticleInput () {
    return (
        <div className="articleInput" id='articleInput'>
            <div className="input">
                <textarea className="input-text big article" autoComplete='off' placeholder="What's this article about: (for best results give as much detail as possible)"></textarea>
            </div>
            <div className="button">
                <button>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
    );
}

export default ArticleInput;