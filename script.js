const cities = [
    { name: "Buenos Aires", image: "buenos_aires.jpg", description: "Capital de Argentina." },
    { name: "Lima", image: "lima.jpg", description: "Capital de Perú." },
    { name: "Santiago", image: "santiago.jpg", description: "Capital de Chile." },
  ];
  
  function filterCities() {
    const query = document.getElementById("search").value.toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(query));
    filteredCities.forEach(city => {
      const cityElement = document.createElement("div");
      cityElement.textContent = city.name;
      cityElement.classList.add("city-item");
      cityElement.onclick = () => {
        localStorage.setItem("selectedCity", JSON.stringify(city));
        window.location.href = "details.html";
      };
      results.appendChild(cityElement);
    });
  }
  