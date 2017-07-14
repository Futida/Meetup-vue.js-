<template>
    <div>
        <li>
            {{ d.name }}
            <ul v-show="open" v-if="isNested" class="item">
                <app-item
                        v-for="d in d.children"
                        :d="d"
                >
                </app-item>
            </ul>
        </li>
    </div>
</template>

<script>


    export default{
        name: 'app-item',
        props: ['d'],
        data(){
            return {
                open: true
            }
        },
        computed: {
            isNested(){
                return this.d.children
                    && this.d.children.length
            }
        }

    }
</script>

<style>

    .item {
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }

    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }

</style>