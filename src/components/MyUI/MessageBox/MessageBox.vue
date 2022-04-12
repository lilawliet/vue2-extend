<template>
    <div>
        <div :class="['message-box', type]">
            <div class="inner">
                <header class="header">
                    <h1 class="title">{{ title }}</h1>
                    <span class="close-btn" @click="hideMessageBox">x</span>
                </header>
                <div class="content">{{ content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessageBox',
        props: {
            title: {
                type: String,
                default: 'this is title'
            },
            content: {
                type: String,
                default: 'this is content'
            },
            type: {
                type: String,
                default: 'primary',
                validator (value) {
                    return [
                        'primary',
                        'success',
                        'warn',
                        'danger'
                    ].includes(value);
                }

            }
        },
        methods: {
            hideMessageBox() {
                this.$messageBox.hide(() => {
                    console.log('hide')
                });
            }
        },
    }
</script>

<style lang="scss">
    body {
        margin: 0;
    }

    h1 {
        margin: 0;
        font-weight: normal;
    }

    .message-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        
        .inner {
            position: absolute;
            top: 100px;
            left: 50%;
            width: 500px;
            margin-left: -250px;
            background-color: white;
            box-shadow: 1px 3px 5px gray;
            border-radius: 5px;
            overflow: hidden;
            
            .header {
                height: 44px;
                padding: 0 10px;
                line-height: 44px;
                box-sizing: border-box;

                .title {
                    float: left;
                    font-size: 16px;
                }

                .close-btn {
                    float: right;
                    cursor: pointer;
                }
            }

            .content {
                padding: 20px;
                box-sizing: border-box;
            }
        }

        &.primary {
            header {
                background-color: blue;
                color: white;

            }
        }
        
        &.success {
            header {
                background-color: green;
                color: white;

            }
        }

        &.warn {
            header {
                background-color: orange;
                color: white;

            }
        }

        &.danger {
            header {
                background-color: red;
                color: white;

            }
        }
    }




</style>