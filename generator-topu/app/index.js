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

            if (this.arg_env.toLowerCase() == "web")
                this.composeWith("topu:web");
            if (this.arg_env.toLowerCase() == "wap")
                this.composeWith('topu:wap');
        }
    }
});
