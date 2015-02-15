module.exports = function(app) {

    app.get('/view/issues/:id', function(req, res) {

        var issues = app.db.get('issues')

        var q = {
            'id': +req.params.id
        }
        var Issues = issues.findOne(q, function(err, item) {
            res.render('viewIssues.jade', {
                Issues: item
            })
        })

    })
}