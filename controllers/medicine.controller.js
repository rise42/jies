'use strict';

import database from '../services/db';

function getAllMedicines(req, res){
	database.query(
		'select * from MEDICINES',
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.json(results);
			}
		}
	)
}

function addMedicine(req, res){
	const body = req.body;

	database.query(
		'insert into MEDICINES(NAME,MANUFACTURER,DOSAGE)'
		+' values("'+body.name+'",'+body.manufacturer+', '+body.dosage+')',
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function editMedicine(req, res){
	const id = req.params.id;
	const body = req.body;

	database.query(
		'update MEDICINES set NAME="'+body.name
		+'",MANUFACTURER='+body.manufacturer
		+',DOSAGE='+body.dosage
		+' where ID='+id,
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function deleteMedicine(req, res){
	const id = req.params.id;

	database.query(
		'delete from MEDICINES where ID='+id,
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function getMedicineById(req, res){
	const id = req.params.id;

	if(Number.isInteger(Number(id)))
		database.query(
			'select * from MEDICINES where ID='+id,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results[0]);
				}
			}
		);
}

function getMedicineByManufacturer(req, res){
	const manufacturer = req.params.manufacturer;

	if(Number.isInteger(Number(manufacturer)))
		database.query(
			'select * from MEDICINES where MANUFACTURER='+manufacturer,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results);
				}
			}
		);
}

export default {
	getAllMedicines,
	addMedicine,
	editMedicine,
	deleteMedicine,
	getMedicineById,
	getMedicineByManufacturer
};
