import { useState } from "react";
import houses2_1 from "../../assets/images/house2.jpg";
import houses2_2 from "../../assets/images/house2.2.jpg";
import houses2_3 from "../../assets/images/house2.3.jpg";
import houses3_1 from "../../assets/images/house3.1.jpg";
import houses3_2 from "../../assets/images/house3.2.jpg";

// import houses32 from "../../assets/images/house32.jpg";



const Houses_plan = () => {
  const [activeNumber, setActiveNumber] = useState("Hammasi");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="houses">
      <div className="container">
        <div className="houses_box">
          <div className="houses_card_top">
            <h2 className="houses_title">Xonadonlarning o‘ylangan rejalari</h2>
            <div className="houses_card_number">
              {["Hammasi", "2-xonali", "3-xonali"].map((number) => (
                <p
                  key={number}
                  className={`houses_number ${activeNumber === number ? "active" : ""
                    }`}
                  onClick={() => handleNumberClick(number)}
                >
                  {number}
                </p>
              ))}
            </div>
          </div>

          {activeNumber === "Hammasi" && (
            <div className="houses_card_bottom">
              <img src={houses2_2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses3_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses2_2} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom1">
              <img src={houses2_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses2_2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses2_3} alt="" className="houses_img" />
            </div>
          )}



          {activeNumber === "3-xonali" && (
            <div className="houses_card_bottom2">
              <img src={houses3_1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses3_2} alt="" className="houses_img" />

            </div>
          )}

          {/* You can continue adding more conditions for "3-xonali", "4-xonali", etc. */}
        </div>
      </div>
    </div>
  );
};

export default Houses_plan;
