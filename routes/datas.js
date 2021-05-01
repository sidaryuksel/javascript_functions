const express = require('express');
const Data = require('../model/Schema');
const {findAllAggregatedByAuthor} =  require('../functions/author');
const {findByHourlyAggregated } = require('../functions/date');

const router = express.Router();
var datas;
router.get('/', async (req, res) => {
    try {
        datas = await Data.find();
        findAllAggregatedByAuthor(datas);
        const hourRange = 3;
        findByHourlyAggregated(datas, hourRange);       
        res.json(datas);
    } catch (err) {
        res.json({message: err});
    }
})

router.post('/', async (req, res) => {
    const data = new Data({
        post_body: req.body.post_body,
        author: req.body.author,
        date_created: req.body.date_created
    });
    try {
        const newData = await data.save();
        res.json(newData);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;