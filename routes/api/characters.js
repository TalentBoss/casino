const express = require('express');
const router = express.Router();
//const fetch = require('node-fetch');

router.post('/',  async (req, res) => {
  try {
/*
    const {response} = await got.get('https://swapi.dev/api/people/', {json:{}}).json();
    console.log(response);*/
    /*const response = await fetch('https://swapi.dev/api/people/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });*/
    const data = "sdfsdfsdfdsfsdf";
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
