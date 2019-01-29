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
        "total": "758",
        "ok": "758",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles1": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles4": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 25000,
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
        "total": "862.069",
        "ok": "862.069",
        "ko": "-"
    }
},
contents: {
"req_monolith-paymen-b8258": {
        type: "REQUEST",
        name: "Monolith Payment Debit Card",
path: "Monolith Payment Debit Card",
pathFormatted: "req_monolith-paymen-b8258",
stats: {
    "name": "Monolith Payment Debit Card",
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
        "total": "758",
        "ok": "758",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles1": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles4": {
        "total": "349",
        "ok": "349",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12500,
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
        "total": "431.034",
        "ok": "431.034",
        "ko": "-"
    }
}
    },"req_microservice-pa-c3ce2": {
        type: "REQUEST",
        name: "Microservice Payment Debit Card",
path: "Microservice Payment Debit Card",
pathFormatted: "req_microservice-pa-c3ce2",
stats: {
    "name": "Microservice Payment Debit Card",
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
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles1": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles3": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles4": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12500,
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
        "total": "431.034",
        "ok": "431.034",
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
