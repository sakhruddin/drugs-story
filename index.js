const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());
app.use(require("./routes/drugs.routes"));
app.use(require("./routes/users.routes"));



mongoose.connect("mongodb+srv://sakhruddin:faros095@cluster0.z8yq6.mongodb.net/drugs-shop?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(4000, () => {
    console.log('Сервер запущен успешно')
});