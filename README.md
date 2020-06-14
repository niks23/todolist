"# todolist" 

developement dependencies 
	"@babel/core": "^7.10.2",
    "@babel/plugin-proposal-class-properties": "^7.10.1",
    "@babel/preset-env": "^7.10.2",
    "@babel/preset-react": "^7.10.1",
    "@babel/preset-stage-2": "^7.8.3",
    "babel-loader": "^8.1.0",
    "css-loader": "^3.5.3",
    "extract-text-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^4.3.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.14.1",
    "sass-loader": "^8.0.2",
    "scss-loader": "0.0.1",
    "style-loader": "^1.2.1",
    "webpack-cli": "^3.3.11"
		
react version: 16.13.1


webpack has been configured in webpack.config.js file 

some of the plugin use in webpack
1. MiniCssExtractPlugin
	extracts CSS into separate files and creates a CSS file per JS file which contains CSS.
	
2. HtmlWebpackPlugin
	It will generate an HTML5 file that includes all the webpack bundles in the body
	
components structure

	App.js(Parent Container)
		TaskContainer
			TaskForm
			Taskist
		SeacrhContainer
			SearctForm
			SearchList		
		UI
			Input
			Button

	Parent container(App.js) contains 4 methods
		1. addTaskHandler:
			it will add the task to the state. the method will be required by child component TaskForm and SearchForm
		2. toggleCompleteHandler
			when user selects the checkbox it will changed completed state and apply the styling accordinlgy
		3. deleteTaskHandler
			deletes the task from task array in the state
		4. updateTaskHandler
			updates the task to task array in the state
	
	Lifycycle Methods:
		
		componentDidMount()
			Inside the method localstorage is used to get the updated task when the compoent loads to persist the state data
			
		componentDidUpdate() 
			localstorageis is updated here when there is a change in the state
			
	scss has also been also configured with webepack
				
	





			
	
