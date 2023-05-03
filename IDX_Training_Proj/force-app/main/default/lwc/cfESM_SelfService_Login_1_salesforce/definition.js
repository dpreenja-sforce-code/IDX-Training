let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"{\n\"username\": \"\",\n\"password\": \"\",\n\"isUsernameFieldBlank\": true,\n\"isPasswordFieldBlank\": true,\n\"rememberMe\": false\n}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"isTrackingDisabled":true,"key":"1654091434707-5710m2c2e","label":"Update Password","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"password","fieldValue":"{action.password}"}],"id":"flex-action-1654177069833","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"ESM_SelfService_Login","displayLabel":"updateselfservicepassword","element":"action","eventLabel":"custom event","eventname":"updateselfservicepassword","eventtype":"event","key":"event-0","recordIndex":"0","showSpinner":"true"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"isTrackingDisabled":true,"key":"1654175940195-r3q1xkphj","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"username","fieldValue":"{action.ESM_Self_Service_User_Name}"}],"id":"flex-action-1657113537708","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"ESM_SelfService_Login","displayLabel":"esm_selfservice_user_name","element":"action","eventLabel":"custom event","eventname":"esm_selfservice_user_name","eventtype":"event","key":"event-1","recordIndex":"0","showSpinner":"true"}],"isFlex":true,"lwc":{"DeveloperName":"cfESM_SelfService_Login_1_salesforce","Id":"0RbDp000000qevO0AM","ManageableState":"unmanaged","MasterLabel":"cfESM_SelfService_Login_1_salesforce","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[{"isApi":true,"name":"ForgotPasswordPageName","val":""}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","propertyObj":{"fieldBinding":"{username}","label":"{Label.CMEXSelfServiceUsername}","required":true},"record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-top_xx-small slds-m-bottom_x-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"},{"label":"bottom:x-large","size":"x-large","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-top_xx-small slds-m-bottom_x-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"},{"label":"bottom:x-large","size":"x-large","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-1","name":"Custom LWC","property":{"customlwcname":"b2bSelfServicePasswordInput","eventName":"updateselfservicepassword","isRequired":"true","labelName":"Password"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-4-Checkbox-0","key":"element_element_block_3_0_baseInputElement_0_0","name":"Checkbox","parentElementKey":"element_block_3_0","property":{"card":"{card}","propertyObj":{"checked":false,"fieldBinding":"{rememberMe}","label":"Remember me"},"record":"{record}","type":"checkbox"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-bottom_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-bottom_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         color:var(--lwc-colorTextLabel);\nfont-family:var(--lwc-fontFamily);\n","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-4","key":"element_element_block_3_0_action_1_0","name":"Action","parentElementKey":"element_block_3_0","property":{"actionList":[{"actionIndex":0,"draggable":false,"isOpen":true,"isTrackingDisabled":true,"key":"1653641010179-ijnyd6h40","label":"Action","stateAction":{"Community Named Page":{"targetName":"Forgot_Password"},"id":"flex-action-1657719053702","openUrlIn":"Current Window","targetType":"Community Named Page","type":"Custom"}}],"card":"{card}","displayAsButton":false,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"Forgot Password?","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"textAlign":"right"}}},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"textAlign":"right"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n        color:#447BED; ","text":{"align":"","color":"#447BED"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"textAlign":"right"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n        color:#447BED; ","text":{"align":"","color":"#447BED"}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-5","name":"Custom LWC","property":{"customlwcname":"b2bSelfServiceClientDetails","eventName":"esm_selfservice_user_name","getKeys":"ESM_Self_Service_User_Name"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-6","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-color_error%22%3E%7BinvalidInput%7D&nbsp;%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"},{"children":[{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-6-Block-1","key":"element_element_element_block_6_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_6_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"9","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"action","elementLabel":"Block-5-Action-1","key":"element_element_element_block_6_0_block_0_0_action_1_0","name":"Action","parentElementKey":"element_element_block_6_0_block_0_0","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":false,"isTrackingDisabled":false,"key":"1654178458413-z8cvbgsup","label":"Validate Input","stateAction":{"Web Page":{"targetName":"/apex"},"actionConditions":{"group":[{"field":"username","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"undefined"},{"field":"username","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":""},{"field":"password","hasMergeField":false,"id":"state-new-condition-2","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"},{"field":"password","hasMergeField":false,"id":"state-new-condition-34","logicalOperator":"||","operator":"==","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"invalidInput","fieldValue":"Please enter valid username and password"}],"id":"flex-action-1654246964202","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}},{"actionIndex":1,"draggable":true,"isOpen":false,"key":"1653564120237-3i3xsvapn","label":"Login","stateAction":{"Web Page":{"targetName":"/apex"},"actionConditions":{"group":[],"id":"state-condition-object","isParent":true},"id":"flex-action-1658463525720","message":"{\"type\":\"ApexRemote\",\"value\":{\"dsDelay\":\"\",\"remoteClass\":\"B2BCmexSiteAuthController\",\"remoteMethod\":\"login\",\"vlocityAsync\":false,\"inputMap\":{\"username\":\"{username}\",\"password\":\"{password}\",\"startUrl\":\"/{SiteName}\"},\"jsonMap\":\"{\\\"Session.username\\\":\\\"{Session.username}\\\",\\\"Session.password\\\":\\\"{Session.password}\\\",\\\"Session.startUrl\\\":\\\"{Session.startUrl}\\\",\\\"password\\\":\\\"{password}\\\",\\\"username\\\":\\\"{username}\\\",\\\"startUrl\\\":\\\"{startUrl}\\\",\\\"SiteName\\\":\\\"{SiteName}\\\"}\"},\"orderBy\":{\"name\":\"\",\"isReverse\":\"\"},\"contextVariables\":[{\"name\":\"Session.username\",\"val\":\"\",\"id\":1},{\"name\":\"Session.password\",\"val\":\"\",\"id\":3},{\"name\":\"Session.startUrl\",\"val\":\"\",\"id\":5},{\"name\":\"password\",\"val\":\"\",\"id\":6},{\"name\":\"username\",\"val\":\"\",\"id\":7},{\"name\":\"startUrl\",\"val\":\"\",\"id\":8},{\"name\":\"SiteName\",\"val\":\"\",\"id\":6}]}","openUrlIn":"Current Window","responseNode":"loginResponse","targetType":"Web Page","type":"DataAction"}},{"actionIndex":2,"card":"{card}","draggable":true,"isOpen":true,"key":"1654156175005-yu7lqcnt9","label":"Remember Me","stateAction":{"actionConditions":{"group":[{"field":"rememberMe","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"b2b_selfservice_communicate_client_data","extraParams":{"ESM_Self_Service_User_Name":"{username}","action":"SET"},"hasExtraParams":true,"id":"flex-action-1659537148630","message":"data","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}},{"actionIndex":5,"card":"{card}","draggable":true,"isOpen":true,"key":"1659536424674-a1sr2cz3f","label":"ResetLocalStorage","stateAction":{"displayName":"Action","eventName":"b2b_selfservice_communicate_client_data","extraParams":{"action":"ClearLocalStorage","keys":"ESM_SELF_SERVICE_SELECTED_ASSET_IDS,ESM_SELF_SERVICE_PRICE_LIST,ESM_SELF_SERVICE_SELECTED_ASSET_REF_IDS,esm_asset_viewer_selected_assets,"},"hasExtraParams":true,"id":"flex-action-1659536617552","message":"data","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}},{"actionIndex":3,"card":"{card}","draggable":true,"isOpen":false,"key":"1657183365102-pi20zsulf","label":"Login successfully ","stateAction":{"Web Page":{"targetName":" {loginResponse.redirectUrl} "},"actionConditions":{"group":[{"field":"loginResponse","hasMergeField":false,"id":"state-new-condition-1","operator":"!=","type":"custom","value":""},{"field":"loginResponse","hasMergeField":false,"id":"state-new-condition-48","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"loginResponse.msg","hasMergeField":false,"id":"state-new-condition-57","logicalOperator":"&&","operator":"==","type":"custom","value":"Login Succesful"}],"id":"state-condition-object","isParent":true},"displayName":"Action","id":"flex-action-1657258907010","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"}},{"actionIndex":4,"card":"{card}","draggable":true,"isOpen":false,"key":"1654153369402-21aunhz9m","label":"Login Fail","stateAction":{"Web Page":{"targetName":"/apex"},"actionConditions":{"group":[{"field":"loginResponse","hasMergeField":false,"id":"state-new-condition-49","operator":"!=","type":"custom","value":""},{"field":"loginResponse","hasMergeField":false,"id":"state-new-condition-10","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"loginResponse.msg","hasMergeField":false,"id":"state-new-condition-20","logicalOperator":"&&","operator":"!=","type":"custom","value":"Login Succesful"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"invalidInput","fieldValue":"Please enter valid username and password"}],"id":"flex-action-1657258323534","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"Login","record":"{record}","showSpinner":"true","stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontFamily":"Helvetica","fontSize":"14px","textAlign":"center"}}},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontFamily":"Helvetica","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\nborder-radius: 105px;\ndisplay:flex;\nalign-items: center;\njustify-content:center;\npadding-top :.3rem;\npadding-top :.2rem;","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\nborder-radius: 105px;\ndisplay:flex;\nalign-items: center;\njustify-content:center;\npadding-top :.3rem;\npadding-top :.2rem;","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontFamily":"Helvetica","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\nborder-radius: 105px;\ndisplay:flex;\nalign-items: center;\njustify-content:center;\npadding-top :.3rem;\npadding-top :.2rem;","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\nborder-radius: 105px;\ndisplay:flex;\nalign-items: center;\njustify-content:center;\npadding-top :.3rem;\npadding-top :.2rem;","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-6","key":"element_element_block_6_0_block_0_0","name":"Block","parentElementKey":"element_block_6_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-7","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:10rem\n","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:10rem\n","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:10rem\n","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:10rem\n","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"ESM_SelfService_Login","Id":"a5aDp000000t6NwAA2","vlocity_cmt__GlobalKey__c":"ESM_SelfService_Login/salesforce/1/1653462491075","vlocity_cmt__IsChildCard__c":true};
  export default definition