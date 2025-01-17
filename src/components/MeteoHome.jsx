import { useEffect, useState } from "react";
import MeteoCarousel from "./MeteoCarousel";

const MeteoHome = function () {
  const [dataNapoli, setDataNapoli] = useState();
  const [dataRoma, setDataRoma] = useState();
  const [dataMilano, setDataMilano] = useState();

  const meteoNapoli = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Napoli&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      console.log(response);
      if (response.ok) {
        let dataNapoli = await response.json();
        setDataNapoli(dataNapoli);
      } else {
        throw new Error("errore nella chiamata Napoli");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const meteoRoma = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      console.log(response);
      if (response.ok) {
        let dataRoma = await response.json();
        setDataRoma(dataRoma);
      } else {
        throw new Error("errore nella chiamata Roma");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const meteoMilano = async function () {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Milano&appid=5fb43d9317a963bf83907952a8a8a3f3"
      );
      console.log(response);
      if (response.ok) {
        let dataMilano = await response.json();
        setDataMilano(dataMilano);
      } else {
        throw new Error("errore nella chiamata Milano");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    meteoNapoli();
    meteoRoma();
    meteoMilano();
  }, []);

  return (
    <>
      {dataNapoli && dataMilano && dataRoma && (
        <MeteoCarousel
          dataNapoli={dataNapoli}
          dataRoma={dataRoma}
          dataMilano={dataMilano}
        />
      )}
    </>
  );
};

export default MeteoHome;
