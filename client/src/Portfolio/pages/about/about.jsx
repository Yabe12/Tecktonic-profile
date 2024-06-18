// about.jsx
import styles from "./about.module.css";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Card1 from "../../componets/card/aboutcard1";
import Card2 from "../../componets/card/aboutcard2";
import Card from "../../componets/card/foundercard";
import Adcard from "../../componets/card/adcard";
import Card3 from "../../componets/card/aboutcard3.";
import Join from "../../../Dashbord/component/cards/FileCards/HomePagecard/card";
import Card4 from "../../componets/card/aboutcard4";

function About() {
  const cardContainerRef = useRef(null);

  const handleScroll = (event) => {
    if (cardContainerRef.current) {
      const deltaX = event.deltaX;
      cardContainerRef.current.scrollLeft += deltaX;
    }
  };
  const cardData = [
    {
      picture: "https://avatars.githubusercontent.com/u/135310799?v=4",
      name: "Dagmawi Yohannes",
      role: "President",
    },
    {
      picture:
        "https://media.licdn.com/dms/image/D4E03AQHfvUt2gRNCTQ/profile-displayphoto-shrink_400_400/0/1709308000733?e=1721260800&v=beta&t=IghpoZjvm3EWynhSO_40cYQWX7l8duYy_CSAkqjGAXg", // Leave picture blank for other cards
      name: "Nathnael Mengistu",
      role: "Vice President",
    },
    {
      picture:
        "https://media.licdn.com/dms/image/D4E03AQH_xQn4KPcGaA/profile-displayphoto-shrink_400_400/0/1708758666249?e=1721260800&v=beta&t=Db9NIB2IY5YVunZwmR-MXAMtBEu0uQKwvvKR9W7M_Bc", // Leave picture blank for other cards
      name: "Esrael Wondimu",
      role: "Public Relations",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/83784402?v=4",
      name: "Natnael Tadesse ",
      role: "Treasurer",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/113988832?v=4", // Leave picture blank for other cards
      name: "Ephrem Belaineh ",
      role: "Events Coordinator",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/112067722?v=4", // Leave picture blank for other cards
      name: "Bereket Kinfe",
      role: "Education Lead:",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/62201852?v=4", // Leave picture blank for other cards
      name: "Natnael Belayneh",
      role: "Education Lead:",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/88771414?v=4", // Leave picture blank for other cards
      name: "Ruth abiti",
      role: "Education Lead:r",
    },
    {
      picture:
        "https://media.licdn.com/dms/image/D4E03AQHACIUOoyof5A/profile-displayphoto-shrink_400_400/0/1686643241719?e=1721260800&v=beta&t=rsgbUjlwOnr2sTDP6K2H7HCDB65HazMnyb-xyRwvZg8", // Leave picture blank for other cards
      name: "Hiro worku",
      role: "Recruitment",
    },
    {
      picture: "https://avatars.githubusercontent.com/u/101426508?v=4", // Leave picture blank for other cards
      name: "Habtemariam Kibru",
      role: "Recruitment",
    },
    // Add more card data as needed
  ];

  return (
    <section id="about">
      <div className={styles.container}>
        <main className={styles.main}>
          <FadeInSection>
            <Card1 />
          </FadeInSection>
          <FadeInSection>
            <Card2 />
          </FadeInSection>
          <div className={styles.adcard}>
            <Adcard />
          </div>
          <FadeInSection>
            <Card3 />
          </FadeInSection>
          <FadeInSection>
            <Card4 />
          </FadeInSection>
        </main>
        <div className={styles.cards}>
          <h1>Who Found TechTonic?</h1>
          <div
            ref={cardContainerRef}
            className={styles.cardContainer}
            onWheel={handleScroll}
          >
            {cardData.map((data, index) => (
              <FadeInSection key={index}>
                <Card
                  className={styles.card}
                  picture={data.picture}
                  name={data.name}
                  role={data.role}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-up ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default About;
