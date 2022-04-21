const express = require('express');

const router = express.Router();

const employeeModule = require('../module/employee')

router.get('/', employeeModule.getEmployee);
router.get('/:id', employeeModule.getEmployeeById);
router.post('/create', employeeModule.createEmployee);
router.put('/update/:id', employeeModule.updateEmployee);
router.delete('/delete/:id', employeeModule.deleteEmployee);

module.exports = router;