/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/location.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Orom majmuasi qulay joylashuvi bilan ajralib turadi. Shahar markaziga yaqin bo‘lishi bilan bir qatorda, barcha zarur infratuzilmalar va xizmatlar sizning atrofingizda mavjud.</p>
            <p className="location_text">
              Atrofda sizning barcha ehtiyojlaringizni qondirish uchun kerakli infratuzilma taqdim etilgan. Savdo markazlari, supermarketlar, tibbiyot muassasalari va ta’lim muassasalari — barchasi bir qadamda joylashgan.</p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
            Majmua yaqinidagi istirohat bog‘i va yashil maydonlar sizning salomatligingiz va farovonligingizni ta'minlaydi, tinch va xotirjam muhitda dam olish imkonini beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
