import React, { useRef } from 'react'
import './Campaign.css';

const campaigns = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1603483080228-04f2313d9f10?w=500",
    title: "Help Us Build a Safe Home for Elephants",
    raised: "₹2,40,000",
    total: "₹8,00,000",
    donors: 120,
    badge: "Animals",
    icon: "❤️"
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1343473005/photo/teacher-teaching-concepts-of-windmill-in-the-classroom-to-students.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Fg8kxgI9HIz7TSA4I8L0adzprCs4uLXNq4T_EgvyJA=",
    title: "Support Education of Underprivileged Children",
    raised: "₹1,80,000",
    total: "₹6,00,000",
    donors: 86,
    badge: "Education",
    icon: "❤️"
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=YwTJIt9-LX4Acp_3ng6BD3_pke2MHOqNMqMgR2adg_g=",
    title: "Provide Healthcare for Rural Families",
    raised: "₹1,80,000",
    total: "₹6,00,000",
    donors: 64,
    badge: "Healthcare",
    icon: "🩺"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1616610269931-04d58b579ddf?w=500",
    title: "Empower Rural Women through Livelihoods",
    raised: "₹120,000",
    total: "₹6,00,000",
    donors: 92,
    badge: "Livelihood",
    icon: "🤝"
  }
]

const Campaigns = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <main>
      <div className="campaigns-header">
        <h1>Popular Campaigns You Can Support</h1>
        <a href="/Campaigns" className="view-all">View All →</a>
      </div>
      <div className="scroll-wrapper">
        <button className="scroll-btn" onClick={scrollLeft}>❮</button>
        <div className="cards-container" ref={scrollRef}>
          {campaigns.map((campaign) => (
            <div className='Card' key={campaign.id}>
              <div className="card-image-wrapper">
                <img src={campaign.image} alt={campaign.title} />
                <span className="campaign-heart-icon">{campaign.icon}</span>
                <span className="campaign-badge">{campaign.badge}</span>
              </div>
              <p>{campaign.title}</p>
              <p><span className="raised-amount">{campaign.raised}</span> raised of {campaign.total}</p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className='donors'>
                <div className="donor-avatars">
                  <img src="https://i.pravatar.cc/30?img=1" alt="donor" className="avatar" />
                  <img src="https://i.pravatar.cc/30?img=2" alt="donor" className="avatar" />
                  <img src="https://i.pravatar.cc/30?img=3" alt="donor" className="avatar" />
                </div>
                <span>{campaign.donors} Donors</span>
              </div>
              <button className='btn-donate'>Donate Now</button>
            </div>
          ))}
        </div>
        <button className="scroll-btn" onClick={scrollRight}>❯</button>
      </div>
    </main>
  )
}

export default Campaigns;