const { Router } = require('express');
const RoleController = require('../controllers/roleController')

const router = Router();

router
    .post("/roles", RoleController.cadastrar)
    .get("/roles", RoleController.buscarTodasRoles)
    .get("/role/:id", RoleController.buscaRolePorId)
    .delete("/role/:id", RoleController.deletarRolePorId)
    .put("/role/:id", RoleController.editarRole)


module.exports =  router;