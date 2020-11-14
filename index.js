const express = require('express');
const conectarDB = require('./config/db')
const app = express();
conectarDB();
app.use( express.json({extended :true}));
//require('./routers/agenda'); 
const PORT = process.env.PORT || 4000;
// controllers
const agendaController = require('./controllers/agendaController');

app.post('/api/agenda', 
    agendaController.agendar
);

//app.use("/api/agenda", require("./routers/agenda"));
app.listen(PORT,() => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})