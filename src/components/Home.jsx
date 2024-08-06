import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./css/home.css";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [selectedDay, setSelectedDay] = useState();
  const [selectTier, setSelectTear] = useState();
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const [highlitedBtn, setHighlitedBtn] = useState(true);
  const [usedBalancDoller, setUsedBalancDoller] = useState();
  const [arrowdown, setArrowdown] = useState(true);

  const showBtn = ["USE BALANCE", "$1000", "$100"];
  const days = [1, 7, 30, 2, 5];
  const tier = ["Tier1", "Tier2", "Tier3", "Tier4", "Tier5"];
  const chnageBgcolor = { backgroundColor: "skyblue",   border: "1px solid blue", color: "red", };

  const handleBtnBackground = (index) => {
    setSelectedDay(index);
  };
  // handleToggleBtn___________________

  const handleToggleBtn = () => {
    setToggle(!toggle);
  };

  // handleShowBtn_________________________

  const handleShowBtn = () => {
    setShow(!show);
  };

  // tierHandleShow_____________________

  const tierHandleShow = (index) => {
    setSelectTear(index);
  };

  const handleHighlitedBtn = () => {
    setHighlitedBtn(!highlitedBtn);
  };

  // handlBalanceShow ____________________

  const handlBalanceShow = (index) => {
    setUsedBalancDoller(index);
  };

  
  return (
    <>
      {/* header start_______________________________ */}
      <div className="container">
        <div className="header">
          <h1>Calculator</h1>
          <div className="header_icon">
            <RxCross1 />
          </div>
        </div>
        {/* header end_______________________________ */}

        {/* sub header start____________________________ */}

        <div className="sub_header">
          <div className="cake_logo">
            <img src="/img/cake.png" alt="" /> <span>Cake</span>
            {toggle ? (
              <FaToggleOff onClick={handleToggleBtn} className="toggle_btn" />
            ) : (
              <FaToggleOn onClick={handleToggleBtn} className="toggle_btn" />
            )}
            <span>USD</span>
          </div>
        </div>
        {/* sub header_________________________________________ */}

        {/* total amount Box start ____________________________________ */}

        <div className="total_amout">
          <div className="total_amout_box">
            <h3>2.10000 CAKE </h3>
          </div>
        </div>

        {/* total amount Box end  ____________________________________ */}

        {/* doller Button_________________________ */}

        <div className="doller_button">
          <div className="btn_collection">
            {showBtn.map((curEle, index) => {
              return (
                <>
                  <div key={index}>
                    <button
                      style={usedBalancDoller === index ? chnageBgcolor : null}
                      className="token_btn"
                      onClick={() => handlBalanceShow(index)}
                    >
                      {curEle}
                    </button>
                  </div>
                </>
              );
            })}
          </div>

          <div className="token_number">
            <p>~ $20.82</p>
          </div>
        </div>
        {/* doller end _________________________ */}

        <h5>Timeframe</h5>
        <div className="days_Container">
          {days.map((curElem, index) => {
            return (
              <div key={index}>
                {curElem === 2 || curElem === 5 ? (
                  <button
                    style={selectedDay === index ? chnageBgcolor : null}
                    onClick={() => handleBtnBackground(index, curElem)}
                  >{`${curElem} Year`}</button>
                ) : (
                  <button
                    style={selectedDay === index ? chnageBgcolor : null}
                    onClick={() => handleBtnBackground(index, curElem)}
                  >
                    {`${curElem} Days`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {/* Enable Accelerated section  ____________________ */}

        <div className="Enable_sec">
          <div className="enable_text">
            <h4>Enable Accelerated APY</h4>
          </div>
          <div className="hide_show_btn">
            {show ? (
              <FaToggleOn onClick={handleShowBtn} className="show_btn" />
            ) : (
              <FaToggleOff className="show_btn" onClick={handleShowBtn} />
            )}
          </div>
        </div>

        {/* select tire________________________________ */}

        <div className="tier_text">Select Tier</div>
        <div className="tire_sec">
          {tier.map((curElem, index) => {
            return (
              <div key={index}>
                <button
                  style={selectTier === index ? chnageBgcolor : null}
                  onClick={() => tierHandleShow(index)}
                >
                  {curElem}
                </button>
              </div>
            );
          })}
        </div>
        {/* ROI section__________________________________ */}

        <div className="rio_text">
          <h5>ROI at Current Rates</h5>
        </div>
        <div className="token_container">
          <div className="edit_icon">
            <MdEdit />
          </div>
          <div className="token_doller">
            <h1>100.0 USD </h1>
          </div>
        </div>
        <div className="token_no">
          <p>~ 3CAKE + 10 DON</p>
        </div>
        {/* grp_brn sec __________________________ */}

        <div className="grp_btn">
          <button
            style={{ backgroundColor: highlitedBtn ? "black" : "white" }}
            onClick={handleHighlitedBtn}
            className="apply_btn"
          >
            Apply
          </button>
          <button
            onClick={handleHighlitedBtn}
            style={{ backgroundColor: highlitedBtn ? "white" : "black" }}
            className="cancle_btn"
          >
            Cancle
          </button>
        </div>
        {/* footer section____________________ */}

        <footer>
          <div className="footer_box">
            <div className="footer_heading">
              <h3>Showdetail</h3>
            </div>
            <div className="footer_icons">
              <IoIosArrowDown
                style={{ arrowdown }}
                onClick={() => setArrowdown(!arrowdown)}
              />
            </div>
          </div>
          {arrowdown ? (
            <div className="footer_content">
              <h5>Calculate based on your current rates</h5>
              <p>
                All fugures are estimates provided for your convenience only,
                and by no means represent guaranted returns.
              </p>
            </div>
          ) : null}
        </footer>
      </div>
    </>
  );
};

export default Home;
