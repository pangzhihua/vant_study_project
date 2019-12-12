<style>
.my_tabs {
    background-color: #fff;
}
.my_tabs .van-tabs__nav {
    justify-content: center;
}
.my_tabs .van-tabs__wrap::after {
    border-top: none;
}
.my_tabs .van-tab {
    flex: none;
}
.my_tabs .van-tabs__line {
    background-color: #ffcb00;
}
.wgt-car-rank .rank-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 8px 14px;
    position: relative;
}
.wgt-car-rank .rank-item:after {
    position: absolute;
    left: 0;
    right: 0;
    content: "";
    height: 1px;
    bottom: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    bottom: -1px;
    border-bottom: 1px solid #e6e6e6;
    left: 192px;
}
.rank-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 34px;
}
.wgt-car-rank .rank-medal-0 {
    width: 32px;
    height: 32px;
    background: url(../../images/one.png) no-repeat 50%;
    background-size: contain;
    color: transparent;
}
.wgt-car-rank .rank-medal-1 {
    width: 32px;
    height: 32px;
    background: url(../../images/two.png) no-repeat 50%;
    background-size: contain;
    color: transparent;
}
.wgt-car-rank .rank-medal-2 {
    width: 32px;
    height: 32px;
    background: url(../../images/three.png) no-repeat 50%;
    background-size: contain;
    color: transparent;
}
.wgt-car-rank .rank-medal {
    font-style: normal;
    font-size: 20px;
    font-weight: 700;
}
.wgt-car-rank .rank-change-wrap {
    margin-top: 2px;
    text-align: center;
    line-height: 16px;
}
.wgt-car-rank .rank-up:before {
    background-image: url(../../images/up.png);
}
.wgt-car-rank .rank-down:before {
    background-image: url(../../images/down.png);
}
.wgt-car-rank .rank-equal:before {
    background-image: url(../../images/equal.png);
}
.wgt-car-rank .rank-change-wrap:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 2px;
    background-size: contain;
    vertical-align: middle;
}
.wgt-car-rank .rank-change {
    font-size: 10px;
    line-height: 14px;
    color: #999;
}
.wgt-car-rank .rank-car-img {
    width: 125px;
    margin: 0 10px;
}
.wgt-car-rank .car-name {
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    color: inherit;
    padding: 0;
    margin: 0;
}
.wgt-car-rank .car-price {
    font-size: 14px;
    color: #ff5f00;
    color: var(--highlight-color, #ff5f00);
    line-height: 20px;
    padding: 0;
    margin: 0;
}
</style>
<template>
    <div>
        <van-tabs class="my_tabs" sticky>
            <!-- <div>12313</div> -->
            <van-tab v-for="value in carHead" :key="value.name" :title="value.name">
                <van-list
                    class="wgt-car-rank"
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <a class="rank-item" v-for="item in list" :key="item.series_id">
                        <div class="rank-info">
                            <i class="rank-medal rank-medal-0">{{item.rank}}</i>
                            <p
                                class="rank-change-wrap"
                                :class="{ 'rank-up': item.last_rank-item.rank>0, 'rank-down': item.last_rank-item.rank<0,'rank-equal':item.last_rank-item.rank==0 }"
                            >
                                <span
                                    class="rank-change"
                                >{{Math.abs(item.last_rank-item.rank)>0?Math.abs(item.last_rank-item.rank)+"名":""}}</span>
                            </p>
                        </div>
                        <img
                            class="rank-car-img"
                            width="125"
                            height="84"
                            :src="item.image"
                            alt=""
                        />
                        <div class="rank-car-info">
                            <p class="car-name">{{item.series_name}}</p>
                            <p class="car-price">{{item.min_price}}-{{item.max_price}}万</p>
                        </div>
                    </a>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tabs, Tab, List, Cell } from "vant";
export default {
    components: {
        [Tabs.name]: Tabs,
        [List.name]: List,
        [Cell.name]: Cell,
        [Tab.name]: Tab
    },
    data() {
        return {
            carHead: [{ name: "轿车" }, { name: "SUV" }, { name: "MPV" }],
            list: [],
            loading: false,
            finished: false,
            offset: 0
        };
    },
    created() {},
    methods: {
        onLoad() {
            let that = this;
            this.$http
                .get(
                    "/api/motor/car_show/v1/get_rank/?rank_type=100&offset=" +
                        this.offset +
                        "&limit=10&city_name=%E5%8C%97%E4%BA%AC"
                )
                .then(function(response) {
                    console.log(response.data);
                    response.data.data.forEach(v => {
                        that.list.push(v);
                    });
                    that.offset++;
                    // 加载状态结束
                    that.loading = false;

                    // 数据全部加载完成
                    if (that.list.length >= 40) {
                        that.finished = true;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>