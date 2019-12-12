<style>
.head_item {
    text-align: center;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    background-color: #fff;
}
.grids_icon i {
    font-size: 78px !important;
}
.logo_icon {
    line-height: 30px;
    color: #666;
}
.logo_icon > i > div {
    width: 2em;
    height: 2em;
    margin-right: 1rem;
}
</style>
<template>
    <div>
        <van-row>
            <van-col
                class="head_item"
                span="6"
                v-for="value in headData.brand"
                :key="value.brand_id"
            >
                <van-icon :name="value.image_url" size="1.2rem" />
                <span>{{value.brand_name}}</span>
            </van-col>
        </van-row>
        <van-grid :column-num="3" :border="false">
            <van-grid-item
                class="grids_icon"
                v-for="value in headData.series"
                :key="value.series_id"
                :icon="value.cover_image"
                :text="value.series_name"
            />
        </van-grid>
        <van-index-bar>
            <div v-for="(item,i) in dataList" :key="i">
                <van-index-anchor v-if="item.type=='1000'" :index="item.info.pinyin"></van-index-anchor>
                <van-cell
                    v-else
                    class="logo_icon"
                    :title="item.info.brand_name"
                    :icon="item.info.image_url"
                />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import {
    Row,
    Col,
    IndexBar,
    IndexAnchor,
    Cell,
    Grid,
    GridItem,
    Icon
} from "vant";

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [IndexBar.name]: IndexBar,
        [IndexAnchor.name]: IndexAnchor,
        [Cell.name]: Cell,
        [Grid.name]: Grid,
        [Icon.name]: Icon,
        [GridItem.name]: GridItem
    },
    data() {
        return {
            headData: {
                brand: []
            },
            dataList: []
        };
    },
    created() {
        let that = this;
        this.$http
            .get("/api/motor/brand/m/v1/brand/?device_id=0")
            .then(function(response) {
                that.headData = response.data.data[0].info;
                that.dataList = response.data.data.splice(
                    3,
                    response.data.data.length - 1
                );
                console.log(that.dataList);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        listHandle: (list = []) => {
            list = JSON.parse(JSON.stringify(list));
            let dataList = list.splice(3, list.length - 1);
            let tempList = [];
            for (let i = 0; i < dataList.length; i++) {
                if (dataList[i].type == "1000") {
                    tempList[dataList[i].info.pinyin] = dataList[i];
                    tempList[dataList[i].info.pinyin].info["children"] = [];
                } else {
                    tempList[dataList[i].info.pinyin].info["children"].push(
                        dataList[i]
                    );
                }
            }
            console.log(tempList);
            return tempList;
        }
    }
};
</script>