function calculateQuantities() {
  const totalUnits = parseFloat(document.getElementById('totalUnits').value);
  const unitsPerCase = parseFloat(document.getElementById('unitsPerCase').value);

  const fullCases = Math.floor(totalUnits / unitsPerCase);
  const partialUnits = totalUnits % unitsPerCase;

  document.getElementById('partialUnits').innerText = partialUnits;
  document.getElementById('fullCases').innerText = fullCases;
}
