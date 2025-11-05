
  var searchInput = document.getElementById("searchInput");
  var table = document.getElementById("dataTable");
  var rows = table.getElementsByTagName("tr");

  searchInput.onkeyup = function() {
    var filter = searchInput.value.toLowerCase();

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var text = row.textContent || row.innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  };

