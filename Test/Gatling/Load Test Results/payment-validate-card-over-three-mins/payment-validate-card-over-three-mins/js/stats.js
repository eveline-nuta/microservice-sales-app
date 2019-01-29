var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7200",
        "ok": "7200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2774",
        "ok": "2774",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles4": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7143,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 35,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
        "ko": "-"
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
        "total": "3600",
        "ok": "3600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2650",
        "ok": "2650",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles4": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3572,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
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
        "total": "3600",
        "ok": "3600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2774",
        "ok": "2774",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles4": {
        "total": "607",
        "ok": "607",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3571,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 18,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
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
