/**
 * Created by wander on 15-4-13.
 */


module nest.user {

    export function init(callback:Function) {

        var data = {module: "user", action: "init"};
        callRuntime(data, callback);

    }


}


module nest.iap {

    export function pay(orderInfo, callback:Function) {

        var data = {module: "iap", action: "pay", "param": orderInfo};
        callRuntime(data, callback);

    }

}


module nest.share {

    export function isSupport(callback:Function) {
        var data = {module:"share",action:"isSupport"};
        callRuntime(data, callback);
    }

    export function share(shareInfo:ShareInfo,callback:Function) {

        var data = {module:"share",action:"share","param":shareInfo};
        callRuntime(data, callback);

    }

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


