
var viz, workbook, activeSheet;

function initViz() {

  var containerDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/views/twitter_clean/TwitterData?:embed=y&:display_count=yes&publish=yes";

  var options = {
    width: containerDiv.width,
    height: containerDiv.height,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };

  viz = new tableau.Viz(containerDiv, url, options);
}

function switchTab(sheetName) {
  workbook.activateSheetAsync(sheetName);
}
