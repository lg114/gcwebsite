<template>
  <div class="profilecontainer">
    <div class="profile">
        <img src="@/assets/WechatIMG40.jpeg" alt="selfie" class="selfie">        
        <div class="info">
            <div class="profilecontent">
                <p>
                    Hello👋🏻,<br> I am gc<br>
                    University Student<br>
                    I am a beginner with a passion for learning and growth.                 
                </p>
            </div>
        </div>        
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
    .profilecontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        position: relative;
        top: 15vh;
        .profile{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            .selfie{
                position: relative;
                top: 1vh;
                z-index: 2;
                width: 10vw;
                height: 10vw;
                box-sizing: border-box;
                border: 5px white solid;
                border-radius: 50%;
                overflow: hidden;
                transform: translatey(0px);
                animation: float 6s ease-in-out infinite;
                box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                img { width: 100%; height: auto; }
            }
            @keyframes float {
                0% {
                    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                    transform: translatey(0px);
                }
                50% {
                    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
                    transform: translatey(-20px);
                }
                100% {
                    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                    transform: translatey(0px);
                }
            }
            .info{
                position: absolute;
                top: 30%;
                z-index: 1;
                width: 15vw;
                height: 350px;
                border-radius: 50px;
                background: #413e3e;
                text-align: center;
                .profilecontent{
                    text-align: center;
                    padding-top: 150px;
                    p{
                        color: #afacac;
                        font-size: larger;
                        line-height: 1.5em;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .profilecontainer {
            display: none;
            width: 0%;
        }
    }
</style>