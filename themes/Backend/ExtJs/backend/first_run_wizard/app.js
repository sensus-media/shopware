//{block name="backend/first_run_wizard/app"}
Ext.define('Shopware.apps.FirstRunWizard', {
    name:'Shopware.apps.FirstRunWizard',
    extend:'Enlight.app.SubApplication',
    bulkLoad:true,
    loadPath:'{url action=load}',
    views:[
        'main.Window',
        'main.Home',
        'main.Localization',
        'main.LocalizationSwitcher',
        'main.Config',
        'main.DemoData',
        'main.Recommendation',
        'main.ShopwareId',
        'main.PremiumListing'
    ],

    stores:[
        'RecommendedPlugin',
        'LicensePlugin',
        'IntegratedPlugin',
        'DemoPlugin',
        'LocalizationPlugin',
        'Localization',
        'Locale'
    ],

    models: [
        'Localization',
        'Locale'
    ],

    controllers: [
        'Main',
        'LicensePluginHandler',
        'Config',
        'ShopwareId',
        'Localization',
        'Home'
    ],

    launch: function() {
        return this.getController('Main').mainWindow;
    }
});
//{/block}
