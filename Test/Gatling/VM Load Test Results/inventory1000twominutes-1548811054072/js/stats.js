var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "240000",
        "ok": "1459",
        "ko": "238541"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "112518",
        "ok": "112518",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "662",
        "ok": "108869",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8476",
        "ok": "6033",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "109749",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "110636",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "111459",
        "ko": "0"
    },
    "percentiles4": {
        "total": "19",
        "ok": "112272",
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
        "count": 1455,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 238541,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1038.961",
        "ok": "6.316",
        "ko": "1032.645"
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
        "total": "120000",
        "ok": "644",
        "ko": "119356"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "102",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "112212",
        "ok": "112212",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "581",
        "ok": "108259",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7936",
        "ok": "8763",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "109385",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "110480",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "111235",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "111532",
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
        "count": 640,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 119356,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "519.481",
        "ok": "2.788",
        "ko": "516.693"
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
        "total": "120000",
        "ok": "815",
        "ko": "119185"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "104239",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "112518",
        "ok": "112518",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "743",
        "ok": "109350",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8983",
        "ok": "1986",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "109998",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "110717",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "111772",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "112389",
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
        "count": 815,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 119185,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "519.481",
        "ok": "3.528",
        "ko": "515.952"
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
