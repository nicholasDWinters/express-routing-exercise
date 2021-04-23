const express = require('express');
const ExpressError = require('./expressError')
const { mean, median, mode } = require('./operations');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//checks to see if each number is actually a valid number
function checkNums(arr) {
    for (let num of arr) {
        if (!parseInt(num)) throw new ExpressError(`${num} is not a number`, 400)
    }
}

app.get('/mean', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (!nums) throw new ExpressError('Numbers are required', 400);
        let arr = nums.split(',');
        checkNums(arr);
        let value = mean(arr);
        return res.json({
            operation: 'mean',
            value: value
        })
    } catch (err) {
        next(err);
    }
})

app.get('/median', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (!nums) throw new ExpressError('Numbers are required', 400);
        let arr = nums.split(',');
        checkNums(arr);
        let value = median(arr);
        return res.json({
            operation: 'median',
            value: value
        })
    } catch (err) {
        next(err);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (!nums) throw new ExpressError('Numbers are required', 400);
        let arr = nums.split(',');
        checkNums(arr);
        let value = mode(arr);
        return res.json({
            operation: 'mode',
            value: value
        })
    } catch (err) {
        next(err);
    }
})


//404 error
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});


//Error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;
    return res.status(status).json({
        error: { message, status }
    });
});


app.listen(3000, function () {
    console.log('App on port 3000');
})
