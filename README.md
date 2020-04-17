# Homeweather

<p align="center">
    <img src="https://github.com/jprecigout/homeweather/blob/master/ui/src/assets/img/house.svg" width="25%">
</p>

The front of the application is write with **Angular**

- Authentication
- Temperature and humidity display on the web

The back of the application is write with **Nest.js** and **MongoDB**

- Acquisition of sensor measurements
- Display on the LCD screen
- Saving measurements in database

The back application use **Raspberry Pi 3** and **Grove Pi sensor** (https://www.dexterindustries.com/grovepi/) :

<p align="center">
    <img src="https://github.com/jprecigout/homeweather/blob/master/img/sensor.jpeg" width="25%">
    <img src="https://github.com/jprecigout/homeweather/blob/master/img/box.png" width="25%">
</p>

## Build application

```bash
$ docker-compose build
```

## Run application

```bash
$ docker-compose up -d
```
