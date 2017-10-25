const nba = require('nba.js').default;
var fs = require('fs');
var jsonfile = require('jsonfile')

var Api = {
    allPlayers: function(){
        nba.stats.allPlayers(function(err, res) {
                if (err) {
                    console.error(err);
                    return;
                }
                
                
                })
            },
    getGameByDate: function(year){
        nba.data.schedule({year: year}, function(err, res){
            if (err) {
                console.error(err);
                return;
            } 
            jsonfile.writeFile("./tmp/test.json", res, {spaces: 2}, function (err) {
                if(err)
                    console.log(err);
            });
        });
    }        
}
module.exports = Api;