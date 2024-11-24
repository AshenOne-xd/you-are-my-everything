import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/question.css';

function Question() {
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const [heartsActive, setHeartsActive] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const body = document.querySelector("body");

  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    if (!heartsActive) return;
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
  }

  useEffect(() => {
    const heartInterval = setInterval(createHeart, 500);
    const cleanupInterval = setInterval(() => {
      const heartArr = document.querySelectorAll(".fa-heart");
      if (heartArr.length > 200) {
        heartArr[0].remove();
      }
    }, 100);

    return () => {
      clearInterval(heartInterval);
      clearInterval(cleanupInterval);
    };
  }, [heartsActive]);

  function mouseOver() {
    setx(Math.random() * 80 + 10); // Ensure x is between 10% and 90%
    sety(Math.random() * 80 + 10); // Ensure y is between 10% and 90%
  }

  const handleYesClick = () => {
    setHeartsActive(false);
    setShowThankYou(true);
    setTimeout(() => {
      setFadeOut(true);
      document.body.classList.add("fade-to-black");
    }, 2000);
    setTimeout(() => {
      navigate('/flowers');
    }, 3000);
  }

  const noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  const yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } } // Fade-out transition
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="question-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {!showThankYou ? (
            <>
            <div className='images'>
              
            </div>
              <p className="pre-pre-valentine"> you know i never stopped thinking bout you  during all those days</p>
              <p className="pre-valentine">Do you love me on same caliber? like fr fr? </p>
              <p className="valentine"></p>
              <form>
                <button
                  style={yesStyle}
                  type="button"
                  onClick={handleYesClick}
                >
                  YES!
                </button>
              </form>
              <button
                onMouseOver={mouseOver}
                style={noStyle}
                onClick={popUp}
              >
                no
              </button>
            </>
          ) : (
            <div>
            <p className="thank-you-text">I'LL CRY FS 😭</p>
            <p className="thank-you-text-2"> </p>
            <p className="thank-you-text-3">Here some flowers since you didn't let me buy you anything </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Question;
