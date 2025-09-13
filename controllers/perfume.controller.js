const perfume = require('../models/perfume.model');


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email

const getPerfume = async (req, res) => {
    let perfumes;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        perfumes = await entry.getAllPerfumes();
    }
    res.status(200).json(entries); 
}

//POST http://localhost:3000/api/perfumes/ 

const createPerfume = async (req, res) => {
    const newPerfume = req.body; 
    const response = await perfume.createPerfume(newPerfume);
    res.status(201).json({
        "perfume creado": response,
        data: newPerfume
    });
}

//PUT http://localhost:3000/api/entries/

const updatePerfume = async (req, res) => {
    const updatePerfume = req.body; // { oldTitle, content, date, newTitle, category }

    try {
        const result = await perfume.updatePerfume(updatePerfume);

        if (result === 0) {
            return res.status(404).json({
                message: `No se encontró el perfume '${updatePerfume.oldTitle}'`
            });
        }

        res.status(200).json({
            message: `Se ha modificado el perfume '${updatePerfume.oldTitle}' `
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al actualizar perfume",
            error: err.message
        });
    }
};


//DELETE http://localhost:3000/api/perfumes/ 
const deletePerfume = async (req, res) => {
    const { email } = req.body;

    try {
        await entry.deletePerfume(email);
        res.status(200).json({
            message: `Se ha borrado ${email}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al eliminar perfume",
            error: err.message
        });
    }
};


module.exports = {
    getPerfume,
    createPerfume,
    updatePerfume,
    deletePerfume,
}