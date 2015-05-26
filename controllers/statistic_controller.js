var models = require('../models/models.js');

exports.statistics = function(req, res){
 models.Quiz.findAll().then(function(quizes) {
	models.Comment.findAll().then(function(comments) {
             var numPreg = quizes.length;
	     var numCom;
	     var preg_con;
	     var preg_sin;   
	     var cuenta = 0;
	     var com = 0; 
	     var contado = false;
	     var i;
	     for(i=0; i<comments.length; i++){
		if(comments[i].publicado == true){
			cuenta++;
                }   
	     }
	     numCom = cuenta;
	     var media = numCom / numPreg; 
	     var j; 
	     var h;
	     for(j=0; j<quizes.length; j++){
		contado = false; 
		for(h=0; h<comments.length; h++){
			if(comments[h].QuizId == (j+1)){ 
			   if(!contado){
				if(comments[h].publicado){
						contado = true;
						com++;
				}	
			   }
			}
		}
	    }
	    pregCom = com; 
	    pregSin = numPreg - pregCom; 
          res.render('quizes/statistics', { numPreg: numPreg, numCom: numCom, media: media, pregCom: pregCom, pregSin: pregSin,  errors: []});
        }).catch(function(error){next(error);})
  }).catch(function(error){next(error);})
};
