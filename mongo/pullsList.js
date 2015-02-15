module.exports = function(app) {
    
    app.get('/list/pulls', function(req, res) {

        var pulls = app.db.get('pulls')

        pulls.find({}, function(err, pull) {

            res.render('listPulls.jade', {
                pulls: pull
            })
        })

    })
}