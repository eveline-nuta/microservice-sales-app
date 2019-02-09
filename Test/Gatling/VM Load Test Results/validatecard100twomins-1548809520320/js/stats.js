var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "20664",
        "ko": "3336"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "61612",
        "ok": "61612",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13722",
        "ok": "15937",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "19278",
        "ok": "19908",
        "ko": "0"
    },
    "percentiles1": {
        "total": "251",
        "ok": "1138",
        "ko": "0"
    },
    "percentiles2": {
        "total": "26180",
        "ok": "31354",
        "ko": "0"
    },
    "percentiles3": {
        "total": "55645",
        "ok": "56406",
        "ko": "0"
    },
    "percentiles4": {
        "total": "59376",
        "ok": "59508",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9832,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 557,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10275,
        "percentage": 43
    },
    "group4": {
        "name": "failed",
        "count": 3336,
        "percentage": 14
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "156.863",
        "ok": "135.059",
        "ko": "21.804"
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
        "total": "12000",
        "ok": "10374",
        "ko": "1626"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59521",
        "ok": "59521",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "8632",
        "ok": "9985",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11867",
        "ok": "12222",
        "ko": "0"
    },
    "percentiles1": {
        "total": "67",
        "ok": "502",
        "ko": "0"
    },
    "percentiles2": {
        "total": "17913",
        "ok": "20105",
        "ko": "0"
    },
    "percentiles3": {
        "total": "31274",
        "ok": "32007",
        "ko": "0"
    },
    "percentiles4": {
        "total": "40752",
        "ok": "41383",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5272,
        "percentage": 44
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 34,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5068,
        "percentage": 42
    },
    "group4": {
        "name": "failed",
        "count": 1626,
        "percentage": 14
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "78.431",
        "ok": "67.804",
        "ko": "10.627"
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
        "total": "12000",
        "ok": "10290",
        "ko": "1710"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "61612",
        "ok": "61612",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "18811",
        "ok": "21937",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "23465",
        "ok": "23949",
        "ko": "0"
    },
    "percentiles1": {
        "total": "625",
        "ok": "1449",
        "ko": "0"
    },
    "percentiles2": {
        "total": "42812",
        "ok": "46690",
        "ko": "0"
    },
    "percentiles3": {
        "total": "58074",
        "ok": "58452",
        "ko": "0"
    },
    "percentiles4": {
        "total": "59879",
        "ok": "59935",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4560,
        "percentage": 38
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 523,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5207,
        "percentage": 43
    },
    "group4": {
        "name": "failed",
        "count": 1710,
        "percentage": 14
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "78.431",
        "ok": "67.255",
        "ko": "11.176"
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
