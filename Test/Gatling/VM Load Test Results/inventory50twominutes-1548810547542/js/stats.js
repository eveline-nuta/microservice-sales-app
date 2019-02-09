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
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles4": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12000,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
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
        "total": "100",
        "ok": "100",
        "ko": "-"
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "463",
        "ok": "463",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles4": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6000,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
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
        "total": "50",
        "ok": "50",
        "ko": "-"
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles4": {
        "total": "244",
        "ok": "244",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6000,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
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
        "total": "50",
        "ok": "50",
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
