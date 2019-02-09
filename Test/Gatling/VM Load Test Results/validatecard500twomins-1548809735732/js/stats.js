var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120000",
        "ok": "1585",
        "ko": "118415"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "80",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59909",
        "ok": "59909",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "548",
        "ok": "41474",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4847",
        "ok": "9031",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "42022",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "47999",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "54744",
        "ko": "0"
    },
    "percentiles4": {
        "total": "35856",
        "ok": "58671",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1581,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 118415,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "736.196",
        "ok": "9.724",
        "ko": "726.472"
    }
},
contents: {
"req_monolith-paymen-39ec7": {
        type: "REQUEST",
        name: "Monolith Payment Validate Card",
path: "Monolith Payment Validate Card",
pathFormatted: "req_monolith-paymen-39ec7",
stats: {
    "name": "Monolith Payment Validate Card",
    "numberOfRequests": {
        "total": "60000",
        "ok": "797",
        "ko": "59203"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "80",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59648",
        "ok": "59648",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "539",
        "ok": "40583",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4778",
        "ok": "9663",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "41178",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "47153",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "54701",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34255",
        "ok": "58566",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 793,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 59203,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "368.098",
        "ok": "4.89",
        "ko": "363.209"
    }
}
    },"req_microservice-pa-91118": {
        type: "REQUEST",
        name: "Microservice Payment Validate Card",
path: "Microservice Payment Validate Card",
pathFormatted: "req_microservice-pa-91118",
stats: {
    "name": "Microservice Payment Validate Card",
    "numberOfRequests": {
        "total": "60000",
        "ok": "788",
        "ko": "59212"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "24472",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59909",
        "ok": "59909",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "557",
        "ok": "42376",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4916",
        "ok": "8245",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "42942",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "48506",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "54740",
        "ko": "0"
    },
    "percentiles4": {
        "total": "36827",
        "ok": "59345",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 788,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 59212,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "368.098",
        "ok": "4.834",
        "ko": "363.264"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
