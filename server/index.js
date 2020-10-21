const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const PORT = config.get('port');
const mongoose = require("mongoose");
const cors = require('cors');

const itemRouter = require('./routes/itemRouter');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit();
  }
}

app.use('/api/items/', itemRouter);

start();

process.on("SIGINT", () => {
  mongoose.disconnect(() => process.exit())
});
