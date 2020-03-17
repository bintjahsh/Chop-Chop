function setupTabs () {
   document.querySelectorAll(".tabs__button").forEach(button => {
     button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab = "${tabNumber}"]`);


        sideBar.querySelectorAll(".tabs__button").forEach(button => {
            button.classList.remove(".tabs__button--active");
        });
        tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
            tab.classList.remove(".tabs__content--active");
        });
        button.classList.add(".tabs__button--active");
        tabToActivate.classList.add(".tabs__content--active");

        console.log(sideBar);
        console.log(tabsContainer);
        console.log(tabNumber);
        console.log(tabToActivate);



     });
   });
};

document.addEventListener("DOMContentLoaded", () => {
   setupTabs();
   document.querySelectorAll(".tabs").forEach(tabsContainer => {
      tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
   });
});
/*End of script for login and signin pages*/