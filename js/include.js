async function loadPartial(id, file, callback) {
  try {
    const res = await fetch(file, { cache: "no-cache" });
    if (!res.ok) throw new Error(file);

    document.getElementById(id).innerHTML = await res.text();

    if (callback) callback();
  } catch (err) {
    console.error("Failed to load partial:", file);
  }
}

// Always load from root
loadPartial("site-header", "/partials/header.html", () => {
  const script = document.createElement("script");
  script.src = "/js/nav.js";
  script.defer = true;
  document.body.appendChild(script);
});

loadPartial("site-footer", "/partials/footer.html");