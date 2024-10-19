(function () {
  "use strict";

  // ########################## job tabs, Shuffle js  ###################
  document.addEventListener("DOMContentLoaded", function () {
    var Shuffle = window.Shuffle;
    var element = document.querySelector(".shuffle-container");

    if (!element) return; // Exit if the .shuffle-container element is not found

    var shuffleInstance = new Shuffle(element, {
      itemSelector: ".shuffle-item",
    });

    $(".shuffle-filter li").on("click", function (e) {
      e.preventDefault();
      $(".shuffle-filter li").removeClass("selected-position");
      $(this).addClass("selected-position");
      var keyword = $(this).attr("data-target");
      shuffleInstance.filter(keyword);
    });
  });

  // ########################## AOS ##########################
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      once: true,
    });
  });
  

  // ########################## Tab ##########################
  function setActiveTab(tabGroup, tabName) {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsContent = tabGroup.querySelector("[data-tab-content]");

    tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
      tabNavItem.classList.remove("active");
    });
    tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
      tabPane.classList.remove("active");
    });

    const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
    selectedTabNavItem.classList.add("active");
    const selectedTabPane = tabsContent.querySelector(
      `[data-tab-panel="${tabName}"]`,
    );
    selectedTabPane.classList.add("active");
  }
  const tabGroups = document.querySelectorAll("[data-tab-group]");
  tabGroups.forEach((tabGroup) => {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsNavItem = tabsNav.querySelectorAll("[data-tab]");
    const activeTabName = tabsNavItem[0].getAttribute("data-tab");

    setActiveTab(tabGroup, activeTabName);

    tabsNavItem.forEach((tabNavItem) => {
      tabNavItem.addEventListener("click", () => {
        const tabName = tabNavItem.dataset.tab;
        setActiveTab(tabGroup, tabName);
      });
    });
  });


  const tablist = document.querySelectorAll("[data-tab-nav] [data-tab]");
  function tabsHandler(event) {
    let index = Array.from(tablist).indexOf(this);
    let numbTabs = tablist.length;
    let nextId;
    if (numbTabs > 1) {
      if (event.key === "ArrowRight") {
        nextId = tablist[(index + 1) % numbTabs];
        if (index === numbTabs - 1) {
          nextId = tablist[0];
        }
        nextId.focus();
        nextId.click();
      }
      if (event.key === "ArrowLeft") {
        nextId = tablist[(index - 1 + numbTabs) % numbTabs];
        if (index === 0) {
          nextId = tablist[numbTabs - 1];
        }
        nextId.focus();
        nextId.click();
      }
    }
  }

  tablist.forEach(function (tab) {
    tab.addEventListener("keydown", tabsHandler);
  });

  // ############################## nav sub-menu toggle ##############################
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownList = document.querySelector(".nav-dropdown-list");
  const navDropdownIcon = document.querySelector(".nav-dropdown-icon");

  navDropdown.addEventListener("click", () => {
    navDropdownList.classList.toggle("hidden");
    navDropdownIcon.classList.toggle("rotate-180");
  });

  // ############################## counter ##############################
  function counter(el, duration) {
    const endValue = Number(el.innerText.replace(/\D/gi, ""));
    const text = el.innerText.replace(/\W|\d/gi, "");
    const timeStep = Math.round(duration / endValue);
    let current = 0;

    const timer = setInterval(() => {
      if (current > endValue) {
        current = endValue;
      } else {
        current += 1;
      }
      el.innerText = current + text;
      if (current === endValue) {
        clearInterval(timer);
      }
    }, timeStep);
  }

  document.querySelectorAll(".counter .count").forEach((count) => {
    counter(count, 500);
  });

  // ############## hamburger ###############
  document.addEventListener("DOMContentLoaded", function () {
    const groupActive = document.querySelector("#group-active");
    function toggleClasses() {
      if (groupActive.classList.contains("group")) {
        groupActive.classList.remove("group");
      } else {
        groupActive.classList.add("group");
      }
    }
    groupActive.addEventListener("click", toggleClasses);
  });

  
})();
