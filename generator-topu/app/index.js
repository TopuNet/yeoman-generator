var generators = require('yeoman-generator');
var fs = require('fs');
var cwd;

module.exports = generators.Base.extend({
    initializing: function() {
        cwd = this.destinationRoot();
        if (fs.existsSync(cwd + "/web")) {
            console.log("web文件夹已存在，请先删除");
        } else {
            this.composeWith("topu:common");

            this.argument("arg_env", { type: String, required: false, defaults: '' });

            var arg_env = this.arg_env.toLowerCase().split(',');

            if (arg_env.indexOf('web') > -1)
                this.composeWith("topu:web");
            if (arg_env.indexOf('wap') > -1)
                this.composeWith('topu:wap');
            if (arg_env.indexOf('node') > -1)
                this.composeWith('topu:node');
        }
    }
});
