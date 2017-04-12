$(function() {
    $("#myCalendar-1").ionCalendar({
        years: "80",                    // years diapason
        maxDate: "05.03.2016",
        format: "DD.MM.YYYY",           // date format
        onClick: function(date){        // click on day returns date
            $("#results").html("Date: " + date);
        }
    });

    $("#myDatePicker-2").ionDatePicker({
        years: "80",                    // years diapason
        maxDate: "05.03.2016",
        format: "DD.MM.YYYY",           // date format
        onClick: function(date){        // click on day returns date
            $("#results").html("Date: " + date);
        }
    });
});