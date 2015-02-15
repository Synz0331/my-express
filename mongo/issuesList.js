module.exports = function(app) {
    
    app.get('/list/issues', function(req, res) {

        var Issues = app.db.get('issues')

        Issues.find({}, function(err, iss) {

            res.render('listIssues.jade', {
                Issues: iss
            })
        })

    })
}