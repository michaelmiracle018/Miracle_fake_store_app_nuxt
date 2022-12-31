<template>
<div class="main_container no-user" >
    <div class="main_content">
        <div>
            <h2 v-if="info.welcomeScreen">{{ info.title }}</h2>
            <h2 v-else>{{ info.title }}</h2>
            <p v-if="info.welcomeScreen">{{ info.post }}</p>
            <p v-else class="content-preview">{{ info.checkout }}</p>
            <router-link v-if="info.welcomeScreen" to="#" class="link link-light">
                Login
            </router-link>
            <router-link v-else to="#" class="link">
                View The Post

            </router-link>
        </div>
    </div>
    <div class="main_photo">
        <img :src="require(`../assets/boutiquePhotos/${info.photo}.jpg`)"  v-if="info.welcomeScreen" />
        <img :src="require(`../assets/boutiquePhotos/${info.photo}.jpg`)" v-else  alt="" />
    </div>
</div>
</template>

<script>
// import Arrow from "~/assets/icons/arrow-right-light.svg";
export default {
    name: "BlogPost",
    components: {

    },
    props: ["info"],
    computed: {
		
	}
};
</script>

<style lang="scss" scoped>

.main_container {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media screen and (min-width: 700px) {
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }

    .main_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 4;
        order: 2;

        a{
            text-decoration: none;
            color: #000000;
        }

        @media screen and (min-width: 700px) {
            order: 1;
        }

        @media screen and (min-width: 700px) {
            flex: 3;
        }
        div {
            max-width: 375px;
            padding: 72px 24px;
            @media screen and (min-width: 700px) {
                padding: 0 24px;
            }
            h2 {
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 24px;
                @media screen and (min-width: 700px) {
                    font-size: 40px;
                }
            }
            p {
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }
            .content-preview {
                font-size: 13px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 32px;
                border-bottom: 1px solid transparent;
                transition: .5s ease-in all;

                &:hover {
                    border-bottom-color: #303030;
                }
            }
            .link-light {
                color: #fff;
                &:hover {
                    border-bottom-color: #fff;
                }
            }
        }
    }
    .main_photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0,  0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        @media screen and (min-width: 700px) {
            order: 2;
        }
        @media screen and (min-width: 800px) {
            flex: 4;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &:nth-child(even) {
        .main_content {
            order:2 ;
        }
        .main_photo {
            order: 1;
        }
    }
}

.no-user:first-child {
    .main_content {
        background-color: #303030;
        color: #fff;
    }

}
</style>
