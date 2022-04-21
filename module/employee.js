


const mongo = require('../shared/connect');

module.exports.getEmployee = async (req, res, next) => {
    try {
        let data = await mongo.db.collection('employee').find().toArray();
        res.send(data);

    } catch (err) {
        res.status(500).send(err)
    }

}


module.exports.createEmployee = async (req, res, next) => {

    try {
        let data = await mongo.db.collection('employee').insertOne(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send(err)
    }

}

module.exports.getEmployeeById = async (req, res, next) => {
    try {
        let data = await mongo.db.collection('employee').findOne({ _id: ObjectId(req.params.id) })
        res.send(data)
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports.updateEmployee = async (req, res, next) => {
    try {
        let data = await mongo.db.collection('employee').updateOne({ _id: ObjectId(req.params.id) }, { $set: { ...req.body } })
        res.send(data)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.deleteEmployee = async (req, res, next) => {
    try {
        let data = await mongo.db.collection('employee').removeOne({ _id: ObjectId(req.params.id) })
        res.send(data)
    } catch (err) {
        res.status(500).send(err);
    }
}


// 