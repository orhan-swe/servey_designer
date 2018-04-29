
import testData, {followUpQ} from "./test_data3";

const getFollowUpQ = ()=> {
  let k = Math.round(Math.random() * (followUpQ.length-1));
  return followUpQ[k].questionText;
}
export const getAnswerOption = () => {
  let rand = Math.random();
  if (rand < 0.2) {
    return "Färre än två";
  } else if (rand < .40) {
    return "Mer än två gånger";
  } else if (rand < .60) {
    return "Färre än tjugo";
  } else if (rand < .80) {
    return "Mer är hundra";
  } else if (rand < 1) {
    return "Mer än tretio gånger";
  }

}

export const getAnswerOptionsArray = () => {
  //should return an array of answers:
  let rand = Math.random();
  let numberAnwers = 0;
  let answerOptions = [];
  if (rand < 0.3) {
    numberAnwers = 2;
  } else if (rand < 0.6) {
    numberAnwers = 5;
  } else
    numberAnwers = 8;
  for (let k = 0; k < numberAnwers; k++) {
    answerOptions[k] = {};
    answerOptions[k].answer = getAnswerOption();
    if (Math.random() < 0.4) {
      answerOptions[k].followUpQuestion = getFollowUpQ();
    }
  }
  return answerOptions;
}


export const testDataRedo = () => {
  testData.forEach((v, i, arr) => {
    //v is category
    v.questions = v.questions.map((v, i, arr) => {
      v.type = getType();
      v.answerOptions = getAnswerOptionsArray();
      return v;
    })

  })
  return testData;

}

export const getType = () => {
  let rand = Math.random();
  if (rand < 0.2) {
    return "Checkbox";
  } else if (rand < .40) {
    return "List";
  } else if (rand < .60) {
    return "Slider";
  } else if (rand < .80) {
    return "Radio buttons";
  } else if (rand < 1) {
    return "Free text";
  }
}
