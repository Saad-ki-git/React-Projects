import React from "react";
import { Input, Box } from "@chakra-ui/react";
import Background from "./Components/Background";
import "./index.css";
import { useState } from "react";

const api = {
  key: "b88e24ef0d59a19637eb182e604a5ea2",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${day} ${month} ${year}`;
  };
  return (
    <div  typeof={(weather.main != "undefined") ? ((weather.main > 16 )  ? "warm" : "app") : "app"}>
      <main>
      <Background />
      <Box
        position="absolute"
        top={20}
        left={50}
        w="50%"
        h="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1 style={{ color: "#ffea00", fontFamily: " sans-serif;" }}>
          Get The Weather Updates
        </h1>
      </Box>

      <Box
        className="search-box"
        position="absolute"
        top={-34}
        left={0}
        color="#ffea00"
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Input
          value={query}
          onKeyPress={search}
          placeholder="Search for the weather"
          onChange={(e) => setQuery(e.target.value)}
          rounded={20}
          h="50px"
          textAlign="center"
          textShadow="3px 3px lightwhite"
        />
      </Box>

      
      
  {(typeof weather.name != "undefined" && typeof weather.sys.country != "undefined") ? (
    <Box>
      <Box
        position="absolute"
        top={80}
        left={0}
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          color="#ffea00"
          fontSize="34px"
          fontWeight="500"
          textAlign="center"
          fontFamily="sans-serif"
        >
          {weather.name},{weather.sys.country}
        </Box>
      </Box>

      <Box
        position="absolute"
        top={130}
        left={0}
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className="date"
          color="#ffea00"
          fontSize="24px"
          fontWeight="500"
          textAlign="center"
          fontFamily="sans-serif"
        >
          {dateBuilder(new Date())}
        </Box>
      </Box>

      <Box
        className="temp"
        position="absolute"
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        top={0}
        left={300}
        w="100%"
        h="100%"
        alignItems="center"
      >
        <Box
          bg="rgba(255,255,255, 0.3)"
          textShadow="3px 6px rgba(30,30,30, 0.3)"
          boxShadow="3px 6px rgba(0,0,0, 0.2)"
          rounded="20px"
        >
          <Box
            fontSize="100px"
            fontWeight="500"
            fontFamily="system-ui"
            color="#ffea00"
          >
           {Math.round(weather.main.temp)}°c
          </Box>
        </Box>
        <Box
          m={10}
          fontWeight="500"
          fontSize="30px"
          fontFamily="system-ui"
          color="#ffea00"
        >
          {weather.weather[0].main}
        </Box>
      </Box>
    </Box>
  ) : ('')}
</main>


      
    </div>
  );
}

export default App;
