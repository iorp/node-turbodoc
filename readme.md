# @iorp/node-turbodoc

## Introduction
`@iorp/node-turbodoc` is an automatic documentation generation tool for JavaScript code. It simplifies the process of creating comprehensive documentation for your JavaScript projects, helping developers focus more on coding and less on manual documentation tasks.

## Installation
To install `@iorp/node-turbodoc`, simply run:

```bash
npm install @iorp/node-turbodoc
```

## Usage
To generate documentation for your JavaScript project, use the following command:

# Usage

## Script wise
It can be called from a script at package.json. 
Developers can make their own scripts, and config files. 
```json
  "scripts": {
    "makedoc":"node @iorp-turbodoc/lib/scripts/turbodoc_default.js ./turbodoc.config.js",
   ...
  }
```
If the config file parameter is null it will seek the file './turbodoc.config.js'. If the developer doesnt want to use a config file, turbodoc shall be called funtion wise. 
```bash
    node src/scripts/turbodoc_default.js
```


## Function wise 
Just call the turbodoc js function providing appropiate parametry.
In this case the configuration can be passed as null, undefined, string or object. 
If null or undefined will assume that './turbodoc.config.js' exists,and it will use this path. 
If string that will be the custom options path. 
If object it will use the given object as options. 
```js
// Import turbodoc core and and config 
const turbodoc = require('../src/turbodoc.js');
  
 async()=>{ 
   let response = await turbodoc(OPTIONS);
  console.log(response);  
}();
```



This command will analyze your project's JavaScript code and generate documentation based on the code's comments and structure.

## Configuration
You can customize the behavior of `@iorp/node-turbodoc` by providing a configuration file named `turbodoc.config.js` in the root directory of your project. Refer to the [Configuration Guide](#configuration-guide) for more details.

## API Reference
For detailed information on the available commands, options, and configurations, please refer to the [API Reference](#api-reference).

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Configuration Guide
Here's a sample configuration file (`turbodoc.config.js`) with explanations for each option:

```javascript
module.exports = {
  // Specify the directory to scan for JavaScript files
  sourceDir: './src',
  // Specify the output directory for generated documentation
  outputDir: './docs',
  // Specify additional files to include in the documentation
  additionalFiles: ['./README.md'],
  // Specify custom templates for generating documentation
  templates: {
    // ...
  },
  // Specify custom parsers for handling different file types
  parsers: {
    // ...
  },
  // Specify options for the documentation generator
  options: {
    // ...
  }
};
```

## API Reference
### Commands
- `generate`: Analyze the JavaScript code and generate documentation.

### Options
- `--sourceDir <directory>`: Specify the directory containing the JavaScript files to be analyzed.
- `--outputDir <directory>`: Specify the directory where the generated documentation will be saved.
- `--config <path>`: Specify the path to the configuration file.
- `--verbose`: Enable verbose logging.
- `--help`: Display help information for the command.

## Warning
⚠️ **Discontinued:** This project (`@iorp/node-turbodoc`) is discontinued. Its functionality will be continued in the `@iorp/py-doer` project. Please refer to [py-doer](https://github.com/iorp/py-doer) for further updates and contributions. 



npm publish --force