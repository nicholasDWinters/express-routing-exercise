const express = require('express');
const ExpressError = require('./expressError')
const { mean, median, mode } = require('./operations');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', (req, res) => {
    const { nums } = req.query;
    let value = mean(nums);
    return res.json({
        operation: 'mean',
        value: value
    })
})

app.get('/median', (req, res) => {
    const { nums } = req.query;
    let value = median(nums);
    return res.json({
        operation: 'median',
        value: value
    })
})

app.get('/mode', (req, res) => {
    const { nums } = req.query;
    let value = mode(nums);

    return res.json({
        operation: 'mode',
        value: value
    })
})

app.listen(3000, function () {
    console.log('App on port 3000');
})
