
var DateFormatter = {

    getShortTime: function(d){
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var amOrPM = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        var shortTime = hours + ':' + minutes + ' ' + amOrPM;
        return shortTime;
    },

    getLongTime: function(d){
         var hours = d.getHours();
        var minutes = d.getMinutes();
        var amOrPM = hours >= 12 ? "PM" : "AM";
        var seconds = d.getSeconds();
        hours = hours % 12;
        hours = hours ? hours : 12;
        var longTime = hours + ':' + minutes + ':' + seconds + ' ' + amOrPM;
        return longTime;
    },

    getShortDate: function(d){
        var months = d.getMonth();
        var days = d.getDate();
        var year = d.getFullYear();
        months++;
        var shortDate = months + '/' + days + '/' + year;
        return shortDate;
    },

    getLongDate: function(d){
        var months = d.getMonth();
        var monthNameArray = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthName = monthNameArray[months];
        var days = d.getDate();
        var year = d.getFullYear();
        var longDate = monthName + ' ' + days + ', ' + year;
        return longDate;
    },

    getShortDateTime: function(d){
        var shortDateTime = this.getShortDate(d) + ' ' + this.getShortTime(d);
        return shortDateTime;
    },

    getLongDateTime: function(d) {
        var longDateTime = this.getLongDate(d) + ' ' + this.getShortTime(d);
        return longDateTime;
    },

    getExtendedDateTime: function(d) {
        var weekday = d.getDay();
        var weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var weekdayActual = weekdayArray[weekday];
        var extendedDateTime = weekdayActual + ', ' + this.getLongDateTime(d);
        return extendedDateTime;
    }


    };
/*
    var x = new Date("2004/03/04 16:11:17");
    console.log(DateFormatter.getShortTime(x));
    console.log(DateFormatter.getLongTime(x));
    console.log(DateFormatter.getShortDate(x));
    console.log(DateFormatter.getLongDate(x));
    console.log(DateFormatter.getShortDateTime(x));
    console.log(DateFormatter.getLongDateTime(x));
    console.log(DateFormatter.getExtendedDateTime(x));
*/
    // var d = new Date("October 13, 2014 11:13:00");
    // 11:13 AM
    // 11:13:0 AM
    // 10/14/2014
    // October 13, 2014
    // 10/14/2014 11:13 AM
    // October 13, 2014 11:13 AM
    // Monday, October 13, 2014 11:13 AM
