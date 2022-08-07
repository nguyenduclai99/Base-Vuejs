<template>
    
</template>

<script>

import { sendOTPByPhone } from '../api/otp'

export default {
    data() {
        return {
            showDialogObject: false,
            formData: {
                email: '',
                otp: '',
                phoneNumber: ''
            },
            loginLoading: false,
            loadingSendOtp: false,
            showOtpInput: false
        }
    },
    metaInfo: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    mounted() {
    },
    methods: {
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        async login() {
            try {
                let paramsLogin = {
                    email: this.formData.email,
                    otp: this.formData.otp,
                }
                this.loginLoading = true
                await this.$store.dispatch('login', paramsLogin)
                // this.$router.push({name: 'Login'})
                window.location.reload()
                // this.loginLoading = false
            } catch (error) {
                this.loginLoading = false
            }
        }
    }
}
</script>

<style>
.form-login .el-input--prefix .el-input__inner {
    padding-left: 36px;
}

.form-login .el-input__inner {
    /* background: #ECEDF1; */
    height: 48px;
    border: 1px solid #B0B5C1;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9399A9;
    height: 48px;
    padding: 16px;
    padding: 15px 19px;
}
</style>
<style scoped>
span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #383F47;
}
h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 40px;
    text-align: center;
    color: #084388;
    margin-bottom: 40px;
}

button {
    background: #0091FE;
    border-radius: 8px;
    padding: 12px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    border: none
}

button.disabled {
    pointer-events: none;
    background-color: #6c757d;
    opacity: .5;
}


h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
    color: #000000;
    text-align: center;
}
h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #084388;
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #383F47;

}
@media only screen and (max-width: 480px) {
    h3 {
        font-size: 16px;
    }
    h4 {
        font-size: 20px;
    }
}

.mobileNav {
    display: none;
}

@media only screen and (max-width: 480px) {
    .mobileNav {
        display: block;
    }
    .destopNav {
        display: none!important;
    }
}
</style>