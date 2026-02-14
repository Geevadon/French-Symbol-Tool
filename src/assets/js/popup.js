document.addEventListener("DOMContentLoaded", () => {
  const accentedCapitalList = document.querySelector("#accented_capital_list");

  const letterSymbolList = [
    "Â", "Ê", "Î", "Ô", "Û",
    "Ä", "Ë", "Ï", "Ö", "Ü",
    "À", "Æ", "æ", "Ç",
    "É", "È", "Œ", "œ",
    "Ù", "Ñ", "ñ",
    "№", "«", "»", "|",
    "@", "º", "©", "£", "€"
  ];

  // Show toast message
  const showToast = (
    message = "Copié avec succès 😊",
    className = "bg-success"
  ) => {
    const snackbarEl = document.getElementById("snackbar");

    snackbarEl.className = `show ${className}`;
    snackbarEl.textContent = message;

    setTimeout(() => {
      snackbarEl.className = snackbarEl.className.replace("show", "");
    }, 3000);
  };

  // Modern clipboard copy function
  const copy = async (event) => {
    const value = event.target.textContent;

    try {
      await navigator.clipboard.writeText(value);
      showToast();
    } catch (error) {
      showToast(
        "Copie automatique non supportée. Veuillez copier manuellement. 😞",
        "bg-primary"
      );
    }
  };

  // Generate HTML
  const letterSymbolMapList = letterSymbolList
    .map((letter) => {
      return `
        <div class="col-2 my-3">
          <span 
            class="bg-secondary p-2 text-white rounded letter-symbol"
            style="cursor: pointer;"
            title="Cliquez pour copier !">
            ${letter}
          </span>
        </div>
      `;
    })
    .join("");

  // Inject into DOM
  accentedCapitalList.innerHTML = letterSymbolMapList;

  // Add click events
  const htmlElementList = document.querySelectorAll(".letter-symbol");
  htmlElementList.forEach((element) =>
    element.addEventListener("click", copy)
  );
});
