var generators = require('yeoman-generator');
var cwd;

module.exports = generators.Base.extend({
    initializing: {
        init: function() {
            cwd = this.destinationRoot();
        },
        copyTemplate: function() {
            var _source = "";
            var _des = "web";
            this.directory(_source, _des);
        }
    },
    install: {
        npm: function() {
            this.npmInstall(["TopuNet-node-functions"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_node_functions: function() {
            var _source = cwd + "/node_modules/TopuNet-node-functions/functions.js";
            var _des = cwd + "/web/handle/functions.js";
            this.copy(_source, _des);
        }
    }

});
