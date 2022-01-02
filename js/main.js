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

window.onload = () => {
  setTimeout(() => {
    formContainer.style.display = "flex";
    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", "AW-10829601659");
  }, 5000);
};

closeBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gtag_report_conversion();
});
