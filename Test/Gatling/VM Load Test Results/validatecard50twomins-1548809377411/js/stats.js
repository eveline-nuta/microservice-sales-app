var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "253",
        "ok": "253",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "11",
        "ko": "-"
    },
    "percentiles2": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles3": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1375",
        "ok": "1375",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11589,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 231,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 180,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "99.174",
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles3": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles4": {
        "total": "724",
        "ok": "724",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5965,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 34,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "49.587",
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles3": {
        "total": "910",
        "ok": "910",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1637",
        "ok": "1637",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5624,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 197,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 179,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "49.587",
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
