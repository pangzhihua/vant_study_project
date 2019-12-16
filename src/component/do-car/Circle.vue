<style>
.cpt-article7 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    position: relative;
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
</style>
<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <section class="cpt-article7">
                <div class="author-info">
                    <img
                        class="author-avatar"
                        src="http://p3.pstatp.com/thumb/719d000f4aeee475bd89"
                        alt="炸天帮麻辣小龙虾"
                    />
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
                    <button class="post-digg">
                        <i class="digg-icon"></i>
                        18
                    </button>
                    <button class="post-comment">
                        <i class="comment-icon"></i>
                        138
                    </button>
                </div>
            </section>
        </van-list>
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
            list: [],
            loading: false,
            finished: false
        };
    },

    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        }
    }
};
</script>