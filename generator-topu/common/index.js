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
            this.npmInstall(["TopuNet-RequireJS", "TopuNet-AMD-modules", "TopuNet-PromptLayer-JS", "TopuNet-RotatingBanner", "TopuNet-BaiduMap", "TopuNet-js-functions", "TopuNet-Pic-code", "TopuNet-dropDownLoad", "TopuNet-WaterFall", "TopuNet-QueueLazyLoad", "TopuNet-JsHint4Sublime"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_RequireJS: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-RequireJS/inc";
            _des = "web/inc";
            this.directory(_source, _des);

            _source = cwd + "/node_modules/TopuNet-RequireJS/widget";
            _des = "web/widget";
            this.directory(_source, _des);

            _source = cwd + "/node_modules/TopuNet-RequireJS/fis-conf.js";
            _des = "web/fis-conf.js";
            this.copy(_source, _des);
        },
        copy_AMD_modules: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-AMD-modules/modules";
            _des = "web/widget/modules";
            this.directory(_source, _des);
        },
        copy_PromptLayer_JS: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-PromptLayer-JS/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_RotatingBanner: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-RotatingBanner/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_BaiduMap: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-BaiduMap/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_Pic_code: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-Pic-code/jq/pic_code.js";
            _des = "web/widget/lib/pic_code.js";
            this.copy(_source, _des);
        },
        copy_dropDownLoad: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-dropDownLoad/inc";
            _des = "web/inc";
            this.directory(_source, _des);

            _source = cwd + "/node_modules/TopuNet-dropDownLoad/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_WaterWall: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-WaterFall/WaterFall.js";
            _des = "web/widget/lib/WaterFall.js";
            this.copy(_source, _des);
        },
        copy_QueueLazyLoad: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-QueueLazyLoad/QueueLazyLoad.js";
            _des = "web/widget/lib/QueueLazyLoad.js";
            this.copy(_source, _des);
        },
        copy_JsHint4Sublime: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-JsHint4Sublime/.jshintrc";
            _des = "web/.jshintrc";
            this.copy(_source, _des);
        },
        copy_js_functions: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-js-functions/functions.js";
            _des = "web/widget/lib/functions.js";
            this.copy(_source, _des);
        }
    }

});
