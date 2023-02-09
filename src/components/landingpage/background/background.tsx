import './background.css'

// background image for the home page
function Background() {
    return (
        <div>
            {/* add a noise background */}
            <div className="bg-noise"></div>
            {/* add a gradient background */}
            <div className="bg-gradient"></div>
        </div>
    );
}

export default Background;