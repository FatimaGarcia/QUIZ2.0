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
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/busqueda', quizController.busqueda);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.get('/quizes/new', quizController.new);
router.delete('/quizes/:quizId(\\d+)', quizController.destroy);
router.post('/quizes/create', quizController.create);
router.put('/quizes/:quizId(\\d+)', quizController.update);

/*GET /quizes/comments*/
router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);
module.exports = router;
