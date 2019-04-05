


module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        let response = await db.getAllHouses()
        res.status(200).send(response)
    },

    createNewHouse: async (req, res) => {
        const { house } = req.body
        const db = req.app.get('db')
        let response = await db.createNewHouse(house)
        res.status(200).send(response)
    },

    deleteHouse: async (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        let response = await db.deleteHouse(id)
        res.status(200).send(response)

    }
}