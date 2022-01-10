db.restaurantes.find().pretty() //nombre de la collection .pretty se coloca para hacer la devolucion mas "bonito"
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1}).pretty()
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()// 1 mostrar, 0 no mostrar
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1 , "_id": 0}).pretty()
db.restaurants.find({"borough": {$eq:"Bronx"}}).pretty()
db.restaurants.find({"borough": {$eq:"Bronx"}}).limit(5).pretty()// limit funciona como el MySql
db.restaurants.find({"borough": {$eq:"Bronx"}}).skip(5).pretty()// skip se usa para saltar documentos
db.restaurants.find({"grades.score": {$gte: 90}}).pretty()// gte -> mayor o igual, gt -> mayor que
db.restaurants.find({"grades.score": {$gte: 80, $lte: 100}}).pretty()// lt -> menor que, lte -> menor o igual que
db.restaurants.find({"address.coord": {$lt: -95.754168}}).pretty()
db.restaurants.find({$and:[{"cuisine": {$ne: "American "}}, {"grades.score": {$gt: 70}}, {"address.coord": {$lt: -65.754168}}]}).pretty()// ne -> not equal
db.restaurants.find({"cuisine": {$ne: "American "}, "grades.score": {$gt: 70}, "address.coord": {$lt: -65.754168}}).pretty()
db.restaurants.find({"cuisine": {$ne: "American "},"grades.grade": {$eq: "A"}, "borough": {$ne: "Brooklyn"}}).sort({"cuisine": -1}).pretty()//1 ascendente, -1 descendente
db.restaurants.find({"name": {$regex: "^Wil"}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({"name": {$regex: "ces$"}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({"name": {$regex: "reg+", $options: "i"}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({$and:[{"borough": {$eq: "Bronx"}}, {"cuisine": {$in:["American ", "Chinese"]}}]}).pretty()
db.restaurants.find({"borough": {$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({"borough": {$nin:["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({"grades.score": {$ne: 10}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({$and:[{"cuisine": {$eq: "Seafood"}}, {"cuisine": {$nin:["American ", "Chinese"]}} , {"name": {$ne: {$regex: "^Wil"}}}, {}]}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({"grades":{"date": ISODate("2014-08-11T00:00:00Z"), "grade": "A", "score": 11}}, {"restaurant_id": 1, "name": 1, "grades": 1, "_id": 0}).pretty()
db.restaurants.find({$and:[{"grades.1.grade": {$eq: "A"}}, {"grades.1.score": {$eq: 9}}, {"grades.1.date": {$eq: ISODate("2014-08-11T00:00:00Z")}}]}, {"restaurant_id": 1, "name": 1, "grades": 1, "_id": 0}).pretty()
db.restaurants.find({"address.coord.1": {$gt: 42.0, $lte: 57.0}}, {"restaurant_id": 1, "name": 1, "address": 1}).pretty()
db.restaurants.find({name: {$exists: true}}).sort({"name": 1}).pretty()
db.restaurants.find({name: {$exists: true}}).sort({"name": -1}).pretty()
db.restaurants.find({}, {"cuisine": 1, "borough": 1, "_id": 0}).sort({"cuisine": 1, "borough": -1}).pretty()//solo se muestra la columnas de cocina y barrio para mostrar todas las columnas -> db.restaurants.find().sort({"cuisine": 1, "borough" : -1}).pretty()
db.restaurants.find({"address.street": {$exists : true}}).pretty()
db.restaurants.find({"address.coord":{$type: "double"}}).pretty()// tambien puede ser db.restaurants.find({"address.coord":{$type: 1}}).pretty(), porque en el manual mongodb indica que $type: 1 corresponde a double
db.restaurants.find({"grades.score":{$mod : [7,0]}}, {"restaurant_id": 1,"name": 1,"grades": 1}).pretty()// $mod -> modulo, %, operador de resto, residuo
db.restaurants.find({name: {$regex: "mon.*", $options: "i"}},{"name": 1, "borough": 1, "address.coord": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurants.find({name: {$regex: "^Mad", $options: "i"}}, {"name": 1, "borough":1, "address.coord":1, "cuisine": 1, "_id": 0}).pretty()