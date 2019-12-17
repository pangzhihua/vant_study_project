<style>
.circle {
}
.cpt-article7 {
    background-color: #fff;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    position: relative;
}
.cpt-article7:after {
    content: "";
    height: 6px;
    background: #f4f5f6;
}
.cpt-article7 .author-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 14px 14px 10px;
}
.cpt-article7 .author-name {
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
    color: #666;
    margin-bottom: 6px;
}
.cpt-article7 .post-time {
    color: #999;
    font-size: 12px;
}
.author-avatar {
    margin-right: 8px;
}
.cpt-article7 .post-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 14px;
}
.cpt-article7 .post-body {
    margin-bottom: 10px;
}
.cpt-article7 .post-text {
    font-size: 17px;
    color: #333;
    line-height: 24px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.cpt-album .img-list {
    font-size: 0;
    margin-bottom: -4px;
}
.cpt-album .img-list-2 .img-item {
    width: 50%;
}
.cpt-album .img-item {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 4px 4px 0;
}
.cpt-album .img-holder {
    width: 100%;
    overflow: hidden;
    background: #e8e8e8;
}
.cpt-album .img-holder img {
    width: 100%;
}
.cpt-article7 .post-foot {
    height: 30px;
    padding-top: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    position: relative;
}
.post-foot:before {
    position: absolute;
    left: 0;
    right: 0;
    content: "";
    height: 1px;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    top: 0;
    border-top: 1px solid #d6d6d6;
}
.van-info {
    background-color: #666;
    right: -10px;
}
</style>
<template>
    <div class="circle">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <section v-for="(item,i) in dataList" :key="i" class="cpt-article7">
                <div class="author-info">
                    <van-image
                        round
                        class="author-avatar"
                        width="2.5rem"
                        height="2.5rem"
                        src="http://p3.pstatp.com/thumb/719d000f4aeee475bd89"
                        alt="炸天帮麻辣小龙虾"
                    />
                    <!-- <img
                        class="author-avatar"
                        src="http://p3.pstatp.com/thumb/719d000f4aeee475bd89"
                        alt="炸天帮麻辣小龙虾"
                    />-->
                    <div class="author-meta">
                        <h4 class="author-name">炸天帮麻辣小龙虾</h4>
                        <p class="post-time">7分钟前</p>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-body">
                        <p class="post-text">
                            <a href="/motor/m/car_friend/index?series_id=2799" class="post-link">
                                #
                                博瑞车友圈
                                #
                            </a>
                            2020款博瑞ge和别克君威选哪个呢 好纠结啊 价钱都差不多
                        </p>
                        <div class="cpt-album">
                            <ul class="img-list img-list-2">
                                <li class="img-item">
                                    <div class="img-holder">
                                        <img
                                            src="http://p9-tt.byteimg.com/img/tos-cn-i-0000/b1440db614db46cc8d51aaeae2203c8d~cs_400x400.jpeg"
                                        />
                                    </div>
                                </li>
                                <li class="img-item">
                                    <div class="img-holder">
                                        <img
                                            src="http://p6-tt.byteimg.com/img/tos-cn-i-0000/54d6c9ad55e84bbbb8845fdfb99f93b6~cs_400x400.jpeg"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="post-foot">
                    <div class="post-digg">
                        <!-- <i class="digg-icon"></i>
                        18-->
                        <van-icon name="good-job-o" info="20" />
                    </div>
                    <div class="post-comment">
                        <!-- <i class="comment-icon"></i>
                        138-->
                        <van-icon name="comment-o" info="123" />
                    </div>
                </div>
            </section>
        </van-list>
    </div>
</template>

<script>
import { Tabs, Tab, List, Cell, Image, Icon } from "vant";
export default {
    components: {
        [Tabs.name]: Tabs,
        [List.name]: List,
        [Cell.name]: Cell,
        [Image.name]: Image,
        [Icon.name]: Icon,
        [Tab.name]: Tab
    },
    data() {
        return {
            dataList: [],
            loading: false,
            finished: false
        };
    },
    created() {},
    methods: {
        onLoad() {
            let that = this;
            this.$http
                .get(
                    "/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=0&min_behot_time=0&web_id=6763512958745986568&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from="
                )
                .then(function(response) {
                    console.log(response.data.data);
                    console.log(that.dataList);
                    // response.data.data.forEach(v => {
                    //     that.dataList.push(v);
                    // });
                    that.dataList = response.data.data;
                    // 数据全部加载完成
                    if (this.dataList.length >= 40) {
                        this.finished = true;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>