module.exports = function(app) {

    app.get('/view/pulls/:id', function(req, res) {

        var pull = app.db.get('pulls')

        var q = {
            'id': +req.params.id
        }

        var Pulls = pull.findOne(q, function(err, item) {
            res.render('viewPulls.jade', {
                Pulls: item
            })
        })

    })
}