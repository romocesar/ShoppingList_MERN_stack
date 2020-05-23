//Import Express module to make connection with the models
const express = require('express');
//Import Models Item file 
const Item = require('../../models/Item');

//Create router object from express Router object 
const router = express.Router();

//Create routes
//@route  GET api/items
//@desc   Get all items from Shopping List
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

//@route  POST api/items
//@desc   Add/Create item to Shopping List
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@route  DELETE api/items
//@desc   Delete item to Shopping List
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})) )
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
