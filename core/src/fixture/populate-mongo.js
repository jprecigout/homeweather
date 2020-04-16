// use homeweather;
db.dashitem.insertOne({ image: 'rain.svg', name: 'Humidity' });
db.dashitem.insertOne({ image: 'thermometer.svg', name: 'Temperature' });

// db.user.insert({ username: 'jerome', password: 'jerome' });
db.dashboards.insert({
  userId: ObjectId('5e91773e31b30c2c6bd4cb4e'),
  dashItems: [
    {
      image: 'rain.svg',
      name: 'Humidity',
      event: 'humidityEvents',
      activate: 'true',
    },
    {
      image: 'thermometer.svg',
      name: 'Temperature',
      event: 'temperatureEvents',
      activate: 'true',
    },
  ],
});
