(function () {
  function initProjectsFilter() {
    var buttons = document.querySelectorAll(".projects-filter__btn");
    var items = document.querySelectorAll("#projects-grid > div");

    if (!buttons.length || !items.length) {
      return;
    }

    function applyFilter(filter) {
      buttons.forEach(function (b) {
        b.classList.toggle("is-active", b.getAttribute("data-filter") === filter);
      });

      items.forEach(function (item) {
        var autonomy = item.getAttribute("data-autonomy") || "";
        var stage = item.getAttribute("data-stage") || "";
        var tags = (item.getAttribute("data-tags") || "").toLowerCase();
        var show = false;

        if (filter === "all") {
          show = true;
        } else if (filter.indexOf("stage:") === 0) {
          show = stage === filter.slice(6);
        } else if (filter.indexOf("tag:") === 0) {
          var tag = filter.slice(4);
          show = (" " + tags + " ").indexOf(" " + tag + " ") !== -1;
        } else if (filter === "kaggle") {
          show = tags.indexOf("kaggle") !== -1;
        } else {
          show = autonomy === filter;
        }

        item.style.display = show ? "" : "none";
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectsFilter);
  } else {
    initProjectsFilter();
  }
})();
