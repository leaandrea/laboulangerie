import React from "react";
import "./styles/App.css";
import { Navbar } from "rsuite";

// import classNames from "classnames";
import image7 from "../src/images/farine.jpg";
import image1 from "../src/images/bread1.jpg";
import image3 from "../src/images/facade.jpg";
import image4 from "../src/images/fraises.jpg";
import image5 from "../src/images/pommes3.jpg";
import image6 from "../src/images/magasin.png";
import image2 from "../src/images/boulangerie.jpg";
import image8 from "../src/images/8.png";
import image9 from "../src/images/9.png";
import image10 from "../src/images/10.png";
import image11 from "../src/images/11.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";

import { Link, BrowserRouter } from "react-router-dom";

export default class ScrollingDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scrolling: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  render() {
    const divStyle = {
      zIndex: 2,
      position: this.state.scrolling ? "fixed" : "fixed",
      // display: "inline-block",

      width: this.state.scrolling ? "100vw" : "100vw",
      height: this.state.scrolling ? "12vh" : "",
    };

    const textStyle = {
      zIndex: 2,
      position: this.state.scrolling ? "fixed" : "fixed",
      // display: "inline-block",

      fontSize: this.state.scrolling ? "2.3rem" : "",
    };

    const sousTextStyle = {
      zIndex: 2,
      position: this.state.scrolling ? "fixed" : "fixed",
      // display: "inline-block",

      fontSize: this.state.scrolling ? "0.8rem" : "",
      // marginTop: this.state.scrolling ? "" : "3rem",
    };

    // const tryClass = classNames("boldText", "phoneNumber");

    return (
      <div>
        <BrowserRouter>
          <Navbar className="firstDiv" style={divStyle}>
            {" "}
            <a
              style={textStyle}
              className="mainTitle"
              href="https://laboulangeriemenneval.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              la boulangerie
            </a>
            <span style={sousTextStyle} className="soustitre">
              Menneval
            </span>
          </Navbar>

          <img src={image1} className="image" alt="logo"></img>
          <div className="SecondDiv">
            <hr className="diagonale" />
            <h2 className="secondDivTitle">- Artisan Boulanger -</h2>
            <p className="secondDivParagraph">
              Boulanger et pâtissier depuis ses quinze ans,{" "}
              <span className="italique"> Gildas</span> a fait de la fabrication
              du pain sa passion et sa spécialité. Artisan et chef d'entreprise,
              il décide en 2020 de s'installer à Menneval pour y développer sa
              première création : une boulangerie 100% artisanale.
            </p>
            <hr className="diagonale" />
          </div>

          <div className="secondImage">
            <img src={image2} className="image2" alt="logo"></img>
          </div>
          <div className="thirdDiv">
            <h2 className="thirdDivTitle">- La passion du pain -</h2>
            <p className="thirdDivParagraph">
              « Nous avons décidé, avec notre partenaire{" "}
              <span className="boldText">Le Moulin d'Auguste </span>, de
              travailler avec des farines locales euroises. Notre baguette de
              tradition sera fabriquée grâce à un processus de fermentation
              longue, qui permettra une meilleure conservation du produit et de
              sa saveur. »{" "}
            </p>
          </div>
          <div className="divImage7">
            <img src={image7} className="image7" alt="image7"></img>
          </div>
          <div className="thirdDivBis">
            <hr className="diagonale" />
            <h2 className="thirdDivBisTitle">- Tout fait maison -</h2>
            <p className="thirdDivBisParagraph">
              « Notre engagement,{" "}
              <span className="boldText">tout faire maison</span> : des
              croissants jusqu'à la compote des chaussons aux pommes. Tout sera
              réalisé sur place afin de proposer le meilleur à nos clientes et
              clients. Il en ira de même pour la pâtisserie : seront
              sélectionnés des produits de qualité, et privilégiés des fruits de
              saison. »
            </p>
            <hr className="diagonale" />
          </div>

          <div className="fourthDiv">
            <div className="blocImages">
              <img src={image3} className="image3" alt="logo"></img>
              {/* <img src={image4} className="image4" alt="logo"></img>
              <img src={image5} className="image5" alt="logo"></img> */}
            </div>
            <div className="divLine">
              {/* <hr className="diagonaleFoncee" /> */}
            </div>
            <div className="fifthDivContainer">
              <div className="fifthDiv">
                <h2 className="fourthDivTitle">- Nous trouver -</h2>
                <h1 className="fifthDivTitle">la boulangerie</h1>
                <h2 className="fifthDivSecondTitle">Menneval</h2>
                <div className="fifthDivParagraph">
                  {" "}
                  13, route de Rouen <br /> 27300 Menneval
                </div>
                <Link
                  to={{
                    pathname:
                      "https://www.google.fr/maps/place/13+Route+de+Rouen,+27300+Menneval/@49.1017328,0.6083221,17z/data=!3m1!4b1!4m5!3m4!1s0x47e1a15e470cec13:0x4f9c53f2e3e05f27!8m2!3d49.1017328!4d0.6105108",
                  }}
                  target="_blank"
                  className={"nousLocaliser"}
                >
                  {" "}
                  Voir le plan
                </Link>
              </div>
            </div>
            <h2 className="fourthDivTitle">- Nous contacter -</h2>
            <div className={"mail"}> laboulangeriemenneval@gmail.com</div>
            <div className="iconesContainer">
              <div className="iconesReseaux">
                <a
                  href="https://www.facebook.com/laboulangeriemenneval"
                  className="facebook1"
                >
                  <FaFacebook className="facebook" size={40} />
                </a>
                <a
                  href="http://www.instagram.com/laboulangeriemenneval"
                  className="instagram1"
                >
                  <FaInstagram className="instagram" size={40} />
                </a>
              </div>

              {/* <SimpleMap /> */}
            </div>
            <img src={image6} className="image6" alt="logo"></img>
            {/* <hr className="diagonale" /> */}

            <div className="nosPartenaires">
              <p>Notre partenaire : </p>

              <div className="partenairesContainer">
                <div className="div2">
                  <a href="https://www.moulindauguste.fr/">
                    <img src={image9} className="image9" alt="logo"></img>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="lastDivDiv"></div>
            {/* <hr className="diagonale" /> */}
            <div className="créditsContainer">
              <span className="crédits">&nbsp;la boulangerie © 2020</span>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
