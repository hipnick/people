import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';
import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'app-appointment-weekly',
    templateUrl: './appointment-weekly.component.html',
    styleUrls: ['./appointment-weekly.component.less']
})
export class AppointmentWeeklyComponent extends BaseComponent {

    public selectedWeek;
    public selectedDay;
    public selectedTime;
    public weeks;

    modelChange() {
        var data = this.model;
        //$scope.calendar.selectedWeek = undefined;
        //$scope.calendar.selectedDay = undefined;
        //$scope.calendar.selectedTime = undefined;

        if (data) {
            //var groupBy = $filter('groupBy');

            var current = moment().startOf('week');
            var end = moment(data[data.length - 1].start).endOf('week');
            var week = moment(current).week() - 1;


            var data = this.groupBy(data, (obj) => {
                return moment(obj.start).week();
            });

            for (var c in data) {
                data[c] = this.groupBy(data[c], (obj) => {
                    return moment(obj.start).date();
                });
            }


            var weeks = [];
            while (current <= end) {
                var day = moment(current).date();

                if (week != moment(current).week()) {
                    week = moment(current).week();
                    weeks.push({
                        number: week,
                        index: weeks.length,
                        displayName: current.format('[KW] w [(]DD.MM.YYYY - ') + moment(current).endOf('week').format('DD.MM.YYYY[)]'),
                        days: []
                    });
                }

                var days = weeks[weeks.length - 1].days;
                if (this.isCellPhone() && data[week][day] || !this.isCellPhone()) {
                    days.push({
                        day: current.format('dddd'),
                        date: current.isSame(moment(), 'day') ? 'Heute' : current.format('DD.MM.YYYY'),
                        times: data[week] && data[week][day] ? data[week][day].map((date) => {
                            date.display = moment(date.start).format('H:mm [Uhr]')
                            date.dateTime = moment(date.start)
                            return date;
                        }) : []
                    });
                }

                if (!this.isCellPhone()) {
                    var max = Math.max.apply(null, days.map((val) => {
                        return val.times ? val.times.length : 0;
                    }));
                    max = Math.max(max, 6);

                    if (max > 0) {
                        days.forEach((val) => {
                            for (var i = val.times.length; i < max; i++) {
                                val.times.push(null);
                            }
                        });
                    }
                }


                current.add(1, 'days');
            }

            this.weeks = weeks;
            if (!this.isCellPhone()) {
                this.selectedWeek = weeks[0];
            }
        }
    }

    isCellPhone() {
        return /(Android.*Mobile|iPhone|Windows Phone)/i.test(navigator.userAgent);
    }

    groupBy(ar: any[], callback) {
        return _.groupBy(ar, callback);
    }


    selectWeek(week) {
        this.selectedWeek = week;
    }

    selectDay(day) {
        this.selectedDay = day;
    }

    selectTime(time) {
        if (time) {
            this.selectedTime = time;
            this.dataStore.trigger(this.key, 'selected', time);
        }
    }

    back() {
        if (this.selectedTime) {
            this.selectedTime = null;
        }
        else if (this.selectedDay) {
            this.selectedDay = null;
        }
        else if (this.selectedWeek) {
            this.selectedWeek = null;
        }
    }

}
