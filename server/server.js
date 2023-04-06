const express = require('express');
const bodyParser = require('body-parser');
const { WebpayPlus } = require('transbank-sdk');

const Transaction = require('transbank-sdk').WebpayPlus
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = require("transbank-sdk");

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
const commerceCode = '597055555532';

app.post('/api/checkout', async (req, res) => {
  try {
    const { total, sessionId, buyOrder, returnUrl } = req.body;
    console.log('total:', total);
    console.log('sessionId:', sessionId);
    console.log('buyOrder:', buyOrder);
    console.log('returnUrl:', returnUrl);

    const tx = new WebpayPlus.Transaction(new Options(commerceCode, apiKey, Environment.Integration));

    const response = await tx.create(buyOrder, sessionId, total, returnUrl);
    console.log('response:', response);

    res.status(200).json({ url: response.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});
