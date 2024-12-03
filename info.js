window.onload = () => {
    const city = JSON.parse(localStorage.getItem("selectedCity"));
    if (city) {
      document.getElementById("city-name").textContent = city.name;
      document.getElementById("city-image").src = city.image;
      document.getElementById("city-image").alt = `Imagen de ${city.name}`;
      document.getElementById("city-description").textContent = city.description;
    } else {
      document.getElementById("city-name").textContent = "Ciudad no encontrada";
      document.getElementById("city-description").textContent = "No hay información disponible.";
    }
  };
  