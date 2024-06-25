import profilePic from '../assets/profile-pic.jpg';

export default function Header() {
    return (
        <div className="card-header">
            <div className="profile-pic">
                <img src={profilePic} alt="prof-pic" />
            </div>
        </div>
    )
}
