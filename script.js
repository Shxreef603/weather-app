async function fetchData() {
    const cityName = document.getElementById("city").value
    const apiKey = "81e64f8064e55124edbaa4ba70f26845";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        console.log(`Fetching weather data for ${cityName}`);
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        console.log(data);

        let weather = data.weather[0].main;
        let temperature = data.main.temp;
        let city = data.name;
        let description = data.weather[0].description;
        let pressure = data.main.pressure;
        let humidity = data.main.humidity;
        let visibility = data.visibility;

        let weatherIcon = `https://openweathermap.org/img/wn/11n@2x.png`;

        document.getElementById("wIcon").src = weatherIcon;
        document.getElementById("temp").innerHTML = `${temperature} °C`;
        document.getElementById("cityName").innerHTML = city;
        document.getElementById("desc").innerHTML = description;
        document.getElementById("pressure").innerHTML = pressure;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("visibility").innerHTML = visibility;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

