var models = require('../models/models.js');

//Get que muestra las preguntas favoritas de un usuario
exports.show = function(req, res, next) {
  models.Favourites.findAll({ 
	  where: { UserId: Number(req.session.user.id)}
    }).then(function(favourites) {
        var confav = [];
        var i; 
        for (i=0; i<favourites.length;i++) {
            confav[i] = favourites[i].QuizId;
        };
        models.Quiz.findAll({ 
	    where: { id: confav }}
        ).then(function(quizes) {
           res.render('favourites/index', {quizes: quizes, errors: []});
        }).catch(function(error) { next(error);});
  }).catch(function(error) { next(error);});
};

exports.marcado = function(req, res, next) {
  var favorito = models.Favourites.build(
	{ QuizId: req.params.quizId, 
	  UserId: req.session.user.id
	});
  favorito
 .save()
 .then(function(){res.redirect('/quizes')} 
  ).catch(function(error){next(error)});
};

exports.destroy = function(req, res){
  models.User.find({where: { id: Number(req.session.user.id)}}).then(function(user){
   user.removeQuiz(req.quiz);
   res.redirect('/quizes');
});
}
