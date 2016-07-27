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
            this.npmInstall(["TopuNet-RequireJS", "TopuNet-AMD-modules", "TopuNet-PromptLayer-JS", "TopuNet-RotatingBanner", "TopuNet-BaiduMap", "TopuNet-js-functions", "TopuNet-Pic-code"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_RequireJS: function() {
            var _source = cwd + "/node_modules/TopuNet-RequireJS/inc";
            var _des = "web/inc";
            this.directory(_source, _des);

            var _source = cwd + "/node_modules/TopuNet-RequireJS/widget";
            var _des = "web/widget";
            this.directory(_source, _des);
        },
        copy_AMD_modules: function() {
            var _source = cwd + "/node_modules/TopuNet-AMD-modules/modules";
            var _des = "web/widget/modules";
            this.directory(_source, _des);
        },
        copy_PromptLayer_JS: function() {
            var _source = cwd + "/node_modules/TopuNet-PromptLayer-JS/css";
            var _des = "web/inc";
            this.directory(_source, _des);

            var _source = cwd + "/node_modules/TopuNet-PromptLayer-JS/jq";
            var _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_RotatingBanner: function() {

            var _source = cwd + "/node_modules/TopuNet-RotatingBanner/jq";
            var _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_BaiduMap: function() {
            var _source = cwd + "/node_modules/TopuNet-BaiduMap/inc";
            var _des = "web/inc";
            this.directory(_source, _des);

            var _source = cwd + "/node_modules/TopuNet-BaiduMap/jq";
            var _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_Pic_code: function() {
            var _source = cwd + "/node_modules/TopuNet-Pic-code/jq/pic_code.js";
            var _des = "web/widget/lib/pic_code.js";
            this.copy(_source, _des);
        }
    }

});
