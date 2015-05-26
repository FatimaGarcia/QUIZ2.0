var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var commentController = require ('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Proyecto QUIZ', errors: [] });
});
// Autoload de comandos con :quizId
router.param('quizId', quizController.load);
// autoload :commentId
router.param('commentId', commentController.load); 

/*GET Author page*/
router.get('/author', function(req, res) {
	res.render('author', { autor: 'Fatima Garcia', errors: []});
});

/*GET LOGIN/LOGOUT*/
router.get('/login', sessionController.new); // formulario login
router.post('/login', sessionController.create); // crear sesión
router.get('/logout', sessionController.destroy); // destruir sesión

/*GET PREGUNTAS / RESPUESTAS*/
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)',sessionController.loginOut, quizController.show);
router.get('/busqueda', quizController.busqueda);
router.get('/quizes/:quizId(\\d+)/answer', sessionController.loginOut, quizController.answer);
router.get('/quizes/:quizId(\\d+)/edit', sessionController.loginOut, sessionController.loginRequired, quizController.edit);
router.get('/quizes/new', sessionController.loginOut, sessionController.loginRequired, quizController.new);
router.delete('/quizes/:quizId(\\d+)', sessionController.loginOut, sessionController.loginRequired, quizController.destroy);
router.post('/quizes/create', sessionController.loginOut, sessionController.loginRequired,  quizController.create);
router.put('/quizes/:quizId(\\d+)',sessionController.loginOut, sessionController.loginRequired, quizController.update);

/*GET /quizes/comments*/
router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);
router.get('/quizes/:quizId(\\d+)/comments/:commentId(\\d+)/publish',
sessionController.loginRequired, commentController.publish);

module.exports = router;
