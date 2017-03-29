'use strict';

import express from 'express';

import controller from '../controllers/employee.controller';

const router = express.Router();

router.route('/')
	.post(controller.addEmployee)
	.get(controller.getAllEmployees);

router.route('/:id')
	.get(controller.getEmployeeById)
	.put(controller.editEmployee)
	.delete(controller.deleteEmployee);

export default router;
