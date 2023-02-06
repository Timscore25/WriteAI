import './cards.css';

function Cards() {
    return (
        <div className="cards">
            <h2>Pricing</h2>
                      <div className="cards-container">
                        <div className="card">
                          <div className="card-content">
                            <h3>Trial</h3>
                            <p>Unlock the full potential of WriteAI with our free Trial Package. Get access to 5 free credits and experience the power of AI-generated content firsthand. Don't miss this opportunity to see how WriteAI can revolutionize your writing process.</p>
                            <button className='card-btn'>Start Trial</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-content">
                            <h3>Starter</h3>
                            <p>Take your writing to the next level with the Starter Package from WriteAI. With 1000 credits, you'll have the flexibility to create a variety of content and fully test the capabilities of our AI technology. Try it out for yourself and see why the Starter Package is the perfect choice for most users.</p>
                            <button className='card-btn'>Buy Now</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-content">
                            <h3>Unlimited</h3>
                            <p>For the ultimate writing experience, upgrade to the Unlimited Package from WriteAI. With no limits on credits and access to all of our advanced features, you'll be able to create an endless amount of high-quality content with ease. Whether you're a professional writer or just looking to take your writing to the next level, the Unlimited Package is the perfect choice.</p>
                            <button className='card-btn'>Buy Now</button>
                          </div>
                        </div>
                      </div>
        </div>
    );
}

export default Cards;