var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1778",
        "ok": "1778",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles2": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "717",
        "ok": "717",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24820,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 146,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 34,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "423.729",
        "ok": "423.729",
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
        "total": "12500",
        "ok": "12500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1753",
        "ok": "1753",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles2": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "727",
        "ok": "728",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12401,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 83,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "211.864",
        "ok": "211.864",
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
        "total": "12500",
        "ok": "12500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1778",
        "ok": "1778",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles2": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "704",
        "ok": "704",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12419,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 63,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 18,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "211.864",
        "ok": "211.864",
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
