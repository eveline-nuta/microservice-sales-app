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
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "percentiles1": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles2": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles4": {
        "total": "322",
        "ok": "321",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24975,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "833.333",
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
        "total": "1304",
        "ok": "1304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles1": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles4": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12488,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 0
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
        "total": "416.667",
        "ok": "416.667",
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
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "percentiles1": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles2": {
        "total": "51",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles4": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12487,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 12,
        "percentage": 0
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
        "total": "416.667",
        "ok": "416.667",
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
