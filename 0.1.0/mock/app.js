'use strict';
const express = require('express');
const PORT = 3000
const HOST = '0.0.0.0';
const app = express();

const location1 = {
  "id": "5b7c65f5-ce05-4fe9-8f71-aab9a094271c",
  "iana": "1.3.6.1.4.1.88800",
  "name": "Mill",
  "address": [
    "Mill Road 1"
  ],
  "postalCode": "67000",
  "city": "Strasbourg",
  "country": "FR"
};
const location2 = {
  "id": "5ad7ef7d-1c05-4f10-a7c8-4165f7209339",
  "iana": "1.3.6.1.4.1.43115",
  "name": "Forest Company",
  "address": [
    "Forest Road 1"
  ],
  "postalCode": "88000",
  "city": "Epinal",
  "country": "FR"
};
const location3 = {
  "id": "961d7d05-8bf0-45e0-8e20-1fc7ed462c7c",
  "iana": "1.3.6.1.4.1.19270.424",
  "name": "Stora Enso Paper AB - Kvarnsveden Mill",
  "address": [
    "Kvarnsvedsvägen 420"
  ],
  "postalCode": "784 66",
  "city": "Borlänge",
  "country": "SE"
};

//
// GET /locations?<field>=...
//
app.get('/locations', (req, res) => {

  let response = {};

  if (req.query.iana     == location1.iana ||
    req.query.name       == location1.name ||
    req.query.postalCode == location1.postalCode ||
    req.query.city       == location1.city ||
    req.query.country    == location1.country) {

    response = [
      location1
    ];

  } else if (req.query.iana == location2.iana ||
      req.query.name        == location2.name ||
      req.query.postalCode  == location2.postalCode ||
      req.query.city        == location2.city ||
      req.query.country     == location2.country) {

    response = [
      location1
    ];

  } else if (req.query.iana == location3.iana ||
      req.query.name        == location3.name ||
      req.query.postalCode  == location3.postalCode ||
      req.query.city        == location3.city ||
      req.query.country     == location3.country) {

  response = [
    location3
  ];

  } else {
    response = [
      location1,
      location2,
      location3
    ];

  }

  res.send(response);
});

//
// GET /locations/{locationId}/opening-hours
//

app.get('/locations/5b7c65f5-ce05-4fe9-8f71-aab9a094271c/opening-hours', (req, res) => {
  res.send({
    "wednesday": [
      {
        "open": "09:00",
        "close": "12:00"
      },
      {
        "open": "13:00",
        "close": "20:00"
      }
    ],
    "thursday": [
      {
        "open": "00:00",
        "close": "23:00"
      }
    ],
    "friday": [],
    "saturday": [],
    "sunday": []
  });
});

app.get('/locations/5ad7ef7d-1c05-4f10-a7c8-4165f7209339/opening-hours', (req, res) => {
  res.send({
    "tuesday": [
      {
        "open": "09:00",
        "close": "12:00"
      },
      {
        "open": "13:00",
        "close": "20:00"
      }
    ],
    "wednesday": [
      {
        "open": "00:00",
        "close": "23:00"
      }
    ]
  });
});

app.get('/locations/961d7d05-8bf0-45e0-8e20-1fc7ed462c7c/opening-hours', (req, res) => {
  res.send({
    "tuesday": [
      {
        "open": "09:00",
        "close": "12:00"
      },
      {
        "open": "13:00",
        "close": "20:00"
      }
    ],
    "wednesday": [
      {
        "open": "00:00",
        "close": "23:00"
      }
    ]
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);