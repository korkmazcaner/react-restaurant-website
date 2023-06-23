import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Hakkimizda() {
  return (
    <>
      <div className="about-banner"></div>
      <div className="about-bottom mx-auto p-3 text-center">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          pariatur laudantium sint suscipit placeat asperiores ut, mollitia id
          repellendus est consequuntur molestias nobis nihil soluta repudiandae
          voluptatem facere, labore minus.
        </p>
        <BsInstagram /> <BsTwitter /> <BsFacebook />
      </div>
    </>
  );
}

export default Hakkimizda;
