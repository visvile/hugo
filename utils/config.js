/**
 * Created by zhanghao on 17/8/4.
 */
var app = getApp();
class Config {
	constructor () {}
}
Config.restUrl = app.globalData.ip_address + '/index.php/client';

export { Config };