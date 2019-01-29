var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles1": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles3": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "percentiles4": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4984,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "555.556",
        "ok": "555.556",
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
        "total": "2500",
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles3": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "percentiles4": {
        "total": "605",
        "ok": "605",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2488,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 12,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "277.778",
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
        "total": "2500",
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles1": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles2": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles3": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "percentiles4": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2496,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "277.778",
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
