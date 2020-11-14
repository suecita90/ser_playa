const Agenda = require('../models/Agenda')
 
exports.agendar = async (req,res) => {

    const {start, end} = req.body;
    try {
        let agenda = await Agenda.findOne({start});
        if(agenda){
            res.status(400).json({msg: "La fecha de inicio existe"});
        }else{
            // crea
            agenda =  new Agenda(req.body);
            console.log(agenda);
            await agenda.save();
            res.json({msg: `Agenda ${agenda.title} creado`});
        }
        
        
    } catch (error) {
        console.log(error);
        res.status(400).send("Tenemos un error"); 
    }
    //console.log(req.body);
}