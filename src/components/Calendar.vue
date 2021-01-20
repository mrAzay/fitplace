<template>
  <div class="calendar__wrapper">
    <DatePicker class="calendar" color="orange" />
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'Calendar',
  components: {
    DatePicker
  }
}
</script>

<style lang="scss">
.calendar__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  padding: 1px 0;
  height: 100%;
  overflow: auto;
}

.vc-container {
  margin: auto;
  top: 0;
  left: 0;
  width: 74px;
  height: max-content;

  .vc-arrows-container {
    padding: 0px !important;
    top: -1.5px;

    *:hover {
      background-color: rgba(#eeee, 0.1);
    }
  }

  .vc-title {
    font-size: 19px;
  }

  .vc-day {
    min-height: 26px;

    .vc-highlights {
      overflow: visible;
    }

    .vc-day-content {
      height: 25px;
      width: 25px;
      font-size: 13.5px;

      &:active,
      &:focus {
        background-color: transparent;
      }
    }
  }
}
.vc-weekday {
  display: none;
}
.is-not-in-month {
  display: none !important;
}
.vc-weeks {
  display: flex !important;
  flex-direction: column;
}
.vc-pane {
  min-width: auto !important;
}
.vc-header {
  writing-mode: vertical-lr;
  transform: rotate(180deg) translate(0, -5px);
  padding-bottom: 32px !important;
  padding: 0 !important;
  margin-left: calc(42px / 2);
}

@media (max-width: 991px) {
  .calendar__wrapper {
    z-index: 3;
    display: flex;
    align-items: start;
    position: absolute !important;
    top: 70px !important;

    .vc-arrow {
      z-index: 4;
    }

    .vc-pane {
      display: flex;
      height: 74px;
      justify-content: center;
      align-items: center;
    }

    .vc-header {
      position: static;
      margin-bottom: 0 !important;
      margin-right: 50px;
      margin-left: 0px !important;
    }
  }

  .vc-container .vc-arrows-container {
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
  }

  .vc-weeks {
    flex-direction: row;
    position: static;
  }

  .vc-container {
    width: 100%;
    height: 74px;
    background-color: #fff;
    border-color: transparent;
  }

  .calendar__wrapper {
    height: 74px;
    overflow: visible;
    width: 100%;
    left: 0;
    top: 0;
  }

  .vc-header {
    transform: translate(0, 0px);
    writing-mode: inherit;
    margin-right: 0 !important;
  }

  .vc-container .vc-title {
    font-size: 16.5px;
  }

  .vc-container .vc-day .vc-day-content {
    height: 23.4px;
    width: 23.4px;
    font-size: 13px;
  }
}

@media (max-width: 890px) {
  .vc-container .vc-title {
    font-size: 14px;
  }

  .vc-container .vc-day .vc-day-content {
    height: 21px;
    width: 21px;
    font-size: 11.5px;
  }

  .vc-weeks {
    padding: 3px !important;
  }
}
</style>
