class Controller{
    constructor(service){
        this.service = service
    }

    async create(req, res){
        try {
            const createdRecord = await this.service.create(req.body)
            res.status(200).json(createdRecord)
        } catch(erro){
            res.status(400).json({
                message: "error"
            })
        }
        
    }
    async getById(req, res){
        const { id } = req.params
        const result = await this.service.getById(id)
        res.status(200).json(result)
        return 
    }

    async getAll(req, res){
        const result = await this.service.getAll()
        res.status(200).json(result)
        return
    }
}

module.exports = Controller