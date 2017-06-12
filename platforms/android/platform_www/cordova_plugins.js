cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-clipboard-x.Clipboard",
        "file": "plugins/cordova-plugin-clipboard-x/www/clipboard.js",
        "pluginId": "cordova-plugin-clipboard-x",
        "clobbers": [
            "cordova.plugins.clipboard",
            "cordova.plugins.clipboard-x"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-clipboard-x": "1.0.1"
};
// BOTTOM OF METADATA
});