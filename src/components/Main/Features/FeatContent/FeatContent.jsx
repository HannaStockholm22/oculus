import ls from './FeatContent.module.css';

export const FeatContent =({activeTab})=>{

    let contentElements = [
        {
          id: 0,
          path: "images/features/01_big.jpg",
          title: "Graphics",
          text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
          img: "images/features/01_small.jpg",
        },
        {
          id: 1,
          path: "images/features/02_big.jpg",
          title: "Controls",
          text: " 2222nnn.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          img: "images/features/02_small.jpg",
        },
        {
          id: 2,
          path: "images/features/03_big.jpg",
          title: "Processor",
          text: "3333mmmLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          img: "images/features/03_small.jpg",
        },
        {
          id: 3,
          path: "images/features/04_big.jpg",
          title: "Set up your play area",
          text: "4444mmmLorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: "images/features/04_small.jpg",
        },
        {
          id: 4,
          path: "images/features/05_big.jpg",
          title: "Gardian activity",
          text: " 555mmmLorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: "images/features/05_small.jpg",
        },
        {
          id: 5,
          path: "images/features/06_big.jpg",
          title: "Headset casting",
          text: " 666wwwLorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: "images/features/06_small.jpg",
        },
      ];
    
     
    return (
        <div className={ls.inner}>
            <img className={ls.mainImg} src={contentElements[activeTab].path}  alt="bigImage"/> 
            <div className={ls.info}>
                <div className={ls.title}>
                   {contentElements[activeTab].title}
                </div>
                <div className={ls.text}>
                   {contentElements[activeTab].text}
                </div>
                <div className={ls.video} style={{ backgroundImage: `url( ${contentElements[activeTab].img})` }}>
                    <button className={ls.videoBtn}> 
                        <img className={ls.infoImg}  src="images/features/play.svg" alt="smallImage"/>
                    </button>
                    <span> Watch the video</span>
                </div>
            </div>
        </div>
    );
};