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
            this.npmInstall(["TopuNet-mobile-stop-moved", "TopuNet-Landscape-Mask", "TopuNet-ImageCropCompressorH5", "TopuNet-CalendarScroller", "topunet-timerscroller"]);
        },
        bower: function() {
            // this.bowerInstall(["jquery"]);
        },
    },
    end: {
        copy_mobile_stop_moved: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-mobile-stop-moved/mobile_stop_moved.js";
            _des = "web/widget/lib/mobile_stop_moved.js";
            this.copy(_source, _des);
        },
        copy_Landscape_mask: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-Landscape-Mask/inc";
            _des = "web/inc";
            this.directory(_source, _des);

            _source = cwd + "/node_modules/TopuNet-Landscape-Mask/jq";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_ImageCropCompressorH5: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-ImageCropCompressorH5/widget/lib";
            _des = "web/widget/lib";
            this.directory(_source, _des);
        },
        copy_CalendarScroller: function() {
            var _source, _des;
            _source = cwd + "/node_modules/TopuNet-CalendarScroller/widget/lib/CalendarScroller.js";
            _des = "web/widget/lib/CalendarScroller.js";
            this.copy(_source, _des);
        },
        copy_timerscroller: function() {
            var _source, _des;
            _source = cwd + "/node_modules/topunet-timerscroller/widget/lib/TimerScroller.js";
            _des = "web/widget/lib/TimerScroller.js";
            this.copy(_source, _des);
        }
    }

});
