<template>
  <div class="calendar__wrapper">

    <div class="calendar__top">
      <button v-on:click="decrease">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4243 6.34323L5.12436 16.7446C5.0517 16.8647 5.00915 17.0051 5.00132 17.1508C4.99349 17.2965 5.02067 17.4419 5.07994 17.5712C5.1392 17.7005 5.22828 17.8088 5.33754 17.8844C5.44679 17.96 5.57205 18 5.69975 18H18.2995C18.4273 18.0001 18.5527 17.9602 18.662 17.8847C18.7714 17.8092 18.8605 17.7009 18.9199 17.5716C18.9792 17.4422 19.0065 17.2968 18.9987 17.151C18.9909 17.0053 18.9483 16.8647 18.8756 16.7446L12.5757 6.34323C12.511 6.23726 12.4249 6.15072 12.3247 6.09096C12.2244 6.03121 12.1131 6 12 6C11.8869 6 11.7756 6.03121 11.6753 6.09096C11.5751 6.15072 11.489 6.23726 11.4243 6.34323Z"
            fill="#111111"/>
        </svg>
      </button>
      <div class="calendar__month"> {{ruMonth}}</div>
      <button v-on:click="increase">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5757 17.6568L18.8756 7.25537C18.9483 7.13533 18.9909 6.99486 18.9987 6.84917C19.0065 6.70347 18.9793 6.5581 18.9201 6.4288C18.8608 6.2995 18.7717 6.1912 18.6625 6.11561C18.5532 6.04003 18.428 6.00005 18.3002 6L5.70045 6C5.57269 5.9999 5.44734 6.03978 5.33799 6.1153C5.22863 6.19083 5.13945 6.29912 5.0801 6.42845C5.02076 6.55777 4.99351 6.7032 5.00131 6.84897C5.00911 6.99473 5.05167 7.13528 5.12436 7.25537L11.4243 17.6568C11.489 17.7627 11.5751 17.8493 11.6753 17.909C11.7756 17.9688 11.8869 18 12 18C12.1131 18 12.2244 17.9688 12.3247 17.909C12.4249 17.8493 12.511 17.7627 12.5757 17.6568Z"
            fill="#111111"/>
        </svg>
      </button>
    </div>

    <div class="calendar__days" v-for="(week, index) in calendar()" :key="index">
      <button @click="select" class="calendar__day" v-for="(day, index) in week" :key="index"> {{ day.index }}</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data () {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      dFirstMonth: '1',
      day: ['Mn', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      monthes: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date: new Date()
    }
  },
  computed: {
    dlast () {
      return new Date(this.year, this.month + 1, 0).getDate()
    },
    ruMonth () {
      if (this.monthes[this.month] === 'April') return 'Апрель'
      if (this.monthes[this.month] === 'January') return 'Январь'
      if (this.monthes[this.month] === 'December') return 'Декабрь'
      if (this.monthes[this.month] === 'November') return 'Ноябрь'
      if (this.monthes[this.month] === 'October') return 'Октябрь'
      if (this.monthes[this.month] === 'September') return 'Сентябрь'
      if (this.monthes[this.month] === 'August') return 'Август'
      if (this.monthes[this.month] === 'July') return 'Июль'
      if (this.monthes[this.month] === 'June') return 'Июнь'
      if (this.monthes[this.month] === 'February') return 'Февраль'
      if (this.monthes[this.month] === 'March') return 'Март'
      if (this.monthes[this.month] === 'May') return 'Май'
      return this.monthes[this.month]
    }
  },
  methods: {
    select (event) {
      console.log(event.target.classList.toggle('active'))
    },
    calendar: function () {
      const days = []
      let week = 0
      days[week] = []
      let a
      const dlast = new Date(this.year, this.month + 1, 0).getDate()
      for (let i = 1; i <= dlast; i++) {
        if (new Date(this.year, this.month, i).getDay() !== this.dFirstMonth) {
          a = { index: i }
          days[week].push(a)
        } else {
          week++
          days[week] = []
          a = { index: i }
          days[week].push(a)
        }
      }
      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift('')
        }
      }
      return days
    },
    decrease () {
      this.month--
      if (this.month < 0) {
        this.month = 12
        this.month--
        this.year--
      }
    },
    increase () {
      this.month++
      if (this.month > 11) {
        this.month = -1
        this.month++
        this.year++
      }
    }
  }
}
</script>

<style lang="scss">
  .calendar {
    &__wrapper {
      width: 74px;
      background: #FFFFFF;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__month {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      padding: 16px 0;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }

    &__top {
      padding-top: 32px;
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__days {
      overflow: auto;
      width: 100%;
    }

    &__day {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;

      & + & {
        margin-top: 10px;
      }

      &.active {
        background: #FFF000;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      }
    }
  }
</style>
