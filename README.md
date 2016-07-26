# yeoman-generator v1.1.2
### yeoman-generator

更新日志
--------------
v1.1.2

	        topu:wap的template/zepto.min.js有问题，更新到最新版本。

v1.1.1

	        1. 支持一次传入多个option（逗号分隔），如：yo topu web,node
	        2. 增加option：node

v1.0.1

	        项目创建、发布


生成器目录：
-------------
1. topu:

		拓扑高科新项目生成器
		
		option(必填，多个用逗号分隔，如：yo topu web,node):

			(1) web: pc端项目
			(2) wap: 移动端项目
			(3) node: node架构项目
        

使用方法：
-------------

1. 安装yeoman（再次使用不用反复安装）：
		
		npm install -g yo

2. 命令行进入generator-xxx，执行（再次使用不用反复执行，只需从github上下载最新版本覆盖旧版本即可）：

		npm link

3. 新建项目文件夹并进入，执行：

		yo xxx [option1[,option2,...]]