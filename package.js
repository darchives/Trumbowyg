Package.describe({
    name: 'shaungidr:trumbowyg-all',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'A lightweight WYSIWYG editor.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/shaunstoltz/Trumbowyg.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: null
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('jquery', 'client');
    var assets = [
        'dist/ui/icons.svg'
    ];
    if(api.addAssets) {
        api.addAssets(assets, 'client');
    }else{
        api.addAssets(assets, 'client', { isAsset: true});
    }
    api.addFiles([
        'dist/ui/trumbowyg.min.css',
        'dist/trumbowyg.min.js',
        'dist/plugins/base64/trumbowyg.base64.min.js',
        'dist/plugins/colors/trumbowyg.colors.min.js',
        'dist/plugins/noembed/trumbowyg.noembed.min.js',
        'dist/plugins/pasteimage/trumbowyg.pasteimage.min.js',
        'dist/plugins/preformatted/trumbowyg.preformatted.min.js'
    ], 'client');
});