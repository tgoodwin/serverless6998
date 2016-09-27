console.log('Loading event');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

exports.handler = function(event, context, callback) {
    console.log("Request received:\n", JSON.stringify(event));
    console.log("Context received:\n", JSON.stringify(context));

    var tableName = "Customer";

    dynamodb.deleteItem({
            "TableName": tableName,
            "Key": {
                "email": {"S": event.email }
            }
        }, function(err, data) {
            if (err) {
                context.fail('ERROR: Dynamo Delete failed: ' + JSON.stringify(err));
            } else {
                console.log('getCustomer Success: ' + JSON.stringify(data, null, '  '));
                callback(null, data);
            }
        });
}
