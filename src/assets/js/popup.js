document.addEventListener("DOMContentLoaded", () => {
  let accentedCapitalList = document.querySelector("#accented_capital_list");

  let letterSymbolList = [
    "Â",
    "Ê",
    "Î",
    "Ô",
    "Û",
    "Ä",
    "Ë",
    "Ï",
    "Ö",
    "Ü",
    "À",
    "Æ",
    "æ",
    "Ç",
    "É",
    "È",
    "Œ",
    "œ",
    "Ù",
    "Ñ",
    "ñ",
    "№",
    "«",
    "»",
    "|",
    "@",
    "º",
    "©",
    "£",
    "€",
  ];

  // Show toast message function
  const showToast = (
    message = "Copié avec succès 😊",
    className = "bg-success"
  ) => {
    // Get the snackbar DIV
    var snackbarEl = document.getElementById("snackbar");

    // Add the "show" class to DIV
    snackbarEl.className = `show ${className}`;
    snackbarEl.innerHTML = message;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      snackbarEl.className = snackbarEl.className.replace("show", "");
    }, 3000);
  };

  // Copy element content on click function
  const copy = (event) => {
    const value = event.target.innerHTML;
    const el = document.createElement("textarea");
    el.value = value;
    document.body.appendChild(el);
    el.select();
    if (document.execCommand("copy")) {
      showToast();
    } else {
      showToast("Copie automatique non supportée. Veuillez copier manuellement. 😞", "bg-primary");
    }
    el.remove();
  };

  // We map on letterSymbolList
  let letterSymbolMapList = letterSymbolList
    .map((letter) => {
      return `<div class="col-2 my-3">
        <span class="bg-secondary p-2 text-white rounded letter-symbol" style="cursor: pointer;" data-toggle="tooltip" data-placement="top" title="Cliquez pour copier !">${letter}</span>
      </div>`;
    })
    .join("");

  // We inject map array in the DOM
  accentedCapitalList.innerHTML = letterSymbolMapList;

  // We add click event for each element
  let htmlElementList = [...document.querySelectorAll(".letter-symbol")];

  htmlElementList.forEach((element) => element.addEventListener("click", copy));
});
