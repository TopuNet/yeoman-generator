var generators = require('yeoman-generator');
var cwd;

module.exports = generators.Base.extend({
    initializing: {
        init: function() {
            cwd = this.destinationRoot();
        }
    },
    install: {
        npm: function() {
            this.npmInstall(["TopuNet-weixin-node"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_node_functions: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-weixin-node/weixin.js";
            _des = cwd + "/web/handle/weixin.js";
            this.copy(_source, _des);
        }
    }

});
