"use strict";

const convertTitleCase = function (string) {
  const exceptions = ["a", "is", "are", "am", "in", "the"];
  const titleCase = string
    .toLowerCase()
    .split(" ")
    .map((str) =>
      exceptions.includes(str) ? str : str[0].toUpperCase() + str.slice(1)
    );
  return titleCase;
};

const Intro = "I am a Science Teacher";
console.log(convertTitleCase(Intro));
