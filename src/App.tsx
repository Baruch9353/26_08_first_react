import './App.css';
import Header from "./comps/Header.tsx";
import ProfileCard from "./comps/ProfileCard.tsx";
import momo from './assets/צילום מסך 2025-08-05 170603.png'
import img from './assets/vite.svg';
import rea from './assets/react.svg';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="cards-container">
        <ProfileCard
          name="Momo"
          role="Web Developer"
          image={momo}
          kind="friend"
        />
        <ProfileCard
          name="Baruch"
          role="Designer"
          image={img}
          kind="teacher"
        />
        <ProfileCard
          name="Bar"
          role="Product Manager"
          image={rea}
          kind="student"
        />
      </div>
    </div>
  )
}
