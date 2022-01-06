let formContainer = document.querySelector(".loading-form-container");
let closeBtn = document.querySelector("#close");
let formBtn = document.querySelector("#form-submit");

function gtag() {
  dataLayer.push(arguments);
}
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-10829601659/-V-qCLyogY0DEPu2-qso",
    event_callback: callback,
  });
  return false;
}


var formsubmitted = sessionStorage.getItem("formstatus");
if(formsubmitted == null){
  window.onload = () => {
    setTimeout(() => {
      formContainer.style.display = "flex";
      window.dataLayer = window.dataLayer || [];
      gtag("js", new Date());
      gtag("config", "AW-10829601659");
    }, 1000);
  };
} 



closeBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

formBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  gtag_report_conversion();
  formContainer.style.display = "none";
  sessionStorage.setItem("formstatus", "submitted");
});


// AJAX code for form submission
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


// Disable button untill the fields are filled
