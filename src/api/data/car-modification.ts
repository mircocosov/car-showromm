import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("1964-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[21], //911
    image: "../public/images/911.png",
    engineVolume: 3.0,
    enginePower: 420,
    year: 2015,
    acceleration: 4.2,
    color: "Синий",
  },
  {
    id: "1",
    startDate: new Date("2009-03-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[22], //Panamera
    image: "../public/images/Panamera.png",
    engineVolume: 4.0,
    enginePower: 480,
    year: 2020,
    acceleration: 3.9,
    color: "Серебристый",
  },
  {
    id: "2",
    startDate: new Date("2002-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[23], //Cayenne
    image: "../public/images/Cayenne.png",
    engineVolume: 4.8,
    enginePower: 570,
    year: 2016,
    acceleration: 4.1,
    color: "Циан",
  },
  {
    id: "3",
    startDate: new Date("2013-11-20T00:00Z"),
    endDate: new Date(),
    model: carModelsData[24], //Macan
    image: "../public/images/Macan.png",
    engineVolume: 2.9,
    enginePower: 440,
    year: 2021,
    acceleration: 4.5,
    color: "Темно-синий",
  },
  {
    id: "4",
    startDate: new Date("2024-03-11T00:00Z"),
    endDate: new Date(),
    model: carModelsData[25], //Taycan
    image: "../public/images/Taycan.png",
    engineVolume: 0,
    enginePower: 625,
    year: 2024,
    acceleration: 2.9,
    color: "Серебристый",
  },
  //Lamborgini
  {
    id: "5",
    startDate: new Date("2003-03-01T00:00Z"),
    endDate: new Date("2013-11-25T00:00Z"),
    model: carModelsData[0], //Gallardo
    image: "../public/images/Gallardo.png",
    engineVolume: 5.2,
    enginePower: 560,
    year: 2013,
    acceleration: 3.4,
    color: "Черный",
  },
  {
    id: "6",
    startDate: new Date("2014-03-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[1], //Huracan
    image: "../public/images/Huracan.png",
    engineVolume: 5.2,
    enginePower: 610,
    year: 2020,
    acceleration: 2.9,
    color: "Графит",
  },
  {
    id: "7",
    startDate: new Date("2011-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[2], //Aventador
    image: "../public/images/Aventador.png",
    engineVolume: 6.5,
    enginePower: 770,
    year: 2021,
    acceleration: 2.8,
    color: "Серебристый",
  },
  {
    id: "8",
    startDate: new Date("2001-01-01T00:00Z"),
    endDate: new Date("2010-01-01T00:00Z"),
    model: carModelsData[3], //Murcielago
    image: "../public/images/Murcielago.png",
    engineVolume: 6.5,
    enginePower: 670,
    year: 2010,
    acceleration: 3.2,
    color: "Желтый",
  },
  {
    id: "9",
    startDate: new Date("1990-01-01T00:00Z"),
    endDate: new Date("2001-01-01T00:00Z"),
    model: carModelsData[4], //Diablo
    image: "../public/images/Diablo.png",
    engineVolume: 6.0,
    enginePower: 549,
    year: 2001,
    acceleration: 3.5,
    color: "Оранжевый",
  },

  {
    id: "10",
    startDate: new Date("2017-12-04T00:00Z"),
    endDate: new Date(),
    model: carModelsData[5], //Urus
    image: "../public/images/Urus.png",
    engineVolume: 4.0,
    enginePower: 600,
    year: 2020,
    acceleration: 3.6,
    color: "Желтый",
  },
<<<<<<< HEAD
  //Ferrari

  {
    id: "11",
    startDate: new Date("1987-01-01T00:00Z"),
    endDate: new Date("1992-01-01T00:00Z"),
    model: carModelsData[6], //F40
    image: "../public/images/F40.png",
    engineVolume: 2.9,
    enginePower: 478,
    year: 1992,
    acceleration: 3.8,
    color: "Красный",
  },
  {
    id: "12",
    startDate: new Date("2022-09-13T00:00Z"),
    endDate: new Date(),
    model: carModelsData[7], //Purosangue
    image: "../public/images/Purosangue.png",
    engineVolume: 6.5,
    enginePower: 725,
    year: 2022,
    acceleration: 3.3,
    color: "Серебристый",
  },
  {
    id: "13",
    startDate: new Date("2020-11-01T00:00Z"),
    endDate: new Date("2022-12-01T00:00Z"),
    model: carModelsData[8], //SF90 Stradale
    image: "../public/images/SF90Stradale.png",
    engineVolume: 4.0,
    enginePower: 780,
    year: 2020,
    acceleration: 2.5,
    color: "Красный",
  },
  {
    id: "14",
    startDate: new Date("2015-03-01T00:00Z"),
    endDate: new Date("2019-01-01T00:00Z"),
    model: carModelsData[9], //488
    image: "../public/images/488.png",
    engineVolume: 3.9,
    enginePower: 720,
    year: 2018,
    acceleration: 2.8,
    color: "Красный",
  },
  {
    id: "15",
    startDate: new Date("2017-03-01T00:00Z"),
    endDate: new Date("2022-12-01T00:00Z"),
    model: carModelsData[10], //812 Superfast
    image: "../public/images/812Superfast.png",
    engineVolume: 6.5,
    enginePower: 800,
    year: 2020,
    acceleration: 2.9,
    color: "Черный",
  },
  //Buggati
  {
    id: "16",
    startDate: new Date("2016-01-01T00:00Z"),
    endDate: new Date("2023-10-01T00:00Z"),
    model: carModelsData[11], //Chiron
    image: "../public/images/Chiron.png",
    engineVolume: 8.0,
    enginePower: 1500,
    year: 2019,
    acceleration: 2.3,
    color: "Черный + синий",
  },
  {
    id: "17",
    startDate: new Date("2005-01-01T00:00Z"),
    endDate: new Date("2015-01-01T00:00Z"),
    model: carModelsData[12], //Veyron
    image: "../public/images/Veyron.png",
    engineVolume: 8.0,
    enginePower: 1200,
    year: 2012,
    acceleration: 2.6,
    color: "Серебристый",
  },
  {
    id: "18",
    startDate: new Date("2019-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[13], //Divo
    image: "../public/images/Divo.png",
    engineVolume: 8.0,
    enginePower: 1500,
    year: 2020,
    acceleration: 2.4,
    color: "Серебристый + синий",
  },
  {
    id: "19",
    startDate: new Date("2024-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[14], //W16 Mistral
    image: "../public/images/Mistral.png",
    engineVolume: 8.0,
    enginePower: 1600,
    year: 2024,
    acceleration: 2.4,
    color: "Черный",
  },
  {
    id: "20",
    startDate: new Date("1991-09-15T00:00Z"),
    endDate: new Date("1995-01-01T00:00Z"),
    model: carModelsData[15], //EB 110
    image: "../public/images/EB110.png",
    engineVolume: 3.5,
    enginePower: 561,
    year: 1993,
    acceleration: 4.2,
    color: "Синий",
  },
  //Maserati
  {
    id: "21",
    startDate: new Date("2013-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[16], //Ghibli
    image: "../public/images/Ghibli.png",
    engineVolume: 3.8,
    enginePower: 580,
    year: 2020,
    acceleration: 4.5,
    color: "Красный",
  },
  {
    id: "22",
    startDate: new Date("2021-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[17], //MC20
    image: "../public/images/MC20.png",
    engineVolume: 3.0,
    enginePower: 630,
    year: 2022,
    acceleration: 2.9,
    color: "Серебристый",
  },
  {
    id: "23",
    startDate: new Date("2004-01-01T00:00Z"),
    endDate: new Date("2005-01-01T00:00Z"),
    model: carModelsData[18], //MC12
    image: "../public/images/MC12.png",
    engineVolume: 6.0,
    enginePower: 632,
    year: 2004,
    acceleration: 3.8,
    color: "Белый + синий",
  },
  {
    id: "24",
    startDate: new Date("1998-12-01T00:00Z"),
    endDate: new Date("2002-03-01T00:00Z"),
    model: carModelsData[19], //3200GT
    image: "../public/images/3200GT.png",
    engineVolume: 3.2,
    enginePower: 370,
    year: 2001,
    acceleration: 5.1,
    color: "Серый",
  },
  {
    id: "25",
    startDate: new Date("2016-01-01T00:00Z"),
    endDate: new Date("2024-03-01T00:00Z"),
    model: carModelsData[20], //Levante
    image: "../public/images/Levante.png",
    engineVolume: 3.8,
    enginePower: 550,
    year: 2017,
    acceleration: 4.2,
    color: "Серебристый",
  },
  //Dodge
  {
    id: "26",
    startDate: new Date("2008-01-01T00:00Z"),
    endDate: new Date("2023-01-01T00:00Z"),
    model: carModelsData[26], //Challenger
    image: "../public/images/Challenger.png",
    engineVolume: 5.7,
    enginePower: 375,
    year: 2015,
    acceleration: 5.5,
    color: "Голубой",
  },
  {
    id: "27",
    startDate: new Date("1992-01-01T00:00Z"),
    endDate: new Date("2017-01-01T00:00Z"),
    model: carModelsData[27], //Viper
    image: "../public/images/Viper.png",
    engineVolume: 8.4,
    enginePower: 608,
    year: 2010,
    acceleration: 3.0,
    color: "Красный",
  },
  {
    id: "28",
    startDate: new Date("1994-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[28], //RAM
    image: "../public/images/RAM.png",
    engineVolume: 4.7,
    enginePower: 314,
    year: 2014,
    acceleration: 8.3,
    color: "Черный",
  },
  {
    id: "29",
    startDate: new Date("1984-01-01T00:00Z"),
    endDate: new Date("2020-01-01T00:00Z"),
    model: carModelsData[29], //Caravan
    image: "../public/images/Caravan.png",
    engineVolume: 3.3,
    enginePower: 173,
    year: 2010,
    acceleration: 11,
    color: "Красный",
  },
  {
    id: "30",
    startDate: new Date("2012-01-01T00:00Z"),
    endDate: new Date("2016-09-01T00:00Z"),
    model: carModelsData[30], //Dart
    image: "../public/images/Dart.png",
    engineVolume: 1.4,
    enginePower: 160,
    year: 2013,
    acceleration: 8.5,
    color: "Оранжевый",
  },
  //Mercedes
  {
    id: "31",
    startDate: new Date("2014-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[31], //Maybach
    image: "../public/images/Maybach.png",
    engineVolume: 3.0,
    enginePower: 510,
    year: 2021,
    acceleration: 5.1,
    color: "Черный",
  },
  {
    id: "32",
    startDate: new Date("2005-01-01T00:00Z"),
    endDate: new Date("2009-01-01T00:00Z"),
    model: carModelsData[32], //S500
    image: "../public/images/S500.png",
    engineVolume: 5.5,
    enginePower: 560,
    year: 2006,
    acceleration: 5.5,
    color: "Серебристый",
  },
  {
    id: "33",
    startDate: new Date("2013-01-01T00:00Z"),
    endDate: new Date("2016-01-01T00:00Z"),
    model: carModelsData[33], //E63 AMG
    image: "../public/images/E63AMG.png",
    engineVolume: 5.5,
    enginePower: 557,
    year: 2015,
    acceleration: 3.7,
    color: "Серебристый",
  },
  {
    id: "34",
    startDate: new Date("2014-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[34], //Vito
    image: "../public/images/Vito.png",
    engineVolume: 1.6,
    enginePower: 88,
    year: 2020,
    acceleration: 12.5,
    color: "Черный",
  },
  {
    id: "35",
    startDate: new Date("2015-01-01T00:00Z"),
    endDate: new Date("2018-01-01T00:00Z"),
    model: carModelsData[35], //A-class
    image: "../public/images/Aclass.png",
    engineVolume: 2.0,
    enginePower: 381,
    year: 2017,
    acceleration: 4.6,
    color: "Серебристый",
  },
  //BMW
  {
    id: "36",
    startDate: new Date("2019-01-01T00:00Z"),
    endDate: new Date("2022-01-01T00:00Z"),
    model: carModelsData[36], //M8
    image: "../public/images/M8.png",
    engineVolume: 4.4,
    enginePower: 625,
    year: 2022,
    acceleration: 3.2,
    color: "Зеленый",
  },
  {
    id: "37",
    startDate: new Date("2018-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[37], //X7
    image: "../public/images/X7.png",
    engineVolume: 4.4,
    enginePower: 530,
    year: 2022,
    acceleration: 5.8,
    color: "Темно-синий",
  },
  {
    id: "38",
    startDate: new Date("2004-01-01T00:00Z"),
    endDate: new Date("2010-01-01T00:00Z"),
    model: carModelsData[38], //E90
    image: "../public/images/E90.png",
    engineVolume: 3.0,
    enginePower: 272,
    year: 2006,
    acceleration: 6.4,
    color: "Серебристый",
  },
  {
    id: "39",
    startDate: new Date("2020-05-01T00:00Z"),
    endDate: new Date("2023-03-01T00:00Z"),
    model: carModelsData[39], //5-Series
    image: "../public/images/5-series.png",
    engineVolume: 3.0,
    enginePower: 249,
    year: 2021,
    acceleration: 5.5,
    color: "Белый",
  },
  //Ferrari

  {
    id: "11",
    startDate: new Date("1987-01-01T00:00Z"),
    endDate: new Date("1992-01-01T00:00Z"),
    model: carModelsData[6], //F40
    image: "../public/images/F40.png",
    engineVolume: 2.9,
    enginePower: 478,
    year: 1992,
    acceleration: 3.8,
    color: "Красный",
  },
  {
    id: "12",
    startDate: new Date("2022-09-13T00:00Z"),
    endDate: new Date(),
    model: carModelsData[7], //Purosangue
    image: "../public/images/Purosangue.png",
    engineVolume: 6.5,
    enginePower: 725,
    year: 2022,
    acceleration: 3.3,
    color: "Серебристый",
  },
  {
    id: "13",
    startDate: new Date("2020-11-01T00:00Z"),
    endDate: new Date("2022-12-01T00:00Z"),
    model: carModelsData[8], //SF90 Stradale
    image: "../public/images/SF90Stradale.png",
    engineVolume: 4.0,
    enginePower: 780,
    year: 2020,
    acceleration: 2.5,
    color: "Красный",
  },
  {
    id: "14",
    startDate: new Date("2015-03-01T00:00Z"),
    endDate: new Date("2019-01-01T00:00Z"),
    model: carModelsData[9], //488
    image: "../public/images/488.png",
    engineVolume: 3.9,
    enginePower: 720,
    year: 2018,
    acceleration: 2.8,
    color: "Красный",
  },
  {
    id: "15",
    startDate: new Date("2017-03-01T00:00Z"),
    endDate: new Date("2022-12-01T00:00Z"),
    model: carModelsData[10], //812 Superfast
    image: "../public/images/812Superfast.png",
    engineVolume: 6.5,
    enginePower: 800,
    year: 2020,
    acceleration: 2.9,
    color: "Черный",
  },
  //Buggati
  {
    id: "16",
    startDate: new Date("2016-01-01T00:00Z"),
    endDate: new Date("2023-10-01T00:00Z"),
    model: carModelsData[11], //Chiron
    image: "../public/images/Chiron.png",
    engineVolume: 8.0,
    enginePower: 1500,
    year: 2019,
    acceleration: 2.3,
    color: "Черный + синий",
  },
  {
    id: "17",
    startDate: new Date("2005-01-01T00:00Z"),
    endDate: new Date("2015-01-01T00:00Z"),
    model: carModelsData[12], //Veyron
    image: "../public/images/Veyron.png",
    engineVolume: 8.0,
    enginePower: 1200,
    year: 2012,
    acceleration: 2.6,
    color: "Серебристый",
  },
  {
    id: "18",
    startDate: new Date("2019-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[13], //Divo
    image: "../public/images/Divo.png",
    engineVolume: 8.0,
    enginePower: 1500,
    year: 2020,
    acceleration: 2.4,
    color: "Серебристый + синий",
  },
  {
    id: "19",
    startDate: new Date("2024-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[14], //W16 Mistral
    image: "../public/images/Mistral.png",
    engineVolume: 8.0,
    enginePower: 1600,
    year: 2024,
    acceleration: 2.4,
    color: "Черный",
  },
  {
    id: "20",
    startDate: new Date("1991-09-15T00:00Z"),
    endDate: new Date("1995-01-01T00:00Z"),
    model: carModelsData[15], //EB 110
    image: "../public/images/EB110.png",
    engineVolume: 3.5,
    enginePower: 561,
    year: 1993,
    acceleration: 4.2,
    color: "Синий",
  },
  //Maserati
  {
    id: "21",
    startDate: new Date("2013-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[16], //Ghibli
    image: "../public/images/Ghibli.png",
    engineVolume: 3.8,
    enginePower: 580,
    year: 2020,
    acceleration: 4.5,
    color: "Красный",
  },
  {
    id: "22",
    startDate: new Date("2021-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[17], //MC20
    image: "../public/images/MC20.png",
    engineVolume: 3.0,
    enginePower: 630,
    year: 2022,
    acceleration: 2.9,
    color: "Серебристый",
  },
  {
    id: "23",
    startDate: new Date("2004-01-01T00:00Z"),
    endDate: new Date("2005-01-01T00:00Z"),
    model: carModelsData[18], //MC12
    image: "../public/images/MC12.png",
    engineVolume: 6.0,
    enginePower: 632,
    year: 2004,
    acceleration: 3.8,
    color: "Белый + синий",
  },
  {
    id: "24",
    startDate: new Date("1998-12-01T00:00Z"),
    endDate: new Date("2002-03-01T00:00Z"),
    model: carModelsData[19], //3200GT
    image: "../public/images/3200GT.png",
    engineVolume: 3.2,
    enginePower: 370,
    year: 2001,
    acceleration: 5.1,
    color: "Серый",
  },
  {
    id: "25",
    startDate: new Date("2016-01-01T00:00Z"),
    endDate: new Date("2024-03-01T00:00Z"),
    model: carModelsData[20], //Levante
    image: "../public/images/Levante.png",
    engineVolume: 3.8,
    enginePower: 550,
    year: 2017,
    acceleration: 4.2,
    color: "Серебристый",
  },
  //Dodge
  {
    id: "26",
    startDate: new Date("2008-01-01T00:00Z"),
    endDate: new Date("2023-01-01T00:00Z"),
    model: carModelsData[26], //Challenger
    image: "../public/images/Challenger.png",
    engineVolume: 5.7,
    enginePower: 375,
    year: 2015,
    acceleration: 5.5,
    color: "Голубой",
  },
  {
    id: "27",
    startDate: new Date("1992-01-01T00:00Z"),
    endDate: new Date("2017-01-01T00:00Z"),
    model: carModelsData[27], //Viper
    image: "../public/images/Viper.png",
    engineVolume: 8.4,
    enginePower: 608,
    year: 2010,
    acceleration: 3.0,
    color: "Красный",
  },
  {
    id: "28",
    startDate: new Date("1994-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[28], //RAM
    image: "../public/images/RAM.png",
    engineVolume: 4.7,
    enginePower: 314,
    year: 2014,
    acceleration: 8.3,
    color: "Черный",
  },
  {
    id: "29",
    startDate: new Date("1984-01-01T00:00Z"),
    endDate: new Date("2020-01-01T00:00Z"),
    model: carModelsData[29], //Caravan
    image: "../public/images/Caravan.png",
    engineVolume: 3.3,
    enginePower: 173,
    year: 2010,
    acceleration: 11,
    color: "Красный",
  },
  {
    id: "30",
    startDate: new Date("2012-01-01T00:00Z"),
    endDate: new Date("2016-09-01T00:00Z"),
    model: carModelsData[30], //Dart
    image: "../public/images/Dart.png",
    engineVolume: 1.4,
    enginePower: 160,
    year: 2013,
    acceleration: 8.5,
    color: "Оранжевый",
  },
  //Mercedes
  {
    id: "31",
    startDate: new Date("2014-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[31], //Maybach
    image: "../public/images/Maybach.png",
    engineVolume: 3.0,
    enginePower: 510,
    year: 2021,
    acceleration: 5.1,
    color: "Черный",
  },
  {
    id: "32",
    startDate: new Date("2005-01-01T00:00Z"),
    endDate: new Date("2009-01-01T00:00Z"),
    model: carModelsData[32], //S500
    image: "../public/images/S500.png",
    engineVolume: 5.5,
    enginePower: 560,
    year: 2006,
    acceleration: 5.5,
    color: "Серебристый",
  },
  {
    id: "33",
    startDate: new Date("2013-01-01T00:00Z"),
    endDate: new Date("2016-01-01T00:00Z"),
    model: carModelsData[33], //E63 AMG
    image: "../public/images/E63AMG.png",
    engineVolume: 5.5,
    enginePower: 557,
    year: 2015,
    acceleration: 3.7,
    color: "Серебристый",
  },
  {
    id: "34",
    startDate: new Date("2014-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[34], //Vito
    image: "../public/images/Vito.png",
    engineVolume: 1.6,
    enginePower: 88,
    year: 2020,
    acceleration: 12.5,
    color: "Черный",
  },
  {
    id: "35",
    startDate: new Date("2015-01-01T00:00Z"),
    endDate: new Date("2018-01-01T00:00Z"),
    model: carModelsData[35], //A-class
    image: "../public/images/Aclass.png",
    engineVolume: 2.0,
    enginePower: 381,
    year: 2017,
    acceleration: 4.6,
    color: "Серебристый",
  },
  //BMW
  {
    id: "36",
    startDate: new Date("2019-01-01T00:00Z"),
    endDate: new Date("2022-01-01T00:00Z"),
    model: carModelsData[36], //M8
    image: "../public/images/M8.png",
    engineVolume: 4.4,
    enginePower: 625,
    year: 2022,
    acceleration: 3.2,
    color: "Зеленый",
  },
  {
    id: "37",
    startDate: new Date("2018-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[37], //X7
    image: "../public/images/X7.png",
    engineVolume: 4.4,
    enginePower: 530,
    year: 2022,
    acceleration: 5.8,
    color: "Темно-синий",
  },
  {
    id: "38",
    startDate: new Date("2004-01-01T00:00Z"),
    endDate: new Date("2010-01-01T00:00Z"),
    model: carModelsData[38], //E90
    image: "../public/images/E90.png",
    engineVolume: 3.0,
    enginePower: 272,
    year: 2006,
    acceleration: 6.4,
    color: "Серебристый",
  },
  {
    id: "39",
    startDate: new Date("2020-05-01T00:00Z"),
    endDate: new Date("2023-03-01T00:00Z"),
    model: carModelsData[39], //5-Series
    image: "../public/images/5-series.png",
    engineVolume: 3.0,
    enginePower: 249,
    year: 2021,
    acceleration: 5.5,
    color: "Белый",
  },
  {
    id: "40",
    startDate: new Date("2017-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[40], //220D XDrive
    image: "../public/images/220d.png",
    engineVolume: 3.0,
    enginePower: 340,
    year: 2020,
    acceleration: 4.8,
    color: "Синий",
  },
  //Bentley
  {
    id: "41",
    startDate: new Date("2017-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[41], //Continental
    image: "../public/images/Continental.png",
    engineVolume: 4.0,
    enginePower: 550,
    year: 2018,
    acceleration: 4.0,
    color: "Серебристый",
  },
  {
    id: "42",
    startDate: new Date("2020-06-01T00:00Z"),
    endDate: new Date("2022-12-01T00:00Z"),
    model: carModelsData[42], //Bentayga
    image: "../public/images/Bentayga.png",
    engineVolume: 6.0,
    enginePower: 635,
    year: 2021,
    acceleration: 3.9,
    color: "Серый",
  },
  {
    id: "43",
    startDate: new Date("2013-03-01T00:00Z"),
    endDate: new Date("2019-12-01T00:00Z"),
    model: carModelsData[43], //Flying Spure
    image: "../public/images/FlyingSpure.png",
    engineVolume: 4.0,
    enginePower: 507,
    year: 2015,
    acceleration: 5.2,
    color: "Бежевый",
  },
  {
    id: "44",
    startDate: new Date("2023-02-01T00:00Z"),
    endDate: new Date("2024-07-01T00:00Z"),
    model: carModelsData[44], //Mulliner
    image: "../public/images/Mulliner.png",
    engineVolume: 6.0,
    enginePower: 608,
    year: 2023,
    acceleration: 4.1,
    color: "Серый",
  },
  {
    id: "45",
    startDate: new Date("2016-01-01T00:00Z"),
    endDate: new Date("2020-01-01T00:00Z"),
    model: carModelsData[45], //Mulsanne
    image: "../public/images/Mulsanne(2).png",
    engineVolume: 6.8,
    enginePower: 512,
    year: 2018,
    acceleration: 5.3,
    color: "Коричневый",
  },
  //Audi
  {
    id: "46",
    startDate: new Date("2019-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[46], //R8
    image: "../public/images/R8.png",
    engineVolume: 5.2,
    enginePower: 540,
    year: 2022,
    acceleration: 3.7,
    color: "Серебристый",
  },
 //Ferrari  
 
 {
  id:"11",
  startDate: new Date("1987-01-01T00:00Z"),
  endDate: new Date("1992-01-01T00:00Z"),
  model: carModelsData[6], //F40
  image:
 "../public/images/F40.png",
  engineVolume: 2.9,
  enginePower: 478,
  year: 1992,
  acceleration: 3.8,
  color: "Красный",
},
{
  id:"12",
  startDate: new Date("2022-09-13T00:00Z"),
  endDate: new Date(),
  model: carModelsData[7], //Purosangue
  image:
 "../public/images/Purosangue.png",
  engineVolume: 6.5,
  enginePower: 725,
  year: 2022,
  acceleration: 3.3,
  color: "Серебристый",
},
{
  id:"13",
  startDate: new Date("2020-11-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[8], //SF90 Stradale
  image:
 "../public/images/SF90Stradale.png",
  engineVolume: 4.0,
  enginePower: 780,
  year: 2020,
  acceleration: 2.5,
  color: "Красный",
},
{
  id:"14",
  startDate: new Date("2015-03-01T00:00Z"),
  endDate: new Date("2019-01-01T00:00Z"),
  model: carModelsData[9], //488
  image:
 "../public/images/488.png",
  engineVolume: 3.9,
  enginePower: 720,
  year: 2018,
  acceleration: 2.8,
  color: "Красный",
},
{
  id:"15",
  startDate: new Date("2017-03-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[10], //812 Superfast
  image:
 "../public/images/812Superfast.png",
  engineVolume: 6.5,
  enginePower: 800,
  year: 2020,
  acceleration: 2.9,
  color: "Черный",
},
//Buggati
{
  id:"16",
  startDate: new Date("2016-01-01T00:00Z"),
  endDate: new Date("2023-10-01T00:00Z"),
  model: carModelsData[11], //Chiron
  image:
 "../public/images/Chiron.png",
  engineVolume: 8.0,
  enginePower: 1500,
  year: 2019,
  acceleration: 2.3,
  color: "Черный + синий",
},
{
  id:"17",
  startDate: new Date("2005-01-01T00:00Z"),
  endDate: new Date("2015-01-01T00:00Z"),
  model: carModelsData[12], //Veyron
  image:
 "../public/images/Veyron.png",
  engineVolume: 8.0,
  enginePower: 1200,
  year: 2012,
  acceleration: 2.6,
  color: "Серебристый",
},
{
  id:"18",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date("2021-01-01T00:00Z"),
  model: carModelsData[13], //Divo
  image:
 "../public/images/Divo.png",
  engineVolume: 8.0,
  enginePower: 1500,
  year: 2020,
  acceleration: 2.4,
  color: "Серебристый + синий",
},
{
  id:"19",
  startDate: new Date("2024-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[14], //W16 Mistral
  image:
 "../public/images/Mistral.png",
  engineVolume: 8.0,
  enginePower: 1600,
  year: 2024,
  acceleration: 2.4,
  color: "Черный",
},
{
  id:"20",
  startDate: new Date("1991-09-15T00:00Z"),
  endDate: new Date("1995-01-01T00:00Z"),
  model: carModelsData[15], //EB 110
  image:
 "../public/images/EB110.png",
  engineVolume: 3.5,
  enginePower: 561,
  year: 1993,
  acceleration: 4.2,
  color: "Синий",
},
 //Maserati
 {
  id:"21",
  startDate: new Date("2013-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[16], //Ghibli
  image:
 "../public/images/Ghibli.png",
  engineVolume: 3.8,
  enginePower: 580,
  year: 2020,
  acceleration: 4.5,
  color: "Красный",
},
{
  id:"22",
  startDate: new Date("2021-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[17], //MC20
  image:
 "../public/images/MC20.png",
  engineVolume: 3.0,
  enginePower: 630,
  year: 2022,
  acceleration: 2.9,
  color: "Серебристый",
},
{
  id:"23",
  startDate: new Date("2004-01-01T00:00Z"),
  endDate: new Date("2005-01-01T00:00Z"),
  model: carModelsData[18], //MC12
  image:
 "../public/images/MC12.png",
  engineVolume: 6.0,
  enginePower: 632,
  year: 2004,
  acceleration: 3.8,
  color: "Белый + синий",
},
{
  id:"24",
  startDate: new Date("1998-12-01T00:00Z"),
  endDate: new Date("2002-03-01T00:00Z"),
  model: carModelsData[19], //3200GT
  image:
 "../public/images/3200GT.png",
  engineVolume: 3.2,
  enginePower: 370,
  year: 2001,
  acceleration: 5.1,
  color: "Серый",
},
{
  id:"25",
  startDate: new Date("2016-01-01T00:00Z"),
  endDate: new Date("2024-03-01T00:00Z"),
  model: carModelsData[20], //Levante
  image:
 "../public/images/Levante.png",
  engineVolume: 3.8,
  enginePower: 550,
  year: 2017,
  acceleration: 4.2,
  color: "Серебристый",
},
 //Dodge
 {
  id:"26",
  startDate: new Date("2008-01-01T00:00Z"),
  endDate: new Date("2023-01-01T00:00Z"),
  model: carModelsData[26], //Challenger
  image:
 "../public/images/Challenger.png",
  engineVolume: 5.7,
  enginePower: 375,
  year: 2015,
  acceleration: 5.5,
  color: "Голубой",
},
{
  id:"27",
  startDate: new Date("1992-01-01T00:00Z"),
  endDate: new Date("2017-01-01T00:00Z"),
  model: carModelsData[27], //Viper
  image:
 "../public/images/Viper.png",
  engineVolume: 8.4,
  enginePower: 608,
  year: 2010,
  acceleration: 3.0,
  color: "Красный",
},
{
  id:"28",
  startDate: new Date("1994-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[28], //RAM
  image:
 "../public/images/RAM.png",
  engineVolume: 4.7,
  enginePower: 314,
  year: 2014,
  acceleration: 8.3,
  color: "Черный",
},
{
  id:"29",
  startDate: new Date("1984-01-01T00:00Z"),
  endDate: new Date("2020-01-01T00:00Z"),
  model: carModelsData[29], //Caravan
  image:
 "../public/images/Caravan.png",
  engineVolume: 3.3,
  enginePower: 173,
  year: 2010,
  acceleration: 11,
  color: "Красный",
},
{
  id:"30",
  startDate: new Date("2012-01-01T00:00Z"),
  endDate: new Date("2016-09-01T00:00Z"),
  model: carModelsData[30], //Dart
  image:
 "../public/images/Dart.png",
  engineVolume: 1.4,
  enginePower: 160,
  year: 2013,
  acceleration: 8.5,
  color: "Оранжевый",
},
//Mercedes
{
  id:"31",
  startDate: new Date("2014-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[31], //Maybach
  image:
 "../public/images/Maybach.png",
  engineVolume: 3.0,
  enginePower: 510,
  year: 2021,
  acceleration: 5.1,
  color: "Черный",
},
{
  id:"32",
  startDate: new Date("2005-01-01T00:00Z"),
  endDate: new Date("2009-01-01T00:00Z"),
  model: carModelsData[32], //S500
  image:
 "../public/images/S500.png",
  engineVolume: 5.5,
  enginePower: 560,
  year: 2006,
  acceleration: 5.5,
  color: "Серебристый",
},
{
  id:"33",
  startDate: new Date("2013-01-01T00:00Z"),
  endDate: new Date("2016-01-01T00:00Z"),
  model: carModelsData[33], //E63 AMG
  image:
 "../public/images/E63AMG.png",
  engineVolume: 5.5,
  enginePower: 557,
  year: 2015,
  acceleration: 3.7,
  color: "Серебристый",
},
{
  id:"34",
  startDate: new Date("2014-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[34], //Vito
  image:
 "../public/images/Vito.png",
  engineVolume: 1.6,
  enginePower: 88,
  year: 2020,
  acceleration: 12.5,
  color: "Черный",
},
{
  id:"35",
  startDate: new Date("2015-01-01T00:00Z"),
  endDate: new Date("2018-01-01T00:00Z"),
  model: carModelsData[35], //A-class
  image:
 "../public/images/Aclass.png",
  engineVolume: 2.0,
  enginePower: 381,
  year: 2017,
  acceleration: 4.6,
  color: "Серебристый",
},
//BMW
{
  id:"36",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date("2022-01-01T00:00Z"),
  model: carModelsData[36], //M8
  image:
 "../public/images/M8.png",
  engineVolume: 4.4,
  enginePower: 625,
  year: 2022,
  acceleration: 3.2,
  color: "Зеленый",
},
{
  id:"37",
  startDate: new Date("2018-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[37], //X7
  image:
 "../public/images/X7.png",
  engineVolume: 4.4,
  enginePower: 530,
  year: 2022,
  acceleration: 5.8,
  color: "Темно-синий",
},
{
  id:"38",
  startDate: new Date("2004-01-01T00:00Z"),
  endDate: new Date("2010-01-01T00:00Z"),
  model: carModelsData[38], //E90
  image:
 "../public/images/E90.png",
  engineVolume: 3.0,
  enginePower: 272,
  year: 2006,
  acceleration: 6.4,
  color: "Серебристый",
},
{
  id:"39",
  startDate: new Date("2020-05-01T00:00Z"),
  endDate: new Date("2023-03-01T00:00Z"),
  model: carModelsData[39], //5-Series
  image:
 "../public/images/5-series.png",
  engineVolume: 3.0,
  enginePower: 249,
  year: 2021,
  acceleration: 5.5,
  color: "Белый",
},
{
  id:"40",
  startDate: new Date("2017-01-01T00:00Z"),
  endDate: new Date("2021-01-01T00:00Z"),
  model: carModelsData[40], //220D XDrive
  image:
 "../public/images/220d.png",
  engineVolume: 3.0,
  enginePower: 340,
  year: 2020,
  acceleration: 4.8,
  color: "Синий",
},
//Bentley
{
  id:"41",
  startDate: new Date("2017-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[41], //Continental
  image:
 "../public/images/Continental.png",
  engineVolume: 4.0,
  enginePower: 550,
  year: 2018,
  acceleration: 4.0,
  color: "Серебристый",
},
{
  id:"42",
  startDate: new Date("2020-06-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[42], //Bentayga
  image:
 "../public/images/Bentayga.png",
  engineVolume: 6.0,
  enginePower: 635,
  year: 2021,
  acceleration: 3.9,
  color: "Серый",
},
{
  id:"43",
  startDate: new Date("2013-03-01T00:00Z"),
  endDate: new Date("2019-12-01T00:00Z"),
  model: carModelsData[43], //Flying Spure
  image:
 "../public/images/FlyingSpure.png",
  engineVolume: 4.0,
  enginePower: 507,
  year: 2015,
  acceleration: 5.2,
  color: "Бежевый",
},
{
  id:"44",
  startDate: new Date("2023-02-01T00:00Z"),
  endDate: new Date("2024-07-01T00:00Z"),
  model: carModelsData[44], //Mulliner
  image:
 "../public/images/Mulliner.png",
  engineVolume: 6.0,
  enginePower: 608,
  year: 2023,
  acceleration: 4.1,
  color: "Серый",
},
{
  id:"45",
  startDate: new Date("2016-01-01T00:00Z"),
  endDate: new Date("2020-01-01T00:00Z"),
  model: carModelsData[45], //Mulsanne
  image:
 "../public/images/Mulsanne(2).png",
  engineVolume: 6.8,
  enginePower: 512,
  year: 2018,
  acceleration: 5.3,
  color: "Коричневый",
},
//Audi
{
  id:"46",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[46], //R8
  image:
 "../public/images/R8.png",
  engineVolume: 5.2,
  enginePower: 540,
  year: 2022,
  acceleration: 3.7,
  color : "Серебристый",
},
{
  id:"47",
  startDate: new Date("2018-03-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[47], //A6
  image:
 "../public/images/A6.png",
  engineVolume: 2.0,
  enginePower: 190,
  year: 2021,
  acceleration: 7.9,
  color : "Белый",
},
{
  id:"48",
  startDate: new Date("2018-01-01T00:00Z"),
  endDate: new Date("2023-01-01T00:00Z"),
  model: carModelsData[48], //Q8
  image:
 "../public/images/Q8.png",
  engineVolume: 3.0,
  enginePower: 231,
  year: 2022,
  acceleration: 7.1,
  color : "Черный",
},
{
  id:"49",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[49], //RS6
  image:
 "../public/images/RS6.png",
  engineVolume: 4.0,
  enginePower: 630,
  year: 2023,
  acceleration: 3.3,
  color : "Красный",
},
{
  id:"50",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date("2021-01-01T00:00Z"),
  model: carModelsData[50], //S8
  image:
 "../public/images/S8.png",
  engineVolume: 4.0,
  enginePower: 571,
  year: 2020,
  acceleration: 3.8,
  color : "Серый",
},
//Chrysler
{
  id:"51",
  startDate: new Date("2011-01-01T00:00Z"),
  endDate: new Date("2015-01-01T00:00Z"),
  model: carModelsData[51], //300
  image:
 "../public/images/300.png",
  engineVolume: 3.6,
  enginePower: 292,
  year: 2013,
  acceleration: 7.6,
  color : "Белый",
},
{
  id:"52",
  startDate: new Date("2003-01-01T00:00Z"),
  endDate: new Date("2008-01-01T00:00Z"),
  model: carModelsData[52], //Pacifica
  image:
 "../public/images/Pacifica.png",
  engineVolume: 3.5,
  enginePower: 253,
  year: 2004,
  acceleration: 10.0,
  color : "Серебристый",
},
{
  id:"53",
  startDate: new Date("2020-02-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[53], //Pacifica PlugIn
  image:
 "../public/images/PlugInHybrid.png",
  engineVolume: 3.6,
  enginePower: 260,
  year: 2021,
  acceleration: 8.5,
  color : "Красный",
},
//Ford
{
  id:"54",
  startDate: new Date("2014-03-01T00:00Z"),
  endDate: new Date("2019-01-01T00:00Z"),
  model: carModelsData[54], //Focus
  image:
 "../public/images/Focus.png",
  engineVolume: 1.6,
  enginePower: 125,
  year: 2018,
  acceleration: 11.0,
  color : "Серебристый",
},
{
  id:"55",
  startDate: new Date("2014-08-01T00:00Z"),
  endDate: new Date("2017-07-01T00:00Z"),
  model: carModelsData[55], //Mustang
  image:
 "../public/images/Mustang.png",
  engineVolume: 3.7,
  enginePower: 300,
  year: 2015,
  acceleration: 5.7,
  color : "Красный",
},
{
  id:"56",
  startDate: new Date("2017-01-01T00:00Z"),
  endDate: new Date("2020-08-01T00:00Z"),
  model: carModelsData[56], //F150
  image:
 "../public/images/F150.png",
  engineVolume: 2.7,
  enginePower: 325,
  year: 2019,
  acceleration: 7.0,
  color : "Синий",
},
{
  id:"57",
  startDate: new Date("2016-01-01T00:00Z"),
  endDate: new Date("2019-01-01T00:00Z"),
  model: carModelsData[57], //Kuga
  image:
 "../public/images/Kuga.png",
  engineVolume: 2.5,
  enginePower: 150,
  year: 2017,
  acceleration: 10.7,
  color : "Серый",
},
{
  id:"58",
  startDate: new Date("2014-03-01T00:00Z"),
  endDate: new Date("2022-10-01T00:00Z"),
  model: carModelsData[58], //Transit
  image:
 "../public/images/Transit.png",
  engineVolume: 2.2,
  enginePower: 125,
  year: 2019,
  acceleration: 12.6,
  color : "Белый",
},
//JEEP
{
  id:"59",
  startDate: new Date("2013-09-01T00:00Z"),
  endDate: new Date("2016-04-01T00:00Z"),
  model: carModelsData[59], //Grand Cherokee
  image:
 "../public/images/GrandCherokee.png",
  engineVolume: 3.0,
  enginePower: 241,
  year: 2015,
  acceleration: 8.2,
  color : "Черный",
},
{
  id:"60",
  startDate: new Date("2019-10-01T00:00Z"),
  endDate: new Date("2021-05-01T00:00Z"),
  model: carModelsData[60], //Compass
  image:
 "../public/images/Compass.png",
  engineVolume: 2.4,
  enginePower: 150,
  year: 2020,
  acceleration: 8.8,
  color : "Синий",
},
{
  id:"61",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date("2023-01-01T00:00Z"),
  model: carModelsData[61], //Gladiator
  image:
 "../public/images/Gladiator.png",
  engineVolume: 2022,
  enginePower: 3.0,
  year: 2022,
  acceleration: 8,
  color : "Серебристый",
},
{
  id:"62",
  startDate: new Date("2018-08-01T00:00Z"),
  endDate: new Date("2022-10-01T00:00Z"),
  model: carModelsData[62], //Wrangler
  image:
 "../public/images/Wrangler.png",
  engineVolume: 2.0,
  enginePower: 272,
  year: 2021,
  acceleration: 6.8,
  color : "Красный",
},
{
  id:"63",
  startDate: new Date("2019-11-01T00:00Z"),
  endDate: new Date("2021-10-01T00:00Z"),
  model: carModelsData[63], //Renegade
  image:
 "../public/images/Renegade.png",
  engineVolume: 1.4,
  enginePower: 140,
  year: 2020,
  acceleration: 11.0,
  color : "Оранжевый",
},
//Chevrolet
{
  id:"64",
  startDate: new Date("2018-01-01T00:00Z"),
  endDate: new Date("2023-01-01T00:00Z"),
  model: carModelsData[64], //Camaro
  image:
 "../public/images/Camaro.png",
  engineVolume: 6.2,
  enginePower: 455,
  year: 2019,
  acceleration: 4.2,
  color : "Оранжевый",
},
{
  id:"65",
  startDate: new Date("2012-09-01T00:00Z"),
  endDate: new Date("2015-01-01T00:00Z"),
  model: carModelsData[65], //Malibu
  image:
 "../public/images/Malibu.png",
  engineVolume: 2.4,
  enginePower: 167,
  year: 2014,
  acceleration: 10.1,
  color : "Черный",
},
{
  id:"66",
  startDate: new Date("2004-01-01T00:00Z"),
  endDate: new Date("2013-01-01T00:00Z"),
  model: carModelsData[66], //Lacetti
  image:
 "../public/images/Lacetti.png",
  engineVolume: 1.8,
  enginePower: 122,
  year: 2012,
  acceleration: 10.7,
  color : "Белый",
},
{
  id:"67",
  startDate: new Date("2020-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[67], //Tahoe
  image:
 "../public/images/Tahoe.png",
  engineVolume: 3.0,
  enginePower: 282,
  year: 2021,
  acceleration: 8.7,
  color : "Красный",
},
{
  id:"68",
  startDate: new Date("2010-01-01T00:00Z"),
  endDate: new Date("2018-01-01T00:00Z"),
  model: carModelsData[68], //Orlando
  image:
 "../public/images/Orlando.png",
  engineVolume: 1.8,
  enginePower: 141,
  year: 2012,
  acceleration: 11.6,
  color : "Серый",
},
//Hyundai
{
  id:"69",
  startDate: new Date("2019-03-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[69], //Sonata
  image:
 "../public/images/Sonata.png",
  engineVolume: 2.0,
  enginePower: 150,
  year: 2022,
  acceleration: 10.6,
  color : "Серебристый",
},
{
  id:"70",
  startDate: new Date("2021-05-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[70], //Tucson
  image:
 "../public/images/Tucson.png",
  engineVolume: 2.0,
  enginePower: 186,
  year: 2022,
  acceleration: 9.4,
  color : "Белый",
},
{
  id:"71",
  startDate: new Date("2018-01-01T00:00Z"),
  endDate: new Date("2022-01-01T00:00Z"),
  model: carModelsData[71], //Palisade
  image:
 "../public/images/Palisade.png",
  engineVolume: 3.8,
  enginePower: 291,
  year: 2019,
  acceleration: 7.6,
  color : "Графит",
},
{
  id:"72",
  startDate: new Date("2015-09-01T00:00Z"),
  endDate: new Date("2017-01-01T00:00Z"),
  model: carModelsData[72], //Santa-Fe
  image:
 "../public/images/SantaFe.png",
  engineVolume: 2.4,
  enginePower: 171,
  year: 2016,
  acceleration: 11.0,
  color : "Белый",
},
{
  id:"73",
  startDate: new Date("2020-01-01T00:00Z"),
  endDate: new Date("2022-01-01T00:00Z"),
  model: carModelsData[73], //Solaris
  image:
 "../public/images/Solaris.png",
  engineVolume: 1.6,
  enginePower: 123,
  year: 2022,
  acceleration: 11.2,
  color : "Белый",
},
//Kia
{
  id:"74",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[74], //K5
  image:
 "../public/images/K5.png",
  engineVolume: 2.5,
  enginePower: 194,
  year: 2020,
  acceleration: 8.6,
  color : "Белый",
},
{
  id:"75",
  startDate: new Date("2012-01-01T00:00Z"),
  endDate: new Date("2021-01-01T00:00Z"),
  model: carModelsData[75], //Sorento
  image:
 "../public/images/Sorento.png",
  engineVolume: 2.4,
  enginePower: 175,
  year: 2014,
  acceleration: 11.0,
  color : "Серый",
},
{
  id:"76",
  startDate: new Date("2020-01-01T00:00Z"),
  endDate: new Date("2024-01-01T00:00Z"),
  model: carModelsData[76], //Stinger
  image:
 "../public/images/Stinger.png",
  engineVolume: 3.3,
  enginePower: 370,
  year: 2022,
  acceleration: 5.3,
  color : "Красный",
},
{
  id:"77",
  startDate: new Date("2021-03-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[77], //Carnival
  image:
 "../public/images/Carnival.png",
  engineVolume: 3.5,
  enginePower: 249,
  year: 2021,
  acceleration: 8.5,
  color : "Белый",
},
{
  id:"78",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[78], //Mohave
  image:
 "../public/images/Mohave.png",
  engineVolume: 3.0,
  enginePower: 257,
  year: 2021,
  acceleration: 8.7,
  color : "Белый",
},
//Nissan
{
  id:"79",
  startDate: new Date("2016-01-01T00:00Z"),
  endDate: new Date("2023-01-01T00:00Z"),
  model: carModelsData[79], //GT-R
  image:
 "../public/images/GTR.png",
  engineVolume: 3.8,
  enginePower: 555,
  year: 2016,
  acceleration: 2.8,
  color : "Синий",
},
{
  id:"80",
  startDate: new Date("2012-01-01T00:00Z"),
  endDate: new Date("2013-11-01T00:00Z"),
  model: carModelsData[80], //Qashqai
  image:
 "../public/images/Qashqai.png",
  engineVolume: 1.6,
  enginePower: 117,
  year: 2012,
  acceleration: 13.0,
  color : "Черный",
},
{
  id:"81",
  startDate: new Date("2008-01-01T00:00Z"),
  endDate: new Date("2013-01-01T00:00Z"),
  model: carModelsData[81], //Note
  image:
 "../public/images/Note.png",
  engineVolume: 1.6,
  enginePower: 110,
  year: 2010,
  acceleration: 11.7,
  color : "Оранжевый",
},
{
  id:"82",
  startDate: new Date("2019-01-01T00:00Z"),
  endDate: new Date("2022-01-01T00:00Z"),
  model: carModelsData[82], //Serena
  image:
 "../public/images/Serena.png",
  engineVolume: 2.0,
  enginePower: 150,
  year: 2020,
  acceleration: 10.0,
  color : "Бежевый",
},
{
  id:"83",
  startDate: new Date("2014-01-01T00:00Z"),
  endDate: new Date(),
  model: carModelsData[83], //Navara
  image:
 "../public/images/Navara.png",
  engineVolume: 2.3,
  enginePower: 160,
  year: 2015,
  acceleration: 12.0,
  color : "Черный",
},
//Skoda
{
  id:"84",
  startDate: new Date("2021-04-01T00:00Z"),
  endDate: new Date("2022-03-01T00:00Z"),
  model: carModelsData[84], //Octavia
  image:
 "../public/images/Octavia.png",
  engineVolume: 2.0,
  enginePower: 190,
  year: 2021,
  acceleration: 7.4,
  color : "Черный",
},
{
  id:"85",
  startDate: new Date("2021-09-01T00:00Z"),
  endDate: new Date("2023-03-01T00:00Z"),
  model: carModelsData[85], //Kodiaq
  image:
 "../public/images/Kodiaq.png",
  engineVolume: 1.4,
  enginePower: 150,
  year: 2022,
  acceleration: 9.6,
  color : "Серый",
},
{
  id:"86",
  startDate: new Date("1998-01-01T00:00Z"),
  endDate: new Date("2001-01-01T00:00Z"),
  model: carModelsData[86], //Felicia
  image:
 "../public/images/Felicia.png",
  engineVolume: 1.9,
  enginePower: 64,
  year: 1999,
  acceleration: 17.5,
  color : "Красный",
},
{
  id:"87",
  startDate: new Date("2010-08-01T00:00Z"),
  endDate: new Date("2015-01-01T00:00Z"),
  model: carModelsData[87], //Roomster
  image:
 "../public/images/Roomster.png",
  engineVolume: 1.6,
  enginePower: 105,
  year: 2013,
  acceleration: 12.1,
  color : "Голубой",
},
{
  id:"88",
  startDate: new Date("2019-09-01T00:00Z"),
  endDate: new Date("2023-03-01T00:00Z"),
  model: carModelsData[88], // Superb
  image:
 "../public/images/SuperB.png",
  engineVolume: 2.0,
  enginePower: 190,
  year: 2021,
  acceleration: 7.7,
  color : "Черный",
},
//Opel
{
  id:"89",
  startDate: new Date("2015-01-01T00:00Z"),
  endDate: new Date("2019-01-01T00:00Z"),
  model: carModelsData[89], //Astra
  image:
 "../public/images/Astra.png",
  engineVolume: 1.4,
  enginePower: 100,
  year: 2016,
  acceleration: 12.3,
  color : "Красный",
},
{
  id:"90",
  startDate: new Date("2019-12-01T00:00Z"),
  endDate: new Date("2022-04-01T00:00Z"),
  model: carModelsData[90], //GrandLand
  image:
 "../public/images/GrandLand.png",
  engineVolume: 1.6,
  enginePower: 150,
  year: 2021,
  acceleration: 11.1,
  color : "Черный",
},
{
  id:"91",
  startDate: new Date("2006-02-01T00:00Z"),
  endDate: new Date("2008-01-01T00:00Z"),
  model: carModelsData[91], //Zafira
  image:
 "../public/images/Zafira.png",
  engineVolume: 1.8,
  enginePower: 140,
  year: 2007,
  acceleration: 13.0,
  color : "Серый",
},
{
  id:"92",
  startDate: new Date("2005-12-01T00:00Z"),
  endDate: new Date("2008-12-01T00:00Z"),
  model: carModelsData[92], //Vectra
  image:
 "../public/images/Vectra.png",
  engineVolume: 1.6,
  enginePower: 105,
  year: 2006,
  acceleration: 12.6,
  color : "Серый",
},
{
  id:"93",
  startDate: new Date("2011-04-01T00:00Z"),
  endDate: new Date("2012-12-01T00:00Z"),
  model: carModelsData[93], //Corsa
  image:
 "../public/images/Corsa.png",
  engineVolume: 1.2,
  enginePower: 85,
  year: 2011,
  acceleration: 13.6,
  color : "Белый",
},
];
