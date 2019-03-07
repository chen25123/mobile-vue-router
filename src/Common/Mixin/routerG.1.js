/**
 * 为了完成移动端 返回事件而写
 * 为vue的路由加入了流程页面的状态管理
 */
export default {
  _initRouter (Router) {
    // console.log(Router.prototype);
    Router.prototype.routerArray = []; // 存储过往的路由信息
    Router.prototype.processArray = []; // 存储流程页的状态
    Router.prototype.isBack = false; // 是否是返回

    // 修改 Router本身的push， 跳转之前做一些判断
    // Router.prototype.lPush = Router.prototype.push;
    let lPush = Router.prototype.push;
    Router.prototype.push = function (location, onComplete, onAbort) {
      let lGoCount = this.havRouterHistory(location)
      if (lGoCount < 0) {
        this.isBack = true
        this.go(lGoCount);
      } else {
        this.isBack = false
        this.routerArray.push(this.history.current)
        lPush.call(this, location, onComplete, onAbort)
      }
    };
    
    // 判断历史记录中是否存在将要跳转的路由，如果有，执行回退操作
    Router.prototype.havRouterHistory = function (location) {
      // debugger
      let lPath = location.path;
      let lName = location.name;
      let lLen = this.routerArray.length;
      for (let i = 0; i < lLen; i++) {
        if (this.routerArray[i].path === lPath || this.routerArray[i].name === lName ) {
          return i - lLen; // 存在则返回应该回退的步数，注意回退的步数是负值
        }
      }
      return 1 // 如果存在则必然小于0，所以这里写返回1代表不存在没有问题
    };

    // 重写 Router 本身的 go， 回退的同时要清空记录中的数据
    let lGo = Router.prototype.go
    Router.prototype.go = function (n) {
      let lLen = 0 - n;
      lLen = this.routerArray.length > lLen ? lLen : this.routerArray.length;
      let lStart = this.routerArray.length - lLen;
      this.routerArray.splice(lStart, lLen);
      lGo.call(this, n);
    };

    // 页面首次打开的时候需要记录
    // Router.prototype.firstEnter = function (location) {
    //   this.routerArray.push(location)
    // };

    // 以下是关于流程的 - 比如注册流程

    // 修改一个流程的状态
    Router.prototype.setProcessStatus = function (groupName, status) {
      this.processArray[groupName] = status
    };

    // 如果流程完毕之后进入指定页面，则从缓存中清理掉所有的流程页  这里有问题，清理掉之后和浏览器本身的记录不符合了，按道理来说是不能清理的
    Router.prototype.clearProcessPage = function (groupName) {
      // let lLen = this.routerArray.length;
      // for (let i = 0; i < lLen; i++) {
      //   if (this.routerArray[i].meta.group && this.routerArray[i].meta.group === groupName) {
      //     this.routerArray.splice(i, 1);
      //     i--;
      //   }
      // }
    }

    // 找到最近的入口页面
    Router.prototype.findInsterPage = function () {
      let lLen = this.routerArray.length;
      for (let i = lLen - 1; i >= 0; i--) {
        if (this.routerArray[i].meta.isStartPage) {
          return i - lLen
        }
      }
      return 1; // 如果存在则必然小于0，所以这里写返回1代表不存在没有问题
    }

    // 如果进入一个流程页，并且该页面的状态已经是完成，则应该回退到最近的流程入口页面，或者 跳转到指定的页面
    Router.prototype.onPageLoad = function (query) {
      // debugger
      if (this.history.current.meta.group) {
        let lNowRouter = this.history.current.meta.group
        let lStatus = this.processArray[lNowRouter]
        if (lStatus) {
          let lRes = this.findInsterPage()
          if (lRes < 0) {
            this.go(lRes)
          }
        }
      }
    };
    
  }
}
