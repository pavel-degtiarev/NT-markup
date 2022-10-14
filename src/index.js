"use strict";

import "./index.scss";

const checkScheduleForOverflow = (card) => {
  const schedule = card.querySelector(".trip-schedule__items");
  schedule.parentElement.classList.remove("overflow", "overflow-hidden", "overflow-shown");
  const cardBounds = card.getBoundingClientRect();
  const scheduleBounds = schedule.getBoundingClientRect();

  if (scheduleBounds.right > cardBounds.right) {
    schedule.parentElement.classList.add("overflow", "overflow-hidden");
    const buttonMore = card.querySelector(".trip-schedule__more");
    buttonMore.addEventListener(
      "click",
      () => {
        schedule.parentElement.classList.remove("overflow-hidden");
        schedule.parentElement.classList.add("overflow-shown");
      },
      { once: true }
    );
  }
};

const checkCards = (cards) => cards.forEach((card) => checkScheduleForOverflow(card));

const cards = document.querySelectorAll(".trip-card");
window.addEventListener("resize", () => checkCards(cards));
checkCards(cards);

