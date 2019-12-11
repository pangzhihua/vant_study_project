<template>
    <div>
        <van-index-bar>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="C" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="D" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="E" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </van-index-bar>
    </div>
</template>

<script>
import { IndexBar, IndexAnchor, Cell } from "vant";

export default {
    components: {
        [IndexBar.name]: IndexBar,
        [IndexAnchor.name]: IndexAnchor,
        [Cell.name]: Cell
    }
};
</script>