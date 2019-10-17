module.exports.rand = function ()
{
    return Boolean(Math.round(Math.random()));
}

module.exports.rands = function (length)
{
    var arr = [];
    for (var i = 0 ; i < length ; i++)
    {
        arr.push(Boolean(Math.round(Math.random())));
    }
    return arr;
}