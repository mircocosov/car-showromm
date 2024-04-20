import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("1964-01-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[21], //911
    image:
    "../public/images/911.png",
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
    image:
    "../public/images/Panamera.png",
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
    image:
    "../public/images/Cayenne.png",
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
    image:
    "../public/images/Macan.png",
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
    image:
    "../public/images/Taycan.png",
    engineVolume: 0,
    enginePower: 625,
    year: 2024,
    acceleration: 2.9,
    color: "Серебристый",
  },
  //Lamborgini
  {
    id:"5",
    startDate: new Date("2003-03-01T00:00Z"),
    endDate: new Date("2013-11-25T00:00Z"),
    model: carModelsData[0], //Gallardo
    image:
   "../public/images/Gallardo.png",
    engineVolume: 5.2,
    enginePower: 560,
    year: 2013,
    acceleration: 3.4,
    color: "Черный",
  },
  {
    id:"6",
    startDate: new Date("2014-03-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[1], //Huracan
    image:
   "../public/images/Huracan.png",
    engineVolume: 5.2,
    enginePower: 610,
    year: 2020,
    acceleration: 2.9,
    color: "Графит",
  },
  {
    id:"7",
    startDate: new Date("2011-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[2], //Aventador
    image:
   "../public/images/Aventador.png",
    engineVolume: 6.5,
    enginePower: 770,
    year: 2021,
    acceleration: 2.8,
    color: "Серебристый",
  },
  {
    id:"8",
    startDate: new Date("2001-01-01T00:00Z"),
    endDate: new Date("2010-01-01T00:00Z"),
    model: carModelsData[3], //Murcielago
    image:
   "../public/images/Murcielago.png",
    engineVolume: 6.5,
    enginePower: 670,
    year: 2010,
    acceleration: 3.2,
    color: "Желтый",
  },
  {
    id:"9",
    startDate: new Date("1990-01-01T00:00Z"),
    endDate: new Date("2001-01-01T00:00Z"),
    model: carModelsData[4], //Diablo
    image:
   "../public/images/Diablo.png",
    engineVolume: 6.0,
    enginePower: 549,
    year: 2001,
    acceleration: 3.5,
    color: "Оранжевый",
  },

  {
    id:"10",
    startDate: new Date("2017-12-04T00:00Z"),
    endDate: new Date(),
    model: carModelsData[5], //Urus
    image:
   "../public/images/Urus.png",
    engineVolume: 4.0,
    enginePower: 600,
    year: 2020,
    acceleration: 3.6,
    color: "Желтый",
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
];
