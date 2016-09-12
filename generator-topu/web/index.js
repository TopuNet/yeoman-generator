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
            this.npmInstall(["jquery@1","TopuNet-GrayScale"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_jquery: function() {
            var _source, _des;
            _source = cwd + "/node_modules/jquery/dist/jquery.min.js";
            _des = cwd + "/web/widget/lib/jquery.min.js";
            this.copy(_source, _des);
        },
        copy_GrayScale: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-GrayScale/inc";
            _des = "web/inc";
            this.directory(_source, _des);

            _source = cwd + "/node_modules/TopuNet-GrayScale/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        }
    }

});
