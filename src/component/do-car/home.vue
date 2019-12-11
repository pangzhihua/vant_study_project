<style>
.aladdin-article {
    display: block;
    color: #333;
    padding: 13px 15px;
    position: relative;
    overflow: hidden;
    display: flex;
}
.aladdin-article:after {
    position: absolute;
    left: 15px;
    right: 15px;
    content: "";
    height: 1px;
    bottom: 0;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    bottom: -1px;
    border-bottom: 1px solid #e6e6e6;
}
.article-title {
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.article-image-more {
    position: relative;
    margin: 8px 0 0;
    padding: 0;
    display: flex;
    list-style: none;
}
.article-image-more .image-item {
    position: relative;
    width: 100%;
    padding-bottom: 67.5%;
}
.article-image-more li {
    flex: 1;
    margin-right: 2px;
    overflow: hidden;
}
.article-image-more img {
    position: absolute;
    width: 100%;
    background-color: #e8e8e8;
    min-height: 100%;
}
.section {
    background-color: #fff;
}
.aladdin-article .article-footer {
    overflow: hidden;
    margin-top: 8px;
    text-overflow: ellipsis;
}
.section-info {
    overflow: hidden;
    font-size: 12px;
    color: #999;
    white-space: nowrap;
}
.section-info span {
    margin-right: 5px;
    line-height: 16px;
}
.section-title {
    line-height: 1.3em;
    font-size: 16px;
    color: #333;
    font-size: 19px;
    margin: 0;
}
.aladdin-article .footer-tag {
    font-size: 12px;
    color: #ffcb00;
    color: var(--thirdly-color, #ffcb00);
    font-weight: 700;
    margin-right: 3px;
}
.aladdin-article .article-image-middle {
    overflow: hidden;
    position: relative;
    height: 0;
    width: 33.333%;
    padding-bottom: 21.5%;
    background-color: #e8e8e8;
}
.aladdin-article.middle-mode .article-title {
    padding-right: 8px;
}
.aladdin-article img {
    position: absolute;
    width: 100%;
    background-color: #e8e8e8;
    min-height: 100%;
}
.aladdin-article .corner,
.aladdin-article .corner.duration {
    z-index: 9;
    position: absolute;
    right: 4px;
    bottom: 4px;
    border-radius: 10px;
    padding: 0 6px;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: hsla(0, 0%, 100%, 0.9);
    background-color: rgba(0, 0, 0, 0.5);
}
.aladdin-article .article-image-large {
    margin-top: 8px;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
}
</style>
<template>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="section" v-for="item in list" :key="item.unique_id">
            <a
                class="aladdin-article"
                v-bind:class="{ 'middle-mode': item.info.image_type==2 }"
                href="javascript:;"
            >
                <div class="article-title">
                    <p class="section-title">{{item.info.title}}</p>
                    <ul v-if="item.info.image_type==3" class="article-image-more">
                        <li v-for="imageItem in item.info.image_list" :key="imageItem.url">
                            <div class="image-item">
                                <img :src="imageItem.url" />
                            </div>
                        </li>
                    </ul>
                    <div v-if="item.info.image_type==4" class="article-image-large">
                        <img
                            :src="item.info.image_list[0].url"
                        />
                        <span class="corner video"></span>
                        <span class="corner duration">12:12</span>
                    </div>
                    <div class="section-info article-footer">
                        <span>{{item.info.source}}</span>
                        <span>{{item.info.comment_count}}评论</span>
                        <span>25分钟前</span>
                        <span>
                            <i class="footer-tag">#</i>
                            <!-- react-text: 94 -->
                            {{item.info.auto_label_config?item.info.auto_label_config["name"]:""}}
                            <!-- /react-text -->
                        </span>
                    </div>
                </div>
                <div v-if="item.info.image_type==2" class="article-image-middle">
                    <img :src="item.info.image_list[0].url" />
                    <span class="corner video">
                        <i class="video"></i>
                        <!-- react-text: 73 -->
                        07:17
                        <!-- /react-text -->
                    </span>
                </div>
            </a>
        </div>
    </van-list>
</template>
<script>
import { List, Cell } from "vant";
export default {
    components: {
        [List.name]: List,
        [Cell.name]: Cell
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false
        };
    },
    mounted() {
        this.$http
            .get(
                "/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=0&web_id=6763512958745986568&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from="
            )
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        onLoad() {
            let that = this;
            this.$http
                .get(
                    "/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=0&web_id=6763512958745986568&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from="
                )
                .then(function(response) {
                    console.log(response.data);
                    response.data.data.forEach(v => {
                        that.list.push(v);
                    });
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
            // // 异步更新数据
            // setTimeout(() => {
            //     for (let i = 0; i < 5; i++) {
            //         this.list.push(this.list.length + 1);
            //     }
            //     // 加载状态结束
            //     this.loading = false;

            //     // 数据全部加载完成
            //     if (this.list.length >= 40) {
            //         this.finished = true;
            //     }
            // }, 1000);
        }
    }
};
</script>