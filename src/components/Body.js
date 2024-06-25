import profilePic from '../assets/profile-pic.jpg';
export default function Body() {
    return (
        <div className="card-body">
            <img src={profilePic} alt="prof-pic" />
            <h2>Thamindu Nethmina</h2>
            <h4>Fullstack Developer</h4>
            <div className="btn-panel">
                <a href="#" className="btn email">Email</a>
                <a href="#" className="btn resume">LinkedIn</a>
            </div>
            <div className="details">
                <h3>About Me</h3>
                <p>Hi! I am a fullstack developer with experience in dotnet, MS-SQL, asp.net mvc. I am passionate about creating responsive web applications and learning new technologies. I am currently working as an associate software engineer at HCLTech Sri Lanka. I'm also an undergraduate in Computer Science and Computer Engineering.</p>
                
                <h3>Interests</h3>
                <p>Web Development, Machine Learning, Artificial Intelligence, Data Science, and Robotics.</p>
            </div>
        </div>
    )
}