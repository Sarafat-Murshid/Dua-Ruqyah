import img from "../../../assets/allah 1 (Traced).png";
import copy from "../../../assets/copy.png";
import bookmark from "../../../assets/bookmark 1.png";
import Group from "../../../assets/Group.png";
import share from "../../../assets/share 1.png";
import report from "../../../assets/report 1.png";
import PropTypes from 'prop-types';

// Add isNavbarVisible prop
const Details = ({ isNavbarVisible }) => {
    return (
      <div
        className={`grid grid-flow-row gap-4 transition-all duration-200
            ${isNavbarVisible ? "w-full" : "w-200px"}`}
      >
        {/* Section Title */}
        <div className="text-start rounded-lg bg-white shadow-2xl p-4 items-center text-lg font-inter">
          <span className="text-[#1FA45B]">Section : </span>
          The servant is dependent on his Lord
        </div>

        {/* First Card */}
        <div className="text-start rounded-lg bg-white shadow-2xl p-4 items-center text-lg font-inter">
          <h1 className="text-[#1FA45B] flex items-center gap-4 ">
            {" "}
            <img src={img} alt="" /> 1.The servant is dependent on his Lord #1
          </h1>
          <p className="py-4 text-justify ">
            All human beings depend on Allah for their welfare and prevention of
            evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of
            Allah, while Allah is the Free of need, the Praiseworthy.{" "}
          </p>

          <p className=" text-[#1FA45B]">Reference :</p>
          <p className="pb-6">Surah Al-Fatir 35-15</p>
          <div className="  flex gap-6 justify-end  ">
            <img src={copy} alt="" />
            <img src={bookmark} alt="" />
            <img src={Group} alt="" />
            <img src={share} alt="" />
            <img src={report} alt="" />
          </div>
        </div>

        <div className="text-start  rounded-lg bg-white shadow-2xl p-4 items-center text-lg font-inter">
          <h1 className="text-[#1FA45B] flex items-center gap-4 ">
            {" "}
            <img src={img} alt="" /> 2. Conditions for Dua to be successful
          </h1>
          <p className="py-4 text-justify ">
            Prophet (ﷺ) used to say after every compulsory prayer, The servant
            will ask his Lord for all of his religiously and worldly needs,
            because the treasure of all things is in the hands of Allah. Allah
            says (interpretation of the meaning): “And there is not a thing but
            that with Us are its depositories, and We do not send it down except
            according to a known measure.” (Sura Al-Hijr 15:21) No one can
            withhold what Allah gives; And, no one can give what he resists.{" "}
          </p>

          <div className="text-end py-4">
            <h1>
              {" "}
              وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ
              عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْط
            </h1>
            <h2 className="pt-4">
              {" "}
              مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ
              الْجَدُّ
            </h2>
          </div>
          <div className="py-4 text-justify ">
            <h2 className="pb-2">
              <span className=" font-bold ">Transliteration: </span> Laa ilaaha
              illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa
              huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa
              a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi
              minka al-jaddu
            </h2>
            <h3>
              {" "}
              <span className="font-bold ">Translation:F </span> There is none
              worthy of worship except Allah alone with no partner or associate.
              He is the Dominion and to Him be all praise, and He is able to do
              all things. O Allah, one can withhold what You have given and none
              can give what You have withheld, and no wealth or fortune can
              benefit anyone for from You comes all wealth and fortune.
            </h3>
          </div>
          <p className=" text-[#1FA45B]">Reference :</p>
          <p className="pb-6">Surah Al-Fatir 35-15</p>
          <div className="  flex gap-6 justify-end  ">
            <img src={copy} alt="" />
            <img src={bookmark} alt="" />
            <img src={Group} alt="" />
            <img src={share} alt="" />
            <img src={report} alt="" />
          </div>
        </div>
      </div>
    );
};

// Add prop types
Details.propTypes = {
    isNavbarVisible: PropTypes.bool
};

export default Details;