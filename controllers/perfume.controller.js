const perfumeModel = require('../models/perfume.model');


// GET http://localhost:3000/api/perfumes --> ALL
//GET http://localhost:3000/api/perfumes/email/correo@ejemplo.com/perfumes

//****************1******************** */
const getPerfumesByEmailController = async (req, res) => {
  try {
    const { email } = req.params; 
    const perfumes = await perfumeModel.getPerfumesByEmail(email);
    res.status(200).json(perfumes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener perfumes del usuario' });
  }
};

const getPerfumesFilteredController = async (req, res) => {
  try {
    const search = req.query.search || ""; // obtener parámetro de búsqueda
    const perfumes = await perfumeModel.getPerfumesFiltered(search);
    res.status(200).json(perfumes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener perfumes" });
  }
};


//POST http://localhost:3000/api/perfume/ 

// const createPerfume = async (req, res) => {
//     const newPerfume = req.body; 
//     const response = await perfume.createPerfume(newPerfume);
//     res.status(201).json({
//         "perfume creado": response,
//         data: newPerfume
//     });
// }

//PUT http://localhost:3000/api/perfume/

// const updatePerfume = async (req, res) => {
//     const updatePerfume = req.body; // { oldTitle, content, date, newTitle, category }

//     try {
//         const result = await perfume.updatePerfume(updatePerfume);

//         if (result === 0) {
//             return res.status(404).json({
//                 message: `No se encontró el perfume '${updatePerfume.oldTitle}'`
//             });
//         }

//         res.status(200).json({
//             message: `Se ha modificado el perfume '${updatePerfume.oldTitle}' `
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Error al actualizar perfume",
//             error: err.message
//         });
//     }
// };


//DELETE http://localhost:3000/api/perfume/ 
// const deletePerfume = async (req, res) => {
//     const { email } = req.body;

//     try {
//         await entry.deletePerfume(email);
//         res.status(200).json({
//             message: `Se ha borrado ${email}`
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Error al eliminar perfume",
//             error: err.message
//         });
//     }
// };


module.exports = {
    getPerfumesByEmailController,
    getPerfumesFilteredController
    // createPerfume,
    // updatePerfume,
    // deletePerfume,
}