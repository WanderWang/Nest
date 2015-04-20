/**
 * Created by wander on 15-4-13.
 */


module nest.user {


    export function init(loginInfo:LoginInfo,callback:Function) {

        var data = {module: "user", action: "init"};
        callRuntime(data, callback);

    }

    /**
     * 是否已登录
     * @param loginInfo
     * @param callback
     */
    export function checkLogin(loginInfo:LoginInfo,callback:Function) {
        var data = {token:null};
        callback(data);
    }

    /**
     * 调用渠道登录接口
     * @param loginInfo
     * @param callback
     */
    export function login(loginInfo:LoginInfo,callback:Function) {

        var data = {module: "user", action: "login"};
        callRuntime(data, callback);

    }


    /**
     *
     * @param callback 返回类型 LoginCallbackInfo
     */
    export function isSupport(callback:Function){
        var data = {module: "user", action: "isSupport"};
        callRuntime(data, callback);
    }


    /**
     * 登录接口传递参数
     *
     */
    export interface LoginInfo {

        /**
         * 登录类型：如 QQ登录，微信支付
         */
        loginType?:string;

    }

    export interface LoginCallbackInfo {

        /**
         * 状态值，0表示成功
         */
        status:string;

        /**
         * 登录方式。
         * 以QQ浏览器为例，返回 ["qq","wx"]
         * 开发者应该主动判断登录方式，如果返回了 null ，则表示没有特殊支付方式，走登录
         */
        loginType:Array<string>

    }


}


module nest.iap {

    /**
     * 支付
     * @param orderInfo
     * @param callback
     */
    export function pay(orderInfo:PayInfo, callback:Function) {

        var data = {module: "iap", action: "pay", "param": orderInfo};
        callRuntime(data, callback);

    }


    export interface PayInfo {

        goodsId:string;

    }

}


module nest.share {

    /**
     * 是否支持分享
     * @param callback
     */
    export function isSupport(callback:Function) {
        var data = {module:"share",action:"isSupport"};
        callRuntime(data, callback);
    }


    /**
     * 分享
     * @param shareInfo
     * @param callback
     */
    export function share(shareInfo:ShareInfo,callback:Function) {

        var data = {module:"share",action:"share","param":shareInfo};
        callRuntime(data, callback);

    }

    /**
     * 分享接口传递参数
     */
    export interface ShareInfo {

        title:string;

        description:string;

        img_title:string;

        img_url:string;

        url:string;

    }
}


module nest.social {


    export function isSupport(callback){
        var data = {module:"share",action:"isSupport"};
        callRuntime(data,callback);
    }

}

module nest {

    export interface NestData {

        module:string;

        action:string;

        data?:Object;


    }

    export function callRuntime(data:NestData, callback) {

        var tag = "nest";
        egret.ExternalInterface.addCallback(tag, function (data) {
            console.log(data);
            var obj = JSON.parse(data);
            callback(obj.data);
        });

        egret.ExternalInterface.call(tag, JSON.stringify(data));
    }


}


