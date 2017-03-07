# yeoman-generator v1.1.20
### 安装：npm install generator-topu


生成器目录：
-------------
1. topu:

		拓扑高科新项目生成器
		
		option(必填，多个用逗号分隔，如：yo topu web,node):

			(1) web: pc端项目
			(2) wap: 移动端项目
			(3) node: node架构项目
			(4) weixin: node端微信类库
        

使用方法：
-------------

1. 安装yeoman（再次使用不用反复安装）：
		
		npm install -g yo

2. 命令行进入generator-xxx，执行（再次使用不用反复执行，只需从github上下载最新版本覆盖旧版本即可）：

		npm link

3. 新建项目文件夹并进入，执行：

		yo xxx [option1[,option2,...]]
		

更新日志
--------------
v1.1.20

	        1. topu:node更新模板文件：/handle/config.js

v1.1.19

	        1. topu:node更新模板文件：/handle/config.js

v1.1.18

	        1. topu:common增加插件：topunet-layerdrag

v1.1.17

	        1. 修改topu:node/template/launch/www.js中的注释

v1.1.16

	        1. 因为BaiduMap的修改，随之修改topu:common。

v1.1.15

	        1. 因为PromptLayer_JS的修改，随之修改topu:common。

v1.1.14

	        1. topu:wap增加TopuNet-ImageCropCompressorH5。

v1.1.13

	        1. topu:common修复bug：忘copy functions.js到项目了。

v1.1.12

	        1. topu:common修改插件TopuNet-JsHintify为TopuNet-JsHint4Sublime

v1.1.11

	        1. topu:common增加插件：TopuNet-JsHintify

v1.1.10

	        1. 每个文件夹根目录的js文件通过jshint验证，内含node.js文件还没做处理
	        
v1.1.9

	        1. topu:common：template增加/fis-conf.js

v1.1.8

	        1. topu:common增加插件：TopuNet-QueueLazyLoad

v1.1.7

	        1. topu:common增加插件：TopuNet-WaterFall

v1.1.6

	        1. topu:common增加插件：TopuNet-dropDownLoad

v1.1.5

	        1. 增加option：weixin，自动下载node端weixin类库

v1.1.4

	        1. topu:node修改images依赖的版本为固定2.1.11
	        2. topu:node的template增加routes/404和captcha
	        3. topu:node修改app.js

v1.1.3

	        1. topu:wap的zepto从inc移动到/widget/lib/
	        2. topu:common增加图片验证码插件——TopuNet-Pic-code
	        3. npm发布失误，增加了一个1.3.3版本……unpublish了

v1.1.2

	        topu:wap的template/zepto.min.js有问题，更新到最新版本。

v1.1.1

	        1. 支持一次传入多个option（逗号分隔），如：yo topu web,node
	        2. 增加option：node

v1.0.1

	        项目创建、发布