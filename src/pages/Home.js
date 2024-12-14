import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="content-wrapper">
                <img 
                    src={`${process.env.PUBLIC_URL}/me.jpeg`}
                    alt="Justin Kim"
                    className="profile-image"
                />
                <div className="text-content">
                    <h1>Welcome to the doji365</h1>
                    <p>
                        This is a personal finance application developed by Justin Kim.
                        This app will help users with little to no finance knowledge
                        simulate and visualize savings growth, specifically for retirement or
                        general savings, in a simple and user-friendly way. You can view the
                        GitHub repository <a href="https://github.com/iluvcoding123/finance_app" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;