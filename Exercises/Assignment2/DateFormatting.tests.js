

var dateTest1 = new Date("2010/08/17 12:09:36");
var dateTest2 = new Date("2004/03/04 16:11:17");



  function compareDateShortTest1(d) {
    if ("8/17/2010" === DateFormatter.getShortDate(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareDateShortTest2(d) {
    if ("3/5/2004" === DateFormatter.getShortDate(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareShortTimeTest1(d) {
    if ("12:9 PM" === DateFormatter.getShortTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareShortTimeTest2(d) {
    if ("4:11 PM" === DateFormatter.getShortTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareLongTimeTest1(d) {
    if ("12:9:36 PM" === DateFormatter.getLongTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareLongTimeTest2(d) {
    if ("4:11:17 PM" === DateFormatter.getLongTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareDateLongTest1(d) {
    if ("August 17, 2010" === DateFormatter.getLongDate(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareDateLongTest2(d) {
    if ("March 4, 2004" === DateFormatter.getLongDate(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareShortDateTimeTest1(d) {
    if ("8/17/2010 12:9 PM" === DateFormatter.getShortDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareShortDateTimeTest2(d) {
    if ("3/5/2004 4:11 PM" === DateFormatter.getShortDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareLongDateTimeTest1(d) {
    if ("August 17, 2010 12:9 PM" === DateFormatter.getLongDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareLongDateTimeTest2(d) {
    if ("March 4, 2004 4:11 PM" === DateFormatter.getLongDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareExtendedDateTimeTest1(d) {
    if ("Tuesday, August 17, 2010 12:9 PM" === DateFormatter.getExtendedDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }

  function compareExtendedDateTimeTest2(d) {
    if ("Thursday, March 4, 2004 4:11 PM" === DateFormatter.getExtendedDateTime(d)) {
      console.log("Success");
    } else {
      throw "Fail";
    }
  }
