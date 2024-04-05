const path = require("path");
const process = require("process");
const deepMerge = require('@iorp/node-aid/src/object/deepMerge.js');
const orchestrate = require('@iorp/node-aid/src/function/orchestrate.js');
const fileExists = require("@iorp/node-aid/src/filesystem/fileExists.js");
const findRootFolder = require('@iorp/node-aid/src/filesystem/findRootDirectory.js');
const turbodoc = async (options = null) => {
  if (options == null || options == undefined) {
    // get the options from 

    const turbodocConfigPath = path.join(findRootFolder(process.cwd()), "turbodoc.config.js");
    if (!fileExists(turbodocConfigPath)) {
      //console.error("Not found ", turbodocConfigPath);
      return {
        error: 1,
        code: "TurbodocNoPath"
      };
    }

    // apply from file 
    options = require(turbodocConfigPath);

    // if(!(typeof options =='object' && !Array.isArray(options))) {

    //   console.error("Not found ", turbodocConfigPath);
    //   return{error:1,code:"TurbodocNoData"}; 

    // }
  }
  options = deepMerge({
    plugins: [
      // see test 
    ]
  }, options);
  const orchestrateOptions = {
    methods: options.plugins
  };
  r = await orchestrate(orchestrateOptions);
  return r;
};
module.exports = turbodoc;