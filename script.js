$(document).ready(function () {
  // Get the saved theme mode or default to auto
  let savedTheme = localStorage.getItem("themeMode") || "auto";

  // Set the initial theme mode
  setTheme(savedTheme);

  // Handle light mode button click
  $("#light-mode-btn").click(function () {
    setTheme("light");
  });

  // Handle dark mode button click
  $("#dark-mode-btn").click(function () {
    setTheme("dark");
  });

  // Handle auto mode button click
  $("#auto-mode-btn").click(function () {
    setTheme("auto");
  });

  // Function to set the theme
  function setTheme(themeMode) {
    // Remove any existing theme classes
    $("body").removeClass("theme-auto theme-light theme-dark");

    // Set the new theme class
    if (themeMode === "auto") {
      $("body").addClass("theme-auto");
    } else if (themeMode === "light") {
      $("body").addClass("theme-light");
    } else if (themeMode === "dark") {
      $("body").addClass("theme-dark");
    }

    // Save the theme mode to local storage
    localStorage.setItem("themeMode", themeMode);
  }
});
