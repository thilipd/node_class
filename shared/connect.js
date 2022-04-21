
const { MongoClient } = require('mongodb');

module.exports = {
    db: {},
    async connect() {
        try {
            const client = await MongoClient.connect(process.env.MONGODB_URL);
            this.db = client.db('class');
            console.log(this.db);

        } catch (err) {
            console.log(err);
        }
    }
}