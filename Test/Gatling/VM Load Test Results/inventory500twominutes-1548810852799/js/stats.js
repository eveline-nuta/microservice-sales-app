var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120000",
        "ok": "703",
        "ko": "119297"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "157",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "51041",
        "ok": "51041",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "187",
        "ok": "31849",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2600",
        "ok": "12046",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "33809",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "40184",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "47345",
        "ko": "0"
    },
    "percentiles4": {
        "total": "3",
        "ok": "49394",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 693,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 119297,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "779.221",
        "ok": "4.565",
        "ko": "774.656"
    }
},
contents: {
"req_monolith-invent-32532": {
        type: "REQUEST",
        name: "Monolith Inventory",
path: "Monolith Inventory",
pathFormatted: "req_monolith-invent-32532",
stats: {
    "name": "Monolith Inventory",
    "numberOfRequests": {
        "total": "60000",
        "ok": "359",
        "ko": "59641"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "157",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "51041",
        "ok": "51041",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "188",
        "ok": "31358",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2591",
        "ok": "12031",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "33626",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "39001",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "46965",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "49604",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 349,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 59641,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "389.61",
        "ok": "2.331",
        "ko": "387.279"
    }
}
    },"req_microservice-in-753b9": {
        type: "REQUEST",
        name: "Microservice Inventory",
path: "Microservice Inventory",
pathFormatted: "req_microservice-in-753b9",
stats: {
    "name": "Microservice Inventory",
    "numberOfRequests": {
        "total": "60000",
        "ok": "344",
        "ko": "59656"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1385",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "51012",
        "ok": "51012",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "186",
        "ok": "32362",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2608",
        "ok": "12041",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "34222",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "40902",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "47586",
        "ko": "0"
    },
    "percentiles4": {
        "total": "178",
        "ok": "49340",
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
        "count": 344,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 59656,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "389.61",
        "ok": "2.234",
        "ko": "387.377"
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
