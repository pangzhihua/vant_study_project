<style scoped>
.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu i {
    margin-top: 0.5rem;
}
p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
}
</style>
<template>
    <div>
        <van-notice-bar text="‘小庞有赞’，分享「汽车」的新鲜事，已为你推荐8条新内容" left-icon="volume-o" />
        <van-row>
            <van-col span="24">
                <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
            </van-col>
            <!-- <van-col span="4" class="menu">
                <van-icon name="wap-nav" size="2rem" color="#c3c3c3" />
            </van-col>-->
        </van-row>

        <van-tabs v-model="active" :sticky="true">
            <van-tab title="首页">
                <car-home></car-home>
            </van-tab>
            <van-tab title="选车">
                <check-car></check-car>
            </van-tab>
            <van-tab title="车友圈">
                <my-circle></my-circle>
            </van-tab>
            <van-tab title="排行榜">
                <rank></rank>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs, Search, Row, Col, Icon, Image, NoticeBar } from "vant";
import CarHome from "@/component/do-car/home";
import CheckCar from "@/component/do-car/checkCar";
import Circle from "@/component/do-car/Circle";
import Rank from "@/component/do-car/Rank";
const imageCar = require("../../images/icon/car.png");
export default {
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Search.name]: Search,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Image.name]: Image,
        [NoticeBar.name]: NoticeBar,
        CarHome,
        CheckCar,
        Rank,
        "my-circle": Circle
    },
    data() {
        return {
            active: 2,
            searchValue: "",
            imageCar: imageCar
        };
    }
};
</script>