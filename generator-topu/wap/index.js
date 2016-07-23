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
            this.npmInstall(["TopuNet-mobile-stop-moved", "TopuNet-Landscape-Mask"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_mobile_stop_moved: function() {
            var _source = cwd + "/node_modules/TopuNet-mobile-stop-moved/mobile_stop_moved.js";
            var _des = "web/widget/lib/mobile_stop_moved.js";
            this.copy(_source, _des);
        },
        copy_Landscape_mask: function() {
            var _source = cwd + "/node_modules/TopuNet-Landscape-Mask/inc";
            var _des = "web/inc";
            this.directory(_source, _des);

            var _source = cwd + "/node_modules/TopuNet-Landscape-Mask/jq";
            var _des = "web/widget/lib";
            this.directory(_source, _des);
        }
    }

});
