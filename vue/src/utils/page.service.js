"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageService = (function () {
    function PageService() {
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        // this.pageSizeOpts = [10, 30, 50, 100, 500]
        this.pageSizeOpts = [10, 20, 40, 60, 80];
        this.layout = 'total, sizes, prev, pager, next, jumper';
    }
    /**
     * 获取分页配置信息
     */
    PageService.prototype.getConfig = function () {
        return {
            page: this.pageIndex - 1,
            size: this.pageSize
        };
    };
    /**
     * 更新分页配置信息
     * @param param
     */
    PageService.prototype.update = function (_a) {
        var totalElements = _a.totalElements, totalPages = _a.totalPages;
        this.total = parseInt(totalElements);
        this.totalPage = parseInt(totalPages);
    };
    /**
     * 重置分页数据
     */
    PageService.prototype.reset = function () {
        this.total = 0;
        this.pageIndex = 1;
        this.loading = false;
    };
    return PageService;
}());
exports.PageService = PageService;
