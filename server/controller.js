module.exports={
    getAllEvents:async(req,res)=>{
        const db = req.app.get('db')
        const events = await db.Events.get_all_events()
        res.status(200).send(events)
    }
}