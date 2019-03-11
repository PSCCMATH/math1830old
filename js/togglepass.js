$(document).ready(function() {
  $("#submit").click(function() {
    validatePin(getTextValue(), getUnitSectionText());
  });
});
function getPin(unit, section) {
  return pincode.unit[unit-1].section[section-1].pin;
}
function validatePin(txtValue, unitSectionText) {
  var unit = getUnit(unitSectionText);
  var section = getSection(unitSectionText);
  if (txtValue == getPin(unit, section)|| txtValue == pincode.backdoor) {
    revealSolution();
    revealAnswer();
  }
}
function revealSolution() {
  $(".m1830-solution").show();
  console.log("solutions revealed");
}
function revealAnswer() {
  $(".m1830-answer").show();
  console.log("answers revealed");
}
function getUnitSectionText() {
  var h3Str = $("h3:first").text();
  h3Str = h3Str.split(" ")[0];
  return h3Str;
}
function getUnit(h3Str) {
  return h3Str.split(".")[0];
}
function getSection(h3Str) {
  return h3Str.split(".")[1];
}
function getTextValue() {
  return $("#input").val();
}

var pincode = {
  
  //unit 1
  unit: [
    {
      //section 1
      section: [
        {
          pin: "d7t4"
        },
        {
          pin: "m9m8"
        },
        {
          pin: "q1q1"
        }
      ]
    },
    {
      //section 2
      section: [
        {
          pin: "a4k9"
        },
        {
          pin: "z9d5"
        },
        {
          pin: "r2m8"
        }
      ]
    }
  ],
  //unit 2
   unit: [
    {
      //section 1
      section: [
        {
          pin: "d7t4"
        },
        {
          pin: "m9m8"
        },
        {
          pin: "q1q1"
        }
      ]
    },
    {
      //section 2
      section: [
        {
          pin: "a4k9"
        },
        {
          pin: "z9d5"
        },
        {
          pin: "r2m8"
        }
      ]
    }
  ],
  backdoor: "super246810",
};
