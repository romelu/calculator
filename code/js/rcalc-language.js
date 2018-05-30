var language = "en";

function setLanguage(newLanguage) {
  language = newLanguage;
  document.getElementById("id-title").innerHTML = localize("title", language);
  document.getElementById("id-heading").innerHTML = localize("heading", language);
  document.getElementById("id-button-color").innerHTML = localize("buttonColor", language);
  document.getElementById("id-button-size").innerHTML = localize("buttonSize", language);
  document.getElementById("id-button-language").innerHTML = localize("buttonLanguage", language);
  document.getElementById("id-button-default-theme").innerHTML = localize("buttonDefaultTheme", language);
  document.getElementById("id-button-sky-theme").innerHTML = localize("buttonSkyTheme", language);
  document.getElementById("id-button-sand-theme").innerHTML = localize("buttonSandTheme", language);
  document.getElementById("id-button-small").innerHTML = localize("buttonSmall", language);
  document.getElementById("id-button-default").innerHTML = localize("buttonDefault", language);
  document.getElementById("id-button-large").innerHTML = localize("buttonLarge", language);
  document.getElementById("id-button-english").innerHTML = localize("buttonEnglish", language);
  document.getElementById("id-button-czech").innerHTML = localize("buttonCzech", language);
}

function localize(txt, language) {
  var localizeText;
  switch (language) {
    case "en":
      if (txt == "title")
        localizeText = "Calculator";
      if (txt == "heading")
        localizeText = "Calculator by Roman";
      if (txt == "messageErrorDivisionByZero")
        localizeText = "Can not devide by 0!\nClick C";
      if (txt == "messageErrorInvalidEntry")
        localizeText = "Invalid entry!\nClick C";
      if (txt == "buttonColor")
        localizeText = "Color";
      if (txt == "buttonSize")
        localizeText = "Size";
      if (txt == "buttonLanguage")
        localizeText = "Language";
      if (txt == "buttonDefaultTheme")
        localizeText = "Default theme";
      if (txt == "buttonSkyTheme")
        localizeText = "Sky theme";
      if (txt == "buttonSandTheme")
        localizeText = "Sand theme";
      if (txt == "buttonSmall")
        localizeText = "Small";
      if (txt == "buttonDefault")
        localizeText = "Default";
      if (txt == "buttonLarge")
        localizeText = "Large";
      if (txt == "buttonEnglish")
        localizeText = "English";
      if (txt == "buttonCzech")
        localizeText = "Czech";
      break;
    case "cs":
      if (txt == "title")
        localizeText = "Kalkulačka";
      if (txt == "heading")
        localizeText = "Romanova Kalkulačka";
      if (txt == "messageErrorDivisionByZero")
        localizeText = "Nelze dělit nulou!\nKlikněte C";
      if (txt == "messageErrorInvalidEntry")
        localizeText = "Neplatné zadání!\nKlikněte C";
      if (txt == "buttonColor")
        localizeText = "Barva";
      if (txt == "buttonSize")
        localizeText = "Velikost";
      if (txt == "buttonLanguage")
        localizeText = "Jazyk";
      if (txt == "buttonDefaultTheme")
        localizeText = "Víchozí téma";
      if (txt == "buttonSkyTheme")
        localizeText = "Téma nebe";
      if (txt == "buttonSandTheme")
        localizeText = "Téma písek";
      if (txt == "buttonSmall")
        localizeText = "Malá";
      if (txt == "buttonDefault")
        localizeText = "Víchozí";
      if (txt == "buttonLarge")
        localizeText = "Velká";
      if (txt == "buttonEnglish")
        localizeText = "Angličtina";
      if (txt == "buttonCzech")
        localizeText = "Čeština";
  }
  return localizeText;
}