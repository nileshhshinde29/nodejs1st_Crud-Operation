const express = require("express");
const alian2 = require("../model/alian2");
const router = express.Router();
const Alian = require("../model/alian2");

router.get("/", async (req, res) => {
  try {
    const data = await Alian.find();
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
    try {
        const data = await Alian.findById(req.params.id)
        res.send(data)
  } catch (err) {
    res.send("Plase Enter valid id")
  }
});

router.patch('/:id', async (req, res)=> {
     try {
       const data = await Alian.findById(req.params.id);
       
       data.sub = req.body.sub;
       const a1 = await data.save();
       res.send(a1);
      
     } catch (error) {
         res.send('Not Patched')
        
     }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Alian.findByIdAndDelete(req.params.id)
        res.send('delete')
 
    } catch (error) {
        
        res.send("not deleted")
    }
})
router.post("/", async (req, res) => {
  const recivedData = new Alian({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await recivedData.save();
    res.json(a1);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
