import { useEffect, useState } from "react";
import MeteoCarousel from "./MeteoCarousel";

const MeteoHome = function () {
  const [dataNapoli, setDataNapoli] = useState();
  const [dataRoma, setDataRoma] = useState();
  const [dataMilano, setDataMilano] = useState();
  const [dataNapoliForecast, setDataNapoliForecast] = useState();
  const [dataRomaForecast, setDataRomaForecast] = useState();
  const [dataMilanoForecast, setDataMilanoForecast] = useState();

  const meteoNapoli = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Napoli&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataNapoli = await response.json();
        setDataNapoli(dataNapoli);
      } else {
        throw new Error("errore nella chiamata Napoli");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const meteoRoma = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataRoma = await response.json();
        setDataRoma(dataRoma);
      } else {
        throw new Error("errore nella chiamata Roma");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const meteoMilano = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Milano&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataMilano = await response.json();
        setDataMilano(dataMilano);
      } else {
        throw new Error("errore nella chiamata Milano");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const meteoNapoliForecast = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Napoli&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataNapoliForecast = await response.json();
        setDataNapoliForecast(dataNapoliForecast);
      } else {
        throw new Error("errore nella chiamata Napoli Forecast");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const meteoRomaForecast = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Roma&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataRomaForecast = await response.json();
        setDataRomaForecast(dataRomaForecast);
      } else {
        throw new Error("errore nella chiamata Roma Forecast");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const meteoMilanoForecast = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Milano&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      if (response.ok) {
        let dataMilanoForecast = await response.json();
        setDataMilanoForecast(dataMilanoForecast);
      } else {
        throw new Error("errore nella chiamata Milano Forecast");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    meteoNapoli();
    meteoRoma();
    meteoMilano();
    meteoNapoliForecast();
    meteoRomaForecast();
    meteoMilanoForecast();
  }, []);

  return (
    <>
      {dataNapoli &&
        dataMilano &&
        dataRoma &&
        dataNapoliForecast &&
        dataRomaForecast &&
        dataMilanoForecast && (
          <MeteoCarousel
            dataNapoli={dataNapoli}
            dataRoma={dataRoma}
            dataMilano={dataMilano}
            dataNapoliForecast={dataNapoliForecast}
            dataRomaForecast={dataRomaForecast}
            dataMilanoForecast={dataMilanoForecast}
          />
        )}
    </>
  );
};

export default MeteoHome;
