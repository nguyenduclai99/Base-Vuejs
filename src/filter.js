import Vue from 'vue'
import { customDate } from './utils/ultis'

Vue.filter('customDate', function (miliseconds,formatString, is) {
    return customDate(miliseconds, formatString, is)
})