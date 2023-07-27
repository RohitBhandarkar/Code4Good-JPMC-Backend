// const SURVEY_ID = 1;

const survey = new Survey.Model(surveyJson);

survey.onComplete.add(surveyComplete);
const alertResults = (sender) => {
  const results = JSON.stringify(sender.data);
  alert(results);
  // saveSurveyResults(
  //     "https://your-web-service.com/" + SURVEY_ID,
  //     sender.data
  // )
};

function surveyComplete(sender) {
  saveSurveyResults("http://localhost:5000/survey/result", sender.data);
  window.location.href = 'http://localhost:3000'
}

async function saveSurveyResults(url, json) {
  console.log(json);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  });

  const res = await response.json();
  console.log(res);
  // const request = new XMLHttpRequest();
  // request.open('POST', url);
  // request.setRequestHeader('Content-Type', 'application/json');
  // request.addEventListener('load', () => {
  //     // Handle "load"
  // });
  // request.addEventListener('error', () => {
  //     // Handle "error"
  // });
  // console.log("inside survey js", json);
  // request.send(JSON.stringify(json));
}

survey.onComplete.add(surveyComplete);

$(function () {
  $("#surveyContainer").Survey({ model: survey });
});

// function saveSurveyResults(url, json) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         // Handle "load"
//     });
//     request.addEventListener('error', () => {
//         // Handle "error"
//     });
//     request.send(JSON.stringify(json));
// }