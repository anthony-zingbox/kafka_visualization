export default [
    {
        "id":0,
        "type":"InputPump",
        "output":[{"id":1, "rate":100 }],
        "name": "connector",
        "outputRate":200,
        "unit": "events/sec",
        "status":"health",
        "capacity":1000
    },
    {
        "id":1,
        "type":"Pipe",
        "name": "log-stream",
        "inputRate":200,
        "status":"health",
        "unit": "events/sec",
        "status":"healthy", // if input>0
        "output":[{"id":2}]
    },
    {
        "id":2,
        "type":"Pump",
        "name":"Analytics",
        "inputRate":100,
        "input":[{"id":1, "rate":100}],
        "output":[{"id":3, "rate":300}],
        "outputRate":300,
        "status":"healthy",
        "unit":"events/s",
        "capacity":500
    },
    {
        "id":3,
        "type":"pipe",
        "name":"analytics_ttsd",
        "inputRate":100,
        "unit": "events/sec"   // if input >0
    },
    {
        "id":5,
        "type":"Pump",
        "name":"BG-agg",
        "inputRate":100,
        "input":[{"id":3, "rate":100}],
        "outputRate":100,
        "output":[{"id":6, "rate":150}]
    },
    {
        "id":6,
        "type":"Tank",
        "Name":"ElasticSearch",
        "inputRate":200,
        "capacity": 500,
        "storage":500000,
        "storageUsage":200000
    }
];