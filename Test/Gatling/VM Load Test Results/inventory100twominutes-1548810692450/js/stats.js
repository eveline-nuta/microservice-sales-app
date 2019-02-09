var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "20040",
        "ko": "3960"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57390",
        "ok": "57390",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3847",
        "ok": "4608",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7748",
        "ok": "8270",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8",
        "ok": "10",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1618",
        "ok": "7861",
        "ko": "0"
    },
    "percentiles3": {
        "total": "21205",
        "ok": "22345",
        "ko": "0"
    },
    "percentiles4": {
        "total": "31534",
        "ok": "33281",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13794,
        "percentage": 57
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 145,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6101,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 3960,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "177.778",
        "ok": "148.444",
        "ko": "29.333"
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
        "total": "12000",
        "ok": "10004",
        "ko": "1996"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57390",
        "ok": "57390",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3801",
        "ok": "4559",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7667",
        "ok": "8189",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8",
        "ok": "10",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1263",
        "ok": "7822",
        "ko": "0"
    },
    "percentiles3": {
        "total": "20977",
        "ok": "22114",
        "ko": "0"
    },
    "percentiles4": {
        "total": "31267",
        "ok": "32795",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6915,
        "percentage": 58
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 80,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3009,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 1996,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "88.889",
        "ok": "74.104",
        "ko": "14.785"
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
        "total": "12000",
        "ok": "10036",
        "ko": "1964"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "54066",
        "ok": "54066",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3894",
        "ok": "4656",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7829",
        "ok": "8351",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8",
        "ok": "11",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1925",
        "ok": "7920",
        "ko": "0"
    },
    "percentiles3": {
        "total": "21415",
        "ok": "22712",
        "ko": "0"
    },
    "percentiles4": {
        "total": "31761",
        "ok": "33674",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6879,
        "percentage": 57
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 65,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3092,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 1964,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "88.889",
        "ok": "74.341",
        "ko": "14.548"
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
