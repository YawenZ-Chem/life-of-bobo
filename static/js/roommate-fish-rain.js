function setupProfileRain() {
  const triggers =
    document.querySelectorAll("[data-profile-rain]");

  triggers.forEach(function (trigger) {
    if (trigger.dataset.profileRainReady === "true") {
      return;
    }

    trigger.dataset.profileRainReady = "true";

    trigger.addEventListener("click", function () {
      const sidebar =
        trigger.closest(".roommates-sidebar");

      const iconURL =
        trigger.getAttribute("data-rain-icon");

      if (!sidebar || !iconURL) {
        return;
      }

      const previousRain =
        sidebar.querySelector(".fish-rain-layer");

      if (previousRain) {
        previousRain.remove();
      }

      const rainLayer =
        document.createElement("div");

      /*
       * These class names remain unchanged so your
       * existing CSS continues to work for every icon.
       */
      rainLayer.className = "fish-rain-layer";
      rainLayer.setAttribute("aria-hidden", "true");

      const columns = 7;
      const waves = 10;
      const numberOfDrops = columns * waves;

      for (
        let i = 0;
        i < numberOfDrops;
        i += 1
      ) {
        const drop =
          document.createElement("img");

        drop.className = "fish-drop";
        drop.src = iconURL;
        drop.alt = "";
        drop.draggable = false;

        const column = i % columns;
        const wave = Math.floor(i / columns);

        const columnPosition =
          5 + ((column + 0.5) / columns) * 90;

        const horizontalVariation =
          Math.random() * 3 - 1.5;

        const left =
          columnPosition + horizontalVariation;

        const size =
          22 + Math.random() * 14;

        const duration =
          1.8 + Math.random() * 0.4;

        const delay =
          wave * 0.14 + Math.random() * 0.08;

        const sway =
          -18 + Math.random() * 36;

        drop.style.setProperty(
          "--fish-left",
          left + "%"
        );

        drop.style.setProperty(
          "--fish-size",
          size + "px"
        );

        drop.style.setProperty(
          "--fall-duration",
          duration + "s"
        );

        drop.style.setProperty(
          "--fall-delay",
          delay + "s"
        );

        drop.style.setProperty(
          "--fish-sway",
          sway + "px"
        );

        rainLayer.appendChild(drop);
      }

      sidebar.appendChild(rainLayer);

      window.setTimeout(function () {
        if (rainLayer.isConnected) {
          rainLayer.remove();
        }
      }, 8500);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    setupProfileRain,
    { once: true }
  );
} else {
  setupProfileRain();
}